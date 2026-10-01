export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ success: false, reply: "Yalnız POST sorğusu qəbul olunur." });
    return;
  }

  try {
    const body = await readJson(req);
    const message = String(body.message || "").trim().slice(0, 800);
    if (!message) {
      res.status(400).json({ success: false, reply: "Mesaj boş ola bilməz." });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.status(200).json({
        success: false,
        reply: "AI açarı serverdə yoxdur. Vercel layihəsində GEMINI_API_KEY əlavə edin, sonra yenidən deploy edin.",
      });
      return;
    }

    const upstream = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{
              text: "Sən Nibras AI-san, Nibras Code saytının köməkçisisən. Cavabların qısa, aydın və nəzakətli olsun. İstifadəçi hansı dildə yazırsa, o dildə cavab ver. Tibbi, hüquqi və maliyyə məsləhəti vermə.",
            }],
          },
          contents: [{ role: "user", parts: [{ text: message }] }],
          generationConfig: { temperature: 0.5, maxOutputTokens: 700 },
        }),
      },
    );

    const data = await upstream.json().catch(() => ({}));
    const reply = (data.candidates?.[0]?.content?.parts || [])
      .map((part) => part.text || "")
      .join("")
      .trim();

    if (!upstream.ok || !reply) {
      const detail = data.error?.message || "Model cavab qaytarmadı.";
      res.status(200).json({
        success: false,
        reply: "Süni intellekt indi cavab verə bilmədi. " + detail,
      });
      return;
    }

    res.status(200).json({ success: true, reply });
  } catch (error) {
    res.status(200).json({
      success: false,
      reply: "Server xətası. Bir az sonra yenidən cəhd edin.",
    });
  }
}

async function readJson(req) {
  const body = req.body;
  if (body && typeof body === "object" && !Buffer.isBuffer(body)) return body;
  if (typeof body === "string") return JSON.parse(body || "{}");
  if (Buffer.isBuffer(body)) return JSON.parse(body.toString("utf8") || "{}");
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}
