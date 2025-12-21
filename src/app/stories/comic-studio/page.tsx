'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, Square, Wand2, ArrowRight, Save, Play } from 'lucide-react';
import { comicWriterFlow } from '@/lib/flows/comic-writer-flow';
// 1. هنا استدعاء المحرك الصوتي اللي حفظناه في مجلد hooks
import { useVoiceRecorder } from '@/hooks/use-voice-recorder'; 

export default function ComicStudio() {
    const [scene, setScene] = useState('family');
    const [dialogs, setDialogs] = useState([
        "اضغط على العصا السحرية..",
        "..لتوليد حوار مصري مضحك..",
        "..وبعدين سجل صوتك!"
    ]);
    const [isGenerating, setIsGenerating] = useState(false);

    // 2. تفعيل وظائف الميكروفون داخل الصفحة
    const { isRecording, audioUrl, startRecording, stopRecording } = useVoiceRecorder();

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            const result = await comicWriterFlow.generate(scene);
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
            <header className="max-w-6xl mx-auto flex justify-between items-center mb-10">
                <h1 className="text-4xl font-black text-teal-800">استوديو الكوميكس 🎨</h1>
                <Button variant="ghost" className="text-teal-700 hover:bg-teal-100">
                    <ArrowRight className="ml-2 h-4 w-4" /> العودة
                </Button>
            </header>

            <main className="max-w-5xl mx-auto">
                {/* منطقة التحكم والـ Gemini */}
                <Card className="mb-10 border-b-4 border-amber-500 shadow-xl">
                    <CardContent className="p-6 flex flex-wrap items-center justify-between gap-4">
                        <select 
                            value={scene}
                            onChange={(e) => setScene(e.target.value)}
                            className="bg-gray-50 border-2 border-teal-200 rounded-xl px-4 py-2"
                        >
                            <option value="السوق الشعبي">🛒 السوق الشعبي</option>
                            <option value="فناء المدرسة">🏫 فناء المدرسة</option>
                            <option value="العشاء العائلي">🍲 العشاء العائلي</option>
                        </select>

                        <Button onClick={handleGenerate} disabled={isGenerating} className="bg-amber-500 hover:bg-amber-600 text-black font-black">
                            <Wand2 className="ml-2 h-6 w-6" />
                            {isGenerating ? "بسبس بيكتب..." : "تأليف الحوار"}
                        </Button>
                    </CardContent>
                </Card>

                {/* بانلات الكوميكس */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {dialogs.map((text, index) => (
                        <div key={index} className="bg-white border-4 border-black rounded-xl p-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                            <div className="h-40 bg-teal-50 rounded-lg flex items-center justify-center text-5xl mb-4">
                                {index === 0 ? "👦" : index === 1 ? "🐱" : "✨"}
                            </div>
                            <div className="bg-white border-2 border-black rounded-2xl p-3 relative min-h-[80px] flex items-center italic">
                                "{text}"
                            </div>
                        </div>
                    ))}
                </div>

                {/* منطقة الدبلجة (هنا بنستخدم استدعاء الميكروفون) */}
                <div className="bg-white p-8 rounded-[40px] shadow-2xl border-4 border-teal-600 text-center">
                    <h2 className="text-2xl font-black text-teal-800 mb-6">ميكروفون النجوم 🎤</h2>
                    
                    <div className="flex justify-center gap-6">
                        {/* زر التسجيل / الإيقاف */}
                        {!isRecording ? (
                            <Button onClick={startRecording} className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 shadow-lg">
                                <Mic className="h-10 w-10 text-white" />
                            </Button>
                        ) : (
                            <Button onClick={stopRecording} className="w-20 h-20 rounded-full bg-black animate-pulse">
                                <Square className="h-10 w-10 text-white" />
                            </Button>
                        )}

                        {/* زر الاستماع (يظهر فقط بعد التسجيل) */}
                        {audioUrl && (
                            <Button onClick={() => new Audio(audioUrl).play()} className="w-20 h-20 rounded-full bg-green-500 shadow-lg">
                                <Play className="h-10 w-10 text-white" />
                            </Button>
                        )}

                        <Button className="w-20 h-20 rounded-full bg-teal-600">
                            <Save className="h-10 w-10 text-white" />
                        </Button>
                    </div>
                    
                    <p className="mt-6 text-teal-700 font-bold">
                        {isRecording ? "بسبس بيسمعك.. اتكلم!" : "اضغط على الميكروفون وابدأ التمثيل"}
                    </p>
                </div>
            </main>
        </div>
    );
}
