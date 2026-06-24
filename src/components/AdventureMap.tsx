/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lock, Star, Play, Compass, Wind } from 'lucide-react';
import { Level, SubjectId, RemotePlayer } from '../types';
import { audio } from './AudioEngine';

interface AdventureMapProps {
  levels: Level[];
  unlockedLevelId: number;
  currentLevelId: number;
  levelScores: Record<number, number>;
  gender: 'boy' | 'girl' | null;
  boyColor: string;
  girlColor: string;
  playerName: string;
  subjectId: SubjectId;
  onSelectLevel: (levelId: number) => void;
  onStartGame: () => void;
  isStarted: boolean;
  remotePlayers: RemotePlayer[];
}

export default function AdventureMap({
  levels,
  unlockedLevelId,
  levelScores,
  gender,
  boyColor,
  girlColor,
  playerName,
  subjectId,
  onSelectLevel,
  onStartGame,
  isStarted,
  remotePlayers
}: AdventureMapProps) {
  
  // Coordinates designed to wind perfectly along the natural island pathways of the cartoon map (10 levels)
  const points = [
    { x: 105, y: 395, name: 'Gerbang Pantai Remen', challenge: null }, // Start Point
    { x: 165, y: 310, name: 'Pos 1 - Hutan Cemara', challenge: null },
    { x: 235, y: 220, name: 'Pos 2 - Sungai Jernih', challenge: 'Tornado Putar' },
    { x: 310, y: 165, name: 'Pos 3 - Danau Biru', challenge: null },
    { x: 395, y: 245, name: 'Pos 4 - Goa Kelelawar', challenge: 'Gua Gelap' },
    { x: 440, y: 345, name: 'Pos 5 - Lembah Hijau', challenge: null },
    { x: 530, y: 375, name: 'Pos 6 - Jembatan Gantung', challenge: 'Jembatan Goyang' },
    { x: 605, y: 290, name: 'Pos 7 - Tebing Karang', challenge: null },
    { x: 685, y: 210, name: 'Pos 8 - Kubah Angin', challenge: 'Pusaran Angin' },
    { x: 600, y: 135, name: 'Pos 9 - Lorong Misteri', challenge: null },
    { x: 715, y: 110, name: 'Pos 10 - Puncak Prestasi', challenge: 'Raja Tantangan' }
  ];

  const [visualPointIndex, setVisualPointIndex] = useState(0);
  const [prevSubjectId, setPrevSubjectId] = useState(subjectId);

  useEffect(() => {
    if (!isStarted) {
      setVisualPointIndex(0);
      return;
    }

    const targetIndex = Math.min(unlockedLevelId, 10);

    // If subject changed, reset visual point to 0 immediately
    if (prevSubjectId !== subjectId) {
      setPrevSubjectId(subjectId);
      setVisualPointIndex(0);
      return;
    }

    if (visualPointIndex === targetIndex) return;

    // Smoothly step one-by-one towards targetIndex so the character walks along the path
    const timer = setTimeout(() => {
      if (visualPointIndex < targetIndex) {
        setVisualPointIndex(prev => prev + 1);
      } else if (visualPointIndex > targetIndex) {
        setVisualPointIndex(prev => prev - 1);
      }
    }, 1200); // 1.2s delay for perfect pacing along the visual path

    return () => clearTimeout(timer);
  }, [unlockedLevelId, subjectId, isStarted, visualPointIndex, prevSubjectId]);

  const activePoint = points[Math.min(visualPointIndex, 10)];

  const getPointForLevel = (levelId: number) => {
    return points[Math.min(levelId, 10)];
  };

  const handleLevelClick = (levelId: number, isLocked: boolean) => {
    if (isLocked) {
      audio.playWrong();
      return;
    }
    audio.playClick();
    onSelectLevel(levelId);
  };

  const handleStartClick = () => {
    audio.playLevelUp();
    onStartGame();
  };

  const getSvgPath = () => {
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpX1 = prev.x + (curr.x - prev.x) / 2;
      const cpY1 = prev.y;
      const cpX2 = prev.x + (curr.x - prev.x) / 2;
      const cpY2 = curr.y;
      path += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${curr.x} ${curr.y}`;
    }
    return path;
  };


  // PREMIUM ROBLOX / CHIBI GAME CHARACTER RENDERERS - STYLISH ROBLOX STYLE WITH CHAINS, SHADES, AND CAPS
  const renderAvatar = (g: 'boy' | 'girl', color: string) => {
    const colorMap: Record<string, string> = {
      red: '#ef4444',
      blue: '#3b82f6',
      green: '#22c55e',
      yellow: '#eab308'
    };
    const colorVal = colorMap[color] || '#ef4444';

    if (g === 'boy') {
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
          <defs>
            <linearGradient id="boySkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="boyCap" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <linearGradient id="chainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          
          {/* Roblox hair poking out of cap */}
          <rect x="25" y="24" width="50" height="15" rx="2" fill="#171717" />
          
          {/* Blocky Head (Pure Roblox Signature Rect) */}
          <rect x="26" y="22" width="48" height="40" rx="3" fill="url(#boySkin)" stroke="#78350f" strokeWidth="2.5" />
          
          {/* Cool Backward Cap (Stylish Roblox style) */}
          {/* Cap Base */}
          <rect x="24" y="10" width="52" height="16" rx="4" fill="url(#boyCap)" stroke="#020617" strokeWidth="2" />
          {/* Cap Visor (Pointing backwards/sideways, flat blocky style) */}
          <path d="M74,15 L90,12 L88,22 L74,20 Z" fill="#0f172a" stroke="#020617" strokeWidth="1.5" />
          <rect x="42" y="6" width="16" height="5" rx="1" fill={colorVal} /> {/* Cap Front Badge */}

          {/* Stylish Black Roblox Shades / Sunglasses */}
          <polygon points="21,32 79,32 75,44 25,44" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          {/* Lens reflection shine lines */}
          <line x1="28" y1="34" x2="38" y2="42" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          <line x1="53" y1="34" x2="63" y2="42" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          
          {/* Cute Smile */}
          <path d="M43,51 Q50,56 57,51" fill="none" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />

          {/* Blocky Roblox Torso (Hoodie with Chain) */}
          <rect x="20" y="60" width="60" height="34" rx="4" fill={colorVal} stroke="#7f1d1d" strokeWidth="2.5" />
          
          {/* Red/White Indonesian SD Tie/Ribbon underneath neck */}
          <path d="M46,60 L54,60 L50,75 Z" fill="#ffffff" />
          <path d="M48,60 L52,60 L50,70 Z" fill="#ef4444" />

          {/* Cool Gold Chain (Like stylish Roblox characters reference) */}
          <path d="M33,63 Q50,78 67,63" fill="none" stroke="url(#chainGrad)" strokeWidth="4" strokeLinecap="round" />
          <path d="M36,65 Q50,79 64,65" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          {/* Pendant (Big Golden padlock or plate) */}
          <rect x="46" y="72" width="8" height="8" rx="2" fill="url(#chainGrad)" stroke="#b45309" strokeWidth="1" />
          <circle cx="50" cy="76" r="1.5" fill="#ffffff" />

          {/* Left & Right Roblox blocky Arms */}
          <rect x="10" y="60" width="10" height="26" rx="2" fill={colorVal} stroke="#7f1d1d" strokeWidth="1.5" />
          <rect x="80" y="60" width="10" height="26" rx="2" fill={colorVal} stroke="#7f1d1d" strokeWidth="1.5" />
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
          <defs>
            <linearGradient id="girlSkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fee2e2" />
              <stop offset="100%" stopColor="#fbcfe8" />
            </linearGradient>
            <linearGradient id="girlHair" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#be185d" />
              <stop offset="100%" stopColor="#831843" />
            </linearGradient>
            <linearGradient id="girlCap" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#be185d" />
            </linearGradient>
            <linearGradient id="girlJacket" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>

          {/* Roblox Long Blocky Hair Back */}
          <rect x="16" y="18" width="68" height="48" rx="4" fill="url(#girlHair)" />
          
          {/* Blocky Head */}
          <rect x="26" y="22" width="48" height="40" rx="3" fill="url(#girlSkin)" stroke="#9d174d" strokeWidth="2.5" />

          {/* Roblox Hair Bangs */}
          <rect x="22" y="16" width="56" height="12" fill="url(#girlHair)" />
          <path d="M26,28 L32,35 L38,28" fill="#500724" />
          <path d="M62,28 L68,35 L74,28" fill="#500724" />

          {/* Cool Pink Cap (Stylish Girl Roblox look) */}
          <rect x="24" y="8" width="52" height="16" rx="4" fill="url(#girlCap)" stroke="#500724" strokeWidth="2" />
          <path d="M74,13 L88,11 L86,21 L74,18 Z" fill="#be185d" stroke="#500724" strokeWidth="1.5" />
          
          {/* Stylish White Glasses / Shades */}
          <polygon points="21,32 79,32 75,44 25,44" fill="#ffffff" stroke="#db2777" strokeWidth="2" />
          <polygon points="24,34 76,34 73,42 27,42" fill="#1e293b" />
          {/* Glass glare */}
          <line x1="28" y1="36" x2="36" y2="41" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
          <line x1="54" y1="36" x2="62" y2="41" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />

          {/* Cute Blush & Smile */}
          <circle cx="32" cy="50" r="3" fill="#fda4af" opacity="0.8" />
          <circle cx="68" cy="50" r="3" fill="#fda4af" opacity="0.8" />
          <path d="M44,51 Q50,56 56,51" fill="none" stroke="#be123c" strokeWidth="3" strokeLinecap="round" />

          {/* Blocky Torso (Stylish Roblox jacket) */}
          <rect x="20" y="60" width="60" height="34" rx="4" fill={colorVal} stroke="#0f172a" strokeWidth="2.5" />
          
          {/* Inner Pink Shirt */}
          <rect x="38" y="60" width="24" height="10" fill="#f472b6" />

          {/* Stylish Gold Chain with Star Pendant */}
          <path d="M33,63 Q50,78 67,63" fill="none" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round" />
          <polygon points="50,71 52,75 57,75 53,78 55,83 50,80 45,83 47,78 43,75 48,75" fill="url(#goldGrad)" stroke="#b45309" strokeWidth="0.5" />

          {/* Left & Right Blocky Arms */}
          <rect x="10" y="60" width="10" height="26" rx="2" fill="url(#girlJacket)" stroke="#0f172a" strokeWidth="1.5" />
          <rect x="80" y="60" width="10" height="26" rx="2" fill="url(#girlJacket)" stroke="#0f172a" strokeWidth="1.5" />
        </svg>
      );
    }
  };

  const getSubjectBadge = () => {
    switch (subjectId) {
      case 'pancasila':
        return { title: 'Bintang Pancasila', icon: '🌟', bg: 'from-amber-400 to-yellow-600' };
      case 'matematika':
        return { title: 'Master Logika', icon: '📐', bg: 'from-blue-500 to-indigo-700' };
      case 'bahasa_indonesia':
        return { title: 'Pujangga Sastra', icon: '✍️', bg: 'from-purple-500 to-pink-700' };
      default:
        return { title: 'Juara Budaya', icon: '🏆', bg: 'from-emerald-400 to-teal-700' };
    }
  };

  const badgeInfo = getSubjectBadge();

  const getSpeechText = () => {
    if (!isStarted) return 'Ketuk "Mulai Game" untuk berpetualang!';
    if (unlockedLevelId === 1) return `Halo ${playerName}! Mari kita selesaikan tantangan di Pos 1!`;
    if (unlockedLevelId <= 10) return `Hebat! Pos ${unlockedLevelId - 1} selesai. Sekarang, meluncur ke Pos ${unlockedLevelId}!`;
    return 'Luar biasa! Seluruh pos berhasil ditaklukkan! Ambil sertifikatmu!';
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-sky-50 border-8 border-amber-500 rounded-[2.5rem] overflow-hidden shadow-xl ring-4 ring-amber-300/30">
      
      {/* MAGICAL BRIGHT HUD OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-slate-200/40 pointer-events-none z-10" />

      {/* Map Header HUD - Clean Bright Aesthetic */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-gradient-to-b from-white via-sky-50 to-white border-b-4 border-slate-200 gap-4 relative z-20">
        
        {/* Student Profile Plate */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-amber-500 border-4 border-amber-600 rounded-full flex items-center justify-center text-2xl shadow-xl animate-bounce">
            🎒
          </div>
          <div>
            <h3 className="text-base font-black text-slate-800 tracking-wider font-display uppercase">
              {playerName || 'Petualang SDN Remen 2'}
            </h3>
            <p className="text-[10px] text-amber-700 font-extrabold tracking-wider uppercase flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>UPT SD Negeri Remen 2</span>
            </p>
          </div>
        </div>

        {/* Progress & Achievements Row */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {/* Special Achievement Badge */}
          {unlockedLevelId > 10 && (
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              className={`flex items-center gap-1.5 px-3.5 py-1 bg-gradient-to-r ${badgeInfo.bg} border-2 border-yellow-300 rounded-full shadow-lg text-white font-black text-xs uppercase tracking-wide`}
            >
              <span className="text-sm">{badgeInfo.icon}</span>
              <span>{badgeInfo.title}</span>
            </motion.div>
          )}

          {/* Level Progress Indicator */}
          <div className="px-3.5 py-1.5 bg-slate-100 border border-slate-200 rounded-2xl text-xs text-amber-900 font-bold shadow-inner">
            <span className="text-amber-700">Misi: </span>
            <span className="font-extrabold text-amber-800">
              {Math.min(unlockedLevelId - 1, 10)} / 10 Pos Takluk
            </span>
          </div>

          {/* Golden Coin Points HUD */}
          <div className="px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 border-2 border-white rounded-full text-xs text-slate-950 font-black shadow-md flex items-center gap-1.5 transform hover:scale-105 transition">
            <span className="text-sm animate-spin">🪙</span>
            <span>
              {Object.values(levelScores).reduce((a, b) => (a as number) + (b as number), 0)} POIN
            </span>
          </div>
        </div>
      </div>

      {/* Main Map Interactive Area */}
      <div 
        id="adventure-map-canvas"
        className="relative aspect-[16/9] w-full bg-sky-100 overflow-hidden select-none border-t-2 border-slate-200"
      >
        {/* Animated/Filtered Cartoon Island Map Image Background */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `url('https://img.magnific.com/premium-vector/cartoon-drawing-game-called-island_1079930-7282.jpg?semt=ais_hybrid&w=740&q=80')`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(1.05) contrast(1.0) saturate(1.15)'
          }}
        />
        {/* Transparent overlay for clean look */}
        <div className="absolute inset-0 bg-white/5 pointer-events-none z-0" />

        {/* FLOATING SAILING BOAT OVERLAY */}
        <div className="absolute bottom-[12%] left-[3%] w-16 h-16 pointer-events-none z-10 boat-rock">
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
            <path d="M15,60 C30,60 40,65 50,60 C60,55 70,60 85,60 L78,80 C50,85 30,85 20,80 Z" fill="#78350f" />
            <path d="M50,15 L50,55 L25,45 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <path d="M54,20 L54,55 L75,48 Z" fill="#f8fafc" />
            <path d="M50,10 L50,15 L62,12.5 Z" fill="#ef4444" />
            <line x1="50" y1="10" x2="50" y2="58" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
            <path d="M10,78 Q50,84 90,78" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          </svg>
        </div>

        {/* COMPASS ROSE ORNAMENT */}
        <div className="absolute bottom-4 left-4 w-16 h-16 opacity-85 bg-slate-950/60 border-2 border-slate-800 rounded-full flex items-center justify-center p-1.5 filter drop-shadow-md z-10 slow-spin">
          <Compass className="w-full h-full text-yellow-400" />
        </div>

        {/* ACTIVE SVG OVERLAY PATH WITH DASHED ANIMATED TRAIL */}
        <svg viewBox="0 0 800 480" className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Underlay glowing solid track */}
          <path
            d={getSvgPath()}
            fill="none"
            stroke="#fef08a"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.5"
            filter="url(#glow)"
          />
          {/* Overlay interactive dashed trace */}
          <path
            d={getSvgPath()}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="5"
            strokeDasharray="10,12"
            strokeLinecap="round"
            className="path-dash"
          />
        </svg>

        {/* Dynamic Styles injected for map animations */}
        <style>{`
          .cloud-drift {
            animation: drift 25s linear infinite;
          }
          .boat-rock {
            animation: rock-boat 4s ease-in-out infinite;
          }
          .sea-rock {
            animation: rock-boat 3s ease-in-out infinite alternate;
          }
          .slow-spin {
            animation: spin 120s linear infinite;
          }
          .path-dash {
            animation: dash 18s linear infinite;
          }
          @keyframes drift {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          @keyframes rock-boat {
            0%, 100% { transform: translateY(0) rotate(-3deg); }
            50% { transform: translateY(-6px) rotate(4deg); }
          }
          @keyframes pulse-ring {
            0% { transform: scale(0.9); opacity: 0.9; }
            50% { transform: scale(1.3); opacity: 0.3; }
            100% { transform: scale(0.9); opacity: 0.9; }
          }
          @keyframes float-speech {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          @keyframes dash {
            to {
              stroke-dashoffset: -300;
            }
          }
        `}</style>

        {/* Starting Point Marker on Beach */}
        <div
          style={{ left: `${(points[0].x / 800) * 100}%`, top: `${(points[0].y / 480) * 100}%`, transform: 'translate(-50%, -50%)' }}
          className="absolute w-9 h-9 rounded-full bg-gradient-to-br from-amber-600 to-amber-950 border-2 border-yellow-400 flex items-center justify-center text-xs shadow-lg font-black z-10 hover:scale-110 transition"
          title="Mulai Perjalanan"
        >
          🚩
        </div>

        {/* Interactive 3D Level Checkpoints (Pos 1 to 10) */}
        {levels.map((lvl) => {
          const pt = getPointForLevel(lvl.id);
          const isLocked = lvl.id > unlockedLevelId;
          const isCompleted = lvl.id < unlockedLevelId;
          const isActive = lvl.id === unlockedLevelId;
          const score = levelScores[lvl.id] || 0;
          const challenge = pt?.challenge;

          return (
            <div
              key={lvl.id}
              style={{ left: `${(pt.x / 800) * 100}%`, top: `${(pt.y / 480) * 100}%`, transform: 'translate(-50%, -50%)' }}
              className="absolute z-15 w-12 h-12 flex items-center justify-center"
            >
              {/* Special Challenge Effects behind the button */}
              {isStarted && !isLocked && challenge && (
                <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
                  {challenge === 'Tornado Putar' && (
                    <div className="absolute w-16 h-16 rounded-full border-2 border-dashed border-cyan-400 animate-[spin_4s_linear_infinite] opacity-80" />
                  )}
                  {challenge === 'Gua Gelap' && (
                    <div className="absolute w-14 h-14 rounded-full bg-indigo-950/30 border border-indigo-500 animate-ping opacity-60" />
                  )}
                  {challenge === 'Jembatan Goyang' && (
                    <div className="absolute w-16 h-16 rounded-full border-2 border-dotted border-rose-500 animate-pulse opacity-70" />
                  )}
                  {challenge === 'Pusaran Angin' && (
                    <div className="absolute w-16 h-16 rounded-full border-2 border-indigo-400 animate-[spin_2s_linear_infinite] opacity-80" />
                  )}
                  {challenge === 'Raja Tantangan' && (
                    <div className="absolute w-20 h-20 rounded-full border-2 border-amber-500 animate-ping opacity-75" />
                  )}
                </div>
              )}

              {/* Pulsing visual glow for active levels */}
              {isActive && isStarted && (
                <div 
                  className="absolute inset-0 rounded-full bg-yellow-400 opacity-60 pointer-events-none animate-pulse"
                  style={{ transform: 'scale(1.2)' }}
                />
              )}

              {/* 3D Physical Game Button Design */}
              <motion.button
                whileHover={{ scale: isLocked ? 1 : 1.15 }}
                whileTap={{ scale: isLocked ? 1 : 0.92 }}
                onClick={() => handleLevelClick(lvl.id, isLocked && isStarted)}
                className={`w-11 h-11 rounded-full flex flex-col items-center justify-center font-black text-sm border-2 shadow-lg transition-all duration-300 relative
                  ${!isStarted ? 'bg-gradient-to-b from-blue-50 to-blue-200 text-blue-400 border-blue-200 cursor-not-allowed opacity-90 shadow-[0_4px_0_#1d4ed8]' : 
                    isLocked ? 'bg-gradient-to-b from-blue-400 to-blue-700 text-blue-100 border-blue-900 shadow-[0_4px_0_#1e3a8a] hover:brightness-110' :
                    isCompleted ? 'bg-gradient-to-b from-emerald-400 to-emerald-700 text-white border-emerald-900 shadow-[0_4px_0_#064e3b] hover:brightness-110' :
                    'bg-gradient-to-b from-yellow-300 to-amber-500 text-amber-950 border-yellow-200 shadow-[0_4px_0_#92400e] hover:brightness-110'
                  }
                  ${isStarted && !isLocked && challenge === 'Jembatan Goyang' ? 'animate-[bounce_2s_infinite]' : ''}`}
                disabled={!isStarted && lvl.id > 1}
              >
                {/* Visual Status Content */}
                {!isStarted ? (
                  <Lock className="w-4 h-4 text-blue-400" />
                ) : isLocked ? (
                  <Lock className="w-4 h-4 text-blue-200/90" />
                ) : isCompleted ? (
                  <Star className="w-5 h-5 fill-white text-emerald-200" />
                ) : (
                  <Play className="w-4 h-4 fill-amber-950 stroke-none ml-0.5" />
                )}

                {/* Wooden Hanging Tag Banner */}
                <span className="absolute -top-6 bg-white text-[10px] text-amber-700 font-extrabold px-1.5 py-0.5 rounded-md border-2 border-slate-200 whitespace-nowrap shadow-md uppercase tracking-wider">
                  Pos {lvl.id}
                </span>

                {/* Special Challenge Badge at bottom */}
                {isStarted && !isLocked && challenge && (
                  <span className="absolute -bottom-6 bg-red-600 text-white text-[8px] font-black px-1 py-0.5 rounded border border-white whitespace-nowrap shadow animate-bounce">
                    🔥 {challenge}
                  </span>
                )}

                {/* Golden Star rating underneath completed checkpoints */}
                {isCompleted && score >= 60 && !challenge && (
                  <span className="absolute -bottom-2 bg-yellow-400 text-amber-950 text-[9px] font-black px-1.5 rounded-full border border-white shadow-md flex gap-0.5 transform scale-90">
                    {'★'.repeat(Math.ceil(score / 34))}
                  </span>
                )}
              </motion.button>
            </div>
          );
        })}

        {/* Dynamic Floating Character Avatar (Siswa SD - Roblox Gaming Edition) */}
        {gender && (
          <motion.div
            id="character-avatar-container"
            animate={{
              left: `${(activePoint.x / 800) * 100}%`,
              top: `${((activePoint.y - 54) / 480) * 100}%`,
              y: [0, -8, 0],
            }}
            style={{ x: '-135%' }}
            transition={{
              left: { type: 'tween', duration: 1.2, ease: 'easeInOut' },
              top: { type: 'tween', duration: 1.2, ease: 'easeInOut' },
              y: { repeat: Infinity, duration: 1.6, ease: 'easeInOut' }
            }}
            className="absolute z-30 w-12 h-12 filter drop-shadow-[0_6px_8px_rgba(0,0,0,0.5)] pointer-events-none"
            title={`${playerName} sedang berada di sini!`}
          >
            {renderAvatar(gender, gender === 'boy' ? boyColor : girlColor)}
            
            {/* Dynamic Interactive Speech Bubble floating above character */}
            <div 
              className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-slate-800 text-[9px] font-black px-2.5 py-1.5 rounded-xl border border-slate-200 whitespace-nowrap shadow-lg flex items-center gap-1 opacity-95"
              style={{ animation: 'float-speech 3s infinite ease-in-out' }}
            >
              <span>💬</span>
              <span>{isStarted ? `Ayo ${playerName.split(' ')[0]}!` : 'Siap Mulai!'}</span>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-slate-200 rotate-45" />
            </div>

            {/* Glowing Red Arrow Marker */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-red-500 filter drop-shadow animate-bounce" />
          </motion.div>
        )}

        {/* Render Remote Players */}
        {isStarted && remotePlayers.map((player) => {
          const pt = points[Math.min(player.level || 0, 10)];
          const colorMap: Record<string, string> = {
            red: 'bg-red-400',
            blue: 'bg-blue-400',
            green: 'bg-green-400',
            yellow: 'bg-yellow-400'
          };
          const colorClass = colorMap[player.color] || 'bg-slate-400';
          
          return (
             <div 
              key={player.id}
              className="absolute z-20 w-10 h-10 transition-all duration-1000"
              style={{ left: `${(pt.x / 800) * 100}%`, top: `${((pt.y - 40) / 480) * 100}%` }}
             >
                <div className={`w-8 h-8 rounded-full ${colorClass} border border-white opacity-80`} />
                <div className="text-[9px] font-black text-center bg-black/50 text-white rounded px-1">{player.name}</div>
             </div>
          );
        })}

        {/* Large Play Wooden Board Popup before the student enters */}
        {!isStarted && (
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center z-40">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-4 border-amber-500 p-8 rounded-3xl max-w-sm mx-4 shadow-2xl shadow-black/80 relative"
            >
              {/* Traditional Mini Flags ornament */}
              <div className="absolute -top-4 inset-x-0 flex justify-center gap-1.5">
                <span className="text-xl animate-bounce">🇲🇨</span>
                <span className="text-xl animate-bounce delay-100">🎒</span>
                <span className="text-xl animate-bounce delay-200">🇲🇨</span>
              </div>

              <h4 className="text-2xl font-black text-yellow-300 mb-2 font-display uppercase tracking-wider drop-shadow-md">
                Petualangan Dimulai!
              </h4>
              <p className="text-xs text-amber-100 leading-relaxed mb-6 font-medium">
                Selamat datang di UPT SD Negeri Remen 2! Jawab minimal <strong className="text-yellow-300">3 soal benar (60 poin)</strong> di setiap pos untuk membuka pos petualangan berikutnya. Kumpulkan bintang emas dan capai sertifikat kelulusan!
              </p>

              <motion.button
                whileHover={{ scale: 1.1, rotate: [-1, 1, -1] }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartClick}
                className="px-8 py-3.5 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 text-amber-950 font-black text-lg rounded-2xl shadow-[0_6px_0_#92400e] hover:shadow-[0_4px_0_#92400e] border-2 border-white tracking-widest uppercase transition-all"
              >
                🎮 Mulai Berpetualang
              </motion.button>
            </motion.div>
          </div>
        )}
      </div>

      {/* Map Bottom Footer HUD - Dark Guide bar */}
      <div className="px-6 py-4 bg-gradient-to-b from-slate-900 to-slate-950 border-t-4 border-slate-950 text-xs text-amber-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 font-semibold relative z-20 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]">
        
        {/* Dynamic Speech Text */}
        <div className="flex items-center gap-2 justify-center">
          <span className="text-base animate-pulse">📢</span>
          <span className="drop-shadow text-amber-100">
            {getSpeechText()}
          </span>
        </div>

        {/* Legend/Map Indicators */}
        <div className="flex gap-3 text-[10px] text-amber-400/90 tracking-wide uppercase font-black">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white shadow-sm" /> Selesai
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-white shadow-sm animate-pulse" /> Aktif
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 border border-white shadow-sm" /> Terkunci
          </span>
        </div>
      </div>
    </div>
  );
}
