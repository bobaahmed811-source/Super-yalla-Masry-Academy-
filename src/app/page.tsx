import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#061121] text-white flex flex-col items-center justify-center p-6 rtl relative overflow-hidden" dir="rtl">
      <div className="z-10 text-center space-y-8 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-black text-amber-500 drop-shadow-[0_5px_15px_rgba(245,158,11,0.4)]">
          أكاديمية يلا مصري
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
          تعلم اللهجة المصرية، استكشف الحضارة مع رحلة "نوف"، <br/>وعش مغامرات واحة القرآن بالذكاء الاصطناعي.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          {/* الربط بصفحة الأهداف */}
          <Link href="/goals" className="w-full sm:w-auto bg-amber-500 hover:bg-white text-black font-black py-4 px-12 rounded-2xl transition-all shadow-xl hover:scale-105 text-center text-xl">
            ابدأ رحلتك الملكية الآن 🚀
          </Link>
          
          <Link href="/contact" className="w-full sm:w-auto border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10 font-bold py-4 px-12 rounded-2xl transition-all text-center text-xl">
            تواصل معنا
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 opacity-10 text-9xl select-none animate-pulse">
        𓄿 𓅓 𓏏 𓂋
      </div>
    </main>
  );
}
