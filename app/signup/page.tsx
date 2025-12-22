'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserPlus, Mail, Lock, User, Star } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'student'
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا مستقبلاً سنضع كود الحفظ في Firebase
    console.log("بيانات التسجيل:", formData);
    
    // توجيه المستخدم للوحة التحكم بعد التسجيل بنجاح
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-[#061121] flex items-center justify-center p-4 text-white font-cairo" dir="rtl">
      <div className="w-full max-w-lg bg-white/5 backdrop-blur-2xl p-10 rounded-[50px] border border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* زخرفة خلفية بسيطة */}
        <Star className="absolute -top-4 -left-4 text-amber-500/20" size={100} />

        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-amber-500 mb-2">انضم للأكاديمية</h1>
          <p className="text-gray-400">كن جزءاً من رحلة استكشاف وادي النيل</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* اختيار نوع الحساب */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {['student', 'teacher', 'parent'].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setFormData({...formData, role: r})}
                className={`py-3 rounded-2xl text-xs font-bold border-2 transition-all ${
                  formData.role === r ? 'border-amber-500 bg-amber-500/10 text-amber-500' : 'border-white/5 bg-white/5 text-gray-400'
                }`}
              >
                {r === 'student' ? 'طالب' : r === 'teacher' ? 'معلمة' : 'ولي أمر'}
              </button>
            ))}
          </div>

          <div className="relative">
            <User className="absolute left-4 top-4 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="الاسم الكامل" 
              className="w-full bg-black/20 border border-white/10 p-4 pl-12 rounded-2xl outline-none focus:border-amber-500 transition-all"
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              required 
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-4 text-gray-500" size={20} />
            <input 
              type="email" 
              placeholder="البريد الإلكتروني" 
              className="w-full bg-black/20 border border-white/10 p-4 pl-12 rounded-2xl outline-none focus:border-amber-500 transition-all"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-4 text-gray-500" size={20} />
            <input 
              type="password" 
              placeholder="كلمة السر" 
              className="w-full bg-black/20 border border-white/10 p-4 pl-12 rounded-2xl outline-none focus:border-amber-500 transition-all"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required 
            />
          </div>

          <button type="submit" className="w-full bg-amber-500 text-[#061121] font-black py-4 rounded-2xl text-xl hover:bg-white transition-all shadow-xl flex items-center justify-center gap-2">
            <UserPlus size={24} /> إنشاء حساب ملكي
          </button>
        </form>

        <p className="text-center mt-8 text-gray-400">
          لديك حساب بالفعل؟ <Link href="/login" className="text-amber-500 font-bold hover:underline">سجل دخولك من هنا</Link>
        </p>
      </div>
    </div>
  );
}
