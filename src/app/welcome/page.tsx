'use client';
import React, { useState } from 'react';
import { Sparkles, Trophy, Crown, ArrowRight, Star, Heart, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function RoyalWelcome() {
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [royalName, setRoyalName] = useState("");

  const goals = [
    { id: 'travel', title: "السياحة في مصر", icon: "🏛️" },
    { id: 'business', title: "العمل والتجارة", icon: "💼" },
    { id: 'fun', title: "حب اللهجة والأفلام", icon: "🎬" },
    { id: 'social', title: "تكوين صداقات مصرية", icon: "🤝" }
  ];

  const pharaonicNames = [
    { name: "أخناتون ذكي", title: "ملك التوحيد والمعرفة" },
    { name: "رمسيس الشجاع", title: "ملك النصر والقوة" },
    { name: "توت عنخ آمون", title: "الملك الذهبي الشاب" },
    { name: "نفرتيتي المبدعة", title: "ملكة الجمال والذكاء" }
  ];

  return (
    <div className="min-h-screen bg-[#061121] text-white font-cairo rtl p-6" dir="rtl">
      <div className="max-w-4xl mx-auto pt-10">
        
        {/* المرحلة 1: الترحيب والأهداف */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-amber-500/10 rounded-full mb-6">
                 <Crown size={60} className="text-amber-500 animate-pulse" />
              </div>
              <h1 className="text-5xl font-black text-amber-500 mb-4 text-shadow-lg">يا أهلاً بك في أكاديمية النيل الملكية</h1>
              <p className="text-blue-200 text-xl font-medium">قبل أن نبدأ رحلتنا مع "نوف"، أخبرنا ما هو هدفك؟</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {goals.map((goal) => (
                <button 
                  key={goal.id}
                  onClick={() => setSelectedGoal(goal.id)}
                  className={`p-8 rounded-[40px] border-2 transition-all flex items-center gap-6 ${selectedGoal === goal.id ? 'bg-amber-500 border-white shadow-[0_0_20px_rgba(245,158,11,0.4)] text-[#061121]' : 'bg-white/5 border-white/10 hover:border-amber-500/50'}`}
                >
                  <span className="text-5xl">{goal.icon}</span>
                  <span className="text-2xl font-black">{goal.title}</span>
                </button>
              ))}
            </div>

            {selectedGoal && (
              <button 
                onClick={() => setStep(2)}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-6 rounded-3xl font-black text-2xl flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-all"
              >
                المتابعة لمراسم التنصيب <ArrowRight />
              </button>
            )}
          </div>
        )}

        {/* المرحلة 2: اختيار الاسم الفرعوني */}
        {step === 2 && (
          <div className="animate-in zoom-in duration-700">
            <div className="text-center mb-12">
              <Star size={50} className="text-amber-400 mx-auto mb-4 animate-spin-slow" />
              <h2 className="text-4xl font-black text-white mb-2">اختر لقبك الفرعوني المستعار</h2>
              <p className="text-blue-200 font-bold italic text-lg">هذا الاسم سيرافقك في كل تحدياتك مع نوف</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {pharaonicNames.map((item) => (
                <div 
                  key={item.name}
                  onClick={() => setRoyalName(item.name)}
                  className={`p-6 rounded-[35px] cursor-pointer border-2 transition-all relative overflow-hidden ${royalName === item.name ? 'bg-white text-[#061121] border-amber-500' : 'bg-[#0f1c2e] border-white/5'}`}
                >
                  <h3 className="text-2xl font-black mb-1">{item.name}</h3>
                  <p className={`text-sm ${royalName === item.name ? 'text-gray-600' : 'text-blue-300'}`}>{item.title}</p>
                  {royalName === item.name && <CheckCircle className="absolute top-4 left-4 text-emerald-500" />}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
               <Link href="/placement-test" className={`block text-center py-6 rounded-3xl font-black text-2xl transition-all shadow-xl ${royalName ? 'bg-amber-500 text-black hover:scale-105' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}>
                  تفعيل اللقب وبدء تحديد المستوى ⚔️
               </Link>
               <button onClick={() => setStep(1)} className="text-blue-300 font-bold hover:underline">العودة للأهداف</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
