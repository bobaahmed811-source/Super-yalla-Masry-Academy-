'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { BookHeart, Brush, Rabbit, Search } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';

const ActivityCard = ({ title, description, icon: Icon, color, href }: any) => (
  <Link href={href} passHref>
    <Card className="hover:scale-105 transition-transform cursor-pointer flex flex-col items-center justify-center p-6 text-center h-full bg-[#1a3a63] border-2 border-yellow-500/20">
      <CardContent className="p-0 flex flex-col items-center">
        <div className="w-20 h-20 mb-4 rounded-full flex items-center justify-center bg-white/10" style={{border: `3px solid ${color}`}}>
            <Icon style={{ color }} className="w-10 h-10" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2 font-cairo">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </CardContent>
    </Card>
  </Link>
);

export default function KidsPage() {
    // إضافة حماية للتأكد من وجود البيانات
    const guide = placeholderData?.placeholderImages?.find(p => p.id === 'cat-guide');
  
    return (
        <div className="min-h-screen w-full bg-[#0d284e] text-white p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col md:flex-row items-center justify-center text-center gap-6 mb-12 bg-white/5 p-8 rounded-2xl border border-white/10">
                    {guide && (
                         <Image
                            src={guide.imageUrl}
                            alt={guide.description}
                            width={150}
                            height={150}
                            className="rounded-full border-4 border-yellow-500"
                            priority
                        />
                    )}
                    <div>
                        <h1 className="text-4xl font-bold mb-2 font-cairo">أهلاً بكم في مملكة الصغار!</h1>
                        <p className="text-lg md:text-xl text-yellow-500 max-w-2xl">
                            أنا بسبس، القط الفرعوني! هنا، التعلم مغامرة ممتعة مليئة بالألعاب والقصص. هل أنتم مستعدون؟
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ActivityCard title="ألوان الفراعنة" description="لعبة تلوين ممتعة لشخصيات مصر القديمة." icon={Brush} color="#34D399" href="/kids/coloring" />
                    <ActivityCard title="أصوات الحيوانات" description="استمعوا لأصوات الحيوانات بالمصري." icon={Rabbit} color="#F472B6" href="/kids/animal-sounds" />
                    <ActivityCard title="قصص الأنبياء" description="قصص مصورة ومروية بأسلوب شيق." icon={BookHeart} color="#60A5FA" href="/kids/prophet-stories" />
                    <ActivityCard title="اكتشف الأثر" description="لعبة ذاكرة ممتعة مع كنوز توت عنخ آمون." icon={Search} color="#FBBF24" href="/kids/artifact-match" />
                </div>
            </div>
        </div>
    );
}
