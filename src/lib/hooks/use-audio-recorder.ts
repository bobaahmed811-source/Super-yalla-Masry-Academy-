// src/app/stories/comic-studio/page.tsx
'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, Square, Wand2, Save, ArrowRight } from 'lucide-react';

export default function ComicStudio() {
    const [scene, setScene] = useState('family');
    const [dialogs, setDialogs] = useState(['...', '...', '...']);
    const [isGenerating, setIsGenerating] = useState(false);

    // دالة توليد الحوار باستخدام Gemini
    const generateDialog = async () => {
        setIsGenerating(true);
        // هنا سننادي على Gemini Flow اللي عملناه
        // سأضع لكِ نصاً تجريبياً الآن
        setTimeout(() => {
            setDialogs([
                "يا ماما، الكشري ده ريحته تجنن!",
                "بالهنا والشفا يا حبيب ماما، كُل وانبسط.",
                "تسلم إيدك، أحلى كشري في الدنيا!"
            ]);
            setIsGenerating(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#e0f2f1] p-8 text-right" dir="rtl">
            <header className="max-w-6xl mx-auto flex justify-between items-center mb-10">
                <h1 className="text-3xl font-bold text-teal-800 font-cairo">استوديو القصص المصورة</h1>
                <Button variant="outline" className="gap-2"> <ArrowRight className="w-4 h-4" /> العودة </Button>
            </header>

            <main className="max-w-6xl mx-auto">
                {/* منطقة التحكم */}
                <section className="bg-white p-6 rounded-2xl shadow-lg mb-10 flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <label className="font-bold">اختر المشهد:</label>
                        <select 
                            value={scene} 
                            onChange={(e) => setScene(e.target.value)}
                            className="p-2 border rounded-lg bg-gray-50"
                        >
                            <option value="market">السوق الشعبي</option>
                            <option value="school">فناء المدرسة</option>
                            <option value="family">العشاء العائلي</option>
                        </select>
                    </div>

                    <Button 
                        onClick={generateDialog} 
                        disabled={isGenerating}
                        className="bg-amber-500 hover:bg-amber-600 text-black font-bold gap-2"
                    >
                        <Wand2 className="w-5 h-5" /> {isGenerating ? 'جاري التأليف...' : 'توليد حوار بالعامية'}
                    </Button>
                </section>

                {/* لوحة القصة (Comic Panels) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {dialogs.map((text, index) => (
                        <ComicPanel key={index} index={index + 1} text={text} />
                    ))}
                </div>

                {/* منطقة التسجيل */}
                <section className="bg-white p-8 rounded-3xl shadow-xl border-4 border-dashed border-teal-200 text-center">
                    <h2 className="text-xl font-bold mb-4">يلا يا بطل.. سجل صوتك وادي الدور!</h2>
                    <div className="flex justify-center gap-4">
                        <Button className="bg-red-500 hover:bg-red-600 rounded-full w-16 h-16 shadow-lg shadow-red-200">
                            <Mic className="w-8 h-8 text-white" />
                        </Button>
                        <Button disabled className="bg-gray-400 rounded-full w-16 h-16">
                            <Square className="w-8 h-8 text-white" />
                        </Button>
                    </div>
                    <p className="mt-4 text-gray-500 text-sm italic">اضغط على الميكروفون وابدأ القراءة</p>
                </section>
            </main>
        </div>
    );
}

// مكون البانل الصغير (Panel Component)
function ComicPanel({ index, text }: { index: number, text: string }) {
    return (
        <div className="relative bg-white border-4 border-black rounded-xl p-4 shadow-[8px_8px_0px_rgba(0,0,0,0.8)] h-64 overflow-hidden">
            <span className="absolute top-2 left-2 bg-black text-white px-2 text-xs font-bold">PANEL {index}</span>
            <div className="flex items-center justify-center h-32 mb-4 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
                {/* صورة تعبيرية للمشهد */}
                <span className="text-4xl">🖼️</span>
            </div>
            {/* فقاعة الكلام */}
            <div className="bg-white border-2 border-black rounded-2xl p-3 relative shadow-md">
                <p className="text-sm font-bold text-gray-800 leading-relaxed">{text}</p>
                <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-r-2 border-b-2 border-black rotate-45"></div>
            </div>
        </div>
    );
}
