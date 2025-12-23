'use client';
import { useState } from 'react';
import { Star, Zap } from 'lucide-react';

export default function ChallengeGame() {
  const [solved, setSolved] = useState(false);

  return (
    <div className="min-h-screen bg-[#061121] flex items-center justify-center p-6">
      <div className="bg-[#0f1c2e] p-10 rounded-[50px] border-4 border-amber-500 shadow-[0_0_50px_rgba(245,158,11,0.2)] max-w-2xl w-full text-center">
        <Zap className="mx-auto text-amber-500 mb-4 animate-pulse" size={48} />
        <h2 className="text-3xl font-black text-white mb-6 italic">ما معنى كلمة "ازيك"؟</h2>
        
        <div className="grid grid-cols-1 gap-4">
          {['كيف حالك؟', 'أين تذهب؟', 'ما اسمك؟'].map((ans, i) => (
            <button 
              key={i}
              onClick={() => i === 0 && setSolved(true)}
              className={`p-5 rounded-2xl font-bold text-xl border-2 transition-all ${
                solved && i === 0 ? 'bg-emerald-500 border-emerald-400 text-white' : 'bg-white/5 border-white/10 hover:border-amber-500'
              }`}
            >
              {ans}
            </button>
          ))}
        </div>

        {solved && (
          <div className="mt-8 animate-bounce text-amber-500 font-black flex items-center justify-center gap-2">
            <Star fill="currentColor" /> أحسنتِ! حصلتِ على 10 نقاط نيل <Star fill="currentColor" />
          </div>
        )}
      </div>
    </div>
  );
}
