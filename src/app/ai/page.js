'import React, { useState, useEffect } from "react";'

export default function AiPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [limitReached, setLimitReached] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    let usage = JSON.parse(localStorage.getItem('n_ai')) || { d: today, c: 0 };
    if (usage.d !== today) {
      usage = { d: today, c: 0 };
      localStorage.setItem('n_ai', JSON.stringify(usage));
    }
    if (usage.c >= 5) setLimitReached(true);
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || loading || limitReached) return;

    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    const today = new Date().toISOString().split('T')[0];
    let usage = JSON.parse(localStorage.getItem('n_ai')) || { d: today, c: 0 };

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
      });
      const data = await res.json();

      if (res.ok) {
        setMessages(prev => [...prev, { role: "bot", text: data.reply }]);
        usage.c++;
        localStorage.setItem('n_ai', JSON.stringify(usage));
        if (usage.c >= 5) setLimitReached(true);
      } else {
        setMessages(prev => [...prev, { role: "bot", text: "Xəta baş verdi." }]);
      }
    } catch (e) {
      setMessages(prev => [...prev, { role: "bot", text: "Şəbəkə xətası." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 20px', backgroundColor: '#f4f7f6', minHeight: '80vh' }}>
      <div style={{ width: '100%', maxWidth: '600px', background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#333', marginTop: 0 }}>Nibras AI</h2>
        <div style={{ height: '400px', overflowY: 'auto', background: '#fafafa', padding: '15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {messages.map((m, idx) => (
            <div key={idx} style={{ padding: '10px 15px', borderRadius: '8px', maxWidth: '80%', lineHeight: '1.4', wordBreak: 'break-word', alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', background: m.role === 'user' ? '#007bff' : '#e9ecef', color: m.role === 'user' ? 'white' : 'black' }}>
              {m.text}
            </div>
          ))}
          {loading && <div style={{ color: '#666', fontStyle: 'italic' }}>Nibras AI düşünür...</div>}
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            onKeyDown={e => e.key === 'Enter' && sendMessage()} 
            placeholder={limitReached ? "Gündəlik limit doldu." : "Sual yaz..."} 
            disabled={limitReached}
            style={{ flexGrow: 1, padding: '12px', border: '1px solid #ccc', borderRadius: '6px', outline: 'none' }} 
          />
          <button onClick={sendMessage} disabled={limitReached || loading} style={{ padding: '12px 20px', background: limitReached ? '#888' : '#28a745', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '6px', fontWeight: 'bold' }}>
            Göndər
          </button>
        </div>
        {limitReached && <p style={{ color: 'red', textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>⚠️ Gündəlik 5 sual limitiniz doldu.</p>}
      </div>
    </div>
  );
}
