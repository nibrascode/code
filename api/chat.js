import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Yalnız POST sorğuları dəstəklənir' });
  }

  try {
    const { message } = req.body;
    
    if (!message || message.trim().length === 0) {
      return res.status(400).json({ error: 'Mesaj boş ola bilməz' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('❌ GEMINI_API_KEY tapılmadı');
      return res.status(500).json({ 
        error: 'Server konfiqurasiya xətası',
        reply: 'Xəta: GEMINI_API_KEY təyin olunmayıb.' 
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: message,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024,
      },
    });

    const reply = response.text?.trim() || 'Cavab alınmadı.';
    
    return res.status(200).json({ 
      success: true, 
      reply,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ API Xətası:', error.message);
    return res.status(500).json({ 
      success: false,
      error: error.message,
      reply: 'Süni intellekt xidmətinə qoşularkən xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.' 
    });
  }
}
