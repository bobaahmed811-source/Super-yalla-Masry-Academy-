'use client';
import { Mic, Volume2, BookOpen } from 'lucide-react';

export default function SurahDetail() {
  return (
    <div className="min-h-screen bg-[#0d284e] text-white p-6 rtl" dir="rtl">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-quran mb-12 text-amber-400 font-black">سورة الفاتحة</h1>
        
        <div className="bg-white/10 p-10 rounded-[50px] border-2 border-amber-400/20 shadow-2xl mb-10">
          <p className="text-3xl md:text-4xl leading-[2] font-serif mb-8 italic">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-amber-400 text-blue-900 p-4 rounded-full hover:bg-white transition-all">
              <Volume2 size={24} />
            </button>
            <button className="bg-white/10 p-4 rounded-full border border-white/20">
              <Mic size={24} />
            </button>
          </div>
        </div>

        <div className="bg-amber-400/5 p-6 rounded-3xl border border-amber-400/20 text-right">
          <h3 className="text-amber-400 font-bold mb-3 flex items-center gap-2">
            <BookOpen size={20} /> التفسير الميسر للأطفال:
          </h3>
          <p className="text-gray-300">نبدأ قراءتنا بذكر اسم الله، ونشكره لأنه هو رب كل شيء في الكون.</p>
        </div>
      </div>
    </div>
  );
}
