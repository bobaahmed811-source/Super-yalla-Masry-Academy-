'use client';
import React, { useState } from 'react';
import { PlusCircle, Users, BookOpen, Video, Star, Send } from 'lucide-react';

export default function TeacherControlPanel() {
  return (
    <div className="min-h-screen bg-[#061121] text-white p-6 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-3xl font-black text-amber-500">مرحباً، أستاذة مريم 👋</h1>
            <p className="text-gray-400 text-sm">لديكِ 5 دروس جديدة مجدولة لهذا الأسبوع</p>
          </div>
          <div className="flex gap-4">
             <div className="bg-white/5 p-3 rounded-2xl border border-white/10 text-center">
                <div className="text-amber-500 font-bold">4.9 ⭐</div>
                <div className="text-[10px]">تقييم الطلاب</div>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* عمود إدارة المحتوى */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#0f1c2e] p-8 rounded-[40px] border border-amber-500/20 shadow-xl">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <PlusCircle className="text-amber-500" /> إضافة درس لهجة جديد
              </h2>
              <div className="space-y-4">
                <input type="text" placeholder="اسم الدرس (مثلاً: في المطعم المصري)" className="w-full bg-black/20 border border-white/10 p-4 rounded-xl outline-none focus:border-amber-500" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="الكلمة بالمصري" className="bg-black/20 border border-white/10 p-4 rounded-xl outline-none" />
                  <input type="text" placeholder="المعنى بالإنجليزية" className="bg-black/20 border border-white/10 p-4 rounded-xl outline-none" />
                </div>
                <textarea placeholder="شرح مبسط للطلاب..." className="w-full bg-black/20 border border-white/10 p-4 rounded-xl h-32 outline-none"></textarea>
                <button className="w-full bg-amber-500 text-black font-black py-4 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2">
                  <Send size={20} /> اعتماد ونشر الدرس
                </button>
              </div>
            </div>
          </div>

          {/* عمود الإحصائيات والطلاب */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-[40px] shadow-lg">
              <h3 className="font-bold text-white mb-2">إجمالي الدخل هذا الشهر</h3>
              <div className="text-4xl font-black text-white">$1,250</div>
            </div>
            <div className="bg-white/5 p-6 rounded-[30px] border border-white/10">
              <h3 className="font-bold mb-4 flex items-center gap-2"><Users size={18}/> الطلاب الأكثر تفاعلاً</h3>
              <div className="space-y-3">
                {['ياسين', 'سارة', 'نوف'].map((name, i) => (
                  <div key={i} className="flex justify-between items-center bg-black/20 p-3 rounded-xl">
                    <span>{name}</span>
                    <span className="text-amber-500 text-xs">مستوى 4 🏆</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
