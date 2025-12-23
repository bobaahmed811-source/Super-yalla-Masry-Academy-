// src/lib/gemini-core.ts

export interface FlowConfig {
  systemPrompt: string;
  temperature?: number;
}

export class GeminiFlow {
  private config: FlowConfig;

  constructor(config: FlowConfig) {
    this.config = config;
  }

  async generate(userInput: string) {
    const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY; 
    const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: `System Instruction: ${this.config.systemPrompt}\n\nUser Input: ${userInput}` }]
        }
      ],
      generationConfig: {
        temperature: this.config.temperature || 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    };

    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      const text = data.candidates[0].content.parts[0].text;
      
      // محاولة تحويل النص لـ JSON لو كان المطلوب JSON
      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    } catch (error) {
      console.error("Gemini Core Error:", error);
      throw new Error("فشل الاتصال بذكاء بسبس!");
    }
  }
}
