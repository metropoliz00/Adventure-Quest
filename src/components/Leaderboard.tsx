/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Player } from '../types';
import { Trophy, Medal, Star, User } from 'lucide-react';

interface LeaderboardProps {
  currentSubjectId: string;
}

export default function Leaderboard({ currentSubjectId }: LeaderboardProps) {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const loadLeaderboard = () => {
      try {
        const stored = localStorage.getItem('adventure_quest_leaderboard');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            // Sort descending by score, then ascending by completion date
            const sorted: Player[] = parsed.sort((a, b) => {
              if (b.score !== a.score) {
                return b.score - a.score;
              }
              return new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime();
            });
            // Limit to Top 10
            setPlayers(sorted.slice(0, 10));
          } else {
            setPlayers([]);
          }
        }
      } catch (e) {
        console.error('Failed to load leaderboard', e);
        setPlayers([]);
      }
    };

    loadLeaderboard();
    
    // Listen to storage events to auto-update
    window.addEventListener('storage', loadLeaderboard);
    return () => window.removeEventListener('storage', loadLeaderboard);
  }, []);

  // Format subject name nicely
  const formatSubjectName = (subId: string) => {
    switch (subId) {
      case 'pancasila':
        return 'Pancasila';
      case 'matematika':
        return 'Matematika';
      case 'bahasa_indonesia':
        return 'B. Indonesia';
      case 'pjok':
        return 'PJOK';
      case 'ipas':
        return 'IPAS';
      case 'pai':
        return 'PAI';
      case 'bahasa_inggris':
        return 'B. Inggris';
      case 'bahasa_jawa':
        return 'B. Jawa';
      case 'seni_rupa':
        return 'Seni Rupa';
      default:
        return subId.toUpperCase();
    }
  };

  return (
    <div className="w-full bg-white border-4 border-amber-500 rounded-2xl p-4 shadow-xl">
      <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
        <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-600">
          <Trophy className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xs font-black text-amber-900 uppercase tracking-tight">Papan Peringkat Top 10</h3>
          <p className="text-[9px] text-slate-500 font-bold">Prestasi Siswa UPT SD Negeri Remen 2</p>
        </div>
      </div>

      {players.length === 0 ? (
        <div className="text-center py-4 bg-slate-50 rounded-xl border border-slate-100">
          <p className="text-xl mb-1">⭐</p>
          <p className="text-[10px] text-slate-600 font-black">Belum ada peringkat.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Podium for Top 3 */}
          <div className="grid grid-cols-3 gap-1.5 items-end pt-2 max-w-[280px] mx-auto">
            {/* 2nd Place */}
            {players[1] && (
              <div className="flex flex-col items-center">
                <div className="text-center mb-1">
                  <span className="text-base">🥈</span>
                  <div className="text-[9px] font-black text-slate-700 truncate max-w-[60px]">{players[1].name}</div>
                  <div className="text-[8px] font-black text-amber-600">{players[1].score}</div>
                </div>
                <div className="w-full h-10 bg-slate-100 border-t-2 border-slate-200 rounded-t-lg flex items-center justify-center font-black text-slate-400 text-xs">2</div>
              </div>
            )}

            {/* 1st Place */}
            {players[0] && (
              <div className="flex flex-col items-center">
                <div className="text-center mb-1">
                  <span className="text-xl animate-bounce inline-block">👑</span>
                  <div className="text-[10px] font-black text-amber-900 truncate max-w-[80px]">{players[0].name}</div>
                  <div className="text-[9px] font-black text-amber-600">{players[0].score}</div>
                </div>
                <div className="w-full h-16 bg-amber-500 border-t-2 border-amber-400 rounded-t-lg flex flex-col items-center justify-center font-black text-white text-sm shadow-md">
                  <span>🥇</span>
                  <span>1</span>
                </div>
              </div>
            )}

            {/* 3rd Place */}
            {players[2] && (
              <div className="flex flex-col items-center">
                <div className="text-center mb-1">
                  <span className="text-base">🥉</span>
                  <div className="text-[9px] font-black text-slate-700 truncate max-w-[60px]">{players[2].name}</div>
                  <div className="text-[8px] font-black text-amber-600">{players[2].score}</div>
                </div>
                <div className="w-full h-8 bg-amber-50 border-t-2 border-amber-200 rounded-t-lg flex items-center justify-center font-black text-amber-700 text-[10px]">3</div>
              </div>
            )}
          </div>

          {/* List for the rest */}
          <div className="max-h-[150px] overflow-y-auto pr-1 custom-scrollbar">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[8px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">
                  <th className="pb-1 pl-1">No</th>
                  <th className="pb-1">Nama</th>
                  <th className="pb-1 text-right pr-1">Skor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {players.map((p, idx) => (
                  <tr key={idx} className="group hover:bg-slate-50 transition-colors">
                    <td className="py-1.5 pl-1 text-[9px] font-black text-slate-400">{idx + 1}</td>
                    <td className="py-1.5">
                      <div className="flex items-center gap-1">
                        <span className="text-[10px]">{p.gender === 'boy' ? '👦' : '👧'}</span>
                        <span className="text-[9px] font-bold text-slate-700 truncate max-w-[90px]">{p.name}</span>
                      </div>
                    </td>
                    <td className="py-1.5 text-right pr-1">
                      <span className="text-[9px] font-black text-amber-600">{p.score}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
