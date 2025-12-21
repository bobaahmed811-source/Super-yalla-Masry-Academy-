'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, Square, Wand2, ArrowRight, Save, Play } from 'lucide-react';
import { comicWriterFlow } from '@/lib/flows/comic-writer-flow'; // استيراد الفلو

export default function ComicStudio() {
    const [scene, setScene] = useState('family');
    const [dialogs, setDialogs] = useState([
        "اضغط على العصا السحرية..",
        "..لتوليد حوار مصري مضحك..",
        "..وبعدين سجل صوتك!"
    ]);
    const [isGenerating, setIsGenerating] = useState(false);

    // دالة الربط مع Gemini
    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            // بننادي على الفلو اللي عملناه
            const result = await comicWriterFlow.generate(scene);
            
            // تحديث الحوارات (لو الرد JSON)
            if (result.p1) {
                setDialogs([result.p1, result.p2, result.p3]);
            }
        } catch (error) {
            alert("بسبس بيقولك اتأكدي من مفتاح الـ API!");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#e0f2f1] p-8 text-right font-cairo" dir="rtl">
            {/* الهيدر */}
            <header className="max-w-6xl mx-auto flex justify-between items-center mb-10">
                <h1 className="text-4xl font-black text-teal-800">استوديو الكوميكس 🎨</h1>
                <Button variant="ghost" className="text-teal-700 hover:bg-teal-100">
                    <ArrowRight className="ml-2 h-4 w-4" /> العودة للمجلة
                </Button>
            </header>

            <main className="max-w-5xl mx-auto">
                {/* لوحة التحكم */}
                <Card className="mb-10 border-b-4 border-amber-500 shadow-xl">
                    <CardContent className="p-6 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-gray-700">المشهد:</span>
                            <select 
                                value={scene}
                                onChange={(e) => setScene(e.target.value)}
                                className="bg-gray-50 border-2 border-teal-200 rounded-xl px-4 py-2 focus:outline-none focus:border-amber-500"
                            >
                                <option value="السوق الشعبي">🛒 السوق الشعبي</option>
                                <option value="فناء المدرسة">🏫 فناء المدرسة</option>
                                <option value="العشاء العائلي">🍲 العشاء العائلي</option>
                            </select>
                        </div>

                        <Button 
                            onClick={handleGenerate} 
                            disabled={isGenerating}
                            className="bg-amber-500 hover:bg-amber-600 text-black font-black px-8 py-6 rounded-2xl text-lg shadow-lg"
                        >
                            <Wand2 className="ml-2 h-6 w-6" />
                            {isGenerating ? "بسبس بيكتب..." : "تأليف الحوار السحري"}
                        </Button>
                    </CardContent>
                </Card>

                {/* بانلات الكوميكس */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {dialogs.map((text, index) => (
                        <div key={index} className="relative group">
                            <div className="bg-white border-4 border-black rounded-xl p-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:-translate-y-2">
                                <div className="h-40 bg-teal-50 rounded-lg border-2 border-dashed border-teal-200 flex items-center justify-center text-5xl mb-4">
                                    {index === 0 ? "👦" : index === 1 ? "🐱" : "✨"}
                                </div>
                                {/* فقاعة الكلام */}
                                <div className="bg-white border-2 border-black rounded-2xl p-3 relative min-h-[80px] flex items-center">
                                    <p className="text-md font-bold text-center w-full">{text}</p>
                                    <div className="absolute -top-3 right-6 w-4 h-4 bg-white border-l-2 border-t-2 border-black rotate-45"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* منطقة الدبلجة */}
                <div className="bg-white p-8 rounded-[40px] shadow-2xl border-4 border-teal-600 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Mic className="h-24 w-24 text-teal-900" />
                    </div>
                    <h2 className="text-2xl font-black text-teal-800 mb-6">ميكروفون النجوم 🎤</h2>
                    <div className="flex justify-center gap-6 relative z-10">
                        <Button className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 shadow-xl shadow-red-200 flex items-center justify-center">
                            <Mic className="h-10 w-10 text-white" />
                        </Button>
                        <Button disabled className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                            <Play className="h-10 w-10 text-gray-400" />
                        </Button>
                        <Button className="w-20 h-20 rounded-full bg-teal-600 hover:bg-teal-700 flex items-center justify-center">
                            <Save className="h-10 w-10 text-white" />
                        </Button>
                    </div>
                    <p className="mt-6 text-teal-700 font-bold italic">سجل صوتك وأنت بتمثل الشخصيات!</p>
                </div>
            </main>
        </div>
    );
}
