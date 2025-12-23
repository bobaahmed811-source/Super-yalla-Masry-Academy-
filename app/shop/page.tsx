'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Coins, Gift, CreditCard, Scroll, Sparkles, Download } from 'lucide-react';

export default function ShopPage() {
  // هنا نفترض أن رصيد نقاط الطالب 1200 نقطة (سيجلب لاحقاً من Firebase)
  const [userPoints, setUserPoints] = useState(1200);

  return (
    <div className="min-h-screen bg-nile-dark text-white p-4 md:p-8">
      {/* رأس الصفحة - بسبس التاجر */}
      <header className="max-w-4xl mx-auto text-center mb-10 border-b-2 border-gold-accent/20 pb-8">
        <div className="flex justify-center mb-4">
           <div className="bg-gold-accent rounded-full p-1 shadow-lg shadow-gold-accent/20">
             {/* هنا نضع صورة بسبس بزي التاجر */}
             <div className="w-24 h-24 bg-nile-blue rounded-full flex items-center justify-center text-4xl">🐱👑</div>
           </div>
        </div>
        <h1 className="text-4xl font-bold text-gold-accent mb-2 font-cairo">بازار كنوز النيل</h1>
        <p className="text-sand-ochre">أهلاً بك يا بطل! رصيدك الحالي: 
            <span className="font-bold text-white mx-2 flex inline-flex items-center">
                {userPoints} <Coins className="w-5 h-5 ml-1 text-yellow-500" />
            </span>
        </p>
      </header>

      <Tabs defaultValue="points" dir="rtl" className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 bg-nile-blue mb-8 border-2 border-gold-accent/20 h-auto p-1">
          <TabsTrigger value="points" className="py-3 data-[state=active]:bg-gold-accent data-[state=active]:text-nile-dark font-bold">
            <Coins className="w-4 h-4 ml-2" /> جوائز النقاط
          </TabsTrigger>
          <TabsTrigger value="gifts" className="py-3 data-[state=active]:bg-purple-500 data-[state=active]:text-white font-bold">
            <Gift className="w-4 h-4 ml-2" /> هدايا الملكة
          </TabsTrigger>
          <TabsTrigger value="cash" className="py-3 data-[state=active]:bg-green-600 data-[state=active]:text-white font-bold">
            <CreditCard className="w-4 h-4 ml-2" /> برديات العامية
          </TabsTrigger>
        </TabsList>

        {/* 1. قسم النقاط */}
        <TabsContent value="points" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard 
            title="خلفية بسبس الذهبية" 
            price="200 نقطة" 
            desc="زين هاتفك بصورة بسبس وهو يرتدي التاج." 
            icon={<Sparkles className="text-yellow-400" />}
            btnColor="bg-yellow-600"
          />
          <ProductCard 
            title="فتح مرحلة التلوين 2" 
            price="500 نقطة" 
            desc="احصل على 10 صور جديدة للأهرامات لتلوينها." 
            icon={<Scroll className="text-blue-400" />}
            btnColor="bg-blue-600"
          />
        </TabsContent>

        {/* 2. قسم الهدايا */}
        <TabsContent value="gifts" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard 
            title="كتاب الترحيب الرقمي" 
            price="مجاناً" 
            desc="كتيب صغير يحتوي على كلمات مصرية شائعة." 
            icon={<Download className="text-purple-400" />}
            btnColor="bg-purple-600"
            isFree={true}
          />
        </TabsContent>

        {/* 3. قسم الكاش (البرديات) */}
        <TabsContent value="cash" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductCard 
            title="برديّة وصفة الماموث" 
            price="300 ج.م" 
            desc="وثيقة تاريخية تشرح طبخ الطعام المصري بالعامية." 
            icon={<Scroll className="text-gold-accent" />}
            btnColor="bg-green-600"
            isCash={true}
          />
          <ProductCard 
            title="تحديات التاكسي" 
            price="500 ج.م" 
            desc="50 حواراً متقدماً لمواقف الشارع المصري." 
            icon={<CreditCard className="text-purple-400" />}
            btnColor="bg-purple-600"
            isCash={true}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// مكون البطاقة المصغر
function ProductCard({ title, price, desc, icon, btnColor, isFree = false, isCash = false }) {
  return (
    <Card className="bg-nile-blue/50 border-2 border-white/10 hover:border-gold-accent/50 transition-all text-white">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">{icon}</div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-sand-ochre/80 text-sm mb-6 h-10">{desc}</p>
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-black text-white">{price}</span>
          <Button className={`${btnColor} font-bold hover:scale-105 transition-transform`}>
            {isFree ? 'تحميل الآن' : isCash ? 'شراء (واتساب)' : 'استبدال بالنقاط'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
