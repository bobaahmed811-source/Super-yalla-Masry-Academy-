'use client';
import React, { useState } from 'react';
import { BrainCircuit, Send, Trophy, ArrowLeft } from 'lucide-react';

export default function PlacementTest() {
  const [step, setStep] = useState(1);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const evaluateLevel = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput: answer, taskType: 'placement' }),
      });
      const data = await res.json();
      // محاكاة نتيجة التقييم
      setResult({
        level: "متوسط (ابن بلد)",
        advice: data.text,
        nextStep: "/egyptian-school"
      });
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#061121] text-white p-8 font-cairo rtl" dir="rtl">
      <div className="max-w-3xl mx-auto">
        {!result ? (
          <div className="bg-[#0f1c2e] p-10 rounded-[60px] border-2 border-amber-500/20 shadow-2xl">
            <BrainCircuit size={60} className="text-amber-500 mb-6 mx-auto animate-pulse" />
            <h2 className="text-3xl font-black text-center mb-4 text-amber-500">اختبار الذكاء المصري 🧠</h2>
            <p className="text-center text-blue-100 mb-10 text-lg">"نوف بتسألك: لو حد قالك 'نورت مصر'، هترد تقوله إيه؟"</p>
            
            <textarea 
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full bg-black/40 border-2 border-white/10 rounded-3xl p-6 text-xl text-center focus:border-amber-500 outline-none mb-8"
              placeholder="اكتب ردك هنا بالمصري..."
            />

            <button 
              onClick={evaluateLevel}
              disabled={loading}
              className="w-full bg-amber-500 text-black py-5 rounded-2xl font-black text-xl hover:bg-white transition-all shadow-xl disabled:opacity-50"
            >
              {loading ? "جاري تحليل ذكائك..." : "إرسال التحدي للمصحح الذكي"}
            </button>
          </div>
        ) : (
          <div className="bg-white p-10 rounded-[60px] text-[#061121] shadow-2xl animate-in zoom-in duration-500">
            <Trophy size={80} className="text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl font-black text-center mb-2">مستواك هو: {result.level}</h2>
            <div className="bg-amber-100 p-6 rounded-3xl mb-8 italic font-bold leading-relaxed">
              {result.advice}
            </div>
            <Link href={result.nextStep} className="block text-center bg-[#061121] text-white py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-lg">
               ابدأ رحلتك مع نوف الآن 🚀
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
