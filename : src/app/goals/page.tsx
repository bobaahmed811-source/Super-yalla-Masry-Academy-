'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Globe, Briefcase, MessageSquare, GraduationCap, ChevronRight, ChevronLeft, Target } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const goals = [
  { id: 'social', label: 'التواصل الاجتماعي', description: 'للتحدث مع الأصدقاء والعائلة.', icon: MessageSquare },
  { id: 'business', label: 'العمل والأعمال', description: 'للتواصل في بيئة العمل.', icon: Briefcase },
  { id: 'tourism', label: 'السياحة والسفر', description: 'للتجول والاستمتاع في مصر.', icon: Globe },
  { id: 'studies', label: 'الدراسة والثقافة', description: 'لفهم أعمق للثقافة والإعلام.', icon: GraduationCap },
];

export default function GoalsPage() {
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState('');
  const router = useRouter();

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else router.push('/'); // العودة للرئيسية بعد الاختيار
  };

  return (
    <div className="min-h-screen bg-nile-dark text-white p-4 md:p-8" style={{ direction: 'rtl' }}>
      <div className="max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <Target className="w-16 h-16 text-gold-accent mx-auto mb-4" />
          <h1 className="text-3xl font-black royal-title">تحديد المصير الملكي</h1>
          <p className="text-sand-ochre mt-2">أخبرينا عن هدفكِ لنخصص لكِ الرحلة المثالية.</p>
        </header>

        <Progress value={step * 50} className="mb-8 h-2 bg-nile border border-gold-accent" />

        <Card className="dashboard-card border-2 border-gold-accent bg-nile-dark shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-white">ما هو هدفكِ الأساسي؟</CardTitle>
            <CardDescription className="text-sand-ochre">اختياركِ سيغير نوع التحديات التي ستظهر لكِ.</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup onValueChange={setSelectedGoal} className="grid grid-cols-1 gap-4">
              {goals.map((goal) => {
                const Icon = goal.icon;
                return (
                  <div key={goal.id} className="relative">
                    <RadioGroupItem value={goal.id} id={goal.id} className="peer sr-only" />
                    <Label
                      htmlFor={goal.id}
                      className="flex items-center gap-4 p-4 rounded-lg border-2 border-sand-ochre bg-nile hover:border-gold-accent peer-data-[state=checked]:border-gold-accent peer-data-[state=checked]:bg-nile-dark cursor-pointer transition-all"
                    >
                      <div className="p-2 bg-nile-dark rounded-full text-gold-accent">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">{goal.label}</p>
                        <p className="text-sm text-sand-ochre">{goal.description}</p>
                      </div>
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>

            <div className="mt-8 flex justify-between">
              <Button 
                onClick={() => setStep(step - 1)} 
                disabled={step === 1}
                className="utility-button"
              >
                <ChevronRight className="ml-2 w-4 h-4" /> السابق
              </Button>
              <Button 
                onClick={handleNext} 
                disabled={!selectedGoal}
                className="cta-button"
              >
                التالي <ChevronLeft className="mr-2 w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
