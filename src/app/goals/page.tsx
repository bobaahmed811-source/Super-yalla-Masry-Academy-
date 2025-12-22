'use client';
import React, { useState } from 'react';
import { Target, Plane, Briefcase, Heart, Rocket, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function GoalsPage() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const goals = [
    { 
      id: 'travel', 
      title: "السياحة والاستكشاف", 
      desc: "عايز أسافر مصر وأتعامل مع الناس في الشارع والمطاعم بسهولة.",
      icon: <Plane className="text-amber-500" size={40} />,
      color: "border-amber-500/30"
    },
    { 
      id: 'work', 
      title: "العمل والبيزنس", 
      desc: "عايز أتواصل مع شركاء عمل مصريين وأفهم لهجتهم في الاجتماعات.",
      icon: <Briefcase className="text-blue-500" size={40} />,
      color: "border-blue-500/30"
    },
    { 
      id: 'social', 
      title: "التواصل الاجتماعي", 
      desc: "عايز أتكلم مع أصحابي المصريين وأفهم الأفلام والقفشات المصرية.",
      icon: <Heart className="text-red-500" size={40} />,
      color: "border-red-500/30"
    }
  ];

  return (
    <div className="min-h-screen bg-[#061121] text-white font-cairo rtl p-6 flex flex-col items-center" dir="rtl">
      
      {/* رأس الصفحة */}
      <div className="text-center mt-12 mb-16">
        <div className="inline-block p-4 bg-amber-500/10 rounded-full mb-6">
          <Target size={50} className="text-amber-500 animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">ما هو هدفك من تعلم المصرية؟</h1>
        <p className="text-gray-400 text-lg">اختيارك للهدف سيساعد "نوف" في تخصيص رحلتك التعليمية.</p>
      </div>

      {/* خيارات الأهداف */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {goals.map((goal) => (
          <div 
            key={goal.id}
            onClick={() => setSelectedGoal(goal.id)}
            className={`cursor-pointer p-8 rounded-[40px] border-2 transition-all duration-300 relative overflow-hidden group ${
              selectedGoal === goal.id 
              ? 'bg-amber-500 text-black border-white shadow-[0_0_30px_rgba(245,158,11,0.4)] scale-105' 
              : `bg-white/5 ${goal.color} hover:border-amber-500/50`
            }`}
          >
            <div className="mb-6 group-hover:scale-110 transition-transform">{goal.icon}</div>
            <h3 className="text-2xl font-black mb-4">{goal.title}</h3>
            <p className={`font-medium leading-relaxed ${selectedGoal === goal.id ? 'text-black/80' : 'text-gray-400'}`}>
              {goal.desc}
            </p>
            
            {selectedGoal === goal.id && (
              <div className="absolute top-4 left-4">
                <div className="bg-black text-white p-1 rounded-full">
                  <Rocket size={16} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* زر المتابعة */}
      <div className="mt-16 w-full max-w-xs">
        <Link 
          href={selectedGoal ? "/welcome" : "#"} 
          className={`block text-center py-5 rounded-2xl font-black text-xl transition-all ${
            selectedGoal 
            ? 'bg-amber-500 text-black shadow-2xl hover:bg-white' 
            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
          }`}
        >
          حفظ الهدف والمتابعة
        </Link>
      </div>

    </div>
  );
}
