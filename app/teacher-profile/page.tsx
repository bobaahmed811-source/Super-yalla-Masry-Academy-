'use client';

import React from 'react';
import { 
  Star, CheckCircle, Video, MessageSquare, 
  MapPin, Globe, Award, Play 
} from 'lucide-react';

export default function TeacherProfile() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#061121] font-cairo" dir="rtl">
      
      {/* الجزء العلوي (الهيدر) */}
      <div className="bg-[#061121] text-white pb-20 pt-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
          
          {/* صورة المعلمة */}
          <div className="relative">
            <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-amber-500 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa154da09f5b?q=80&w=400&h=400&auto=format&fit=crop" 
                alt="Teacher Name" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-emerald-500 p-2 rounded-full border-4 border-[#061121]">
              <CheckCircle size={20} className="text-white" />
            </div>
          </div>

          {/* معلومات أساسية */}
          <div className="flex-1 text-center md:text-right">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
              <h1 className="text-4xl font-black text-amber-500">الأستاذة مريم أحمد</h1>
              <span className="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-sm font-bold border border-amber-500/20">خبير لهجة مصرية وعلوم قرآن</span>
            </div>
            
            <p className="text-gray-300 text-lg mb-4 max-w-2xl">
              أساعد الأطفال في المهجر على إتقان لغتهم الأم والارتباط بجذورهم المصرية من خلال أسلوب ترفيهي وتعليمي مبتكر.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <div className="flex items-center gap-2"><MapPin size={16} className="text-amber-500" /> القاهرة، مصر</div>
              <div className="flex items-center gap-2"><Globe size={16} className="text-amber-500" /> تتحدث: العربية، الإنجليزية</div>
              <div className="flex items-center gap-2"><Star size={16} className="fill-amber-500 text-amber-500" /> 4.9 (120 تقييم)</div>
            </div>
          </div>

          {/* زر التواصل السريع */}
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <button className="bg-amber-500 text-black font-black py-4 px-8 rounded-2xl hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2">
              <MessageSquare size={20} /> احجز حصة تجريبية
            </button>
          </div>
        </div>
      </div>

      {/* الجزء السفلي (المحتوى التفصيلي) */}
      <main className="max-w-6xl mx-auto px-6 -mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
        
        {/* العمود الأيمن: الفيديو والنبذة */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* الفيديو التعريفي (مثل Preply) */}
          <section className="bg-white rounded-[32px] p-6 shadow-xl border border-gray-100 overflow-hidden relative group">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Video className="text-amber-500" /> الفيديو التعريفي
            </h3>
            <div className="aspect-video bg-gray-200 rounded-2xl relative flex items-center justify-center">
              {/* هنا سيتم وضع رابط الفيديو الحقيقي مستقبلاً */}
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800" className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-40" />
              <button className="bg-amber-500 text-white p-6 rounded-full shadow-2xl group-hover:scale-110 transition-transform z-10">
                <Play fill="white" size={32} />
              </button>
            </div>
          </section>

          {/* نبذة عني */}
          <section className="bg-white rounded-[32px] p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-black mb-4">عنّي</h3>
            <p className="text-gray-600 leading-relaxed text-lg italic">
              "أؤمن أن التعليم ليس مجرد تلقين، بل هو رحلة استكشاف. في دروسي، نستخدم القصص المصرية والألعاب لنجعل اللغة حية في قلب الطفل."
            </p>
          </section>
        </div>

        {/* العمود الأيسر: الإحصائيات والشهادات */}
        <div className="space-y-6">
          <div className="bg-white rounded-[32px] p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <Award className="text-amber-500" /> المؤهلات
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <p className="text-sm">إجازة في تجويد القرآن الكريم برواية حفص.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <p className="text-sm">دبلوم تربوي في تعليم الأطفال عبر الإنترنت.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <p className="text-sm">خبرة 10 سنوات في تعليم اللهجة المصرية لغير الناطقين بها.</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
