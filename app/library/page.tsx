// app/library/page.tsx
export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-[#061121] text-white p-8 rtl" dir="rtl">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-black text-gold">🕌 واحة القرآن الكريم</h1>
        <button className="text-sm bg-white/10 px-4 py-2 rounded-full">رجوع</button>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#0f1c2e] p-8 rounded-[40px] border border-gold/20 text-center hover:scale-105 transition-all">
          <div className="text-5xl mb-4 text-gold">📖</div>
          <h2 className="text-2xl font-bold">سورة الفاتحة</h2>
          <p className="text-gray-400 mt-2">تفسير ميسر للناشئة</p>
        </div>
        {/* يمكنك إضافة المزيد من الكروت هنا بنفس الطريقة */}
      </div>
    </div>
  );
}
