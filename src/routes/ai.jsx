import React, { useState, useEffect } from 'react';

export default function AiRoute() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
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
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
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
        setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
        usage.c++;
        localStorage.setItem('n_ai', JSON.stringify(usage));
        if (usage.c >= 5) setLimitReached(true);
      } else {
        setMessages(prev => [...prev, { role: 'bot', text: 'Xəta baş verdi.' }]);
      }
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Şəbəkə xətası.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ all: 'initial', fontFamily: 'sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', minHeight: '90vh', backgroundColor: '#0f172a', boxSizing: 'border-box', padding: '15px' }}>
      <div style={{ width: '100%', maxWidth: '480px', backgroundColor: '#1e293b', padding: '20px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <h2 style={{ color: '#38bdf8', textAlign: 'center', margin: '0 0 15px 0', fontSize: '22px', fontFamily: 'sans-serif' }}>Nibras AI</h2>
        <div style={{ height: '360px', overflowY: 'auto', backgroundColor: '#0f172a', padding: '12px', marginBottom: '15px', borderRadius: '10px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', gap: '10px', boxSizing: 'border-box' }}>
          {messages.length === 0 && (
            <div style={{ color: '#64748b', textAlign: 'center', marginTop: '140px', fontSize: '14px', fontFamily: 'sans-serif' }}>Salam! Sualınızı aşağıya yazın.</div>
          )}
          {messages.map((m, idx) => (
            <div key={idx} style={{ padding: '10px 14px', borderRadius: '10px', maxWidth: '80%', lineHeight: '1.4', wordBreak: 'break-word', fontSize: '14px', alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', backgroundColor: m.role === 'user' ? '#0ea5e9' : '#334155', color: '#ffffff', fontFamily: 'sans-serif' }}>
              {m.text}
            </div>
          ))}
          {loading && <div style={{ color: '#94a3b8', fontStyle: 'italic', fontSize: '13px', fontFamily: 'sans-serif' }}>Nibras AI düşünür...</div>}
        </div>
        <div style={{ display: 'flex', gap: '8px', boxSizing: 'border-box' }}>
          <input 
            type="text" 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            onKeyDown={e => e.key === 'Enter' && sendMessage()} 
            placeholder={limitReached ? "Gündəlik limit doldu." : "Sualınızı yazın..."} 
            disabled={limitReached || loading}
            style={{ flexGrow: 1, padding: '12px', backgroundColor: '#0f172a', border: '1px solid #475569', color: '#ffffff', borderRadius: '8px', outline: 'none', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'sans-serif' }} 
          />
          <button onClick={sendMessage} disabled={limitReached || loading} style={{ padding: '12px 18px', backgroundColor: limitReached ? '#475569' : '#0ea5e9', color: '#ffffff', border: 'none', cursor: 'pointer', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'sans-serif' }}>
            Göndər
          </button>
        </div>
        {limitReached && <p style={{ color: '#f43f5e', textAlign: 'center', fontWeight: 'bold', fontSize: '12px', margin: '10px 0 0 0', fontFamily: 'sans-serif' }}>⚠️ Gündəlik 5 sual limitiniz doldu.</p>}
      </div>
    </div>
  );
}
