'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogIn, Key, User } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState('student');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا نقوم بتوجيه المستخدم حسب اختياره (مؤقتاً للبرمجة)
    if (role === 'student') router.push('/dashboard');
    else if (role === 'teacher') router.push('/teacher');
    else if (role === 'parent') router.push('/parents');
  };

  return (
    <div className="min-h-screen bg-[#0d284e] flex items-center justify-center p-4 text-white" dir="rtl">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl p-8 rounded-[40px] border border-white/10 shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-amber-400 mb-2">يالا مصري</h1>
          <p className="text-blue-200">مرحباً بكِ في بوابة وادي النيل</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2 mr-2">أنا الآن...</label>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-blue-900/50 border-2 border-white/10 p-4 rounded-2xl outline-none focus:border-amber-400 text-white"
            >
              <option value="student">طالب (بطل النيل)</option>
              <option value="teacher">معلمة (حكيمة المنصة)</option>
              <option value="parent">ولي أمر (راعي الأبطال)</option>
            </select>
          </div>

          <div className="relative">
            <User className="absolute left-4 top-4 text-white/30" size={20} />
            <input type="text" placeholder="اسم المستخدم" className="w-full bg-blue-900/50 border-2 border-white/10 p-4 pl-12 rounded-2xl outline-none focus:border-amber-400" required />
          </div>

          <div className="relative">
            <Key className="absolute left-4 top-4 text-white/30" size={20} />
            <input type="password" placeholder="كلمة السر" className="w-full bg-blue-900/50 border-2 border-white/10 p-4 pl-12 rounded-2xl outline-none focus:border-amber-400" required />
          </div>

          <button type="submit" className="w-full bg-amber-400 text-[#0d284e] font-black py-4 rounded-2xl text-xl hover:scale-105 transition-all shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2">
            <LogIn size={24} /> دخول عالم النيل
          </button>
        </form>
      </div>
    </div>
  );
}
