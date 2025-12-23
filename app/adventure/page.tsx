'use client';
import React, { useState } from 'react';
import { Sparkles, Mic, BrainCircuit, Trophy, RefreshCw } from 'lucide-react';

export default function SmartAdventure() {
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const askGemini = async (type: string) => {
    setLoading(true);
    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput: input, taskType: type }),
      });
      const data = await res.json();
      setFeedback(data.text);
    } catch (err) {
      setFeedback("حصلت مشكلة في الاتصال بـ Gemini، حاول تاني يا بطل!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#061121] text-white p-6 rtl" dir="rtl">
      <div className="max-w-4xl mx-auto">
        
        {/* رأس الصفحة */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-amber-500/10 rounded-full mb-4">
            <BrainCircuit size={50} className="text-amber-500 animate-pulse" />
          </div>
          <h1 className="text-4xl font-black text-amber-500">مغامرة الذكاء الاصطناعي</h1>
          <p className="text-blue-200 mt-2 text-lg">Gemini هو معلمك الشخصي اليوم.. هل أنت مستعد؟</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* قسم التحدي الديناميكي */}
          <div className="bg-[#0f1c2e] p-8 rounded-[50px] border-2 border-white/5 shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Trophy className="text-amber-500" /> اطلب تحدياً جديداً
                </h2>
                <button 
                  onClick={() => askGemini('challenge')}
                  className="w-full py-4 bg-amber-500 text-black font-bold rounded-2xl hover:bg-white transition-all mb-6"
                >
                  {loading ? "جاري التفكير..." : "يا Gemini أعطني تحدي مصري!"}
                </button>

                <textarea 
                  className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 mb-4 outline-none focus:border-amber-500"
                  placeholder="اكتب إجابتك أو نطقك هنا..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />

                <button 
                  onClick={() => askGemini('correction')}
                  className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-400 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles size={20} /> صحح لي يا معلمي الذكي
                </button>
             </div>
          </div>

          {/* صندوق الرد الذكي */}
          {feedback && (
            <div className="bg-white/5 border border-amber-500/30 p-8 rounded-[40px] animate-in fade-in duration-700">
               <div className="flex items-center gap-2 text-amber-500 mb-4 font-black text-xl italic">
                  <Sparkles /> رد Gemini:
               </div>
               <p className="text-2xl leading-relaxed text-blue-50 font-medium">
                  {feedback}
               </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
