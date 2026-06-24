/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

class AudioEngine {
  private ctx: AudioContext | null = null;

  private init() {
    try {
      const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
      if (!this.ctx && AudioCtx) {
        this.ctx = new AudioCtx();
      }
      this.resume();
    } catch (e) {
      console.warn('AudioContext is not supported or accessible:', e);
    }
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  playClick() {
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch (e) {
      console.warn('Audio failed to play', e);
    }
  }

  playCorrect() {
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      // Pleasant C5 to G5 chime
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(783.99, now + 0.08); // G5

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(now + 0.42);
    } catch (e) {
      console.warn('Audio failed to play', e);
    }
  }

  playWrong() {
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      // Sad buzz descending in pitch
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(110, now + 0.3);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(now + 0.38);
    } catch (e) {
      console.warn('Audio failed to play', e);
    }
  }

  playLevelUp() {
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5 (Rising Major Arpeggio)
      
      notes.forEach((freq, index) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + index * 0.1);

        gain.gain.setValueAtTime(0.12, now + index * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, now + index * 0.1 + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + index * 0.1);
        osc.stop(now + index * 0.1 + 0.26);
      });
    } catch (e) {
      console.warn('Audio failed to play', e);
    }
  }

  playVictory() {
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Beautiful triumphant melody
      const melody = [
        { freq: 261.63, time: 0.0, dur: 0.15 }, // C4
        { freq: 329.63, time: 0.15, dur: 0.15 }, // E4
        { freq: 392.00, time: 0.3, dur: 0.15 }, // G4
        { freq: 523.25, time: 0.45, dur: 0.3 }, // C5
        { freq: 392.00, time: 0.75, dur: 0.15 }, // G4
        { freq: 523.25, time: 0.9, dur: 0.6 }, // C5 (held)
      ];

      melody.forEach((note) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.freq, now + note.time);

        gain.gain.setValueAtTime(0.12, now + note.time);
        gain.gain.exponentialRampToValueAtTime(0.005, now + note.time + note.dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + note.time);
        osc.stop(now + note.time + note.dur);
      });
    } catch (e) {
      console.warn('Audio failed to play', e);
    }
  }
  private isMusicPlaying = false;
  private musicVolume: GainNode | null = null;
  private musicInterval: any = null;

  startAdventureMusic() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.isMusicPlaying) return;

      this.isMusicPlaying = true;
      this.musicVolume = this.ctx.createGain();
      this.musicVolume.gain.setValueAtTime(0.1, this.ctx.currentTime); // Increased volume from 0.015 to 0.1
      this.musicVolume.connect(this.ctx.destination);

      const tempo = 140; // BPM
      const stepDuration = 60 / tempo / 2; // eighth notes (0.214s per step)
      let nextNoteTime = this.ctx.currentTime;
      
      const chordProgression = [
        // Am
        [220, 261.63, 329.63, 440],
        // F
        [174.61, 261.63, 349.23, 440],
        // G
        [196.00, 293.66, 392.00, 493.88],
        // Em
        [164.81, 246.94, 329.63, 392.00]
      ];

      let step = 0;

      const scheduleNextStep = () => {
        if (!this.isMusicPlaying || !this.ctx || !this.musicVolume) return;

        while (nextNoteTime < this.ctx.currentTime + 0.1) {
          const chordIndex = Math.floor(step / 16) % chordProgression.length;
          const notes = chordProgression[chordIndex];
          
          // Pattern index
          const pattern = [0, 1, 2, 1, 3, 2, 1, 0, 0, 1, 2, 1, 3, 2, 1, 3];
          const patternIndex = step % 16;
          const freq = notes[pattern[patternIndex] % notes.length];

          // Play bass on step 0, 4, 8, 12
          const isBassStep = step % 4 === 0;

          // Arpeggiator synth
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          
          osc.type = 'triangle'; // soft chiptune sound
          osc.frequency.setValueAtTime(freq, nextNoteTime);
          
          let noteVol = 0.4;
          let noteDecay = 0.2;

          if (isBassStep) {
            // Add a lower octave double for bass steps
            const bassOsc = this.ctx.createOscillator();
            const bassGain = this.ctx.createGain();
            bassOsc.type = 'sine';
            bassOsc.frequency.setValueAtTime(freq / 2, nextNoteTime);
            bassGain.gain.setValueAtTime(0.5, nextNoteTime);
            bassGain.gain.exponentialRampToValueAtTime(0.001, nextNoteTime + 0.35);
            bassOsc.connect(bassGain);
            bassGain.connect(this.musicVolume);
            bassOsc.start(nextNoteTime);
            bassOsc.stop(nextNoteTime + 0.36);
          }

          // Accent first beat of chord
          if (step % 16 === 0) {
            noteVol = 0.7;
            noteDecay = 0.4;
          }

          gain.gain.setValueAtTime(noteVol, nextNoteTime);
          gain.gain.exponentialRampToValueAtTime(0.001, nextNoteTime + noteDecay);

          osc.connect(gain);
          gain.connect(this.musicVolume);

          osc.start(nextNoteTime);
          osc.stop(nextNoteTime + noteDecay + 0.05);

          // Dynamic sweep or sparkle effect on step boundary
          if (step % 32 === 0) {
            const chimeOsc = this.ctx.createOscillator();
            const chimeGain = this.ctx.createGain();
            chimeOsc.type = 'sine';
            chimeOsc.frequency.setValueAtTime(freq * 2, nextNoteTime);
            chimeGain.gain.setValueAtTime(0.3, nextNoteTime);
            chimeGain.gain.exponentialRampToValueAtTime(0.001, nextNoteTime + 0.5);
            chimeOsc.connect(chimeGain);
            chimeGain.connect(this.musicVolume);
            chimeOsc.start(nextNoteTime);
            chimeOsc.stop(nextNoteTime + 0.52);
          }

          nextNoteTime += stepDuration;
          step++;
        }
        
        this.musicInterval = setTimeout(scheduleNextStep, 50);
      };

      scheduleNextStep();
    } catch (e) {
      console.warn('Failed to start music engine', e);
    }
  }

  stopAdventureMusic() {
    this.isMusicPlaying = false;
    if (this.musicInterval) {
      clearTimeout(this.musicInterval);
      this.musicInterval = null;
    }
    if (this.musicVolume) {
      try {
        this.musicVolume.disconnect();
      } catch (e) {}
      this.musicVolume = null;
    }
  }

  toggleAdventureMusic(): boolean {
    if (this.isMusicPlaying) {
      this.stopAdventureMusic();
      return false;
    } else {
      this.startAdventureMusic();
      return true;
    }
  }

  isMusicActive(): boolean {
    return this.isMusicPlaying;
  }
}

export const audio = new AudioEngine();

