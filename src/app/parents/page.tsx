'use client';

import React from 'react';
import { Heart, ShieldCheck, Zap, Award } from 'lucide-react';

export default function ParentsDashboard() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0d284e] p-6" dir="rtl">
      <header className="max-w-5xl mx-auto mb-10 text-center">
        <div className="inline-block bg-blue-100 p-3 rounded-full mb-4">
          <Heart className="text-blue-600" fill="currentColor" size={32} />
        </div>
        <h1 className="text-3xl font-black italic">بوابة أولياء الأمور</h1>
        <p className="text-gray-500">تابعي نمو طفلك المعرفي في وادي النيل</p>
      </header>

      <main className="max-w-5xl mx-auto">
        <div className="bg-white shadow-2xl rounded-[40px] overflow-hidden border border-gray-100">
          <div className="bg-[#0d284e] p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-2xl">👦</div>
              <div>
                <h2 className="font-bold text-xl">ياسين محمد</h2>
                <p className="text-blue-200 text-xs">المستوى 4 - كاتب ملكي</p>
              </div>
            </div>
            <Award className="text-amber-400" size={32} />
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-3xl">
              <Zap className="mx-auto text-orange-500 mb-2" />
              <div className="text-2xl font-black">85%</div>
              <div className="text-sm text-gray-500">معدل الانتباه</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-3xl">
              <ShieldCheck className="mx-auto text-emerald-500 mb-2" />
              <div className="text-2xl font-black">12</div>
              <div className="text-sm text-gray-500">تحديات مكتملة</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-3xl">
              <div className="text-2xl font-black text-blue-600">1,200</div>
              <div className="text-sm text-gray-500">نقطة نيل مكتسبة</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
