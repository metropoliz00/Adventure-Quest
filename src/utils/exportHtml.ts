/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SUBJECTS_DATA } from '../data/questions';

export function getSingleFileHTMLSource(): string {
  // Convert questions to stringified JSON for embedding in the HTML template
  const subjectsDataStr = JSON.stringify(SUBJECTS_DATA);

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ADVENTURE QUEST - UPT SD Negeri Remen 2</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['Space Grotesk', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <style>
    @keyframes pulse-ring {
      0% { transform: scale(0.95); opacity: 0.8; }
      50% { transform: scale(1.15); opacity: 0.4; }
      100% { transform: scale(0.95); opacity: 0.8; }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    @keyframes star-popup {
      0% { transform: scale(0.2) translate(-50%, -50%); opacity: 1; }
      100% { transform: scale(1.6) translate(-50%, -100%); opacity: 0; }
    }
    .animate-pulse-ring {
      animation: pulse-ring 2s infinite ease-in-out;
    }
    .animate-bounce-slow {
      animation: bounce-slow 1.8s infinite ease-in-out;
    }
    @media print {
      body { background: white !important; color: black !important; }
      .no-print { display: none !important; }
      #printable-certificate {
        border: 12px double #b45309 !important;
        box-shadow: none !important;
        margin: 0 !important;
        width: 100% !important;
      }
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 font-sans min-h-screen pb-12">

  <!-- HUD TOP NAVIGATION BAR -->
  <header class="no-print bg-gradient-to-r from-blue-950 via-slate-900 to-emerald-950 border-b-4 border-amber-500 py-4 px-6 sticky top-0 z-40 shadow-lg">
    <div class="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
      <div class="flex items-center gap-3">
        <span class="text-3xl animate-bounce-slow">🇲🇨</span>
        <div>
          <h1 class="text-sm sm:text-base font-black tracking-wider text-white font-display">
            ADVENTURE QUEST KELAS 5 SD
          </h1>
          <p class="text-[10px] text-amber-400 font-bold">UPT SD NEGERI REMEN 2</p>
        </div>
      </div>
      
      <div id="top-hud-panel" class="hidden flex items-center gap-3">
        <div class="px-3 py-1 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-300">
          Siswa: <strong id="hud-student-name" class="text-white">-</strong>
        </div>
        <div class="px-4 py-1.5 bg-emerald-500 border-2 border-white rounded-full text-xs font-black shadow-md flex items-center gap-1 text-white">
          <span>💎</span>
          <span id="hud-total-score">0 Poin</span>
        </div>
      </div>
    </div>
  </header>

  <main class="max-w-4xl mx-auto px-4 mt-8">

    <!-- 1. LANDING / REGISTRATION PAGE -->
    <section id="screen-landing" class="no-print space-y-8">
      <div class="text-center space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-full uppercase tracking-widest">
          ⭐ Edisi Kurikulum Merdeka
        </div>
        <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
          ADVENTURE QUEST
        </h2>
        <p class="text-sm sm:text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
          Petualangan interaktif menjelajahi warisan budaya dan materi esensial kelas 5 SD UPT SD Negeri Remen 2.
        </p>
      </div>

      <!-- Registration Box -->
      <div class="bg-slate-900 border-2 border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl max-w-lg mx-auto space-y-6">
        <h3 class="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
          <span>🎮</span> Isi Data untuk Memulai Game
        </h3>

        <!-- Student Name input -->
        <div class="space-y-2">
          <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Masukkan Nama Siswa:</label>
          <input 
            type="text" 
            id="input-student-name" 
            placeholder="Tulis namamu disini..." 
            class="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 outline-none rounded-xl px-4 py-3 text-sm text-white transition font-medium"
            maxlength="25"
          >
        </div>

        <!-- Character selector -->
        <div class="space-y-2">
          <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Pilih Karakter Siswa:</label>
          <div class="grid grid-cols-2 gap-4">
            <!-- Boy option -->
            <button 
              type="button" 
              onclick="selectGender('boy')" 
              id="char-btn-boy"
              class="bg-slate-950 border-2 border-slate-800 hover:border-slate-700 rounded-2xl p-4 flex flex-col items-center gap-3 transition"
            >
              <span class="text-5xl">👦</span>
              <span class="text-xs font-bold text-slate-300">Siswa Laki-laki</span>
            </button>
            <!-- Girl option -->
            <button 
              type="button" 
              onclick="selectGender('girl')" 
              id="char-btn-girl"
              class="bg-slate-950 border-2 border-slate-800 hover:border-slate-700 rounded-2xl p-4 flex flex-col items-center gap-3 transition"
            >
              <span class="text-5xl">👧</span>
              <span class="text-xs font-bold text-slate-300">Siswa Perempuan</span>
            </button>
          </div>
        </div>

        <!-- Subject selection dropdown -->
        <div class="space-y-2">
          <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Pilih Mata Pelajaran:</label>
          <select 
            id="select-subject" 
            class="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 outline-none rounded-xl px-4 py-3 text-sm text-white transition font-medium"
          >
            <option value="pjok">PJOK KELAS 5 SD (Tantangan Teori & Gerak Olahraga)</option>
            <option value="ipas">IPAS KELAS 5 SD (Warisan Budaya Indonesia)</option>
            <option value="pancasila">Pendidikan Pancasila Kelas 5</option>
            <option value="matematika">Matematika Kelas 5</option>
            <option value="bahasa_indonesia">Bahasa Indonesia Kelas 5</option>
            <option value="pai">PAI (Pendidikan Agama Islam & Budi Pekerti)</option>
            <option value="bahasa_inggris">Bahasa Inggris (English Interactive)</option>
            <option value="bahasa_jawa">Bahasa Jawa (Wulangan & Sastra Jawa)</option>
            <option value="seni_rupa">Seni Rupa (Eksplorasi Karya Kreatif)</option>
          </select>
        </div>

        <!-- Enter Game button -->
        <button 
          type="button" 
          onclick="startGame()"
          class="w-full py-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-slate-950 font-black text-base rounded-xl border-2 border-white shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-95 transition"
        >
          🎮 Mulai Petualangan
        </button>
      </div>

      <!-- Landing Page Leaderboard -->
      <div id="landing-leaderboard" class="max-w-lg mx-auto">
        <!-- Will be filled dynamically by JavaScript -->
      </div>
    </section>


    <!-- 2. ADVENTURE MAP PAGE -->
    <section id="screen-map" class="no-print hidden space-y-6">
      
      <!-- HUD Dashboard card -->
      <div class="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 shadow-md">
        <div class="flex items-center gap-3">
          <div id="map-hud-avatar" class="text-3xl bg-slate-800 w-11 h-11 rounded-full flex items-center justify-center border border-slate-700">👦</div>
          <div>
            <h4 id="map-hud-title" class="text-sm font-bold text-white">Mata Pelajaran: -</h4>
            <p id="map-hud-subtitle" class="text-[11px] text-slate-400">Petualangan Belajar</p>
          </div>
        </div>

        <div class="flex gap-2">
          <button 
            type="button" 
            onclick="backToLanding()"
            class="px-4 py-2 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700 transition"
          >
            🔌 Keluar Game
          </button>
        </div>
      </div>

      <!-- ADVENTURE BOARD GRID MAP -->
      <div class="relative bg-sky-100 border-4 border-amber-500/80 rounded-3xl overflow-hidden aspect-[16/9] w-full shadow-2xl relative select-none">
        
        <!-- Cartoony Interactive Background Path SVG -->
        <svg viewBox="0 0 800 480" class="absolute inset-0 w-full h-full">
          <!-- Sky and Hills -->
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#bae6fd" />
            <stop offset="100%" stop-color="#e0f2fe" />
          </linearGradient>
          <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#86efac" />
            <stop offset="100%" stop-color="#22c55e" />
          </linearGradient>
          <rect width="800" height="150" fill="url(#sky)" />
          <rect y="120" width="800" height="360" fill="url(#grass)" />
          
          <!-- Hills scenery -->
          <path d="M0,150 L120,50 L240,150 Z" fill="#64748b" opacity="0.4" />
          <path d="M500,150 L650,40 L800,150 Z" fill="#64748b" opacity="0.5" />
          
          <!-- River -->
          <path d="M 0 350 Q 150 320 300 370 T 600 340 T 800 380 L 800 420 L 0 420 Z" fill="#38bdf8" opacity="0.8" />
          <!-- Bridge -->
          <rect x="420" y="325" width="40" height="35" rx="5" fill="#d97706" />

          <!-- Dynamic winding gold path -->
          <path id="map-road-path" d="" fill="none" stroke="#fef08a" stroke-width="10" stroke-linecap="round" />
          <path id="map-road-dashes" d="" fill="none" stroke="#eab308" stroke-width="6" stroke-linecap="round" stroke-dasharray="12,10" />
        </svg>

        <!-- Dynamic Avatar Icon -->
        <div id="map-player-avatar" class="absolute z-20 text-4xl w-12 h-12 flex items-center justify-center animate-bounce-slow filter drop-shadow-md pointer-events-none transition-all duration-700">
          👦
        </div>

        <!-- 5 Pos checkpoint buttons -->
        <div id="pos-buttons-container">
          <!-- Populated by JS -->
        </div>
      </div>

      <div class="text-center p-3 text-xs text-amber-200 bg-slate-900 border border-slate-800 rounded-xl">
        🚩 Ketuk Pos aktif berpendar emas untuk memulai tantangan! Jawab benar minimal 3 soal (60 Poin) untuk lulus ke pos berikutnya.
      </div>
    </section>


    <!-- 3. QUIZ MODAL PAGE -->
    <section id="screen-quiz" class="no-print hidden">
      <div class="bg-slate-900 border-4 border-amber-500 rounded-3xl overflow-hidden shadow-2xl relative max-w-2xl mx-auto">
        
        <!-- Star Effect Container -->
        <div id="star-burst-container" class="absolute inset-0 pointer-events-none z-40 overflow-hidden"></div>

        <!-- Header info -->
        <div class="bg-gradient-to-r from-blue-950 to-slate-900 p-5 border-b-2 border-slate-800 flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🎯</span>
            <div>
              <h4 id="quiz-level-title" class="text-sm font-bold text-amber-400 uppercase tracking-widest">POS 1</h4>
              <p id="quiz-level-topic" class="text-xs text-slate-300 font-medium">Topik Soal</p>
            </div>
          </div>
          <button 
            type="button" 
            onclick="backToMap()"
            class="text-slate-400 hover:text-white text-xs bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700"
          >
            Batal
          </button>
        </div>

        <!-- Countdown timer bar -->
        <div class="h-1.5 w-full bg-slate-800">
          <div id="timer-progress" class="h-full bg-emerald-500 transition-all duration-1000" style="width: 100%;"></div>
        </div>

        <div class="p-6 space-y-6">
          <div class="flex justify-between items-center text-xs font-bold text-slate-400">
            <span id="quiz-q-progress" class="px-3 py-1 bg-blue-900/40 text-blue-300 border border-blue-800/50 rounded-full">SOAL 1 DARI 5</span>
            <span id="quiz-timer-text" class="text-emerald-400 flex items-center gap-1">⏰ 30 DETIK</span>
          </div>

          <!-- Question title -->
          <h3 id="quiz-q-text" class="text-base sm:text-lg font-bold text-white leading-relaxed">
            Materi pertanyaan disini...
          </h3>

          <!-- Options answers stack -->
          <div id="quiz-options-stack" class="space-y-3">
            <!-- Populated dynamically by JS -->
          </div>

          <!-- Educational pedagogical explanation text -->
          <div id="quiz-explanation-box" class="hidden p-4 bg-slate-800 rounded-2xl border border-slate-700 text-xs text-slate-300 leading-relaxed">
            <!-- Filled by JS -->
          </div>
        </div>

        <!-- Next button footer -->
        <div class="p-5 bg-slate-950/50 border-t border-slate-800 flex justify-end">
          <button 
            id="quiz-btn-next" 
            type="button" 
            onclick="nextQuestion()"
            class="hidden px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-sm rounded-xl hover:scale-105 active:scale-95 transition"
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </section>


    <!-- 4. LEVEL SUMMARY MODAL VIEW -->
    <section id="screen-level-summary" class="no-print hidden">
      <div class="bg-slate-900 border-4 border-amber-500 rounded-3xl overflow-hidden shadow-2xl p-6 text-center max-w-sm mx-auto space-y-6">
        <div class="flex justify-center">
          <div id="summary-icon" class="w-16 h-16 bg-amber-950/50 border border-amber-500 rounded-full flex items-center justify-center text-4xl">
            🏆
          </div>
        </div>

        <h3 id="summary-title" class="text-2xl font-black text-white">LULUS POS!</h3>
        <p id="summary-pos" class="text-xs text-slate-400">Pos 1</p>

        <!-- Score board details -->
        <div class="bg-slate-950/60 rounded-2xl p-4 border border-slate-800 max-w-xs mx-auto">
          <div class="grid grid-cols-2 gap-2 divide-x divide-slate-800">
            <div>
              <div id="summary-correct" class="text-2xl font-black text-emerald-400">4 / 5</div>
              <div class="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Benar</div>
            </div>
            <div>
              <div id="summary-score" class="text-2xl font-black text-amber-400">80</div>
              <div class="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Poin Skor</div>
            </div>
          </div>
        </div>

        <p id="summary-desc" class="text-xs text-slate-300 leading-relaxed">
          Keterangan kelulusan pos.
        </p>

        <div class="flex gap-3 justify-center">
          <button 
            id="summary-btn-retry" 
            type="button" 
            onclick="retryLevel()"
            class="hidden flex-1 px-5 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs rounded-xl hover:scale-105 transition"
          >
            Ulangi Pos
          </button>
          <button 
            id="summary-btn-continue" 
            type="button" 
            onclick="completeLevel()"
            class="w-full px-5 py-3.5 bg-gradient-to-r from-emerald-400 to-emerald-500 text-slate-950 font-black text-xs rounded-xl hover:scale-105 transition"
          >
            Kembali ke Peta
          </button>
        </div>
      </div>
    </section>


    <!-- 5. DIGITAL CERTIFICATE VIEW -->
    <section id="screen-certificate" class="hidden">
      
      <!-- Certificate card frame -->
      <div 
        id="printable-certificate" 
        class="relative bg-amber-50 border-[16px] border-double border-amber-600 rounded-3xl p-8 sm:p-12 shadow-2xl text-center text-slate-900 overflow-hidden"
      >
        <!-- Corners -->
        <div class="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-amber-600 pointer-events-none"></div>
        <div class="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-amber-600 pointer-events-none"></div>
        <div class="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-amber-600 pointer-events-none"></div>
        <div class="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-amber-600 pointer-events-none"></div>

        <!-- School Header -->
        <div class="mb-6">
          <span class="text-2xl">🇲🇨</span>
          <h4 class="text-[10px] font-black tracking-widest text-slate-500 uppercase">Pemerintah Kabupaten Tuban</h4>
          <h3 class="text-sm font-black text-amber-800 uppercase tracking-wide">UPT SD NEGERI REMEN 2</h3>
          <p class="text-[9px] text-slate-400 italic">Jl. Raya Remen No.2, Jenu, Kabupaten Tuban, Jawa Timur</p>
          <div class="w-20 h-0.5 bg-amber-500/30 mx-auto mt-2"></div>
        </div>

        <!-- Award Title -->
        <div class="mb-6">
          <h1 id="cert-title" class="text-lg sm:text-xl font-black text-amber-700 tracking-wide uppercase">
            SERTIFIKAT PETUALANG BUDAYA INDONESIA
          </h1>
          <div class="text-[9px] text-slate-400 tracking-widest uppercase">Piagam Penghargaan Resmi</div>
        </div>

        <!-- Recipient Info -->
        <div class="mb-6">
          <p class="text-[10px] text-slate-500 italic">Diberikan kepada siswa berprestasi:</p>
          <h2 id="cert-student-name" class="text-xl sm:text-2xl font-black text-slate-800 underline decoration-amber-600/80 decoration-4 underline-offset-4 uppercase">
            NAMA SISWA
          </h2>
          <p class="text-[10px] text-amber-700 font-extrabold mt-1">Siswa Hebat Kelas 5 SD</p>
        </div>

        <!-- Main text description -->
        <p id="cert-desc" class="text-xs text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
          Telah berhasil menyelesaikan seluruh pos materi pendidikan dengan kelulusan yang luar biasa.
        </p>

        <!-- Score tag -->
        <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 border border-amber-500/30 rounded-full mb-6">
          <span class="text-xs font-bold text-amber-800">Skor Akhir: </span>
          <span id="cert-score-text" class="text-xs font-black text-amber-600">100 / 100 Poin</span>
        </div>

        <!-- Footer signatures and seal -->
        <div class="grid grid-cols-2 gap-4 max-w-sm mx-auto items-center mt-4 text-xs">
          <!-- Ribbon stamp -->
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center text-white shadow font-bold text-lg rotate-12">
              ⭐
            </div>
            <span class="text-[8px] text-amber-700 font-bold mt-2 tracking-widest">SEAL JUARA</span>
          </div>

          <!-- Principal signature placeholder -->
          <div class="text-center text-xs">
            <p id="cert-date-text" class="text-[9px] text-slate-400">Tuban, ...</p>
            <div class="inline-block border-b border-slate-400 w-28 pb-1 font-bold text-slate-800 mt-4">
              Panitia AQ
            </div>
            <p class="text-[8px] text-slate-400">UPT SD Negeri Remen 2</p>
          </div>
        </div>
      </div>

      <!-- Action controls -->
      <div class="no-print mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button 
          type="button" 
          onclick="window.print()"
          class="w-full sm:w-auto px-6 py-3.5 bg-amber-500 text-slate-950 font-black text-sm rounded-xl flex items-center justify-center gap-2 shadow"
        >
          🖨 Cetak Sertifikat
        </button>
        <button 
          type="button" 
          onclick="restartGameSession()"
          class="w-full sm:w-auto px-6 py-3.5 bg-slate-800 text-slate-200 font-bold text-sm rounded-xl flex items-center justify-center gap-2 border border-slate-700"
        >
          🔄 Mainkan Map Lain
        </button>
      </div>
    </section>

  </main>

  <!-- GAME SCRIPT ENGINE -->
  <script>
    // Embedded Subjects and Questions database
    const SUBJECTS = ${subjectsDataStr};

    // Game Core State variables
    let player = {
      name: '',
      gender: null,
      selectedSubject: 'ipas',
      currentLevelId: 1,
      unlockedLevelId: 1,
      levelScores: {},
      quizActive: false
    };

    // 10 Checkpoints points path on responsive map coordinates
    const mapPoints = [
      { x: 100, y: 380 },
      { x: 200, y: 280 },
      { x: 380, y: 180 },
      { x: 480, y: 320 },
      { x: 620, y: 200 },
      { x: 730, y: 290 }
    ];

    // Web Audio Synthesizer Class (Offline friendly, absolutely independent)
    class DynamicAudioEngine {
      constructor() {
        this.ctx = null;
      }
      init() {
        if (!this.ctx) {
          this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
      }
      playClick() {
        try {
          this.init();
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
        } catch(e) {}
      }
      playCorrect() {
        try {
          this.init();
          const now = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(523.25, now);
          osc.frequency.setValueAtTime(783.99, now + 0.08);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start();
          osc.stop(now + 0.42);
        } catch(e) {}
      }
      playWrong() {
        try {
          this.init();
          const now = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(180, now);
          osc.frequency.linearRampToValueAtTime(110, now + 0.3);
          gain.gain.setValueAtTime(0.12, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start();
          osc.stop(now + 0.38);
        } catch(e) {}
      }
      playLevelUp() {
        try {
          this.init();
          const now = this.ctx.currentTime;
          const notes = [261.63, 329.63, 392.00, 523.25];
          notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.1);
            gain.gain.setValueAtTime(0.12, now + idx * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.1 + 0.25);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + idx * 0.1);
            osc.stop(now + idx * 0.1 + 0.26);
          });
        } catch(e) {}
      }
    }

    const audio = new DynamicAudioEngine();

    // DOM References
    const screenLanding = document.getElementById('screen-landing');
    const screenMap = document.getElementById('screen-map');
    const screenQuiz = document.getElementById('screen-quiz');
    const screenLevelSummary = document.getElementById('screen-level-summary');
    const screenCertificate = document.getElementById('screen-certificate');

    const inputName = document.getElementById('input-student-name');
    const selectSubject = document.getElementById('select-subject');

    // Gender Selection action
    function selectGender(g) {
      audio.playClick();
      player.gender = g;
      document.getElementById('char-btn-boy').className = g === 'boy' 
        ? 'bg-slate-900 border-4 border-amber-500 rounded-2xl p-4 flex flex-col items-center gap-3 transition scale-105'
        : 'bg-slate-950 border-2 border-slate-800 hover:border-slate-700 rounded-2xl p-4 flex flex-col items-center gap-3 transition';
      
      document.getElementById('char-btn-girl').className = g === 'girl'
        ? 'bg-slate-900 border-4 border-amber-500 rounded-2xl p-4 flex flex-col items-center gap-3 transition scale-105'
        : 'bg-slate-950 border-2 border-slate-800 hover:border-slate-700 rounded-2xl p-4 flex flex-col items-center gap-3 transition';
    }

    // Load leaderboard on boot
    function renderLocalLeaderboard() {
      const container = document.getElementById('landing-leaderboard');
      try {
        const stored = localStorage.getItem('adventure_quest_leaderboard');
        if (!stored) {
          container.innerHTML = \`<div class="text-center p-4 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-slate-500">
            🏆 Peringkat masih kosong. Jadilah pemenang pertama!
          </div>\`;
          return;
        }
        const data = JSON.parse(stored);
        if (!Array.isArray(data)) {
          container.innerHTML = \`<div class="text-center p-4 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-slate-500">
            🏆 Peringkat masih kosong. Jadilah pemenang pertama!
          </div>\`;
          return;
        }
        data.sort((a, b) => b.score - a.score);
        
        let html = \`<div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
          <h4 class="text-xs font-black text-amber-400 uppercase tracking-widest flex items-center gap-1">🏆 Top 10 Pemain Terbaik</h4>
          <table class="w-full text-left text-xs text-slate-300">
            <thead>
              <tr class="text-[10px] text-slate-500 border-b border-slate-800 uppercase font-black">
                <th class="pb-1 text-center">No</th>
                <th class="pb-1">Nama</th>
                <th class="pb-1">Map</th>
                <th class="pb-1 text-right">Skor</th>
              </tr>
            </thead>
            <tbody>\`;
        data.slice(0, 10).forEach((p, index) => {
          html += \`<tr class="border-b border-slate-800/30">
            <td class="py-2 text-center font-bold text-amber-500">\${index + 1}</td>
            <td class="py-2 font-bold text-white">\${p.name} \${p.gender === 'boy' ? '👦' : '👧'}</td>
            <td class="py-2 text-slate-400 font-medium">\${p.subject === 'ipas' ? 'IPAS' : p.subject === 'pancasila' ? 'Pancasila' : p.subject === 'matematika' ? 'Matematika' : 'B.Indo'}</td>
            <td class="py-2 text-right font-black text-emerald-400">\${p.score}</td>
          </tr>\`;
        });
        html += \`</tbody></table></div>\`;
        container.innerHTML = html;
      } catch(e) {}
    }

    // Start Game
    function startGame() {
      const nameVal = inputName.value.trim();
      if (!nameVal) {
        audio.playWrong();
        alert('Tolong masukkan namamu terlebih dahulu!');
        return;
      }
      if (!player.gender) {
        audio.playWrong();
        alert('Tolong pilih salah satu karakter siswa!');
        return;
      }

      player.name = nameVal;
      player.selectedSubject = selectSubject.value;
      player.currentLevelId = 1;
      player.unlockedLevelId = 1;
      player.levelScores = {};

      audio.playLevelUp();

      // Show HUD
      document.getElementById('top-hud-panel').classList.remove('hidden');
      document.getElementById('hud-student-name').innerText = nameVal;
      document.getElementById('hud-total-score').innerText = '0 Poin';

      // Load Map screen
      loadMap();
    }

    // Render Adventure Map paths and position markers
    function loadMap() {
      screenLanding.classList.add('hidden');
      screenMap.classList.remove('hidden');
      screenQuiz.classList.add('hidden');
      screenLevelSummary.classList.add('hidden');

      const subjectData = SUBJECTS[player.selectedSubject];

      document.getElementById('map-hud-title').innerText = subjectData.name;
      document.getElementById('map-hud-subtitle').innerText = subjectData.subtitle;
      document.getElementById('map-hud-avatar').innerText = player.gender === 'boy' ? '👦' : '👧';

      // SVG path drawing
      const pathRoad = document.getElementById('map-road-path');
      const pathDashes = document.getElementById('map-road-dashes');
      let pathD = \`M \${mapPoints[0].x} \${mapPoints[0].y} 
                    Q 140 320 \${mapPoints[1].x} \${mapPoints[1].y} 
                    Q 280 230 \${mapPoints[2].x} \${mapPoints[2].y} 
                    Q 440 240 \${mapPoints[3].x} \${mapPoints[3].y} 
                    Q 540 250 \${mapPoints[4].x} \${mapPoints[4].y} 
                    Q 680 230 \${mapPoints[5].x} \${mapPoints[5].y}\`;
      pathRoad.setAttribute('d', pathD);
      pathDashes.setAttribute('d', pathD);

      // Render Avatar placement
      const activePt = mapPoints[Math.min(player.unlockedLevelId, 5)];
      const avatarEl = document.getElementById('map-player-avatar');
      avatarEl.innerText = player.gender === 'boy' ? '👦' : '👧';
      avatarEl.style.left = (activePt.x - 24) + 'px';
      avatarEl.style.top = (activePt.y - 48) + 'px';

      // Render pos buttons
      const btnContainer = document.getElementById('pos-buttons-container');
      let btnHtml = '';
      subjectData.levels.forEach((lvl) => {
        const pt = mapPoints[lvl.id];
        const isLocked = lvl.id > player.unlockedLevelId;
        const isCompleted = lvl.id < player.unlockedLevelId;
        const isActive = lvl.id === player.unlockedLevelId;

        let icon = '🔒';
        let btnColor = 'bg-red-500 border-red-700 text-white';
        let ringHtml = '';

        if (isCompleted) {
          icon = '⭐';
          btnColor = 'bg-emerald-500 border-white text-white';
        } else if (isActive) {
          icon = '▶️';
          btnColor = 'bg-amber-400 border-white text-slate-900';
          ringHtml = '<div class="absolute inset-0 rounded-full bg-amber-400 opacity-50 animate-pulse-ring pointer-events-none"></div>';
        }

        btnHtml += \`<div class="absolute z-10 w-11 h-11 flex items-center justify-center" style="left: \${pt.x - 22}px; top: \${pt.y - 22}px;">
          \${ringHtml}
          <button 
            onclick="triggerLevel(\${lvl.id}, \${isLocked})"
            class="w-10 h-10 rounded-full flex flex-col items-center justify-center font-black text-xs border-2 shadow-lg transition duration-200 relative \${btnColor}"
          >
            <span>\${icon}</span>
            <span class="absolute -top-5 bg-slate-950 text-[9px] text-amber-300 font-bold px-1 rounded border border-amber-500/20 whitespace-nowrap">Pos \${lvl.id}</span>
          </button>
        </div>\`;
      });

      btnContainer.innerHTML = btnHtml;
    }

    // Trigger Pos click
    function triggerLevel(levelId, isLocked) {
      if (isLocked) {
        audio.playWrong();
        return;
      }
      audio.playClick();
      startQuiz(levelId);
    }

    // Active Quiz mechanics
    let quizState = {
      levelId: 1,
      questions: [],
      currentIdx: 0,
      correctCount: 0,
      timeLeft: 30,
      timerInterval: null,
      selectedIdx: null
    };

    function startQuiz(levelId) {
      const subjectData = SUBJECTS[player.selectedSubject];
      const activeLvl = subjectData.levels.find(l => l.id === levelId);
      
      quizState.levelId = levelId;
      quizState.questions = activeLvl.questions;
      quizState.currentIdx = 0;
      quizState.correctCount = 0;
      quizState.selectedIdx = null;

      screenMap.classList.add('hidden');
      screenQuiz.classList.remove('hidden');

      loadQuizQuestion();
    }

    function loadQuizQuestion() {
      quizState.selectedIdx = null;
      document.getElementById('quiz-btn-next').classList.add('hidden');
      document.getElementById('quiz-explanation-box').classList.add('hidden');

      const q = quizState.questions[quizState.currentIdx];
      document.getElementById('quiz-level-title').innerText = 'POS ' + quizState.levelId;
      document.getElementById('quiz-level-topic').innerText = 'Pertanyaan ke ' + (quizState.currentIdx + 1) + ' dari 5';
      document.getElementById('quiz-q-progress').innerText = 'SOAL ' + (quizState.currentIdx + 1) + ' DARI 5';
      document.getElementById('quiz-q-text').innerText = q.question;

      // Populate choices
      const stack = document.getElementById('quiz-options-stack');
      let stackHtml = '';
      q.options.forEach((opt, idx) => {
        stackHtml += \`<button 
          onclick="submitAnswer(\${idx})"
          id="opt-\${idx}"
          class="w-full text-left p-4 rounded-2xl border border-slate-700 bg-slate-800/40 hover:bg-slate-800 hover:border-amber-400 text-sm text-slate-200 font-semibold flex items-center justify-between transition"
        >
          <div class="flex items-center gap-3">
            <span class="w-6 h-6 bg-slate-700 text-white rounded-full flex items-center justify-center text-xs font-bold">\${String.fromCharCode(65 + idx)}</span>
            <span>\${opt}</span>
          </div>
        </button>\`;
      });
      stack.innerHTML = stackHtml;

      // Start counter
      startTimer();
    }

    function startTimer() {
      if (quizState.timerInterval) clearInterval(quizState.timerInterval);
      quizState.timeLeft = 30;
      updateTimerUI();

      quizState.timerInterval = setInterval(() => {
        quizState.timeLeft--;
        updateTimerUI();
        if (quizState.timeLeft <= 0) {
          clearInterval(quizState.timerInterval);
          timeoutAnswer();
        }
      }, 1000);
    }

    function updateTimerUI() {
      const bar = document.getElementById('timer-progress');
      const text = document.getElementById('quiz-timer-text');
      const percent = (quizState.timeLeft / 30) * 100;
      bar.style.width = percent + '%';
      text.innerText = '⏰ ' + quizState.timeLeft + ' DETIK';
      if (quizState.timeLeft <= 10) {
        bar.className = 'h-full bg-red-500 animate-pulse';
        text.className = 'text-red-400 font-bold';
      } else {
        bar.className = 'h-full bg-emerald-500';
        text.className = 'text-emerald-400';
      }
    }

    function submitAnswer(idx) {
      if (quizState.selectedIdx !== null) return;
      clearInterval(quizState.timerInterval);
      quizState.selectedIdx = idx;

      const q = quizState.questions[quizState.currentIdx];
      const isCorrect = idx === q.answer;

      const selectedButton = document.getElementById('opt-' + idx);
      const explanationBox = document.getElementById('quiz-explanation-box');

      if (isCorrect) {
        audio.playCorrect();
        quizState.correctCount++;
        selectedButton.className = 'w-full text-left p-4 rounded-2xl border border-emerald-500 bg-emerald-950/60 text-emerald-200 font-semibold flex items-center justify-between shadow';
        selectedButton.innerHTML += '<span class="text-emerald-400">✔️ BENAR</span>';
        
        // Burst stars
        burstStars();
      } else {
        audio.playWrong();
        selectedButton.className = 'w-full text-left p-4 rounded-2xl border border-red-500 bg-red-950/60 text-red-200 font-semibold flex items-center justify-between shadow';
        selectedButton.innerHTML += '<span class="text-red-400">❌ SALAH</span>';

        // Light correct answer
        const correctButton = document.getElementById('opt-' + q.answer);
        correctButton.className = 'w-full text-left p-4 rounded-2xl border border-emerald-500 bg-slate-900/60 text-emerald-300 font-semibold flex items-center justify-between';
      }

      // Show explanation
      explanationBox.classList.remove('hidden');
      explanationBox.innerHTML = \`<p class="font-bold text-amber-400 mb-1">💡 Penjelasan Edukasi:</p>
                                   <p>\${q.explanation || 'Penjelasan lengkap materi ini.'}</p>\`;

      document.getElementById('quiz-btn-next').classList.remove('hidden');
    }

    function timeoutAnswer() {
      quizState.selectedIdx = -1;
      audio.playWrong();

      const q = quizState.questions[quizState.currentIdx];
      const explanationBox = document.getElementById('quiz-explanation-box');

      // Highlight correct option
      const correctButton = document.getElementById('opt-' + q.answer);
      if (correctButton) {
        correctButton.className = 'w-full text-left p-4 rounded-2xl border border-emerald-500 bg-slate-900/60 text-emerald-300 font-semibold flex items-center justify-between';
      }

      explanationBox.classList.remove('hidden');
      explanationBox.innerHTML = \`<p class="font-bold text-red-400 mb-1">⏰ Waktu Habis!</p>
                                   <p>Jawaban yang benar adalah: <strong>\${q.options[q.answer]}</strong>. \${q.explanation || ''}</p>\`;

      document.getElementById('quiz-btn-next').classList.remove('hidden');
    }

    function burstStars() {
      const parent = document.getElementById('star-burst-container');
      for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.className = 'absolute pointer-events-none text-2xl';
        star.innerText = '✨';
        star.style.left = '50%';
        star.style.top = '50%';
        star.style.animation = 'star-popup 1.2s ease-out forwards';
        
        const tx = (Math.random() - 0.5) * 200;
        const ty = (Math.random() - 0.5) * 150 - 50;
        
        star.style.setProperty('--tx', tx + 'px');
        star.style.setProperty('--ty', ty + 'px');
        
        parent.appendChild(star);
        setTimeout(() => star.remove(), 1200);
      }
    }

    function nextQuestion() {
      audio.playClick();
      if (quizState.currentIdx < quizState.questions.length - 1) {
        quizState.currentIdx++;
        loadQuizQuestion();
      } else {
        showLevelResults();
      }
    }

    function showLevelResults() {
      screenQuiz.classList.add('hidden');
      screenLevelSummary.classList.remove('hidden');

      const score = quizState.correctCount * 20;
      player.levelScores[quizState.levelId] = score;

      const titleEl = document.getElementById('summary-title');
      const correctEl = document.getElementById('summary-correct');
      const scoreEl = document.getElementById('summary-score');
      const descEl = document.getElementById('summary-desc');
      const iconEl = document.getElementById('summary-icon');

      correctEl.innerText = quizState.correctCount + ' / 5';
      scoreEl.innerText = score + ' Poin';
      document.getElementById('summary-pos').innerText = 'Pos ' + quizState.levelId;

      if (score >= 60) {
        audio.playLevelUp();
        titleEl.innerText = 'Pos Lulus! 🎉';
        titleEl.className = 'text-2xl font-black text-emerald-400';
        iconEl.innerText = '🏆';
        descEl.innerHTML = \`Hebat sekali! Kamu berhasil menyelesaikan tantangan Pos \${quizState.levelId} dengan skor <strong>\${score}</strong>. Pos berikutnya sekarang terbuka!\`;
        document.getElementById('summary-btn-retry').classList.add('hidden');
        document.getElementById('summary-btn-continue').classList.remove('hidden');
      } else {
        audio.playWrong();
        titleEl.innerText = 'Belum Lulus ☹️';
        titleEl.className = 'text-2xl font-black text-red-400';
        iconEl.innerText = '💪';
        descEl.innerHTML = \`Skormu adalah <strong>\${score} Poin</strong>. Syarat lulus minimal adalah <strong>60 Poin</strong> (3 soal benar). Ayo ulangi lagi pos ini!\`;
        document.getElementById('summary-btn-retry').classList.remove('hidden');
        document.getElementById('summary-btn-continue').classList.add('hidden');
      }
    }

    function retryLevel() {
      audio.playClick();
      screenLevelSummary.classList.add('hidden');
      startQuiz(quizState.levelId);
    }

    function completeLevel() {
      audio.playClick();
      const score = quizState.correctCount * 20;
      if (score >= 60) {
        if (quizState.levelId === player.unlockedLevelId) {
          player.unlockedLevelId++;
        }
      }

      // Update HUD score
      const totalScore = Object.values(player.levelScores).reduce((a, b) => a + b, 0);
      document.getElementById('hud-total-score').innerText = totalScore + ' Poin';

      if (player.unlockedLevelId > 5) {
        // Save to leaderboard
        saveLeaderboard(totalScore);
        // Show Certificate
        showCertificate(totalScore);
      } else {
        loadMap();
      }
    }

    // Leaderboard persistence
    function saveLeaderboard(score) {
      try {
        const stored = localStorage.getItem('adventure_quest_leaderboard') || '[]';
        let data = [];
        try {
          const temp = JSON.parse(stored);
          if (Array.isArray(temp)) {
            data = temp;
          }
        } catch (err) {
          data = [];
        }
        data.push({
          id: Math.random().toString(),
          name: player.name,
          gender: player.gender,
          score: score,
          subject: player.selectedSubject,
          completedAt: new Date().toISOString()
        });
        localStorage.setItem('adventure_quest_leaderboard', JSON.stringify(data));
      } catch(e) {}
    }

    // Certification Screen Load
    function showCertificate(score) {
      screenLevelSummary.classList.add('hidden');
      screenCertificate.classList.remove('hidden');

      const subjectData = SUBJECTS[player.selectedSubject];
      document.getElementById('cert-student-name').innerText = player.name;
      document.getElementById('cert-score-text').innerText = score + ' / 100 Poin';

      let title = 'SERTIFIKAT PETUALANG BUDAYA INDONESIA';
      let desc = 'Telah berhasil menyelesaikan seluruh pos tantangan warisan budaya benda, tak benda, tari daerah, lagu daerah, dan pelestarian budaya Indonesia di dalam game petualangan IPAS Kelas 5 SD.';

      if (player.selectedSubject === 'pjok') {
        title = 'SERTIFIKAT JUNIOR ATLET SPORT QUEST';
        desc = 'Atas ketangkasan dan pengetahuan jasmani yang luar biasa dalam menyelesaikan seluruh pos tantangan bola besar, bola kecil, atletik, kebugaran jasmani, serta kesehatan diri di dalam game petualangan SPORT QUEST Kelas 5 SD.';
      } else if (player.selectedSubject === 'pancasila') {
        title = 'SERTIFIKAT PELAJAR PANCASILA SEJATI';
        desc = 'Atas keberhasilan luar biasa menyelesaikan seluruh pos tantangan karakter, gotong royong, musyawarah, dan kewajiban moral di dalam game petualangan Pendidikan Pancasila Kelas 5.';
      } else if (player.selectedSubject === 'matematika') {
        title = 'SERTIFIKAT MASTER MATEMATIKA SD';
        desc = 'Atas kecakapan istimewa menyelesaikan seluruh pos tantangan perhitungan pecahan, bangun datar, volume ruang, dan diagram data di dalam game petualangan Matematika Kelas 5.';
      } else if (player.selectedSubject === 'bahasa_indonesia') {
        title = 'SERTIFIKAT PUJANGGA SASTRA INDONESIA';
        desc = 'Atas ketelitian tinggi menyelesaikan seluruh pos tantangan pemahaman ide pokok, analisis iklan, surel elektronik, dan teks eksplanasi di dalam game petualangan Bahasa Indonesia Kelas 5.';
      } else if (player.selectedSubject === 'ipas') {
        title = 'SERTIFIKAT MAHA GURU BUDAYA NUSANTARA';
        desc = 'Atas keberhasilan luar biasa menjelajahi dan menyelesaikan seluruh pos tantangan warisan budaya benda, tak benda, tari daerah, lagu daerah, dan pelestarian budaya Indonesia di dalam game petualangan IPAS Kelas 5 SD.';
      } else if (player.selectedSubject === 'pai') {
        title = 'SERTIFIKAT AKHLAQUL KARIMAH & TAQWA';
        desc = 'Atas pencapaian mulia memahami surah Al-Ma\'un, nama-nama indah Asmaul Husna, sikap saling menghargai, meneladani kisah Nabi dan Rasul, serta tuntunan ibadah Haji dan Kurban di dalam game petualangan Pendidikan Agama Islam Kelas 5.';
      } else if (player.selectedSubject === 'bahasa_inggris') {
        title = 'SERTIFIKAT GLOBAL COMMUNICATOR JUNIOR';
        desc = 'Atas kecakapan luar biasa mempraktikkan komunikasi Bahasa Inggris interaktif, menanyakan harga, memahami nama bagian tubuh dan kesehatan, mengenali ruangan rumah/sekolah, serta hewan dan makanannya di dalam game petualangan English Interactive Kelas 5.';
      } else if (player.selectedSubject === 'bahasa_jawa') {
        title = 'SERTIFIKAT PELESTARI BUDAYA DAERAH';
        desc = 'Atas kecintaan luhur melestarikan warisan sastra Jawa, memahami crita wayang Pandhawa, unggah-ungguh basa, maca lan nulis Aksara Jawa, tembang Macapat, sarta tradisi budaya Jawa Timur Kelas 5.';
      } else if (player.selectedSubject === 'seni_rupa') {
        title = 'SERTIFIKAT MAESTRO SENI KREATIF JUNIOR';
        desc = 'Atas daya imajinasi dan kreativitas tinggi menguasai unsur seni rupa, gambar perspektif, motif hias nusantara, pembuatan karya seni rupa tiga dimensi, serta apresiasi pameran seni Kelas 5 SD.';
      }

      document.getElementById('cert-title').innerText = title;
      document.getElementById('cert-desc').innerText = desc;

      const dateStr = new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      document.getElementById('cert-date-text').innerText = 'Tuban, ' + dateStr;
    }

    function backToMap() {
      audio.playClick();
      screenQuiz.classList.add('hidden');
      screenMap.classList.remove('hidden');
    }

    function backToLanding() {
      audio.playClick();
      screenMap.classList.add('hidden');
      screenLanding.classList.remove('hidden');
      document.getElementById('top-hud-panel').classList.add('hidden');
      renderLocalLeaderboard();
    }

    function restartGameSession() {
      audio.playClick();
      screenCertificate.classList.add('hidden');
      screenLanding.classList.remove('hidden');
      document.getElementById('top-hud-panel').classList.add('hidden');
      renderLocalLeaderboard();
    }

    // App Initialization load
    renderLocalLeaderboard();
  </script>
</body>
</html>`;
}
