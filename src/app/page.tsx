// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#061121] text-white flex flex-col items-center justify-center p-6 rtl" dir="rtl">
      {/* خلفية جمالية أو شعار الأكاديمية */}
      <div className="z-10 text-center space-y-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black text-amber-500 drop-shadow-lg">
          أكاديمية يلا مصري
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light">
          تعلم اللهجة المصرية، استكشف الحضارة، وعش مغامرات واحة القرآن.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <Link href="/signup" className="w-full sm:w-auto bg-amber-500 hover:bg-white text-black font-black py-4 px-10 rounded-2xl transition-all shadow-xl hover:scale-105 text-center">
            ابدأ رحلتك الآن
          </Link>
          <Link href="/login" className="w-full sm:w-auto border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10 font-bold py-4 px-10 rounded-2xl transition-all text-center">
            تسجيل الدخول
          </Link>
        </div>
      </div>

      {/* لمسة فنية فرعونية بسيطة */}
      <div className="absolute bottom-10 opacity-10 text-9xl select-none">
        𓄿 𓅓 𓏏 𓂋
      </div>
    </main>
  );
}
