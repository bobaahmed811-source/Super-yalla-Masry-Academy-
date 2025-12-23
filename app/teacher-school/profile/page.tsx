'use client';
import React from 'react';
import { Star, ShieldCheck, Video, MessageCircle, Play, Languages, GraduationCap } from 'lucide-react';

export default function ProfessionalTeacherProfile() {
  return (
    <div className="min-h-screen bg-white text-[#061121] font-cairo rtl" dir="rtl">
      {/* القسم العلوي: الهوية البصرية */}
      <div className="bg-[#061121] text-white pt-20 pb-32 px-6 rounded-b-[80px] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 text-[20rem] font-black italic">EGYPT</div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center relative z-10">
          {/* صورة المعلمة الكبيرة */}
          <div className="relative group">
            <div className="w-64 h-64 rounded-[40px] overflow-hidden border-4 border-amber-500 shadow-2xl">
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&fit=crop" alt="Teacher" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-white p-3 rounded-2xl border-4 border-[#061121] flex items-center gap-2 font-bold shadow-xl">
               <ShieldCheck size={20} /> موثقة
            </div>
          </div>

          <div className="flex-1 text-center md:text-right">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
               <h1 className="text-5xl font-black text-amber-500">الأستاذة مريم أحمد</h1>
               <div className="bg-white/10 px-4 py-2 rounded-xl flex items-center gap-2 text-amber-400 border border-white/10">
                  <Star fill="currentColor" size={18}/> 4.9 (150 مراجعة)
               </div>
            </div>
            <p className="text-2xl text-blue-100 font-light mb-6 max-w-2xl">
              متخصصة في تعليم الأطفال اللهجة المصرية العامية بأسلوب المحاكاة والتمثيل.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm opacity-80">
              <span className="flex items-center gap-2"><Languages size={18} className="text-amber-500"/> اللغات: العربية (الأم)، الإنجليزية (طلاقة)</span>
              <span className="flex items-center gap-2"><GraduationCap size={18} className="text-amber-500"/> الخبرة: +10 سنوات</span>
            </div>
          </div>

          {/* كارت الحجز السريع */}
          <div className="bg-white p-8 rounded-[40px] text-[#061121] shadow-2xl w-full md:w-80 border-t-8 border-amber-500">
             <div className="text-center mb-6">
                <span className="text-gray-500">سعر الحصة يبدأ من</span>
                <div className="text-4xl font-black text-blue-900">$25/ساعة</div>
             </div>
             <button className="w-full bg-amber-500 text-black font-black py-4 rounded-2xl mb-4 hover:scale-105 transition-all">احجز حصة تجريبية</button>
             <button className="w-full border-2 border-gray-200 font-bold py-4 rounded-2xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm">
                <MessageCircle size={18} /> مراسلة المعلمة
             </button>
          </div>
        </div>
      </div>

      {/* القسم السفلي: الفيديو والوصف */}
      <main className="max-w-6xl mx-auto px-6 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           <div className="lg:col-span-2 space-y-10">
              {/* الفيديو التعريفي */}
              <div className="bg-white p-4 rounded-[50px] shadow-2xl border border-gray-100 group">
                <div className="aspect-video bg-[#0d284e] rounded-[40px] relative flex items-center justify-center overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                   <button className="bg-amber-500 text-white p-8 rounded-full shadow-2xl group-hover:scale-125 transition-all z-10">
                      <Play fill="white" size={40} />
                   </button>
                </div>
              </div>

              {/* النبذة الشخصية */}
              <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
                 <h2 className="text-3xl font-black mb-6">عن دروسي 🍎</h2>
                 <p className="text-gray-600 text-xl leading-relaxed">
                   "أهلاً بكم في عالمي! دروسي ليست مجرد كلمات وقواعد، بل هي رحلة في شوارع القاهرة. نستخدم الأغاني، الكوميكس، والمواقف الحقيقية لنجعل الطفل يتحدث المصرية بطلاقة وثقة وكأنه في بيته."
                 </p>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
