// app/api/gemini/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// هنا نضع المفتاح الذي سنحصل عليه من Google AI Studio
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { userInput, taskType } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
      أنت معلم مصري خفيف الظل في أكاديمية "يلا مصري". 
      المهمة: ${taskType === 'challenge' ? 'أعطِ الطالب تحدي جديد لنطق جملة مصرية' : 'صحح للطالب إجابته'}.
      إجابة الطالب: "${userInput}".
      التعليمات: رد بلهجة مصرية محببة، شجع الطالب، وإذا كان هناك خطأ في النطق أو الكتابة، وضحه بلطف. 
      استخدم إيموجي مصرية.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    return NextResponse.json({ error: "خطأ في الاتصال بالذكاء الاصطناعي" }, { status: 500 });
  }
}
