/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Timer, CheckCircle, XCircle, ChevronRight, RefreshCw, MapPin, Award } from 'lucide-react';
import { Level, Question } from '../types';
import { audio } from './AudioEngine';

interface QuizModalProps {
  level: Level;
  levelId: number;
  onClose: () => void;
  onCompleteLevel: (score: number) => void;
}

export function getLevelSettings(levelId: number) {
  switch (levelId) {
    case 2: // Tornado Putar
      return { timer: 25, passingCorrectCount: 3, challengeName: 'Tornado Putar (Waktu 25 dtk!)' };
    case 4: // Gua Gelap
      return { timer: 20, passingCorrectCount: 3, challengeName: 'Gua Gelap (Waktu 20 dtk!)' };
    case 6: // Jembatan Goyang
      return { timer: 25, passingCorrectCount: 3, challengeName: 'Jembatan Goyang (Waktu 25 dtk!)' };
    case 8: // Pusaran Angin
      return { timer: 15, passingCorrectCount: 3, challengeName: 'Pusaran Angin (Waktu 15 dtk!)' };
    case 10: // Raja Tantangan
      return { timer: 15, passingCorrectCount: 4, challengeName: 'Raja Tantangan (Waktu 15 dtk & Minimal 4 Benar!)' };
    default:
      return { timer: 30, passingCorrectCount: 3, challengeName: null };
  }
}

export default function QuizModal({
  level,
  levelId,
  onClose,
  onCompleteLevel
}: QuizModalProps) {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const settings = getLevelSettings(levelId);
  const maxTime = settings.timer;
  const [timeLeft, setTimeLeft] = useState(maxTime);
  const [correctCount, setCorrectCount] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  
  // Shuffled questions state
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (level && level.questions) {
      const shuffled = [...level.questions].sort(() => Math.random() - 0.5);
      setShuffledQuestions(shuffled);
    }
  }, [level]);

  const questions = shuffledQuestions.length > 0 ? shuffledQuestions : level.questions;
  const currentQuestion = questions[currentQIndex] || level.questions[currentQIndex];

  // Custom multi-variant state variables
  const [selectedComplex, setSelectedComplex] = useState<number[]>([]);
  const [matchingAnswers, setMatchingAnswers] = useState<Record<number, number>>({});
  const [dragOrder, setDragOrder] = useState<number[]>([]);
  
  // Confetti/Star emission states
  const [stars, setStars] = useState<{ id: number; x: number; y: number }[]>([]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-reset state for new questions
  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
    setSelectedComplex([]);
    setMatchingAnswers({});
    if (currentQuestion && currentQuestion.type === 'drag_drop' && currentQuestion.dragItems) {
      setDragOrder(currentQuestion.dragItems.map((_, i) => i));
    } else {
      setDragOrder([]);
    }
  }, [currentQIndex, currentQuestion]);

  // Star emission generator for success visual effect
  const emitStars = () => {
    const newStars = Array.from({ length: 12 }).map((_, i) => ({
      id: Math.random(),
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 150 - 50,
    }));
    setStars(newStars);
    setTimeout(() => setStars([]), 1500);
  };

  // Timer logic
  useEffect(() => {
    if (showSummary || isAnswered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    setTimeLeft(maxTime);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          // Timeout triggers auto-advance / wrong answer
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentQIndex, isAnswered, showSummary, maxTime]);

  const handleTimeout = () => {
    audio.playWrong();
    setSelectedOption(-1); // Indicator for timeout
    setIsAnswered(true);
  };


  const handleOptionClick = (optionIdx: number) => {
    if (isAnswered) return;

    setSelectedOption(optionIdx);
    setIsAnswered(true);

    const isCorrect = optionIdx === currentQuestion.answer;
    if (isCorrect) {
      audio.playCorrect();
      setCorrectCount((prev) => prev + 1);
      emitStars();
    } else {
      audio.playWrong();
    }
  };

  // Handler for Pilihan Ganda Kompleks
  const handleComplexToggle = (idx: number) => {
    if (isAnswered) return;
    audio.playClick();
    setSelectedComplex(prev => 
      prev.includes(idx) ? prev.filter(v => v !== idx) : [...prev, idx]
    );
  };

  const handleSubmitComplex = () => {
    if (isAnswered) return;
    setIsAnswered(true);

    const correctList = currentQuestion.correctAnswers || [];
    const isCorrect = selectedComplex.length === correctList.length &&
      selectedComplex.every(val => correctList.includes(val));

    if (isCorrect) {
      audio.playCorrect();
      setCorrectCount((prev) => prev + 1);
      emitStars();
    } else {
      audio.playWrong();
    }
  };

  // Handler for Menjodohkan (matching)
  const handleMatchingChange = (leftIdx: number, rightIdx: number) => {
    if (isAnswered) return;
    audio.playClick();
    setMatchingAnswers(prev => ({
      ...prev,
      [leftIdx]: rightIdx
    }));
  };

  const handleSubmitMatching = () => {
    if (isAnswered) return;
    setIsAnswered(true);

    const pairs = currentQuestion.matchingPairs || {};
    const isCorrect = !!currentQuestion.matchingLeft?.every((_, idx) => 
      matchingAnswers[idx] === pairs[idx]
    );

    if (isCorrect) {
      audio.playCorrect();
      setCorrectCount((prev) => prev + 1);
      emitStars();
    } else {
      audio.playWrong();
    }
  };

  // Handler for Drag & Drop / Ordering
  const handleDragShift = (idx: number, direction: 'up' | 'down') => {
    console.log('handleDragShift called:', idx, direction);
    if (isAnswered) return;
    audio.resume();
    audio.playClick();
    const newOrder = [...dragOrder];
    if (direction === 'up' && idx > 0) {
      const temp = newOrder[idx];
      newOrder[idx] = newOrder[idx - 1];
      newOrder[idx - 1] = temp;
    } else if (direction === 'down' && idx < dragOrder.length - 1) {
      const temp = newOrder[idx];
      newOrder[idx] = newOrder[idx + 1];
      newOrder[idx + 1] = temp;
    }
    setDragOrder(newOrder);
  };

  const handleSubmitDragDrop = () => {
    if (isAnswered) return;
    setIsAnswered(true);

    const correctOrder = currentQuestion.correctOrder || [];
    const isCorrect = dragOrder.length === correctOrder.length &&
      dragOrder.every((val, idx) => val === correctOrder[idx]);

    if (isCorrect) {
      audio.playCorrect();
      setCorrectCount((prev) => prev + 1);
      emitStars();
    } else {
      audio.playWrong();
    }
  };

  const handleNextQuestion = () => {
    audio.playClick();
    setSelectedOption(null);
    setIsAnswered(false);

    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
    } else {
      setShowSummary(true);
      const passed = correctCount >= settings.passingCorrectCount;
      if (passed) {
        audio.playLevelUp();
      } else {
        audio.playWrong();
      }
    }
  };

  const handleFinishLevel = () => {
    const finalScore = correctCount * 20;
    onCompleteLevel(finalScore);
  };

  const handleRetryLevel = () => {
    audio.playClick();
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setSelectedComplex([]);
    setMatchingAnswers({});
    setDragOrder([]);
    setCorrectCount(0);
    setShowSummary(false);
    setTimeLeft(maxTime);
  };

  const progressPercent = (timeLeft / maxTime) * 100;

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4 landscape:p-2 sm:p-4">
      <AnimatePresence mode="wait">
        {!showSummary ? (
          <motion.div
            key="quiz"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -30 }}
            className="w-full max-w-7xl h-[95vh] landscape:h-[96vh] md:h-auto md:aspect-[16/9] md:min-h-[680px] md:max-h-[85vh] bg-slate-900 border-4 border-amber-500/80 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col"
          >
            {/* Star effect layers */}
            {stars.map((star) => (
              <motion.div
                key={star.id}
                initial={{ scale: 0.2, x: 0, y: 0, opacity: 1 }}
                animate={{ scale: [1, 1.5, 0], x: star.x, y: star.y, opacity: [1, 1, 0] }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl z-40"
              >
                ✨
              </motion.div>
            ))}

            {/* Quiz Header */}
            <div className="bg-gradient-to-r from-blue-950 to-slate-900 p-3 landscape:py-1.5 landscape:px-3 sm:p-5 border-b-2 border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 landscape:w-7 landscape:h-7 bg-amber-500 rounded-xl landscape:rounded-lg flex items-center justify-center text-xl landscape:text-sm shadow-inner">
                  🎯
                </div>
                <div>
                  <h4 className="text-sm landscape:text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {level.title}
                  </h4>
                  <p className="text-xs landscape:text-[10px] text-slate-300 font-medium">{level.topic}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white text-sm landscape:text-xs bg-slate-800 px-3 py-1 landscape:py-0.5 rounded-lg border border-slate-700 transition"
              >
                Kembali ke Peta
              </button>
            </div>

            {/* Timer & Question Progress bar */}
            <div className="h-1.5 w-full bg-slate-800 relative shrink-0">
              <div
                style={{ width: `${progressPercent}%` }}
                className={`h-full transition-all duration-1000 ${
                  timeLeft > 10 ? 'bg-emerald-500' : 'bg-red-500 animate-pulse'
                }`}
              />
            </div>

            {/* Quiz Body with Landscape 16:9 2-column structure */}
            <div className="flex-1 min-h-0 p-3 landscape:p-2.5 sm:p-6 overflow-y-auto grid grid-cols-1 landscape:grid-cols-2 sm:grid-cols-2 gap-3 landscape:gap-3 sm:gap-6 items-start">
              
              {/* Left Column: Metadata, Question Text & Explanation */}
              <div className="space-y-2 landscape:space-y-1.5 sm:space-y-4">
                {/* Question metadata */}
                <div className="flex justify-between items-center">
                  <span className="text-xs landscape:text-[10px] font-extrabold px-3 py-1 bg-blue-900/40 text-blue-300 border border-blue-800/50 rounded-full">
                    SOAL {currentQIndex + 1} DARI {questions.length}
                  </span>
                  
                  {/* Timer Box */}
                  <div className={`flex items-center gap-1 px-3 py-1 landscape:px-2 landscape:py-0.5 rounded-full border font-bold text-xs landscape:text-[10px] ${
                    timeLeft > 10 ? 'bg-slate-800 text-emerald-400 border-slate-700' : 'bg-red-950/80 text-red-300 border-red-800'
                  }`}>
                    <Timer className="w-4 h-4 landscape:w-3.5 landscape:h-3.5" />
                    <span>{timeLeft} DETIK</span>
                  </div>
                </div>

                {/* Question Text */}
                <h3 className="text-base landscape:text-xs sm:text-lg font-extrabold text-white leading-relaxed bg-slate-950/30 p-4 landscape:p-2.5 rounded-2xl landscape:rounded-xl border border-slate-800/40 shadow-inner">
                  {currentQuestion.question}
                </h3>

                {/* Instant feedback and pedagogical explanation */}
              </div>

              {/* Right Column: Options & Inputs Stack */}
              <div className="space-y-2.5 landscape:space-y-2 sm:space-y-4">
                {(!currentQuestion.type || currentQuestion.type === 'pilihan_ganda') && (
                  <div className="space-y-2 landscape:space-y-1.5 sm:space-y-2.5">
                    {currentQuestion.options.map((option, idx) => {
                      const isSelected = selectedOption === idx;
                      const isCorrectAnswer = currentQuestion.answer === idx;
                      const showSuccess = isAnswered && isCorrectAnswer;
                      const showDanger = isAnswered && isSelected && !isCorrectAnswer;

                      return (
                        <motion.button
                          key={idx}
                          whileHover={!isAnswered ? { scale: 1.01, x: 4 } : {}}
                          whileTap={!isAnswered ? { scale: 0.99 } : {}}
                          onClick={() => handleOptionClick(idx)}
                          disabled={isAnswered}
                          className={`w-full text-left p-2.5 landscape:p-1.5 sm:p-3.5 rounded-xl landscape:rounded-xl sm:rounded-2xl border-2 font-semibold text-[11px] landscape:text-[10px] sm:text-xs transition-all flex items-center justify-between
                            ${!isAnswered 
                              ? 'bg-slate-800/50 text-slate-200 border-slate-700 hover:bg-slate-800 hover:border-amber-400/60' 
                              : showSuccess
                              ? 'bg-emerald-950/60 text-emerald-200 border-emerald-500 shadow-md shadow-emerald-950/50'
                              : showDanger
                              ? 'bg-red-950/60 text-red-200 border-red-500 shadow-md shadow-red-950/50'
                              : 'bg-slate-900/40 text-slate-500 border-slate-800'
                            }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className={`w-6 h-6 landscape:w-5 landscape:h-5 rounded-full flex items-center justify-center font-bold text-[10px] landscape:text-[9px] border ${
                              !isAnswered 
                                ? 'bg-slate-700 text-slate-200 border-slate-600' 
                                : showSuccess
                                ? 'bg-emerald-500 text-white border-white'
                                : showDanger
                                ? 'bg-red-500 text-white border-white'
                                : 'bg-slate-800 text-slate-600 border-slate-700'
                            }`}>
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span>{option}</span>
                          </div>

                          {/* Right icons for status */}
                          {isAnswered && (
                            <div>
                              {isCorrectAnswer && <CheckCircle className="w-4 h-4 text-emerald-400" />}
                              {isSelected && !isCorrectAnswer && <XCircle className="w-4 h-4 text-red-400" />}
                            </div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                )}

                {currentQuestion.type === 'pilihan_ganda_kompleks' && (
                  <div className="space-y-3 landscape:space-y-1">
                    <p className="text-[10px] landscape:text-[9px] text-amber-400 font-extrabold uppercase tracking-wider mb-1">
                      ⚠️ PILIH SEMUA JAWABAN YANG BENAR (BISA LEBIH DARI SATU):
                    </p>
                    <div className="space-y-2 landscape:space-y-1">
                      {currentQuestion.options.map((option, idx) => {
                        const isSelected = selectedComplex.includes(idx);
                        const isCorrectChoice = currentQuestion.correctAnswers?.includes(idx);
                        const showSuccess = isAnswered && isCorrectChoice;
                        const showDanger = isAnswered && isSelected && !isCorrectChoice;

                        return (
                          <motion.button
                            key={idx}
                            whileHover={!isAnswered ? { scale: 1.01, x: 4 } : {}}
                            whileTap={!isAnswered ? { scale: 0.99 } : {}}
                            onClick={() => handleComplexToggle(idx)}
                            disabled={isAnswered}
                            className={`w-full text-left p-2.5 landscape:p-1.5 sm:p-3.5 rounded-xl landscape:rounded-xl sm:rounded-2xl border-2 font-semibold text-[11px] landscape:text-[10px] sm:text-xs transition-all flex items-center justify-between
                              ${!!isAnswered 
                                ? showSuccess
                                  ? 'bg-emerald-950/60 text-emerald-200 border-emerald-500'
                                  : showDanger
                                  ? 'bg-red-950/60 text-red-200 border-red-500'
                                  : 'bg-slate-900/40 text-slate-500 border-slate-800'
                                : isSelected
                                ? 'bg-blue-950/40 border-blue-400 text-blue-200 shadow'
                                : 'bg-slate-800/50 text-slate-200 border-slate-700 hover:bg-slate-800 hover:border-blue-400/50' 
                              }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <input
                                type="checkbox"
                                checked={isSelected}
                                disabled={isAnswered}
                                readOnly
                                className="w-3.5 h-3.5 rounded border-slate-600 text-blue-500 focus:ring-blue-500 bg-slate-700 pointer-events-none"
                              />
                              <span>{option}</span>
                            </div>

                            {isAnswered && (
                              <div>
                                {isCorrectChoice && <CheckCircle className="w-4 h-4 text-emerald-400" />}
                                {isSelected && !isCorrectChoice && <XCircle className="w-4 h-4 text-red-400" />}
                              </div>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>

                    {!isAnswered && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSubmitComplex}
                        disabled={selectedComplex.length === 0}
                        className="w-full py-3 landscape:py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:opacity-40 disabled:pointer-events-none text-white font-black text-xs rounded-xl landscape:rounded-lg shadow-lg uppercase tracking-wider transition-all"
                      >
                        Kunci Jawaban ({selectedComplex.length} Dipilih)
                      </motion.button>
                    )}
                  </div>
                )}

                {currentQuestion.type === 'benar_salah' && (
                  <div className="grid grid-cols-2 gap-4">
                    {currentQuestion.options.map((option, idx) => {
                      const isSelected = selectedOption === idx;
                      const isCorrectAnswer = currentQuestion.answer === idx;
                      const showSuccess = isAnswered && isCorrectAnswer;
                      const showDanger = isAnswered && isSelected && !isCorrectAnswer;

                      const isBenar = idx === 0;

                      return (
                        <motion.button
                          key={idx}
                          whileHover={!isAnswered ? { scale: 1.03, y: -4 } : {}}
                          whileTap={!isAnswered ? { scale: 0.97 } : {}}
                          onClick={() => handleOptionClick(idx)}
                          disabled={isAnswered}
                          className={`h-20 landscape:h-11 sm:h-32 rounded-2xl landscape:rounded-xl border-4 font-black text-sm landscape:text-[10px] sm:text-base transition-all flex flex-col items-center justify-center gap-1.5 landscape:gap-0.5 sm:gap-2.5 relative
                            ${!isAnswered 
                              ? isBenar
                                ? 'bg-emerald-950/30 text-emerald-300 border-emerald-500/40 hover:bg-emerald-900/40 hover:border-emerald-400'
                                : 'bg-rose-950/30 text-rose-300 border-rose-500/40 hover:bg-rose-900/40 hover:border-rose-400'
                              : showSuccess
                              ? 'bg-emerald-900 text-emerald-200 border-emerald-400 shadow-lg shadow-emerald-950/50'
                              : showDanger
                              ? 'bg-red-900 text-red-200 border-red-400 shadow-lg shadow-red-950/50'
                              : 'bg-slate-900/40 text-slate-600 border-slate-800 opacity-30'
                            }`}
                        >
                          <span className="text-2xl landscape:text-lg">
                            {isBenar ? '👍' : '👎'}
                          </span>
                          <span className="uppercase tracking-widest">{option}</span>
                          
                          {isAnswered && (
                            <div className="absolute top-2.5 right-2.5">
                              {isCorrectAnswer && <CheckCircle className="w-5 h-5 text-emerald-300 fill-emerald-950" />}
                              {isSelected && !isCorrectAnswer && <XCircle className="w-5 h-5 text-red-300 fill-red-950" />}
                            </div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                )}

                {currentQuestion.type === 'menjodohkan' && (
                  <div className="space-y-3 landscape:space-y-1.5">
                    <p className="text-[10px] landscape:text-[9px] text-amber-400 font-extrabold uppercase tracking-wider mb-1">
                      🔗 JODOHKAN SETIAP ITEM DI KIRI DENGAN PASANGANNYA DI KANAN:
                    </p>
                    <div className="bg-slate-950/30 border border-slate-800 rounded-2xl landscape:rounded-xl p-3 landscape:p-1.5 space-y-2.5 landscape:space-y-1">
                      {currentQuestion.matchingLeft?.map((leftText, leftIdx) => {
                        const userVal = matchingAnswers[leftIdx];
                        const correctVal = currentQuestion.matchingPairs?.[leftIdx];
                        const isRowCorrect = isAnswered && userVal === correctVal;

                        return (
                          <div key={leftIdx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 landscape:gap-1 p-2 landscape:p-1 bg-slate-900/60 rounded-xl border border-slate-850">
                            <div className="flex items-center gap-2">
                              <span className="w-5.5 h-5.5 rounded bg-amber-500/20 text-amber-400 font-black text-[10px] flex items-center justify-center border border-amber-500/30">
                                {leftIdx + 1}
                              </span>
                              <span className="text-[11px] landscape:text-[10px] font-bold text-slate-100">{leftText}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-slate-500 font-bold hidden sm:inline text-xs">➔</span>
                              <div className="flex-1 sm:flex-none">
                                <select
                                  value={userVal !== undefined ? userVal : ""}
                                  disabled={isAnswered}
                                  onChange={(e) => handleMatchingChange(leftIdx, parseInt(e.target.value))}
                                  className={`w-full sm:w-40 bg-slate-850 border-2 rounded-lg px-2 py-1 landscape:py-0.5 text-[11px] landscape:text-[10px] font-extrabold focus:outline-none transition-all
                                    ${!isAnswered 
                                      ? 'border-slate-700 text-slate-200 focus:border-amber-400' 
                                      : isRowCorrect
                                      ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
                                      : 'border-red-500 bg-red-950/40 text-red-300'
                                    }`}
                                >
                                  <option value="" disabled>Pilih Pasangan...</option>
                                  {currentQuestion.matchingRight?.map((rightText, rightIdx) => (
                                    <option key={rightIdx} value={rightIdx}>{rightText}</option>
                                  ))}
                                </select>
                              </div>

                              {isAnswered && (
                                <div className="ml-1 shrink-0">
                                  {isRowCorrect ? (
                                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                                  ) : (
                                    <div className="flex items-center gap-1">
                                      <XCircle className="w-4 h-4 text-red-400" />
                                      <span className="text-[9px] text-emerald-400 font-extrabold bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                                        Benar: {currentQuestion.matchingRight?.[correctVal!]}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {!isAnswered && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSubmitMatching}
                        disabled={Object.keys(matchingAnswers).length !== (currentQuestion.matchingLeft?.length || 0)}
                        className="w-full py-3 landscape:py-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 disabled:opacity-40 disabled:pointer-events-none text-slate-950 font-black text-xs rounded-xl landscape:rounded-lg shadow-lg uppercase tracking-wider transition-all"
                      >
                        Kunci Jawaban ({Object.keys(matchingAnswers).length} dari {currentQuestion.matchingLeft?.length} Dijodohkan)
                      </motion.button>
                    )}
                  </div>
                )}

                {currentQuestion.type === 'drag_drop' && (
                  <div className="space-y-3 landscape:space-y-1.5">
                    <p className="text-[10px] landscape:text-[9px] text-amber-400 font-extrabold uppercase tracking-wider mb-1">
                      ↕️ URUTKAN ITEM BERIKUT SECARA LOGIS:
                    </p>
                    <div className="space-y-2 landscape:space-y-1">
                      {dragOrder.map((itemOriginalIdx, pos) => {
                        const isCorrectPos = isAnswered && itemOriginalIdx === currentQuestion.correctOrder?.[pos];

                        return (
                          <motion.div
                            layout
                            key={itemOriginalIdx}
                            className={`p-2.5 landscape:p-1.5 rounded-xl landscape:rounded-lg border-2 transition-all flex items-center justify-between gap-2
                              ${!isAnswered 
                                ? 'bg-slate-800/60 border-slate-700 text-slate-200' 
                                : isCorrectPos
                                ? 'bg-emerald-950/50 border-emerald-500 text-emerald-200'
                                : 'bg-red-950/50 border-red-500 text-red-200'
                              }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className={`w-5.5 h-5.5 rounded-full font-black text-[9px] flex items-center justify-center border
                                ${!isAnswered 
                                  ? 'bg-slate-700 text-slate-300 border-slate-600' 
                                  : isCorrectPos
                                  ? 'bg-emerald-500 text-white border-white'
                                  : 'bg-red-500 text-white border-white'
                                }`}>
                                {pos + 1}
                              </span>
                              <span className="text-[11px] landscape:text-[10px] font-bold leading-relaxed">{currentQuestion.dragItems?.[itemOriginalIdx]}</span>
                            </div>

                            {/* Reordering actions */}
                            {!isAnswered ? (
                              <div className="flex gap-1">
                                <button
                                  type="button"
                                  disabled={pos === 0}
                                  onClick={() => handleDragShift(pos, 'up')}
                                  className="w-7 h-7 landscape:w-5.5 landscape:h-5.5 rounded bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center font-bold text-xs landscape:text-[10px] transition disabled:opacity-30 disabled:pointer-events-none"
                                  title="Pindahkan ke atas"
                                >
                                  ▲
                                </button>
                                <button
                                  type="button"
                                  disabled={pos === dragOrder.length - 1}
                                  onClick={() => handleDragShift(pos, 'down')}
                                  className="w-7 h-7 landscape:w-5.5 landscape:h-5.5 rounded bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center font-bold text-xs landscape:text-[10px] transition disabled:opacity-30 disabled:pointer-events-none"
                                  title="Pindahkan ke bawah"
                                >
                                  ▼
                                </button>
                              </div>
                            ) : (
                              <div className="shrink-0 ml-1">
                                {isCorrectPos ? (
                                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                                ) : (
                                  <div className="flex items-center gap-1">
                                    <XCircle className="w-4 h-4 text-red-400" />
                                    <span className="text-[9px] text-emerald-400 font-extrabold bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                                      Posisi Harusnya: {currentQuestion.correctOrder?.indexOf(itemOriginalIdx)! + 1}
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>

                    {!isAnswered && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSubmitDragDrop}
                        className="w-full py-3 landscape:py-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-black text-xs rounded-xl landscape:rounded-lg shadow-lg uppercase tracking-wider transition-all"
                      >
                        Kunci Jawaban & Cek Urutan
                      </motion.button>
                    )}
                  </div>
                )}
              </div>

                <div className="col-span-1 landscape:col-span-2 sm:col-span-2 w-full mt-4 landscape:mt-1.5">
                  <AnimatePresence>
                    {isAnswered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 landscape:p-2.5 bg-slate-850/95 rounded-2xl landscape:rounded-xl border border-slate-700/80 text-xs landscape:text-[10px] text-slate-300 leading-relaxed text-left overflow-y-auto scrollbar-thin"
                      >
                        <div className="flex items-center gap-1.5 mb-1.5 landscape:mb-0.5 font-bold text-amber-400">
                          <span>💡 Penjelasan Edukasi:</span>
                        </div>
                        {(() => {
                          let isCorrect = false;
                          let userFeedback = "";

                          if (currentQuestion.type === 'pilihan_ganda_kompleks') {
                             const correctList = currentQuestion.correctAnswers || [];
                             isCorrect = selectedComplex.length === correctList.length &&
                               selectedComplex.every(val => correctList.includes(val));
                             const correctTexts = correctList.map(idx => currentQuestion.options[idx]).join(", ");
                             userFeedback = `Jawaban yang benar adalah: ${correctTexts}.`;
                          } else if (currentQuestion.type === 'benar_salah') {
                             isCorrect = selectedOption === currentQuestion.answer;
                             userFeedback = `Jawaban yang benar adalah: ${currentQuestion.options[currentQuestion.answer]}.`;
                          } else if (currentQuestion.type === 'menjodohkan') {
                             const pairs = currentQuestion.matchingPairs || {};
                             isCorrect = !!currentQuestion.matchingLeft?.every((_, idx) => 
                               matchingAnswers[idx] === pairs[idx]
                             );
                             userFeedback = "Sandingkan pasangan yang tepat untuk mengasah pemahamanmu.";
                          } else if (currentQuestion.type === 'drag_drop') {
                             const correctOrder = currentQuestion.correctOrder || [];
                             isCorrect = dragOrder.length === correctOrder.length &&
                               dragOrder.every((val, idx) => val === correctOrder[idx]);
                             const orderTexts = correctOrder.map(idx => currentQuestion.dragItems?.[idx]).join(" → ");
                             userFeedback = `Urutan yang benar adalah: ${orderTexts}.`;
                          } else {
                             isCorrect = selectedOption === currentQuestion.answer;
                             userFeedback = selectedOption === -1 
                               ? `Waktu habis! Jawaban yang benar adalah: ${currentQuestion.options[currentQuestion.answer]}.`
                               : `Jawaban yang benar adalah: ${currentQuestion.options[currentQuestion.answer]}.`;
                          }

                          return (
                            <div>
                              {isCorrect ? (
                                <span className="text-emerald-400 font-bold mr-1">Tepat sekali! 🎉</span>
                              ) : (
                                <span className="text-red-400 font-bold mr-1">Kurang tepat. 💡</span>
                              )}
                              <span className="text-slate-300 block mt-1 landscape:mt-0.5 font-medium">{userFeedback}</span>
                              <span className="text-slate-400 block mt-2 landscape:mt-1 italic">{currentQuestion.explanation}</span>
                            </div>
                          );
                        })()}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

            </div>

            {/* Quiz Footer Buttons */}
            <div className="p-3 landscape:py-2 landscape:px-4 sm:p-5 bg-slate-950/50 border-t border-slate-800 flex justify-end shrink-0">
              {isAnswered ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextQuestion}
                  className="px-4 py-2 landscape:px-4 landscape:py-1.5 sm:px-6 sm:py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs landscape:text-xs sm:text-sm rounded-xl flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
                >
                  <span>
                    {currentQIndex < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Pos'}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              ) : (
                <div className="text-[11px] sm:text-xs text-slate-500 italic flex items-center gap-1 py-1.5 sm:py-3">
                  Pilih salah satu jawaban sebelum waktu habis! ⏰
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          /* LEVEL SCORE SUMMARY MODAL VIEW */
          <motion.div
            key="summary"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -30 }}
            className="w-full max-w-md bg-slate-900 border-4 border-amber-500 rounded-3xl overflow-hidden shadow-2xl p-6 text-center"
          >
            {(() => {
              const passed = correctCount >= settings.passingCorrectCount;
              const pointsVal = correctCount * 20;
              const minPointsRequired = settings.passingCorrectCount * 20;
              
              return (
                <>
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-amber-950/50 border-2 border-amber-500 rounded-full flex items-center justify-center text-5xl">
                      {passed ? '🏆' : '💪'}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-1">
                    {passed ? 'Pos Berhasil Dilewati!' : 'Tantangan Belum Lulus'}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">
                    {level.title}
                  </p>

                  {/* Score box */}
                  <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800 max-w-xs mx-auto mb-6">
                    <div className="grid grid-cols-2 gap-2 text-center divide-x divide-slate-800">
                      <div>
                        <div className="text-2xl font-black text-emerald-400">{correctCount} / {questions.length}</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Benar</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-amber-400">{pointsVal}</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Poin Skor</div>
                      </div>
                    </div>
                  </div>

                  {/* Message based on passing/failing */}
                  {passed ? (
                    <p className="text-xs text-emerald-300 mb-8 max-w-sm mx-auto leading-relaxed">
                      🎉 Hebat! Kamu memperoleh <strong>{pointsVal} Poin</strong>. Kamu dinyatakan <strong>LULUS</strong> pos ini dan berhak melanjutkan petualangan ke pos selanjutnya!
                    </p>
                  ) : (
                    <p className="text-xs text-red-300 mb-8 max-w-sm mx-auto leading-relaxed">
                      ☹️ Kamu mendapatkan <strong>{pointsVal} Poin</strong>. Syarat minimal kelulusan untuk tantangan ini adalah <strong>{minPointsRequired} Poin</strong> ({settings.passingCorrectCount} soal benar). Ayo belajar lagi dan coba lagi pos ini!
                    </p>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 justify-center">
                    {!passed ? (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleRetryLevel}
                          className="flex-1 px-5 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs rounded-xl flex items-center justify-center gap-1.5 shadow"
                        >
                          <RefreshCw className="w-4 h-4" />
                          <span>Ulangi Pos</span>
                        </motion.button>
                        <button
                          onClick={onClose}
                          className="px-5 py-3.5 bg-slate-800 text-slate-300 font-bold text-xs rounded-xl hover:bg-slate-700 transition"
                        >
                          Ke Peta
                        </button>
                      </>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleFinishLevel}
                        className="w-full px-6 py-3.5 bg-gradient-to-r from-emerald-400 to-emerald-500 text-slate-950 font-black text-sm rounded-xl shadow-lg flex items-center justify-center gap-1.5"
                      >
                        <Award className="w-4 h-4" />
                        <span>Selesaikan & Kembali</span>
                      </motion.button>
                    )}
                  </div>
                </>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
