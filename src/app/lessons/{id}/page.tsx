'use client';
import { Play, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LessonPage() {
  return (
    <div className="min-h-screen bg-[#061121] text-white p-6 rtl" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <Link href="/dashboard" className="flex items-center gap-2 text-amber-500 mb-8">
          <ArrowRight size={20} /> العودة للوحة التحكم
        </Link>

        {/* فيديو الدرس أو الصورة الرئيسية */}
        <div className="aspect-video bg-black/40 rounded-[40px] border-2 border-white/5 flex items-center justify-center mb-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/egyptian-hieroglyphs.png')] opacity-10"></div>
          <button className="bg-amber-500 text-black p-6 rounded-full hover:scale-110 transition-all z-10">
            <Play fill="black" size={32} />
          </button>
        </div>

        <h1 className="text-3xl font-black text-amber-500 mb-4">الدرس الأول: التحيات في البيت المصري</h1>
        
        <div className="prose prose-invert max-w-none bg-white/5 p-8 rounded-3xl border border-white/10 mb-8">
          <p className="text-xl leading-relaxed text-blue-100">
            في هذا الدرس، سنتعلم كيف نلقي التحية على الأم والأب بلهجة مصرية جميلة.. 
            "صباح الفل يا ماما"، "يسلم ايدك يا بابا".
          </p>
        </div>

        {/* منطقة التفاعل */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-emerald-600/20 border-2 border-emerald-500/50 p-6 rounded-2xl flex items-center justify-between group hover:bg-emerald-600/30">
            <span className="font-bold">هل أنهيت القراءة؟</span>
            <CheckCircle className="text-emerald-500" />
          </button>
          <button className="bg-blue-600/20 border-2 border-blue-500/50 p-6 rounded-2xl flex items-center justify-between group hover:bg-blue-600/30">
            <span className="font-bold">تحميل ملخص الدرس (PDF)</span>
            <FileText className="text-blue-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
