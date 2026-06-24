/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Printer, RotateCcw, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { SubjectId } from '../types';
import { audio } from './AudioEngine';

interface CertificateProps {
  playerName: string;
  totalScore: number;
  subjectId: SubjectId;
  subjectName: string;
  onRestart: () => void;
}

export default function Certificate({
  playerName,
  totalScore,
  subjectId,
  subjectName,
  onRestart
}: CertificateProps) {
  
  const handlePrint = () => {
    audio.playClick();
    window.print();
  };

  const getCertificateTitle = () => {
    switch (subjectId) {
      case 'pjok':
        return 'SERTIFIKAT JUNIOR ATLET SPORT QUEST';
      case 'pancasila':
        return 'SERTIFIKAT PELAJAR PANCASILA SEJATI';
      case 'matematika':
        return 'SERTIFIKAT MASTER MATEMATIKA SD';
      case 'bahasa_indonesia':
        return 'SERTIFIKAT PUJANGGA SASTRA INDONESIA';
      case 'ipas':
        return 'SERTIFIKAT MAHA GURU BUDAYA NUSANTARA';
      case 'pai':
        return 'SERTIFIKAT AKHLAQUL KARIMAH & TAQWA';
      case 'bahasa_inggris':
        return 'SERTIFIKAT GLOBAL COMMUNICATOR JUNIOR';
      case 'bahasa_jawa':
        return 'SERTIFIKAT PELESTARI BUDAYA DAERAH';
      case 'seni_rupa':
        return 'SERTIFIKAT MAESTRO SENI KREATIF JUNIOR';
      default:
        return 'SERTIFIKAT PRESTASI AKADEMIK UNGGUL';
    }
  };

  const getCertificateDesc = () => {
    switch (subjectId) {
      case 'pjok':
        return 'Atas ketangkasan dan pengetahuan jasmani yang luar biasa dalam menyelesaikan seluruh pos tantangan bola besar, bola kecil, atletik, kebugaran jasmani, serta kesehatan diri di dalam game petualangan SPORT QUEST Kelas 5 SD.';
      case 'pancasila':
        return 'Atas keberhasilan luar biasa menyelesaikan seluruh pos tantangan karakter, gotong royong, musyawarah, dan kewajiban moral di dalam game petualangan Pendidikan Pancasila Kelas 5.';
      case 'matematika':
        return 'Atas kecakapan istimewa menyelesaikan seluruh pos tantangan perhitungan pecahan, bangun datar, volume ruang, dan diagram data di dalam game petualangan Matematika Kelas 5.';
      case 'bahasa_indonesia':
        return 'Atas ketelitian tinggi menyelesaikan seluruh pos tantangan pemahaman ide pokok, analisis iklan, surel elektronik, dan teks eksplanasi di dalam game petualangan Bahasa Indonesia Kelas 5.';
      case 'ipas':
        return 'Atas keberhasilan luar biasa menjelajahi dan menyelesaikan seluruh pos tantangan warisan budaya benda, tak benda, tari daerah, lagu daerah, dan pelestarian budaya Indonesia di dalam game petualangan IPAS Kelas 5 SD.';
      case 'pai':
        return 'Atas pencapaian mulia memahami surah Al-Ma\'un, nama-nama indah Asmaul Husna, sikap saling menghargai, meneladani kisah Nabi dan Rasul, serta tuntunan ibadah Haji dan Kurban di dalam game petualangan Pendidikan Agama Islam Kelas 5.';
      case 'bahasa_inggris':
        return 'Atas kecakapan luar biasa mempraktikkan komunikasi Bahasa Inggris interaktif, menanyakan harga, memahami nama bagian tubuh dan kesehatan, mengenali ruangan rumah/sekolah, serta hewan dan makanannya di dalam game petualangan English Interactive Kelas 5.';
      case 'bahasa_jawa':
        return 'Atas kecintaan luhur melestarikan warisan sastra Jawa, memahami crita wayang Pandhawa, unggah-ungguh basa, maca lan nulis Aksara Jawa, tembang Macapat, sarta tradisi budaya Jawa Timur Kelas 5.';
      case 'seni_rupa':
        return 'Atas daya imajinasi dan kreativitas tinggi menguasai unsur seni rupa, gambar perspektif, motif hias nusantara, pembuatan karya seni rupa tiga dimensi, serta apresiasi pameran seni Kelas 5 SD.';
      default:
        return 'Atas keberhasilan luar biasa menyelesaikan seluruh pos tantangan akademik dan pembentukan karakter mulia di dalam aplikasi petualangan edukatif UPT SD Negeri Remen 2.';
    }
  };

  const todayStr = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      {/* Printable Certificate Frame */}
      <div 
        id="printable-certificate"
        className="relative bg-amber-50 border-[16px] border-double border-amber-600 rounded-3xl p-8 sm:p-12 shadow-2xl text-center text-slate-900 overflow-hidden"
      >
        {/* Decorative corner borders */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-amber-600 rounded-tl-lg pointer-events-none" />
        <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-amber-600 rounded-tr-lg pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-amber-600 rounded-bl-lg pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-amber-600 rounded-br-lg pointer-events-none" />

        {/* Certificate Watermark Ribbon */}
        <div className="absolute -right-16 -top-16 w-48 h-48 bg-amber-500/10 rounded-full flex items-center justify-center rotate-45 pointer-events-none" />

        {/* School Header */}
        <div className="mb-6 flex flex-col items-center">
          <span className="text-3xl mb-1">🇲🇨</span>
          <h4 className="text-xs font-black tracking-widest text-slate-500 uppercase">
            Pemerintah Kabupaten Tuban
          </h4>
          <h3 className="text-base font-extrabold text-amber-800 tracking-wide">
            UPT SD NEGERI REMEN 2
          </h3>
          <p className="text-[10px] text-slate-400 italic">
            Jl. Raya Remen No.2, Jenu, Kabupaten Tuban, Jawa Timur
          </p>
          <div className="w-24 h-0.5 bg-amber-500/30 mt-3" />
        </div>

        {/* Certificate Title */}
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-black text-amber-700 font-sans tracking-wide leading-tight">
            {getCertificateTitle()}
          </h1>
          <div className="text-[10px] text-slate-400 tracking-widest uppercase mt-1">
            Piagam Penghargaan Resmi
          </div>
        </div>

        {/* Recipient info */}
        <div className="mb-6">
          <p className="text-xs text-slate-500 italic mb-2">Diberikan kepada petualang hebat:</p>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 underline decoration-amber-600/80 decoration-4 underline-offset-8">
            {playerName.toUpperCase()}
          </h2>
          <p className="text-xs text-amber-700 font-extrabold mt-2">
            Siswa Hebat Kelas 5 SD
          </p>
        </div>

        {/* Description body */}
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed mb-8">
          {getCertificateDesc()}
        </p>

        {/* Score achieved HUD */}
        <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-100 border-2 border-amber-500/30 rounded-full mb-8">
          <span className="text-sm font-bold text-amber-800">Skor Akhir: </span>
          <span className="text-base font-extrabold text-amber-600">{totalScore} / 100 Poin</span>
          <span className="text-emerald-600 font-black">LULUS SEMPURNA ★</span>
        </div>

        {/* Signatures & Seal */}
        <div className="grid grid-cols-2 gap-4 items-center max-w-md mx-auto mt-6">
          {/* Golden Seal */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-16 h-16 flex items-center justify-center bg-amber-500 rounded-full border-4 border-white shadow-lg rotate-12">
              <Award className="w-8 h-8 text-white" />
              {/* Ribbon Tails */}
              <div className="absolute -bottom-4 left-3 w-4 h-8 bg-amber-500/90 rotate-[15deg] -z-10 rounded-b" />
              <div className="absolute -bottom-4 right-3 w-4 h-8 bg-amber-500/90 rotate-[-15deg] -z-10 rounded-b" />
            </div>
            <span className="text-[9px] text-amber-700 font-bold mt-5 tracking-wide uppercase">
              SEAL KEJUARAAN
            </span>
          </div>

          {/* Principal sign box */}
          <div className="text-center text-xs">
            <p className="text-slate-400 text-[10px] mb-8">Tuban, {todayStr}</p>
            <div className="inline-block border-b border-slate-400 w-32 pb-1 font-bold text-slate-800">
              Panitia Adventure Quest
            </div>
            <p className="text-[9px] text-slate-400 mt-1">UPT SD Negeri Remen 2</p>
          </div>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-print-hide">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrint}
          className="w-full sm:w-auto px-6 py-3.5 bg-amber-500 text-slate-950 font-black text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
        >
          <Printer className="w-5 h-5" />
          <span>Cetak Sertifikat</span>
        </motion.button>

        <button
          onClick={onRestart}
          className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition border border-slate-700"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Mainkan Mata Pelajaran Lain</span>
        </button>
      </div>

      {/* CSS Styles to handle printing nicely */}
      <style>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .pointer-print-hide, nav, header, footer, #character-avatar, button {
            display: none !important;
          }
          #printable-certificate {
            border: 12px double #b45309 !important;
            box-shadow: none !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            transform: none !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
