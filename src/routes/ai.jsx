import React, { useState, useEffect, useRef } from 'react';

export default function AiRoute() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [limitReached, setLimitReached] = useState(false);
  const [dailyLimit] = useState(5);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    let usage = JSON.parse(localStorage.getItem('nibras_ai_usage')) || { date: today, count: 0 };
    
    if (usage.date !== today) {
      usage = { date: today, count: 0 };
      localStorage.setItem('nibras_ai_usage', JSON.stringify(usage));
    }
    
    if (usage.count >= dailyLimit) {
      setLimitReached(true);
    }
  }, [dailyLimit]);

  const sendMessage = async () => {
    if (!input.trim() || loading || limitReached) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { 
      id: Date.now(),
      role: 'user', 
      text: userMsg,
      timestamp: new Date()
    }]);
    setLoading(true);

    const today = new Date().toISOString().split('T')[0];
    let usage = JSON.parse(localStorage.getItem('nibras_ai_usage')) || { date: today, count: 0 };

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ message: userMsg })
      });
      
      const data = await res.json();

      if (res.ok && data.success) {
        setMessages(prev => [...prev, { 
          id: Date.now() + 1,
          role: 'assistant', 
          text: data.reply,
          timestamp: new Date()
        }]);
        
        usage.count++;
        localStorage.setItem('nibras_ai_usage', JSON.stringify(usage));
        
        if (usage.count >= dailyLimit) {
          setLimitReached(true);
        }
      } else {
        setMessages(prev => [...prev, { 
          id: Date.now() + 1,
          role: 'error', 
          text: data.reply || 'Xəta baş verdi. Yenidən cəhd edin.',
          timestamp: new Date()
        }]);
      }
    } catch (error) {
      console.error('Network error:', error);
      setMessages(prev => [...prev, { 
        id: Date.now() + 1,
        role: 'error', 
        text: 'Şəbəkə xətası. İnternet bağlantınızı yoxlayın.',
        timestamp: new Date()
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const resetLimit = () => {
    localStorage.removeItem('nibras_ai_usage');
    setLimitReached(false);
    setMessages([]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.background}>
        <div style={styles.blob1}></div>
        <div style={styles.blob2}></div>
        <div style={styles.blob3}></div>
      </div>

      <div style={styles.chatWrapper}>
        <div style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.logo}>
              <span style={styles.logoIcon}>✨</span>
              <div style={styles.logoText}>
                <h1 style={styles.title}>Nibras AI</h1>
                <span style={styles.subtitle}>Premium AI Assistant</span>
              </div>
            </div>
            <div style={styles.limitBadge}>
              <span style={styles.limitIcon}>⚡</span>
              <span style={styles.limitText}>
                {limitReached ? 'Limit doldu' : `${dailyLimit - (JSON.parse(localStorage.getItem('nibras_ai_usage') || '{"count":0}').count)}/${dailyLimit}`}
              </span>
            </div>
          </div>
        </div>

        <div style={styles.messagesContainer}>
          {messages.length === 0 ? (
            <div style={styles.welcomeScreen}>
              <div style={styles.welcomeIcon}>🤖</div>
              <h2 style={styles.welcomeTitle}>Nibras AI-a xoş gəlmisiniz</h2>
              <p style={styles.welcomeText}>Süni intellektlə söhbətə başlayın. Sualınızı aşağıya yazın.</p>
              <div style={styles.featuresGrid}>
                <div style={styles.featureItem}><span>💡</span><span style={styles.featureText}>Sual verin</span></div>
                <div style={styles.featureItem}><span>🎯</span><span style={styles.featureText}>Dəqiq cavab</span></div>
                <div style={styles.featureItem}><span>⚡</span><span style={styles.featureText}>Sürətli</span></div>
              </div>
            </div>
          ) : (
            <div style={styles.messagesList}>
              {messages.map((message) => (
                <div key={message.id} style={{...styles.message, ...styles[message.role]}}>
                  <div style={styles.messageAvatar}>
                    {message.role === 'user' ? '👤' : message.role === 'error' ? '⚠️' : '🤖'}
                  </div>
                  <div style={styles.messageContent}>
                    <div style={styles.messageBubble}>{message.text}</div>
                    <div style={styles.messageTime}>
                      {new Date(message.timestamp).toLocaleTimeString('az-AZ', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              {loading && (
                <div style={{...styles.message, ...styles.assistant}}>
                  <div style={styles.messageAvatar}>🤖</div>
                  <div style={styles.messageContent}>
                    <div className="typing-indicator" style={styles.typingIndicator}>
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <div style={styles.inputContainer}>
          {limitReached && (
            <div style={styles.limitWarning}>
              <span>⚠️</span>
              <div style={styles.warningText}>
                <strong>Gündəlik limit doldu!</strong>
                <span>Sabah yenidən cəhd edə bilərsiniz.</span>
              </div>
              <button onClick={resetLimit} style={styles.resetButton}>Sıfırla</button>
            </div>
          )}
          
          <div style={styles.inputWrapper}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={limitReached ? "Limit doldu..." : "Sualınızı yazın..."}
              disabled={limitReached || loading}
              style={{...styles.input, ...(limitReached ? styles.inputDisabled : {})}}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading || limitReached}
              style={{...styles.sendButton, ...((!input.trim() || loading || limitReached) ? styles.sendButtonDisabled : {})}}
            >
              {loading ? <span style={styles.loadingSpinner}>⟳</span> : <span style={styles.sendIcon}>➤</span>}
            </button>
          </div>
          
          <div style={styles.footer}>
            <span style={styles.footerText}>Powered by Gemini AI</span>
            <span style={styles.footerDot}>•</span>
            <span style={styles.footerText}>Gündəlik limit: {dailyLimit}</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes typing {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-10px); opacity: 1; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.5); border-radius: 10px; }
        ::-webkit-scrollbar-thumb { background: rgba(56, 189, 248, 0.5); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(56, 189, 248, 0.8); }
        .typing-indicator span {
          display: inline-block; width: 8px; height: 8px;
          background-color: #60a5fa; border-radius: 50%; margin: 0 2px;
          animation: typing 1.4s infinite;
        }
        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}

const styles = {
  container: { all: 'initial', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', width: '100vw', minHeight: '100vh', backgroundColor: '#0f172a', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' },
  background: { position: 'absolute', width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 },
  blob1: { position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)', borderRadius: '50%', top: '-200px', right: '-200px', animation: 'float 20s ease-in-out infinite' },
  blob2: { position: 'absolute', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)', borderRadius: '50%', bottom: '-100px', left: '-100px', animation: 'float 15s ease-in-out infinite reverse' },
  blob3: { position: 'absolute', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animation: 'pulse 8s ease-in-out infinite' },
  chatWrapper: { width: '100%', maxWidth: '700px', height: '90vh', backgroundColor: 'rgba(30, 41, 59, 0.7)', backdropFilter: 'blur(20px)', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1, margin: '20px', overflow: 'hidden' },
  header: { padding: '24px', backgroundColor: 'rgba(15, 23, 42, 0.6)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' },
  headerContent: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { display: 'flex', alignItems: 'center', gap: '12px' },
  logoIcon: { fontSize: '28px' },
  logoText: { display: 'flex', flexDirection: 'column' },
  title: { color: '#38bdf8', fontSize: '24px', fontWeight: '700', margin: 0, textShadow: '0 0 20px rgba(56, 189, 248, 0.3)' },
  subtitle: { color: '#94a3b8', fontSize: '12px', fontWeight: '500', letterSpacing: '0.5px' },
  limitBadge: { display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', backgroundColor: 'rgba(56, 189, 248, 0.15)', borderRadius: '20px', border: '1px solid rgba(56, 189, 248, 0.3)' },
  limitIcon: { fontSize: '14px' },
  limitText: { color: '#38bdf8', fontSize: '13px', fontWeight: '600' },
  messagesContainer: { flex: 1, overflowY: 'auto', padding: '24px' },
  welcomeScreen: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '40px 20px' },
  welcomeIcon: { fontSize: '64px', marginBottom: '24px', filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.4))' },
  welcomeTitle: { color: '#f8fafc', fontSize: '28px', fontWeight: '700', marginBottom: '12px' },
  welcomeText: { color: '#94a3b8', fontSize: '15px', marginBottom: '32px', lineHeight: '1.6' },
  featuresGrid: { display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' },
  featureItem: { display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', backgroundColor: 'rgba(56, 189, 248, 0.1)', borderRadius: '12px', border: '1px solid rgba(56, 189, 248, 0.2)', fontSize: '14px', color: '#e2e8f0' },
  featureText: { color: '#e2e8f0', fontSize: '14px', fontWeight: '500' },
  messagesList: { display: 'flex', flexDirection: 'column', gap: '16px' },
  message: { display: 'flex', gap: '12px', animation: 'slideIn 0.3s ease-out' },
  user: { flexDirection: 'row-reverse' },
  assistant: { flexDirection: 'row' },
  error: { flexDirection: 'row' },
  messageAvatar: { width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0, backgroundColor: 'rgba(56, 189, 248, 0.2)', border: '2px solid rgba(56, 189, 248, 0.3)' },
  messageContent: { display: 'flex', flexDirection: 'column', maxWidth: '75%', gap: '4px' },
  messageBubble: { padding: '14px 18px', borderRadius: '18px', fontSize: '15px', lineHeight: '1.5', wordBreak: 'break-word', backgroundColor: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#e2e8f0' },
  messageTime: { fontSize: '11px', color: '#64748b', padding: '0 8px' },
  typingIndicator: { padding: '18px 20px', backgroundColor: 'rgba(56, 189, 248, 0.15)', borderRadius: '18px', border: '1px solid rgba(56, 189, 248, 0.2)', display: 'inline-flex', alignItems: 'center' },
  inputContainer: { padding: '24px', backgroundColor: 'rgba(15, 23, 42, 0.6)', borderTop: '1px solid rgba(255, 255, 255, 0.1)' },
  limitWarning: { display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', backgroundColor: 'rgba(244, 63, 94, 0.15)', border: '1px solid rgba(244, 63, 94, 0.3)', borderRadius: '12px', marginBottom: '12px' },
  warningText: { flex: 1, display: 'flex', flexDirection: 'column', gap: '2px', color: '#fca5a5', fontSize: '13px' },
  resetButton: { padding: '8px 16px', backgroundColor: 'rgba(244, 63, 94, 0.2)', border: '1px solid rgba(244, 63, 94, 0.4)', color: '#f43f5e', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '600' },
  inputWrapper: { display: 'flex', gap: '12px', alignItems: 'center' },
  input: { flex: 1, padding: '16px 20px', backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '2px solid rgba(56, 189, 248, 0.2)', borderRadius: '16px', color: '#f8fafc', fontSize: '15px', outline: 'none', transition: 'all 0.3s' },
  inputDisabled: { opacity: 0.5, cursor: 'not-allowed' },
  sendButton: { padding: '16px 24px', background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)', border: 'none', borderRadius: '16px', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(56, 189, 248, 0.3)' },
  sendButtonDisabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
  sendIcon: { fontSize: '18px', color: '#ffffff', fontWeight: 'bold' },
  loadingSpinner: { fontSize: '20px', color: '#ffffff', animation: 'spin 1s linear infinite' },
  footer: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '12px', fontSize: '12px' },
  footerText: { color: '#64748b', fontWeight: '500' },
  footerDot: { color: '#475569' }
};
