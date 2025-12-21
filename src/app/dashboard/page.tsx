'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Trophy, BookOpen, Gem, Calendar, Clock, 
  ChevronLeft, ChevronRight, Lock, CheckCircle, 
  Archive, Redo2, UserCircle, Save, Sparkles, Crown
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RoyalStudentDashboard() {
  const router = useRouter();
  const [lang, setLang] = useState('ar');
  const [alias, setAlias] = useState('تحتمس القوي');
  const [points, setPoints] = useState(1200);
  const [progress, setProgress] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  // صورة المستخدم الملكية
  const userImageUrl = "https://googleusercontent.com/profile/picture/0";

  // تحميل البيانات من الذاكرة المحلية (LocalStorage)
  useEffect(() => {
    const savedPoints = localStorage.getItem('nilePoints');
    const savedAlias = localStorage.getItem('userAlias');
    
    if (savedPoints) setPoints(parseInt(savedPoints));
    if (savedAlias) setAlias(savedAlias);

    // تحريك شريط التقدم بتأثير ملكي
    const timer = setTimeout(() => setProgress(65), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleUpdateAlias = (newName: string) => {
    setAlias(newName);
    localStorage.setItem('userAlias', newName);
    setIsEditing(false);
  };

  const isRtl = lang === 'ar';

  return (
    <div className="min-h-screen bg-[#0d284e] p-4 md:p-8 font-cairo text-white selection:bg-amber-400 selection:text-blue-900" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* شريط علوي ملكي */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-10 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="bg-amber-400 p-2 rounded-lg text-blue-900">
            <Crown size={24} />
          </div>
          <span className="text-xl font-black tracking-tighter text-amber-400">YALLA MASRY</span>
        </div>
        
        <select 
          onChange={(e) => setLang(e.target.value)}
          className="bg-[#0b4e8d] text-amber-400 font-bold p-2 rounded-xl border-2 border-amber-400/30 focus:outline-none"
        >
          <option value="ar">العربية (AR)</option>
          <option value="en">English (EN)</option>
        </select>
      </nav>

      <main className="max-w-6xl mx-auto">
        
        {/* هيدر الملف الشخصي الملكي */}
        <section className="relative mb-12 text-center">
          <div className="inline-block relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-amber-400 p-1 shadow-[0_0_50px_rgba(255,215,0,0.3)] overflow-hidden bg-blue-900">
              <img src={userImageUrl} alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute -bottom-2 right-4 bg-amber-400 text-blue-900 p-2 rounded-full shadow-lg border-4 border-[#0d284e]">
              <Sparkles size={24} />
            </div>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-black text-amber-400 drop-shadow-lg uppercase">
            {isRtl ? 'لوحة الأبطال' : 'Heroes Dashboard'}
          </h1>
          
          <div className="mt-4 flex flex-col items-center gap-2">
            {!isEditing ? (
              <div className="flex items-center gap-3 bg-white/5 px-6 py-2 rounded-full border border-white/10">
                <span className="text-2xl font-bold text-amber-200">✨ {alias}</span>
                <button onClick={() => setIsEditing(true)} className="text-xs text-amber-400 hover:underline">تعديل الاسم</button>
              </div>
            ) : (
              <div className="flex gap-2">
                <input 
                  type="text" 
                  defaultValue={alias}
                  id="aliasInput"
                  className="bg-blue-900 border-2 border-amber-400 rounded-lg px-4 py-1 text-white"
                />
                <Button onClick={() => handleUpdateAlias((document.getElementById('aliasInput') as HTMLInputElement).value)} className="bg-amber-400 text-blue-900 font-bold">حفظ</Button>
              </div>
            )}
            <p className="text-blue-300 font-medium tracking-widest uppercase text-sm">
               {isRtl ? 'رتبة: كاتب البردي الملكي' : 'Rank: Royal Scribe'}
            </p>
          </div>
        </section>

        {/* كروت الإحصائيات (تصميم أهرامات صغيرة) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard icon={<Gem className="text-amber-400" />} value={points.toLocaleString()} label={isRtl ? "نقاط النيل" : "Nile Points"} color="border-amber-400" />
          <StatCard icon={<BookOpen className="text-emerald-400" />} value="48" label={isRtl ? "دروس متقنة" : "Lessons"} color="border-emerald-400" />
          <StatCard icon={<Calendar className="text-rose-400" />} value="12" label={isRtl ? "أيام متواصلة" : "Streak"} color="border-rose-400" />
          <StatCard icon={<Clock className="text-sky-400" />} value="5.2" label={isRtl ? "ساعات تعلم" : "Hours"} color="border-sky-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* قسم التحديات والمهمات */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-black text-amber-400 flex items-center gap-3 mb-4">
              <Trophy size={28} /> {isRtl ? 'المهمات الملكية الحالية' : 'Active Missions'}
            </h2>
            
            <ChallengeBox 
              title={isRtl ? "استوديو الكوميكس: بسبس في السوق" : "Comic Studio: Market Day"}
              desc={isRtl ? "سجل صوتك لتمثيل دور البطل مع بسبس" : "Record your voice for the main role"}
              points="+50"
              status="active"
              isRtl={isRtl}
              onClick={() => router.push('/stories/comic-studio')}
            />

            <ChallengeBox 
              title={isRtl ? "تحدي النطق: الحروف الذهبية" : "Speech Challenge: Golden Letters"}
              desc={isRtl ? "أتقن نطق الكلمات المصرية الصعبة" : "Master difficult Egyptian words"}
              points="+30"
              status="locked"
              isRtl={isRtl}
            />
          </div>

          {/* لوحة الصدارة الملكية */}
          <aside className="bg-white/5 backdrop-blur-xl rounded-[40px] p-8 border border-white/10 shadow-3xl flex flex-col items-center">
            <h2 className="text-xl font-black text-amber-400 mb-8 border-b-2 border-amber-400/20 pb-4 w-full text-center">
              👑 {isRtl ? 'أبطال الأكاديمية' : 'Hall of Fame'}
            </h2>
            
            <div className="w-full space-y-4">
               <LeaderItem rank={1} name="سارة النبيلة" pts="2450" />
               <LeaderItem rank={2} name="ياسين الملك" pts="2100" />
               <LeaderItem rank={3} name={alias} pts={points.toString()} current />
            </div>

            {/* شريط التقدم الدائري أو الخطي */}
            <div className="mt-12 w-full">
              <div className="flex justify-between text-xs mb-2 text-amber-200">
                <span>{isRtl ? 'المستوى القادم: حكيم النيل' : 'Next: Nile Sage'}</span>
                <span>{progress}%</span>
              </div>
              <div className="h-4 w-full bg-blue-900/50 rounded-full border border-white/10 overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-amber-600 to-amber-300 shadow-[0_0_15px_rgba(255,215,0,0.5)] transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}

// مكونات التصميم الفرعية (Sub-components)

function StatCard({ icon, value, label, color }: any) {
  return (
    <div className={`bg-white/5 p-6 rounded-[30px] border-b-4 ${color} backdrop-blur-sm hover:scale-105 transition-all text-center group`}>
      <div className="flex justify-center mb-3 group-hover:animate-bounce">{icon}</div>
      <div className="text-3xl font-black mb-1">{value}</div>
      <div className="text-[10px] uppercase tracking-[3px] text-blue-200 font-bold">{label}</div>
    </div>
  );
}

function ChallengeBox({ title, desc, points, status, isRtl, onClick }: any) {
  const active = status === 'active';
  return (
    <div className={`group relative p-6 rounded-3xl border-2 transition-all ${
      active ? 'bg-gradient-to-br from-[#0b4e8d] to-[#0d284e] border-amber-400/50 shadow-xl cursor-pointer hover:border-amber-400' 
             : 'bg-white/5 border-white/5 opacity-50'
    }`} onClick={active ? onClick : undefined}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-blue-200 text-sm">{desc}</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-xs font-black">
             <Gem size={12} /> {points} {isRtl ? 'نقطة' : 'PTS'}
          </div>
        </div>
        {active ? (
          <div className="bg-amber-400 text-blue-900 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
            {isRtl ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </div>
        ) : (
          <Lock size={24} className="text-white/20" />
        )}
      </div>
    </div>
  );
}

function LeaderItem({ rank, name, pts, current }: any) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-2xl border ${
      current ? 'bg-amber-400 border-white text-blue-900 shadow-lg scale-105' : 'bg-white/5 border-white/5'
    }`}>
      <div className="flex items-center gap-4">
        <span className={`text-lg font-black ${current ? 'text-blue-900' : 'text-amber-400'}`}>#{rank}</span>
        <span className="font-bold">{name}</span>
      </div>
      <span className="font-black">{pts} 💎</span>
    </div>
  );
}
