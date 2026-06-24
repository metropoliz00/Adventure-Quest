/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // Index of correct option (0-3) for single-choice/benar_salah
  explanation?: string;
  type?: 'pilihan_ganda' | 'pilihan_ganda_kompleks' | 'benar_salah' | 'menjodohkan' | 'drag_drop';
  correctAnswers?: number[]; // For pilihan_ganda_kompleks (array of correct option indices)
  matchingLeft?: string[]; // For menjodohkan (left-side items)
  matchingRight?: string[]; // For menjodohkan (right-side items to match against)
  matchingPairs?: Record<number, number>; // For menjodohkan (mapping: leftIndex -> correctRightIndex)
  dragItems?: string[]; // For drag_drop (items in random initial order)
  correctOrder?: number[]; // For drag_drop (correct sequence indices of dragItems)
}

export interface Level {
  id: number; // 1 to 5
  title: string;
  topic: string;
  questions: Question[];
}

export type SubjectId = 'pjok' | 'ipas' | 'pancasila' | 'matematika' | 'bahasa_indonesia' | 'pai' | 'bahasa_inggris' | 'bahasa_jawa' | 'seni_rupa';

export interface SubjectData {
  id: SubjectId;
  name: string;
  subtitle: string;
  levels: Level[];
}

export interface Player {
  id: string;
  name: string;
  gender: 'boy' | 'girl';
  score: number;
  subject: SubjectId;
  subjectName: string;
  completedAt: string;
}

export interface RemotePlayer {
  id: string;
  name: string;
  gender: 'boy' | 'girl';
  color: string;
  level: number | null;
}

export interface GameState {
  playerName: string;
  gender: 'boy' | 'girl' | null;
  color: string | null;
  selectedSubject: SubjectId;
  currentLevelId: number; // 1 to 5
  unlockedLevelId: number; // 1 to 5
  currentQuestionIndex: number; // 0 to 4
  levelScores: Record<number, number>; // levelId -> score
  totalScore: Record<SubjectId, number>; // subjectId -> totalScore
  quizActive: boolean;
  gameCompleted: boolean;
}
