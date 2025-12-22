// app/adventure/page.tsx
export default function AdventurePage() {
  return (
    <div className="min-h-screen bg-[#061121] flex items-center justify-center p-6 rtl" dir="rtl">
      <div className="max-w-4xl w-full bg-[#0f1c2e] rounded-[50px] p-12 border-2 border-gold/30 relative overflow-hidden">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-black text-gold mb-6">🏜️ مغامرة وادي النيل</h1>
          <p className="text-xl text-amber-100 mb-10">ساعدي "نوف" في فك أسرار اللغة المصرية القديمة!</p>
          <button className="bg-gold text-nile-dark px-12 py-5 rounded-2xl font-black text-2xl animate-pulse">
            ابدأ التحدي
          </button>
        </div>
        <div className="absolute top-0 right-0 opacity-5 text-9xl">𓃠</div>
      </div>
    </div>
  );
}
