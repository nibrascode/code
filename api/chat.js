import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Yalnız POST sorğuları dəstəklənir' });
  }

  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Mesaj boş ola bilməz' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ reply: 'Xəta: GEMINI_API_KEY təyin olunmayıb.' });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
    });

    const reply = response.text || 'Cavab alınmadı.';
    return res.status(200).json({ reply });
  } catch (error) {
    console.error('API Xətası:', error);
    return res.status(500).json({ reply: 'Süni intellekt xidmətinə qoşularkən xəta baş verdi: ' + error.message });
  }
}
