const { GoogleGenerativeAI } = require('@google/generative-ai');
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Xeta' });
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const text = (await (await genAI.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent(req.body.message)).response).text();
    res.status(200).json({ reply: text });
  } catch (e) { res.status(500).json({ message: 'Sistem xətası.' }); }
}
