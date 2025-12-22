'use client';

import React from 'react';
import { LayoutDashboard, Users, BookPlus, Settings, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#061121] text-white p-6 rtl" dir="rtl">
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-10">
        <h1 className="text-3xl font-black text-gold">لوحة تحكم الإدارة 🏛️</h1>
        <div className="flex gap-4">
          <span className="text-sm bg-gold/10 text-gold px-4 py-2 rounded-xl border border-gold/20">حساب المدير</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* إحصائيات سريعة */}
        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center">
          <Users className="mx-auto mb-2 text-gold" />
          <div className="text-2xl font-black">1,240</div>
          <div className="text-xs text-gray-400">طالب نشط</div>
        </div>
        
        {/* قسم إضافة المحتوى */}
        <div className="lg:col-span-3 bg-[#0f1c2e] p-8 rounded-[40px] border border-gold/20">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <BookPlus className="text-gold" /> إضافة درس أو تحدي جديد
          </h2>
          <div className="space-y-4">
            <input type="text" placeholder="عنوان الدرس" className="w-full bg-black/20 border border-white/10 p-4 rounded-xl outline-none focus:border-gold" />
            <textarea placeholder="وصف التحدي..." className="w-full bg-black/20 border border-white/10 p-4 rounded-xl h-32 outline-none focus:border-gold"></textarea>
            <button className="w-full bg-gold text-[#061121] font-black py-4 rounded-xl hover:bg-white transition-all">نشر الآن</button>
          </div>
        </div>
      </main>
    </div>
  );
}
