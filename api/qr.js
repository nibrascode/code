import QRCode from "qrcode";
import { watch5xx } from "./_ops.js";

function textOf(req) {
  const direct = req.query?.text;
  if (direct) return String(direct).trim();
  try {
    const url = new URL(req.url || "", "https://www.nibrascode.com");
    return String(url.searchParams.get("text") || "").trim();
  } catch {
    return "";
  }
}

async function handler(req, res) {
  const text = textOf(req).slice(0, 500);
  if (!text) {
    res.status(400).end("text");
    return;
  }
  const png = await QRCode.toBuffer(text, {
    type: "png",
    width: 512,
    margin: 2,
    errorCorrectionLevel: "M",
    color: { dark: "#12141a", light: "#ffffff" },
  });
  res.setHeader("Content-Type", "image/png");
  res.setHeader("Content-Disposition", 'inline; filename="nibras-qr.png"');
  res.setHeader("Cache-Control", "public, max-age=86400");
  res.status(200).end(png);
}
export default watch5xx("qr", handler);
