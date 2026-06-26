/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Download, 
  User, 
  BookOpen, 
  Sparkles, 
  LogOut, 
  Award, 
  GraduationCap, 
  Compass,
  Lock,
  Unlock,
  Key,
  ArrowRight
} from 'lucide-react';
import { GameState, Player, SubjectId, RemotePlayer } from './types';
import { SUBJECTS_DATA } from './data/questions';
import { audio } from './components/AudioEngine';
import AdventureMap from './components/AdventureMap';
import QuizModal from './components/QuizModal';
import Leaderboard from './components/Leaderboard';
import Certificate from './components/Certificate';
import { db, auth, googleProvider, signInWithPopup, onAuthStateChanged } from './lib/firebase';
import { doc, setDoc, onSnapshot, collection, deleteDoc, updateDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';


export default function App() {
  // Core game states
  const [playerName, setPlayerName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState<'boy' | 'girl' | null>(null);
  const [boyColor, setBoyColor] = useState<string>('red');
  const [girlColor, setGirlColor] = useState<string>('blue');
  const [isMultiplayer, setIsMultiplayer] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('pjok');
  const [gameStarted, setGameStarted] = useState(false);
  const [activeLevelId, setActiveLevelId] = useState<number | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        setEmail(user.email);
      } else {
        setEmail('');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    if (isLoggingIn) return;
    setIsLoggingIn(true);
    try {
      audio.resume();
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') {
        console.log('Login popup closed by user or cancelled');
      } else {
        console.error('Error signing in with Google:', error);
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setEmail('');
  };
  const [unlockState, setUnlockState] = useState<'locked' | 'inserting' | 'unlocked'>('locked');
  
  // Progress state trackers
  const [unlockedLevelId, setUnlockedLevelId] = useState<number>(1);
  const [levelScores, setLevelScores] = useState<Record<number, number>>({});
  const [gameCompleted, setGameCompleted] = useState(false);
  const [remotePlayers, setRemotePlayers] = useState<RemotePlayer[]>([]);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Firebase Multiplayer sync
  useEffect(() => {
    if (!gameStarted || !playerName || !gender || !email) return;
    const color = gender === 'boy' ? boyColor : girlColor;

    const playerId = email.replace(/[@.]/g, '_') + '_' + playerName + '_' + gender + '_' + color;
    const playerDoc = doc(db, 'players', playerId);

    setDoc(playerDoc, {
      id: playerId,
      name: playerName,
      gender: gender,
      color: color,
      level: activeLevelId
    });

    const unsubscribe = onSnapshot(collection(db, 'players'), (snapshot) => {
      const players: RemotePlayer[] = [];
      snapshot.forEach((doc) => {
        if (doc.id !== playerId) {
          players.push(doc.data() as RemotePlayer);
        }
      });
      setRemotePlayers(players);
    });

    return () => {
      deleteDoc(playerDoc);
      unsubscribe();
    };
  }, [gameStarted, playerName, gender, boyColor, girlColor, activeLevelId]);

  // Music state
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleToggleMusic = () => {
    const active = audio.toggleAdventureMusic();
    setIsMusicPlaying(active);
  };

  // Trigger sound context on first click
  useEffect(() => {
    const handleFirstClick = () => {
      audio.playClick();
      window.removeEventListener('click', handleFirstClick);
    };
    window.addEventListener('click', handleFirstClick);
    return () => window.removeEventListener('click', handleFirstClick);
  }, []);

  const handleGenderSelect = (g: 'boy' | 'girl') => {
    audio.playClick();
    setGender(g);
  };

  const handleKeyClick = async () => {
    // Attempt to go fullscreen and landscape for mobile users
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
      if (window.screen.orientation && (window.screen.orientation as any).lock) {
        await (window.screen.orientation as any).lock('landscape').catch(() => {
          // Ignore errors if orientation lock is not supported or requires manifest
        });
      }
    } catch (e) {
      console.warn('Fullscreen/Orientation request failed', e);
    }

    if (!playerName.trim()) {
      audio.playWrong();
      alert('Masukkan nama siswa terlebih dahulu!');
      return;
    }
    if (!gender) {
      audio.playWrong();
      audio.playWrong();
      alert('Pilih karakter laki-laki (👦) atau perempuan (👧) terlebih dahulu!');
      return;
    }

    audio.resume();
    audio.playClick();
    setUnlockState('inserting');
    
    // Add logic to cycle colors if desired, or just set initial if not set
    // For simplicity, let's keep the user's requirement "merubah warna bajunya menjadi beragam"
    // by allowing them to cycle/click the button to change it
    
    // Actually, based on requirements, let's keep handleGenderSelect simple
    // and just allow changing color in UI.

    // Enter the map with standard level up fanfare after enjoying the unlocked animation
    setTimeout(() => {
      audio.playCorrect();
      setUnlockState('unlocked');
    }, 1200);

    // Enter the map
    audio.startAdventureMusic();
    setIsMusicPlaying(true);
    setTimeout(() => {
      audio.playLevelUp();
      setGameStarted(true);
      setUnlockedLevelId(1);
      setLevelScores({});
      setGameCompleted(false);
      setUnlockState('locked'); // Reset state
    }, 2400);
  };


  const handleStartGame = () => {
    handleKeyClick();
  };

  const handleSelectLevel = (levelId: number) => {
    if (levelId > unlockedLevelId) {
      audio.playWrong();
      return;
    }
    audio.playClick();
    setActiveLevelId(levelId);
  };

  const handleCompleteLevel = (score: number) => {
    if (activeLevelId === null) return;

    // Store level score
    const updatedScores = { ...levelScores, [activeLevelId]: score };
    setLevelScores(updatedScores);

    // If passed level (score >= 60)
    if (score >= 60) {
      if (activeLevelId === unlockedLevelId) {
        const nextLvl = unlockedLevelId + 1;
        setUnlockedLevelId(nextLvl);

        // If completed all 10 levels
        if (nextLvl > 10) {
          const finalScore = (Object.values(updatedScores) as number[]).reduce((a, b) => a + b, 0);
          saveToLeaderboard(finalScore);
          setGameCompleted(true);
          audio.playVictory();
        }
      }
    }
    
    // Close quiz modal
    setActiveLevelId(null);
  };

  const saveToLeaderboard = (score: number) => {
    try {
      const stored = localStorage.getItem('adventure_quest_leaderboard') || '[]';
      let parsed: Player[] = [];
      try {
        const temp = JSON.parse(stored);
        if (Array.isArray(temp)) {
          parsed = temp;
        }
      } catch (err) {
        parsed = [];
      }
      
      const newPlayer: Player = {
        id: Math.random().toString(),
        name: playerName.trim(),
        gender: gender || 'boy',
        score: score,
        subject: selectedSubject,
        subjectName: SUBJECTS_DATA[selectedSubject].name,
        completedAt: new Date().toISOString()
      };

      parsed.push(newPlayer);
      localStorage.setItem('adventure_quest_leaderboard', JSON.stringify(parsed));
      
      // Dispatch storage event to update leaderboard component automatically
      window.dispatchEvent(new Event('storage'));
    } catch (e) {
      console.error('Failed to save to leaderboard', e);
    }
  };

  const handleRestart = () => {
    audio.playClick();
    setGameStarted(false);
    setActiveLevelId(null);
    setUnlockedLevelId(1);
    setLevelScores({});
    setGameCompleted(false);
  };

  // Roblox Character selection preview renderers
  const renderSelectionAvatar = (g: 'boy' | 'girl', color: string) => {
    const baseClasses = "w-16 h-16 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)] animate-walk";
    
    // Map color name to color values
    const colorMap: Record<string, string> = {
      red: '#ef4444',
      blue: '#3b82f6',
      green: '#22c55e',
      yellow: '#eab308'
    };
    const colorVal = colorMap[color] || '#ef4444';

    if (g === 'boy') {
      return (
        <svg viewBox="0 0 100 110" className={baseClasses}>
          <defs>
            <linearGradient id="selBoySkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="selBoyCap" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="selHoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colorVal} />
              <stop offset="100%" stopColor={colorVal} style={{ filter: 'brightness(0.8)' }} />
            </linearGradient>
            <linearGradient id="selChainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          <rect x="25" y="24" width="50" height="15" rx="2" fill="#171717" />
          <rect x="26" y="22" width="48" height="40" rx="3" fill="url(#selBoySkin)" stroke="#78350f" strokeWidth="2.5" />
          <rect x="24" y="10" width="52" height="16" rx="4" fill="url(#selBoyCap)" stroke="#020617" strokeWidth="2" />
          <path d="M74,15 L90,12 L88,22 L74,20 Z" fill="#0f172a" stroke="#020617" strokeWidth="1.5" />
          <rect x="42" y="6" width="16" height="5" rx="1" fill={colorVal} />
          <polygon points="21,32 79,32 75,44 25,44" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="28" y1="34" x2="38" y2="42" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          <line x1="53" y1="34" x2="63" y2="42" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          <path d="M43,51 Q50,56 57,51" fill="none" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
          <rect x="20" y="60" width="60" height="34" rx="4" fill="url(#selHoodieGrad)" stroke="#7f1d1d" strokeWidth="2.5" />
          <path d="M33,63 Q50,78 67,63" fill="none" stroke="url(#selChainGrad)" strokeWidth="4" strokeLinecap="round" />
          <rect x="46" y="72" width="8" height="8" rx="2" fill="url(#selChainGrad)" stroke="#b45309" strokeWidth="1" />
          <rect x="10" y="60" width="10" height="26" rx="2" fill="url(#selHoodieGrad)" stroke="#7f1d1d" strokeWidth="1.5" />
          <rect x="80" y="60" width="10" height="26" rx="2" fill="url(#selHoodieGrad)" stroke="#7f1d1d" strokeWidth="1.5" />
          {/* Added Legs */}
          <rect x="30" y="90" width="10" height="10" fill="#1e293b" />
          <rect x="60" y="90" width="10" height="10" fill="#1e293b" />
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 100 110" className={baseClasses}>
          <defs>
            <linearGradient id="selGirlSkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fee2e2" />
              <stop offset="100%" stopColor="#fbcfe8" />
            </linearGradient>
            <linearGradient id="selGirlHair" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#be185d" />
              <stop offset="100%" stopColor="#831843" />
            </linearGradient>
            <linearGradient id="selGirlCap" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#be185d" />
            </linearGradient>
            <linearGradient id="selGirlJacket" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colorVal} />
              <stop offset="100%" stopColor={colorVal} style={{ filter: 'brightness(0.8)' }} />
            </linearGradient>
            <linearGradient id="selGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          <rect x="16" y="18" width="68" height="48" rx="4" fill="url(#selGirlHair)" />
          <rect x="26" y="22" width="48" height="40" rx="3" fill="url(#selGirlSkin)" stroke="#9d174d" strokeWidth="2.5" />
          <rect x="22" y="16" width="56" height="12" fill="url(#selGirlHair)" />
          <path d="M26,28 L32,35 L38,28" fill="#500724" />
          <path d="M62,28 L68,35 L74,28" fill="#500724" />
          <rect x="24" y="8" width="52" height="16" rx="4" fill="url(#selGirlCap)" stroke="#500724" strokeWidth="2" />
          <path d="M74,13 L88,11 L86,21 L74,18 Z" fill="#be185d" stroke="#500724" strokeWidth="1.5" />
          <polygon points="21,32 79,32 75,44 25,44" fill="#ffffff" stroke="#db2777" strokeWidth="2" />
          <polygon points="24,34 76,34 73,42 27,42" fill="#1e293b" />
          <line x1="28" y1="36" x2="36" y2="41" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
          <line x1="54" y1="36" x2="62" y2="41" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
          <circle cx="32" cy="50" r="3" fill="#fda4af" opacity="0.8" />
          <circle cx="68" cy="50" r="3" fill="#fda4af" opacity="0.8" />
          <path d="M44,51 Q50,56 56,51" fill="none" stroke="#be123c" strokeWidth="3" strokeLinecap="round" />
          <rect x="20" y="60" width="60" height="34" rx="4" fill="url(#selGirlJacket)" stroke="#0f172a" strokeWidth="2.5" />
          <rect x="38" y="60" width="24" height="10" fill="#f472b6" />
          <path d="M33,63 Q50,78 67,63" fill="none" stroke="url(#selGoldGrad)" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="10" y="60" width="10" height="26" rx="2" fill="url(#selGirlJacket)" stroke="#0f172a" strokeWidth="1.5" />
          <rect x="80" y="60" width="10" height="26" rx="2" fill="url(#selGirlJacket)" stroke="#0f172a" strokeWidth="1.5" />
          {/* Added Legs */}
          <rect x="30" y="90" width="10" height="10" fill="#1e293b" />
          <rect x="60" y="90" width="10" height="10" fill="#1e293b" />
        </svg>
      );
    }
  };

  const activeSubject = SUBJECTS_DATA[selectedSubject];
  const totalScore = (Object.values(levelScores) as number[]).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-100 to-sky-50 text-slate-800 font-sans pb-16 selection:bg-amber-400 selection:text-slate-900 relative overflow-hidden">
      
      {/* MAGICAL AMBIENT SPARKS & LIGHT FLIES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute top-[12%] left-[10%] w-3 h-3 bg-indigo-400 rounded-full blur-[1px] animate-ping" style={{ animationDuration: '3.5s' }} />
        <div className="absolute top-[38%] left-[85%] w-2 h-2 bg-amber-400 rounded-full blur-[1.5px] animate-pulse" style={{ animationDuration: '4.2s' }} />
        <div className="absolute top-[65%] left-[22%] w-4 h-4 bg-emerald-400 rounded-full blur-[2px] opacity-60 animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute top-[52%] left-[8%] w-2.5 h-2.5 bg-yellow-300 rounded-full blur-[1px] animate-bounce" style={{ animationDuration: '6s' }} />
        <div className="absolute top-[18%] left-[70%] w-3.5 h-3.5 bg-amber-400 rounded-full blur-[1.5px] animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[82%] left-[78%] w-3 h-3 bg-emerald-500 rounded-full blur-[1px] animate-ping" style={{ animationDuration: '4.8s' }} />
      </div>

      {/* HUD HEADER */}
      {activeLevelId === null && (
        <header className="no-print bg-gradient-to-r from-sky-200 via-sky-50 to-sky-200 border-b-4 border-sky-400 py-4 px-6 sticky top-0 z-40 shadow-md">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl animate-bounce">🎒</span>
              <div>
                <h1 className="text-sm sm:text-base font-black tracking-widest text-slate-800 uppercase flex items-center gap-1.5 font-display">
                  <span>ADVENTURE QUEST SD</span>
                </h1>
                <p className="text-[10px] text-sky-800 font-black tracking-wider uppercase">
                  UPT SD NEGERI REMEN 2
                </p>
              </div>
            </div>
            
            {/* Ambient Music Controller */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleToggleMusic}
                className={`px-3.5 py-1.5 rounded-full text-xs font-black flex items-center gap-2 border-2 shadow-sm transition transform hover:scale-105 active:scale-95
                  ${isMusicPlaying 
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white border-emerald-300 shadow-emerald-400/20' 
                    : 'bg-white text-slate-600 border-slate-200'}`}
              >
                <span>{isMusicPlaying ? '🔊 Musik: AKTIF' : '🔇 Musik: MATI'}</span>
                {isMusicPlaying && <span className="animate-pulse">🎵</span>}
              </button>
            </div>
          </div>
        </header>
      )}

      {/* MAIN LAYOUT */}
      <main className="max-w-[1440px] mx-auto px-4 mt-4 relative z-10 items-start">
        <AnimatePresence mode="wait">
          {!gameStarted ? (
            /* 1. REGISTRATION / LANDING PAGE */
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-4"
            >
              {/* Left Column: School Emblem and Theme presentation */}
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left pt-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border-2 border-emerald-400 text-emerald-800 text-xs font-black rounded-full uppercase tracking-widest shadow-md">
                  <Sparkles className="w-4 h-4 animate-spin text-emerald-600" />
                  <span>Kurikulum Merdeka Kelas 5 SD</span>
                </div>

                <h2 className="text-4xl sm:text-6xl font-black text-slate-800 tracking-tight leading-none font-display">
                  ADVENTURE QUEST <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-600 drop-shadow-sm">
                     BELAJAR MENYENANGKAN
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-semibold">
                  Selamat datang di portal petualangan interaktif siswa <strong className="text-amber-600">UPT SD Negeri Remen 2</strong>! 
                  Uji pemahaman belajarmu dalam tantangan menjelajahi peta pos, kumpulkan poin, raih lencana bintang, dan dapatkan sertifikat resmi dari sekolahmu!
                </p>

                {/* Info Pills */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                  <div className="px-4 py-2.5 bg-white border-2 border-slate-200 rounded-2xl flex items-center gap-3 text-xs shadow-md">
                    <span className="text-2xl">⭐</span>
                    <div>
                      <div className="font-extrabold text-slate-800">10 Pos Tantangan</div>
                      <div className="text-[10px] text-slate-500">Materi Interaktif</div>
                    </div>
                  </div>
                  <div className="px-4 py-2.5 bg-white border-2 border-slate-200 rounded-2xl flex items-center gap-3 text-xs shadow-md">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <div className="font-extrabold text-slate-800">9 Mata Pelajaran</div>
                      <div className="text-[10px] text-slate-500">PJOK, IPAS, PPKn, MTK, B.Indo, B.Jawa, PAI, S. Rupa, B.ING</div>
                    </div>
                  </div>
                </div>
                
                {/* Papan Peringkat TOP 10 - Compact and matching width */}
                <div className="pt-4 max-w-sm">
                  <Leaderboard currentSubjectId={selectedSubject} />
                </div>
              </div>

              {/* Right Column: Registration Card & Leaderboard stack */}
              <div className="lg:col-span-5 space-y-4">
                {/* Login Card - Styled like a heavy game board */}
                <div className="bg-white border-4 border-amber-500 rounded-[1.5rem] p-3 sm:p-4 shadow-xl space-y-3 relative">
                  
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[9px] font-black px-4 py-1 rounded-full border-2 border-yellow-300 shadow-md uppercase tracking-widest whitespace-nowrap">
                    Pendaftaran Karakter
                  </div>

                  <h3 className="text-sm font-black text-amber-900 border-b border-slate-100 pb-1.5 flex items-center gap-2 pt-1">
                    <User className="w-4 h-4 text-amber-500 animate-pulse" />
                    <span>Lengkapi Identitas Siswa</span>
                  </h3>

                  {/* Input Student Name */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-black text-amber-700 uppercase tracking-wider">
                      Nama Lengkap Siswa:
                    </label>
                    <input
                      type="text"
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      placeholder="Ketik namamu di sini..."
                      className="w-full bg-slate-50 border-2 border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none rounded-lg px-2 py-1.5 text-xs text-slate-800 font-bold transition-all shadow-inner"
                      maxLength={25}
                    />
                  </div>
                  
                  {/* Google Sign-in for Multiplayer */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-black text-amber-700 uppercase tracking-wider">
                      Akun (multiplayer):
                    </label>
                    {email ? (
                      <div className="flex items-center gap-2 p-2 bg-green-50 border-2 border-green-200 rounded-xl">
                        <span className="text-[10px] font-bold text-green-800 truncate">{email}</span>
                        <button onClick={handleSignOut} className="ml-auto text-[10px] text-red-600 font-bold hover:underline">Keluar</button>
                      </div>
                    ) : (
                      <button
                        onClick={handleGoogleSignIn}
                        disabled={isLoggingIn}
                        className={`w-full bg-amber-600 text-white rounded-lg px-3 py-1.5 text-xs font-bold transition-all hover:bg-amber-700 flex items-center justify-center gap-2 ${isLoggingIn ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {isLoggingIn ? 'Signing in...' : 'Sign in with Google'}
                      </button>
                    )}
                  </div>

                  {/* Character Uniform Selector */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-black text-amber-700 uppercase tracking-wider">
                      Pilih Karakter:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {/* Character Choices */}
                      {[
                        { id: 'boy', label: 'Laki-laki' },
                        { id: 'girl', label: 'Perempuan' }
                      ].map((char) => {
                        const charColor = char.id === 'boy' ? boyColor : girlColor;
                        return (
                          <button
                            key={char.id}
                            type="button"
                            onClick={() => {
                              if (gender === char.id) {
                                // Cycle color
                                const colors = ['red', 'blue', 'green', 'yellow'];
                                const nextColor = colors[(colors.indexOf(charColor) + 1) % colors.length];
                                if (char.id === 'boy') setBoyColor(nextColor);
                                else setGirlColor(nextColor);
                              } else {
                                handleGenderSelect(char.id as any);
                              }
                            }}
                            className={`bg-slate-50 border-2 rounded-xl p-2 flex flex-col items-center gap-1 transition-all duration-300 transform active:scale-95 w-full
                              ${gender === char.id 
                                ? 'border-amber-500 bg-amber-500/10 scale-102 ring-2 ring-amber-500/20 shadow-sm' 
                                : 'border-slate-200 hover:border-slate-300'
                              }`}
                          >
                            <div className="w-12 h-12 flex items-center justify-center">
                              {renderSelectionAvatar(char.id as any, charColor)}
                            </div>
                            <span className="text-[10px] font-black text-slate-800">{char.label}</span>
                            {gender === char.id && (
                                <span className="text-[8px] text-amber-700 italic">Klik lagi ganti warna</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Subject selector */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-black text-amber-700 uppercase tracking-wider">
                      Mata Pelajaran:
                    </label>
                    <div className="relative">
                      <select
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value as SubjectId)}
                        className="w-full bg-slate-50 border-2 border-slate-200 focus:border-amber-500 outline-none rounded-lg px-2 py-1.5 text-[11px] text-slate-800 font-black appearance-none transition-all shadow-inner"
                      >
                        <option value="pjok">PJOK (Olahraga)</option>
                        <option value="ipas">IPAS (Budaya)</option>
                        <option value="pancasila">Pancasila</option>
                        <option value="matematika">Matematika</option>
                        <option value="bahasa_indonesia">B. Indonesia</option>
                        <option value="pai">Agama Islam</option>
                        <option value="bahasa_inggris">English</option>
                        <option value="bahasa_jawa">B. Jawa</option>
                        <option value="seni_rupa">Seni Rupa</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-600 pointer-events-none text-[10px] font-black">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Interactive Golden Lock and Key Start Mechanism */}
                  <div className="bg-slate-50 border-2 border-slate-100 rounded-2xl p-2.5 flex flex-col items-center gap-2 relative overflow-hidden shadow-inner">
                    <div className="text-center">
                      <span className="text-[10px] font-black text-amber-800 uppercase tracking-widest block">
                        🔑 Gerbang Pengunci Petualangan
                      </span>
                      <p className="text-[8px] text-slate-500 font-bold leading-tight">
                        Lengkapi identitas, lalu <span className="text-amber-600 font-extrabold">Klik Kunci Emas</span>!
                      </p>
                    </div>

                    <div className="flex items-center justify-between w-full gap-2 px-1 relative">
                      {/* The Padlock (Gembok) */}
                      <motion.div
                        animate={
                          unlockState === 'unlocked'
                            ? { scale: [1, 1.1, 1.05], y: [0, -2, 0] }
                            : unlockState === 'inserting'
                            ? { x: [0, -1, 1, -1, 1, 0] }
                            : {}
                        }
                        className={`w-12 h-12 rounded-xl border-2 flex flex-col items-center justify-center relative shadow-sm transition-all duration-300 z-10
                          ${unlockState === 'unlocked' 
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-700' 
                            : unlockState === 'inserting'
                            ? 'bg-amber-50 border-amber-300 text-amber-700 animate-pulse'
                            : 'bg-blue-50 border-blue-200 text-blue-600 shadow-blue-100/30'
                          }`}
                      >
                        {/* Padlock Shackle */}
                        <motion.div 
                          className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 border-[3px] rounded-t-full border-b-0 pointer-events-none"
                          style={{
                            borderColor: unlockState === 'unlocked' ? '#059669' : unlockState === 'inserting' ? '#d97706' : '#2563eb',
                          }}
                          animate={unlockState === 'unlocked' ? { y: -4, rotate: -15 } : { y: 0, rotate: 0 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                        />
                        {/* Padlock Body Icon */}
                        {unlockState === 'unlocked' ? (
                          <Unlock className="w-5 h-5 text-emerald-600 animate-bounce" />
                        ) : (
                          <Lock className="w-5 h-5 text-blue-500" />
                        )}
                        <span className="text-[8px] font-black uppercase mt-0.5 tracking-wider">
                          {unlockState === 'unlocked' ? 'Open' : 'Lock'}
                        </span>
                      </motion.div>

                      {/* The Path of Key */}
                      <div className="flex-1 h-0.5 border-t-2 border-dashed border-slate-200 relative">
                        {unlockState === 'locked' && (
                          <motion.span 
                            animate={{ x: [-5, 5, -5] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-black text-amber-400"
                          >
                            ◀
                          </motion.span>
                        )}
                      </div>

                      {/* The Golden Key */}
                      <motion.button
                        type="button"
                        onClick={handleKeyClick}
                        disabled={unlockState !== 'locked'}
                        animate={
                          unlockState === 'inserting'
                            ? {
                                x: -70, // slide left to meet padlock
                                rotate: [0, 0, 90, 90, 0], // insert and twist
                                scale: [1, 0.9, 0.9, 1.1, 1],
                              }
                            : unlockState === 'unlocked'
                            ? { x: -70, rotate: 90, scale: 0.8, opacity: 0 }
                            : { x: 0, rotate: 0 }
                        }
                        transition={{
                          duration: 1.2,
                          ease: "easeInOut"
                        }}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 relative group z-20
                          ${unlockState === 'locked' 
                            ? 'bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-400 border-2 border-amber-300 text-amber-950 animate-bounce' 
                            : 'bg-slate-100 border-2 border-slate-200 text-slate-300'
                          }`}
                        style={{ animationDuration: '3s' }}
                      >
                        <Key className="w-5 h-5 text-amber-950 group-hover:rotate-12 transition-transform" />
                        
                        {unlockState === 'locked' && (
                          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[7px] font-black text-amber-800 uppercase tracking-wider whitespace-nowrap bg-amber-100 px-1 py-0.5 rounded border border-amber-300 shadow-sm animate-pulse">
                            Klik!
                          </span>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : gameCompleted ? (
            /* 3. DIGITAL CERTIFICATE OF COMPLETION SCREEN */
            <motion.div
              key="certificate"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Certificate
                playerName={playerName}
                totalScore={totalScore}
                subjectId={selectedSubject}
                subjectName={activeSubject.name}
                onRestart={handleRestart}
              />
            </motion.div>
          ) : (
            /* 2. ADVENTURE MAP SCREEN WITH HUD & CONTROLS */
            <motion.div
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Active Subject Info Panel */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl shadow-md gap-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-600">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-800">{activeSubject.name}</h4>
                    <p className="text-xs text-slate-500 font-semibold">{activeSubject.subtitle}</p>
                  </div>
                </div>

                {/* Reset or change subject */}
                <button
                  onClick={handleRestart}
                  className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 font-extrabold text-xs rounded-xl border border-slate-200 transition flex items-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Ganti Mata Pelajaran</span>
                </button>
              </div>

              {/* Dynamic Map Board */}
              <AdventureMap
                levels={activeSubject.levels}
                unlockedLevelId={unlockedLevelId}
                currentLevelId={unlockedLevelId}
                levelScores={levelScores}
                gender={gender}
                boyColor={boyColor}
                girlColor={girlColor}
                playerName={playerName}
                subjectId={selectedSubject}
                onSelectLevel={handleSelectLevel}
                onStartGame={() => {}}
                isStarted={true}
                remotePlayers={isMultiplayer ? remotePlayers : []}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ACTIVE QUIZ MODAL PORTAL */}
        <AnimatePresence>
          {activeLevelId !== null && (
            <QuizModal
              level={activeSubject.levels.find(l => l.id === activeLevelId)!}
              levelId={activeLevelId}
              onClose={() => setActiveLevelId(null)}
              onCompleteLevel={handleCompleteLevel}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
