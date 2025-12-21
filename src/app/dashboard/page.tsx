'use client';

import React, { useState, useEffect } from 'react';
import { 
  Trophy, BookOpen, Gem, Calendar, Clock, 
  ChevronLeft, ChevronRight, Lock, CheckCircle, 
  Archive, Redo2, UserCircle, Save 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RoyalDashboard() {
  const [lang, setLang] = useState('ar');
  const [alias, setAlias] = useState('تحتمس القوي');
  const [progress, setProgress] = useState(0);

  // صورة المستخدم (الرابط الذي أرسلتِه)
  const userImageUrl = "https://googleusercontent.com/profile/picture/0";

  // تحريك شريط التقدم عند التحميل
  useEffect(() => {
    const timer = setTimeout(() => setProgress(40), 500);
    return () => clearTimeout(timer);
  }, []);

  const isRtl = lang === 'ar';

  return (
    <div className={`min-h-screen bg-[#0d284e] p-4 md:p-8 font-cairo text-white`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* اختيار اللغة */}
      <select 
        onChange={(e) => setLang(e.target.value)}
        className="fixed top-4 left-4 bg-amber-400 text-blue-900 font-bold p-2 rounded-lg z-50 border-none shadow-lg"
      >
        <option value="ar">العربية</option>
        <option value="en">English</option>
      </select>

      <div className="max-w-6xl mx-auto">
        {/* رأس الصفحة (التاج الملكي) */}
        <header className="text-center mb-8 pb-6 border-b-4 border-amber-400 relative">
          <div className="flex justify-center mb-4">
            <div className="relative">
               {/* صورة المستخدم الملكية */}
               <img 
                src={userImageUrl} 
                alt="Royal Profile" 
                className="w-24 h-24 rounded-full border-4 border-amber-400 shadow-2xl object-cover"
               />
               <div className="absolute -bottom-2 -right-2 bg-amber-400 p-1 rounded-full text-blue-900">
                  <Trophy size={20} />
               </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-amber-400 mb-2">
            {isRtl ? 'لوحة التحكم الملكية' : 'Royal Dashboard'}
          </h1>
          <p className="text-xl text-amber-200 opacity-90">
             {isRtl ? 'أهلاً بك يا بطل:' : 'Welcome, Hero:'} <span className="font-bold underline">{alias}</span>
          </p>
        </header>

        {/* قسم إدارة الاسم المستعار */}
        <section className="bg-[#17365e] p-6 rounded-2xl mb-8 border border-amber-400/30 flex flex-col md:flex-row items-center gap-4 shadow-xl">
           <label className="text-lg font-bold text-amber-200 shrink-0">
             {isRtl ? 'غير اسمك الملكي:' : 'Change Royal Name:'}
           </label>
           <input 
             type="text" 
             value={alias}
             onChange={(e) => setAlias(e.target.value)}
             className="w-full bg-[#0b4e8d] border-2 border-amber-400/50 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-amber-400 transition-all"
             placeholder={isRtl ? 'اكتب اسمك الجديد...' : 'Enter new name...'}
           />
           <Button className="bg-amber-400 hover:bg-amber-500 text-blue-900 font-black px-8 py-2 rounded-xl shrink-0">
              <Save className="ml-2 h-5 w-5" /> {isRtl ? 'حفظ' : 'Save'}
           </Button>
        </section>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<BookOpen />} value="45" label={isRtl ? "كلمات مُتقنة" : "Mastered"} />
          <StatCard icon={<Gem />} value="1200" label={isRtl ? "نقاط النيل" : "Nile Points"} />
          <StatCard icon={<Calendar />} value="7" label={isRtl ? "أيام متواصلة" : "Streak"} />
          <StatCard icon={<Clock />} value="3.5" label={isRtl ? "ساعات العمل" : "Total Hours"} />
        </div>

        {/* التحديات ولوحة الصدارة */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* التحديات */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold border-r-4 border-amber-400 pr-3 mb-6">
              {isRtl ? 'مهامك الملكية القادمة' : 'Upcoming Royal Missions'}
            </h2>
            
            <ChallengeItem 
              title={isRtl ? "القصة المصورة: في السوق" : "Comic: In the Market"}
              desc={isRtl ? "تدريب على حوارات البيع والشراء" : "Practice market dialogues"}
              status="active"
              isRtl={isRtl}
            />
            <ChallengeItem 
              title={isRtl ? "تحدي النطق" : "Pronunciation Challenge"}
              desc={isRtl ? "نطق الحروف المصرية" : "Speak Egyptian letters"}
              status="locked"
              isRtl={isRtl}
            />
          </div>

          {/* لوحة الصدارة */}
          <div className="bg-[#17365e] p-6 rounded-3xl border-2 border-amber-400/50 shadow-2xl">
            <h2 className="text-xl font-black text-amber-400 text-center mb-6">👑 {isRtl ? 'أبطال الأكاديمية' : 'Academy Heroes'}</h2>
            <div className="space-y-4">
               <LeaderRank rank={1} name={isRtl ? "الملكة حتشبسوت" : "Queen Hatshepsut"} points="1500" />
               <LeaderRank rank={2} name={isRtl ? "أمنحتب الحكيم" : "Amenhotep"} points="1350" />
               <LeaderRank rank={3} name={alias} points="1200" active /> {/* اسم الطفل يظهر هنا */}
            </div>

            {/* شريط التقدم الصغير */}
            <div className="mt-8">
               <p className="text-center text-sm mb-2">{isRtl ? 'التقدم للمستوى التالي' : 'Next Level Progress'}</p>
               <div className="w-full bg-blue-900 rounded-full h-4 border border-amber-400/30 overflow-hidden">
                  <div 
                    className="bg-amber-400 h-full transition-all duration-1000 ease-out" 
                    style={{ width: `${progress}%` }}
                  ></div>
               </div>
               <p className="text-center font-bold text-amber-400 mt-2">{progress}%</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// مكونات مساعدة
function StatCard({ icon, value, label }: any) {
  return (
    <div className="bg-[#17365e] p-5 rounded-2xl text-center border-b-4 border-amber-400 hover:-translate-y-1 transition-transform">
      <div className="text-amber-400 flex justify-center mb-2">{icon}</div>
      <div className="text-2xl font-black">{value}</div>
      <div className="text-xs text-blue-200 uppercase tracking-widest">{label}</div>
    </div>
  );
}

function ChallengeItem({ title, desc, status, isRtl }: any) {
  return (
    <div className={`p-5 rounded-2xl flex items-center justify-between transition-all ${
      status === 'active' ? 'bg-[#0b4e8d] border-r-8 border-amber-400 shadow-xl' : 'bg-[#17365e] opacity-50'
    }`}>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-blue-200">{desc}</p>
      </div>
      {status === 'active' ? (
        <Button className="bg-amber-400 text-blue-900 rounded-full font-bold">
          {isRtl ? 'ابدأ' : 'Start'} {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </Button>
      ) : <Lock size={20} className="text-amber-200" />}
    </div>
  );
}

function LeaderRank({ rank, name, points, active }: any) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-xl ${active ? 'bg-amber-400 text-blue-900' : 'bg-[#0b4e8d]'}`}>
      <div className="flex items-center gap-3">
        <span className="font-bold">#{rank}</span>
        <span className="font-bold">{name}</span>
      </div>
      <span className="text-sm font-black">{points} 💎</span>
    </div>
  );
}
