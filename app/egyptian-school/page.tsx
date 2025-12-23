'use client';

import React from 'react';
import { Sparkles, Map, MessageCircle, PlayCircle, Star, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function EgyptianLanguageSchool() {
  const levels = [
    {
      id: 'level-1',
      title: 'المستوى الأول: يا أهلاً (التحيات)',
      lessons: '10 دروس',
      status: 'unlocked',
      color: 'from-amber-400 to-orange-500'
    },
    {
      id: 'level-2',
      title: 'المستوى الثاني: في الشارع المصري',
      lessons: '15 درس',
      status: 'locked',
      color: 'from-blue-400 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-[#061121] text-white p-6 font-cairo rtl" dir="rtl">
      {/* هيدر المدرسة */}
      <header className="max-w-6xl mx-auto text-center py-12">
        <h1 className="text-5xl font-black text-amber-500 mb-4 flex items-center justify-center gap-4">
          <Sparkles className="animate-pulse" /> مدرسة اللهجة المصرية
        </h1>
        <p className="text-xl text-blue-200 italic">تعلم كيف تتحدث كالمصريين في "قعدة عرب"</p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {levels.map((level) => (
          <div key={level.id} className={`relative p-8 rounded-[40px] bg-gradient-to-br ${level.color} shadow-2xl overflow-hidden group hover:scale-105 transition-all`}>
            {/* أيقونات خلفية جمالية */}
            <MessageCircle className="absolute -bottom-4 -left-4 opacity-20 rotate-12" size={150} />
            
            <div className="relative z-10 text-[#061121]">
              <h2 className="text-3xl font-black mb-2">{level.title}</h2>
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-black/10 px-4 py-1 rounded-full font-bold">{level.lessons}</span>
                <span className="flex items-center gap-1 font-bold text-sm"><Star size={16} fill="currentColor" /> 500 نقطة</span>
              </div>

              {level.status === 'unlocked' ? (
                <Link href="/egyptian-school/lesson-1" className="inline-flex items-center gap-2 bg-[#061121] text-white px-8 py-4 rounded-2xl font-black hover:bg-white hover:text-black transition-all">
                  ابدأ التعلم الآن <PlayCircle />
                </Link>
              ) : (
                <div className="inline-flex items-center gap-2 bg-black/20 text-black/50 px-8 py-4 rounded-2xl font-black cursor-not-allowed">
                   مغلق حتى تنهي السابق 🔒
                </div>
              )}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
