'use client';
import React from 'react';
import { Trophy, Eye, Heart, Share2 } from 'lucide-react';

export default function RoyalMuseum() {
  // بيانات تجريبية لما سيُعرض في المتحف
  const exhibits = [
    { 
      id: 1, 
      studentName: "Li Na (China)", 
      workType: "Comic Studio", 
      title: "بسبس في خان الخليلي", 
      likes: 120,
      image: "https://example.com/comic-link.jpg" 
    },
    { 
      id: 2, 
      studentName: "James (USA)", 
      workType: "Video Challenge", 
      title: "أنا وعائلتي في القاهرة", 
      likes: 85,
      image: "https://example.com/video-thumbnail.jpg" 
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-white font-cairo p-8">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-black text-amber-400 mb-4 italic">المتحف الملكي العالمي 🏛️</h1>
        <p className="text-blue-200">حيث تتحول مجهودات الفراعنة الصغار إلى تحف فنية يراها العالم</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {exhibits.map((item) => (
          <div key={item.id} className="group relative bg-[#112240] rounded-[3rem] overflow-hidden border-2 border-amber-400/20 hover:border-amber-400 transition-all shadow-2xl">
            {/* إطار اللوحة الفنية */}
            <div className="aspect-[4/3] bg-slate-800 relative overflow-hidden">
               <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute top-4 right-4 bg-amber-400 text-blue-900 px-4 py-1 rounded-full text-xs font-black">
                  {item.workType}
               </div>
            </div>

            {/* تفاصيل العمل */}
            <div className="p-8 text-center">
              <h3 className="text-2xl font-black mb-2 text-white">{item.title}</h3>
              <p className="text-amber-400 font-bold mb-6">بواسطة الفنان: {item.studentName}</p>
              
              <div className="flex justify-between items-center border-t border-white/10 pt-6">
                <div className="flex items-center gap-2 text-rose-400">
                  <Heart size={20} fill="currentColor" /> <span>{item.likes}</span>
                </div>
                <button className="flex items-center gap-2 text-blue-400 hover:text-white transition-colors">
                  <Share2 size={20} /> <span>نشر الموهبة</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* رسالة حتشبسوت في المتحف */}
      <footer className="mt-20 text-center bg-white/5 p-10 rounded-[4rem] border border-white/10">
         <h2 className="text-3xl font-black text-amber-400 mb-4">هل تريد أن تُعرض لوحتك هنا؟</h2>
         <p className="text-blue-100 mb-8">أكمل تحدياتك، اجمع نقاطك، واجعل اسمك يخلد في تاريخ الأكاديمية!</p>
         <button className="bg-amber-400 text-blue-900 px-12 py-4 rounded-2xl font-black text-xl hover:bg-white transition-all">
            ابدأ التحدي القادم 🚀
         </button>
      </footer>
    </div>
  );
}
