import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#0d284e]">
      {/* الجزء العلوي - الواجهة الملكية */}
      <header className="bg-[#0d284e] text-white py-20 px-6 text-center shadow-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#e5c100]">
          Yalla Masry Academy
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 font-light">
          The Royal Way for Women & Children to Master Egyptian Arabic.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/signup" 
            className="bg-[#e5c100] text-[#0d284e] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            Start Learning Now
          </Link>
          <Link 
            href="/placement-test" 
            className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0d284e] transition-all"
          >
            Take Level Test
          </Link>
        </div>
      </header>

      {/* قسم المميزات الثلاثة */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        <div className="p-8 rounded-3xl bg-[#fcfaf7] border-b-8 border-[#e5c100]">
          <div className="text-5xl mb-4">👸</div>
          <h3 className="text-2xl font-bold mb-3">Female Tutors</h3>
          <p className="text-gray-600">A private, safe, and professional environment for women and children.</p>
        </div>
        
        <div className="p-8 rounded-3xl bg-[#fcfaf7] border-b-8 border-[#e5c100]">
          <div className="text-5xl mb-4">🎮</div>
          <h3 className="text-2xl font-bold mb-3">Fun & Games</h3>
          <p className="text-gray-600">Earn "Nile Coins" and collect badges while you master the Egyptian dialect.</p>
        </div>

        <div className="p-8 rounded-3xl bg-[#fcfaf7] border-b-8 border-[#e5c100]">
          <div className="text-5xl mb-4">🏺</div>
          <h3 className="text-2xl font-bold mb-3">Ancient Secrets</h3>
          <p className="text-gray-600">Learn the language through the magic and stories of Egyptian history.</p>
        </div>
      </section>

      {/* تذييل الصفحة */}
      <footer className="py-10 text-center text-gray-400 border-t border-gray-100">
        <p>© 2025 Yalla Masry Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
