// app.js
const APP_VERSION = '1.1.0';
const speakerIconSvg = '<svg class="panel-speaker-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h4l5-4v12l-5-4H4z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M16 9c2 1.5 2 4.5 0 6M18.5 6.8c3.2 2.8 3.2 7.6 0 10.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
const panelBookIconSvg = '<svg class="panel-book-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M4 6c5-2 9-1 12 2v19c-4-3-8-3-12-1z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M28 6c-5-2-9-1-12 2v19c4-3 8-3 12-1z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M16 8v19" stroke="#ffe99a" stroke-width="1.5" stroke-linecap="round"/></svg>';
const calendarIconSvg = '<svg class="panel-calendar-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M7 3v4M17 3v4M3 10h18" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M8 14h3M13 14h3M8 17h3" stroke="#ffe99a" stroke-width="1.2" stroke-linecap="round"/></svg>';

function normalizeAzerbaijaniPastSuffix(text) {
    return text.replace(/(da|də|ta|tə|dı)$/u, (suffix, _match, offset, whole) => {
        const stem = whole.slice(0, offset);
        const lastVowel = [...stem].reverse().find(char => 'aıouəeiöü'.includes(char));
        return 'əeiöü'.includes(lastVowel || '') ? 'di' : 'dı';
    }).replace(/dı$/u, (suffix, offset, whole) => {
        const stem = whole.slice(0, offset);
        const lastVowel = [...stem].reverse().find(char => 'aıouəeiöü'.includes(char));
        return 'əeiöü'.includes(lastVowel || '') ? 'di' : suffix;
    });
}

function normalizeAzerbaijaniPastTranslation(text) {
    return String(text || '').split(',').map(part => {
        let phrase = part.trim()
            .replace(/maqdı$/u, 'dı')
            .replace(/məkdi$/u, 'di');

        phrase = phrase.replace(/([^\s,]+)(maq|mək)$/u, (_whole, stem) => {
            const lastVowel = [...stem].reverse().find(char => 'aıouəeiöü'.includes(char));
            return `${stem}${'əeiöü'.includes(lastVowel || '') ? 'di' : 'dı'}`;
        });

        return normalizeAzerbaijaniPastSuffix(phrase);
    }).filter(Boolean).join(', ');
}

function normalizeAzerbaijaniFormTranslation(text, kind) {
    if (kind === 'past') return normalizeAzerbaijaniPastTranslation(text);
    return String(text || '').trim()
        .replace(/maqır$/u, 'ır')
        .replace(/məkir$/u, 'ir')
        .replace(/maqdı$/u, 'dı')
        .replace(/məkdi$/u, 'di');
}

const VERIFIED_FORM_TRANSLATION_OVERRIDES = {
    // ضَاعَ — “itməy” lüğəvi tərcümə deyil; zamanlara uyğun formalar:
    498: { past: 'itdi', present: 'itir', imperative: 'it!' }
};

function normalizeAzerbaijaniExampleAction(formTranslation) {
    let action = String(formTranslation || '').trim();
    if (action.includes(',')) {
        action = action.split(',').pop().trim();
    }
    action = action.replace(/maqır$/u, 'ır').replace(/məkir$/u, 'ir');
    action = action.replace(/maqdı$/u, 'dı').replace(/məkdi$/u, 'di');
    return normalizeAzerbaijaniPastSuffix(action)
        .replace(/\bgetır\b/gu, 'gedir')
        .replace(/\byeır\b/gu, 'yeyir')
        .replace(/\betır\b/gu, 'edir')
        .replace(/\bverır\b/gu, 'verir')
        .replace(/\bqayıtır\b/gu, 'qayıdır')
        .replace(/\bdeır\b/gu, 'deyir')
        .replace(/\bolmaır\b/gu, 'olmur')
        .replace(/aır\b/gu, 'ayır')
        .replace(/əır\b/gu, 'əyir')
        .replace(/\bdedı\b/gu, 'dedi')
        .replace(/\betdı\b/gu, 'etdi')
        .replace(/\byedı\b/gu, 'yedi')
        .replace(/\bgetdı\b/gu, 'getdi')
        .replace(/\bsevdı\b/gu, 'sevdi')
        .replace(/\bseçdı\b/gu, 'seçdi')
        .replace(/\bkeçdı\b/gu, 'keçdi')
        .replace(/\bverdı\b/gu, 'verdi')
        .replace(/\bdün\b/gu, 'dünən');
}

function normalizeVerbExampleTranslations() {
    for (const verb of verbsData) {
        for (const [kind, form] of Object.entries(verb.forms || {})) {
            const override = VERIFIED_FORM_TRANSLATION_OVERRIDES[verb.id]?.[kind];
            form.translation = override || normalizeAzerbaijaniFormTranslation(form.translation, kind);
            const action = normalizeAzerbaijaniExampleAction(form.translation);
            for (const example of form.examples || []) {
                if (kind === 'past' || /أَمْس|الْأَمْس|بالأمس/u.test(example.arabic)) {
                    example.translation = `O, dünən ${action}.`;
                } else if (kind === 'present' || /الآن|الْآن/u.test(example.arabic)) {
                    example.translation = `O, indi ${action}.`;
                } else if (kind === 'imperative') {
                    example.translation = action;
                }
            }
        }
    }
}

normalizeVerbExampleTranslations();

// Korlanmış localStorage dəyəri tətbiqi çökdürməsin deyə təhlükəsiz oxuma
function safeParse(key, fallback, kind) {
    try {
        const raw = localStorage.getItem(key);
        if (raw === null || raw === '') return fallback;
        const v = JSON.parse(raw);
        if (kind === 'array' && !Array.isArray(v)) return fallback;
        if (kind === 'object' && (v === null || typeof v !== 'object' || Array.isArray(v))) return fallback;
        return v;
    } catch (e) {
        return fallback;
    }
}
function safeNum(key, fallback, isInt) {
    const v = isInt ? parseInt(localStorage.getItem(key), 10) : parseFloat(localStorage.getItem(key));
    return Number.isFinite(v) ? v : fallback;
}

// ==================== STATE ====================
let learnedVerbs = safeParse('learnedVerbs', [], 'array');
let learnedFlashcards = safeParse('learnedFlashcards', [], 'array');
let learnedDialogues = safeParse('learnedDialogues', [], 'array');
let answeredQuestions = safeParse('answeredQuestions', [], 'array');
let favoriteVerbs = safeParse('favoriteVerbs', [], 'array');
let favoriteFlashcards = safeParse('favoriteFlashcards', [], 'array');
let learnedWords = safeParse('learnedWords', [], 'array');
let favoriteWords = safeParse('favoriteWords', [], 'array');
let notificationSettings = safeParse('notificationSettings', {"enabled":false,"time":"19:00","lastNotifiedDate":null}, 'object');
let hideHarakat = localStorage.getItem('hideHarakat') === 'true';
let arabicFontScale = safeNum('arabicFontScale', 1, false);
let dailyGoalXp = safeNum('dailyGoalXp', 50, true);
let dailyXpLog = safeParse('dailyXpLog', {}, 'object');
let difficultVerbs = safeParse('difficultVerbs', [], 'array');
let difficultFlashcards = safeParse('difficultFlashcards', [], 'array');
let difficultQuestions = safeParse('difficultQuestions', [], 'array');
let srsData = safeParse('srsData', {}, 'object');

// Cari mövqe indeksləri (bölmə daxilində irəli/geri getmək üçün)
let currentVerbIndex = 0;
let currentDialogueIndex = 0;
let currentQuestionIndex = 0;

// ==================== İRƏLİLƏYİŞ SİSTEMİ (XP, SƏVIYYƏ, SERİYA, NİŞANLAR) ====================
const XP_PER_VERB = 10;
const XP_PER_DIALOGUE = 10;
const XP_PER_CORRECT_ANSWER = 5;

const LEVELS = [
    { name: 'Başlanğıc', xpRequired: 0 },
    { name: 'A1', xpRequired: 100 },
    { name: 'A2', xpRequired: 300 },
    { name: 'B1', xpRequired: 600 },
    { name: 'B2', xpRequired: 1000 },
    { name: 'C1', xpRequired: 1500 },
    { name: 'C2', xpRequired: 2200 }
];

const BADGES = [
    { id: 'first_verb', icon: '🌱', name: 'İlk addım', desc: 'İlk feili öyrən', check: s => s.learnedVerbsCount >= 1 },
    { id: 'verbs_10', icon: '📗', name: '10 Söz', desc: '10 feil öyrən', check: s => s.learnedVerbsCount >= 10 },
    { id: 'verbs_50', icon: '📘', name: '50 Söz', desc: '50 feil öyrən', check: s => s.learnedVerbsCount >= 50 },
    { id: 'verbs_150', icon: '📙', name: '150 Söz', desc: '150 feil öyrən', check: s => s.learnedVerbsCount >= 150 },
    { id: 'verbs_all', icon: '🏅', name: 'Bütün əsas feillər', desc: 'Bütün əsas feilləri öyrən', check: s => s.learnedVerbsCount >= getStandaloneVerbCount() },
    { id: 'dialogues_all', icon: '💬', name: 'Dialoq ustası', desc: 'Bütün dialoqları bitir', check: s => s.learnedDialoguesCount >= dialoguesData.length },
    { id: 'tests_all', icon: '🏆', name: 'Test çempionu', desc: 'Bütün testləri həll et', check: s => s.answeredCount >= questionsData.length },
    { id: 'streak_7', icon: '🔥', name: '7 günlük seriya', desc: '7 gün ardıcıl davam et', check: s => s.longestStreak >= 7 },
    { id: 'streak_30', icon: '⚡', name: '30 günlük seriya', desc: '30 gün ardıcıl davam et', check: s => s.longestStreak >= 30 }
];

let xp = safeNum('xp', 0, true);
let earnedBadges = safeParse('earnedBadges', [], 'array');
let testStats = safeParse('testStats', {"attempts":0,"correct":0}, 'object');
let streakData = { lastActiveDate: null, currentStreak: 0, longestStreak: 0 };
let difficultWords = safeParse('difficultWords', [], 'array');

function todayStr() { return new Date().toISOString().slice(0, 10); }

function updateStreakOnVisit() {
    const today = todayStr();
    let data = safeParse('streakData', {"lastActiveDate":null,"currentStreak":0,"longestStreak":0}, 'object');
    if (data.lastActiveDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        data.currentStreak = (data.lastActiveDate === yesterday) ? data.currentStreak + 1 : 1;
        data.lastActiveDate = today;
        if (data.currentStreak > data.longestStreak) data.longestStreak = data.currentStreak;
        localStorage.setItem('streakData', JSON.stringify(data));
    }
    streakData = data;
}

function addXp(amount) {
    xp += amount;
    localStorage.setItem('xp', String(xp));

    const today = todayStr();
    dailyXpLog[today] = (dailyXpLog[today] || 0) + amount;
    // Yalnız son 14 günü saxla, köhnə qeydləri təmizlə
    const keys = Object.keys(dailyXpLog).sort();
    if (keys.length > 14) {
        keys.slice(0, keys.length - 14).forEach(k => delete dailyXpLog[k]);
    }
    localStorage.setItem('dailyXpLog', JSON.stringify(dailyXpLog));
}

function getTodayXp() {
    return dailyXpLog[todayStr()] || 0;
}

function setDailyGoal(value) {
    dailyGoalXp = parseInt(value, 10);
    localStorage.setItem('dailyGoalXp', String(dailyGoalXp));
}

function onDailyGoalChange(select) {
    setDailyGoal(select.value);
    renderHomeStats();
}

function getLevelInfo(currentXp) {
    let current = LEVELS[0];
    let next = null;
    for (let i = 0; i < LEVELS.length; i++) {
        if (currentXp >= LEVELS[i].xpRequired) {
            current = LEVELS[i];
            next = LEVELS[i + 1] || null;
        }
    }
    return { current, next };
}

function recordTestAttempt(isCorrect) {
    testStats.attempts += 1;
    if (isCorrect) testStats.correct += 1;
    localStorage.setItem('testStats', JSON.stringify(testStats));
}

function checkBadges() {
    const stats = {
        learnedVerbsCount: learnedVerbs.filter(id => getStandaloneVerbs().some(v => v.id === id)).length,
        learnedDialoguesCount: learnedDialogues.length,
        answeredCount: answeredQuestions.length,
        currentStreak: streakData.currentStreak,
        longestStreak: streakData.longestStreak
    };
    const newlyEarned = [];
    BADGES.forEach(b => {
        if (!earnedBadges.includes(b.id) && b.check(stats)) {
            earnedBadges.push(b.id);
            newlyEarned.push(b);
        }
    });
    if (newlyEarned.length > 0) {
        localStorage.setItem('earnedBadges', JSON.stringify(earnedBadges));
        newlyEarned.forEach(showBadgeToast);
    }
}

function showBadgeToast(badge) {
    const toast = document.createElement('div');
    toast.className = 'badge-toast';
    toast.innerHTML = `<span style="font-size:1.6rem;">${badge.icon}</span><div><div class="font-bold" style="font-size:0.9rem;">Yeni nişan!</div><div class="text-white-75" style="font-size:0.8rem;">${badge.name}</div></div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
}

function getDailyWord() {
    const dayIndex = Math.floor(Date.now() / 86400000);
    const standaloneVerbs = getStandaloneVerbs();
    return standaloneVerbs[dayIndex % standaloneVerbs.length];
}

function openDailyWord() {
    const dw = getDailyWord();
    const idx = getStandaloneVerbs().findIndex(v => v.id === dw.id);
    showVerbsSection(idx);
}

function renderHomeStats() {
    const container = document.getElementById('home-stats');
    if (!container) return;
    const { current } = getLevelInfo(xp);
    const dw = getDailyWord();
    const wordProgress = getLearningWordProgress();

    const todayXp = getTodayXp();
    const goalPercent = Math.min(100, Math.round((todayXp / dailyGoalXp) * 100));
    const goalOptions = [20, 50, 100].map(g =>
        `<option value="${g}" ${dailyGoalXp === g ? 'selected' : ''}>${g} XP (~${Math.round(g / 3.3)} dəq)</option>`
    ).join('');

    container.innerHTML = `
        <div class="stats-bar">
            <div class="home-stat">
                <span class="home-stat-icon">♨</span>
                <span class="home-stat-copy">
                    <span class="home-stat-value">${streakData.currentStreak} gün</span>
                    <span class="home-stat-label">Öyrənmə seriyası</span>
                </span>
            </div>
            <div class="home-stat">
                <span class="home-stat-icon">📖</span>
                <span class="home-stat-copy">
                    <span class="home-stat-value">${wordProgress.learned} / ${wordProgress.total}</span>
                    <span class="home-stat-label">Öyrənilən söz</span>
                </span>
            </div>
            <div class="home-stat">
                <span class="home-stat-icon">☆</span>
                <span class="home-stat-copy">
                    <span class="home-stat-value">${current.name}</span>
                    <span class="home-stat-label">Səviyyə</span>
                </span>
            </div>
        </div>
        <div class="goal-card">
            <div class="goal-ring" style="--goal-progress:${goalPercent}%">
                <span>${goalPercent}%</span>
            </div>
            <div class="goal-content">
                <div class="goal-title"><span class="goal-title-icon">◎</span> Gündəlik hədəf</div>
                <div class="goal-summary">${todayXp} / ${dailyGoalXp} XP bu gün</div>
                <div class="goal-progress"><div class="goal-progress-fill" style="width:${goalPercent}%"></div></div>
                <select class="goal-select" onchange="onDailyGoalChange(this)">${goalOptions}</select>
            </div>
        </div>
        <div class="home-daily-word" onclick="openDailyWord()">
            <div class="daily-word-heading">
                <strong>▣ &nbsp; Günün sözü</strong>
                <button class="speak-btn-inline" onclick="event.stopPropagation(); speakArabic('${dw.arabic}')" title="Səsləndir">${speakerIconSvg}</button>
            </div>
            <div class="arabic-text">${displayArabic(dw.arabic)}</div>
            <div class="daily-word-meaning">${dw.meaning}</div>
            <button class="daily-word-cta" onclick="event.stopPropagation(); openDailyWord()"><span>▣</span><span>Sözə bax</span><span>›</span></button>
        </div>
    `;
}

// Statistika səhifəsi
function renderWeeklyChartHtml() {
    const dayNames = ['B.', 'B.e.', 'Ç.a.', 'Ç.', 'C.a.', 'C.', 'Ş.'];
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const key = d.toISOString().slice(0, 10);
        days.push({ key, label: dayNames[d.getDay()], xp: dailyXpLog[key] || 0 });
    }
    const maxXp = Math.max(1, ...days.map(d => d.xp));
    const bars = days.map(d => {
        const heightPct = Math.max(4, Math.round((d.xp / maxXp) * 100));
        const isToday = d.key === todayStr();
        return `
            <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:6px;">
                <span style="font-size:0.7rem; color:var(--text-50);">${d.xp}</span>
                <div style="width:100%; max-width:28px; height:80px; display:flex; align-items:flex-end; background:var(--overlay-08); border-radius:6px; overflow:hidden;">
                    <div style="width:100%; height:${heightPct}%; background:${isToday ? 'linear-gradient(to top, #22c55e, #4ade80)' : 'linear-gradient(to top, #3b82f6, #60a5fa)'}; border-radius:6px 6px 0 0;"></div>
                </div>
                <span style="font-size:0.7rem; color:var(--text-75); font-weight:${isToday ? '700' : '400'};">${d.label}</span>
            </div>
        `;
    }).join('');
    const weeklyTotal = days.reduce((sum, day) => sum + day.xp, 0);

    return `
        <div class="stats-section-card stats-weekly-card">
            <div class="stats-section-heading">
                <div><span class="stats-section-icon">▥</span><strong>Son 7 gün (XP)</strong></div>
                <span>Ümumi: ${weeklyTotal} XP</span>
            </div>
            <div class="stats-chart">${bars}</div>
        </div>
    `;
}

function showStatsSection() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    const { current, next } = getLevelInfo(xp);
    const successRate = testStats.attempts > 0 ? Math.round((testStats.correct / testStats.attempts) * 100) : null;
    const lastActive = streakData.lastActiveDate || todayStr();
    const learnedVerbCount = learnedVerbs.filter(id => getStandaloneVerbs().some(v => v.id === id)).length;
    const learnedDialogueCount = learnedDialogues.length;
    const answeredCount = answeredQuestions.length;
    const verbTotal = getStandaloneVerbCount();
    const dialogueTotal = dialoguesData.length;
    const questionTotal = questionsData.length;
    const progressPercent = (value, total) => total > 0 ? Math.min(100, Math.round((value / total) * 100)) : 0;
    const levelPercent = next
        ? Math.min(100, Math.round(((xp - current.xpRequired) / (next.xpRequired - current.xpRequired)) * 100))
        : 100;
    const levelSubtitle = next ? `${xp} / ${next.xpRequired} XP` : `${xp} XP`;

    let badgesHtml = '';
    BADGES.forEach(b => {
        const earned = earnedBadges.includes(b.id);
        badgesHtml += `
            <div class="stats-badge-item ${earned ? '' : 'locked'}" title="${b.desc}">
                <div class="badge-icon">${b.icon}</div>
                <div class="badge-name">${b.name}</div>
            </div>
        `;
    });

    content.innerHTML = `
        <div class="glass-card fade-in stats-page">
            <div class="stats-title-row">
                <div>
                    <h2>Öyrənmə statistikası</h2>
                    <p>İrəliləyişini izlə və daha çox öyrən</p>
                </div>
                <div class="stats-update">
                    <span>▣</span>
                    <small>Son yenilənmə</small>
                    <strong>${lastActive}</strong>
                </div>
            </div>

            <div class="stats-level-card">
                <div class="stats-level-icon">★</div>
                <div class="stats-level-copy">
                    <span>Səviyyə</span>
                    <strong>${current.name}</strong>
                    <div class="stats-level-track"><i style="width:${levelPercent}%"></i></div>
                    <small>${levelSubtitle}</small>
                </div>
                <span class="stats-card-arrow">›</span>
            </div>

            <div class="stats-metric-grid">
                <div class="stats-metric-card stats-metric-xp">
                    <div class="stats-ring" style="--stats-progress:${levelPercent}%">
                        <strong>${xp}</strong><small>XP</small>
                    </div>
                    <div class="stats-metric-copy"><strong>Ümumi XP</strong><span>${next ? `Davam et, daha çox XP qazan!` : 'Maksimum səviyyə'}</span></div>
                </div>
                <div class="stats-metric-card">
                    <div class="stats-ring" style="--stats-progress:${progressPercent(learnedVerbCount, verbTotal)}%">
                        <strong>${learnedVerbCount}</strong><small>/ ${verbTotal}</small>
                    </div>
                    <div class="stats-metric-copy"><strong>Əsas feillər</strong><span>Öyrənilən / Cəmi</span></div>
                </div>
                <div class="stats-metric-card">
                    <div class="stats-ring" style="--stats-progress:${progressPercent(learnedDialogueCount, dialogueTotal)}%">
                        <strong>${learnedDialogueCount}</strong><small>/ ${dialogueTotal}</small>
                    </div>
                    <div class="stats-metric-copy"><strong>Dialoqlar</strong><span>Öyrənilən / Cəmi</span></div>
                </div>
                <div class="stats-metric-card">
                    <div class="stats-ring" style="--stats-progress:${progressPercent(answeredCount, questionTotal)}%">
                        <strong>${answeredCount}</strong><small>/ ${questionTotal}</small>
                    </div>
                    <div class="stats-metric-copy"><strong>Testlər</strong><span>Tamaml. / Cəmi</span></div>
                </div>
            </div>

            <div class="stats-streak-card">
                <div class="stats-streak-item">
                    <span class="stats-streak-icon">🔥</span>
                    <div><span>Cari seriya</span><strong>${streakData.currentStreak} gün</strong></div>
                </div>
                <div class="stats-streak-item">
                    <span class="stats-streak-icon">▣</span>
                    <div><span>Ən uzun seriya</span><strong>${streakData.longestStreak} gün</strong></div>
                    <span class="stats-card-arrow">›</span>
                </div>
            </div>

            ${renderWeeklyChartHtml()}

            <div class="stats-achievements-heading">
                <strong>♜ &nbsp; Nailiyyətlər</strong>
                <span>${earnedBadges.length}/${BADGES.length} <b>›</b></span>
            </div>
            <div class="stats-badge-strip">${badgesHtml}</div>

            <div class="stats-secondary">
                <span>Test uğuru</span>
                <strong>${successRate === null ? '-' : successRate + '%'}</strong>
            </div>

            <button onclick="resetAllProgress()" class="stats-reset-button">Proqressi sıfırla</button>
        </div>
    `;
}

function showSettingsSection() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">⚙️ Ayarlar</h2>
                <button onclick="showMainMenu()" class="close-btn">✕</button>
            </div>
            ${renderSettingsCardHtml()}
            ${renderNotificationCardHtml()}
            ${renderBackupCardHtml()}
        </div>
    `;
}

// ==================== UTILITY FUNCTIONS ====================
function saveLearnedVerbs() { localStorage.setItem('learnedVerbs', JSON.stringify(learnedVerbs)); }
function saveLearnedDialogues() { localStorage.setItem('learnedDialogues', JSON.stringify(learnedDialogues)); }
function saveAnsweredQuestions() { localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions)); }
function saveFavoriteVerbs() { localStorage.setItem('favoriteVerbs', JSON.stringify(favoriteVerbs)); }
function toggleFavorite(id) {
    if (favoriteVerbs.includes(id)) {
        favoriteVerbs = favoriteVerbs.filter(x => x !== id);
    } else {
        favoriteVerbs.push(id);
    }
    saveFavoriteVerbs();
}

// ==================== MƏNİM SƏHVLƏRİM (ÇƏTİN SÖZLƏR/SUALLAR) ====================
function saveDifficultVerbs() { localStorage.setItem('difficultVerbs', JSON.stringify(difficultVerbs)); }
function saveDifficultQuestions() { localStorage.setItem('difficultQuestions', JSON.stringify(difficultQuestions)); }

function markVerbDifficult(id) {
    if (!difficultVerbs.includes(id)) {
        difficultVerbs.push(id);
        saveDifficultVerbs();
    }
}
function unmarkVerbDifficult(id) {
    if (difficultVerbs.includes(id)) {
        difficultVerbs = difficultVerbs.filter(x => x !== id);
        saveDifficultVerbs();
    }
}
function markQuestionDifficult(id) {
    if (!difficultQuestions.includes(id)) {
        difficultQuestions.push(id);
        saveDifficultQuestions();
    }
}
function unmarkQuestionDifficult(id) {
    if (difficultQuestions.includes(id)) {
        difficultQuestions = difficultQuestions.filter(x => x !== id);
        saveDifficultQuestions();
    }
}

function getNextUnlearnedVerb() {
    return getStandaloneVerbs().find(v => !learnedVerbs.includes(v.id)) || null;
}
function getNextUnlearnedDialogue() { return dialoguesData.find(d => !learnedDialogues.includes(d.id)) || null; }
function getNextUnansweredQuestion() { return questionsData.find(q => !answeredQuestions.includes(q.id)) || null; }

// ==================== TEMA (QARANLIQ / AÇIQ) ====================
function applyTheme(theme) {
    const btn = document.getElementById('theme-toggle-btn');
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        if (btn) btn.textContent = '🌙';
    } else {
        document.body.classList.remove('light-theme');
        if (btn) btn.textContent = '☀️';
    }
}

function initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    applyTheme(saved);
}

function toggleTheme() {
    const current = localStorage.getItem('theme') || 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    applyTheme(next);
}

function initVersionTag() {
    const el = document.getElementById('version-tag');
    if (el) el.textContent = 'v' + APP_VERSION;
}

function resetAllProgress() {
    localStorage.removeItem('learnedVerbs');
    localStorage.removeItem('learnedFlashcards');
    localStorage.removeItem('learnedDialogues');
    localStorage.removeItem('answeredQuestions');
    localStorage.removeItem('favoriteFlashcards');
    localStorage.removeItem('xp');
    localStorage.removeItem('earnedBadges');
    localStorage.removeItem('testStats');
    localStorage.removeItem('streakData');
    localStorage.removeItem('difficultVerbs');
    localStorage.removeItem('difficultFlashcards');
    localStorage.removeItem('difficultWords');
    localStorage.removeItem('difficultQuestions');
    localStorage.removeItem('srsData');
    localStorage.removeItem('dailyXpLog');
    localStorage.removeItem('learnedWords');
    learnedVerbs = [];
    learnedFlashcards = [];
    learnedDialogues = [];
    answeredQuestions = [];
    xp = 0;
    earnedBadges = [];
    testStats = { attempts: 0, correct: 0 };
    difficultVerbs = [];
    difficultFlashcards = [];
    favoriteFlashcards = [];
    difficultWords = [];
    difficultQuestions = [];
    srsData = {};
    dailyXpLog = {};
    learnedWords = [];
    currentVerbIndex = 0;
    currentDialogueIndex = 0;
    currentQuestionIndex = 0;
    testDeck = questionsData;
    testMode = 'normal';
    updateStreakOnVisit();
    showMainMenu();
}

function normalizeArabic(str) {
    return str
        .replace(/[\u064B-\u0652\u0670\u0640]/g, '')
        .replace(/[أإآٱ]/g, 'ا')
        .replace(/ى/g, 'ي')
        .replace(/ة/g, 'ه')
        .trim()
        .toLowerCase();
}

// ==================== HƏRƏKƏSIZ OXU REJIMI & ŞRİFT ÖLÇÜSÜ ====================
function stripHarakat(text) {
    return text.replace(/[\u064B-\u0652\u0670\u0640]/g, '');
}

function displayArabic(text) {
    return hideHarakat ? stripHarakat(text) : text;
}

function setHideHarakat(value) {
    hideHarakat = value;
    localStorage.setItem('hideHarakat', String(value));
}

function toggleHideHarakatSetting(checkbox) {
    setHideHarakat(checkbox.checked);
    // Açıq olan istənilən ekranı təzələmək üçün ən sadə yol: statistika ekranını yenidən çək
    showSettingsSection();
}

function applyArabicFontScale() {
    document.documentElement.style.setProperty('--arabic-scale', String(arabicFontScale));
}

function setArabicFontScale(value) {
    arabicFontScale = parseFloat(value);
    localStorage.setItem('arabicFontScale', String(arabicFontScale));
    applyArabicFontScale();
}

function onArabicFontSliderChange(slider) {
    setArabicFontScale(slider.value);
    const label = document.getElementById('arabic-scale-label');
    if (label) label.textContent = Math.round(arabicFontScale * 100) + '%';
}

function clampIndex(index, length) {
    if (index < 0) return 0;
    if (index > length - 1) return length - 1;
    return index;
}

// ==================== RENDER FUNCTIONS ====================
function showMainMenu() {
    document.getElementById('content-area').innerHTML = '';
    document.getElementById('content-area').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
    renderHomeStats();
}

// Feillər bölməsi
// ==================== SÖZ ÖYRƏNMƏYƏ BAŞLA (Feillər / Sözlər / Qarışıq) ====================
function showVocabModeSelect() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';
    const lexicalTotal = nounsData.length + adjectivesData.length + numbersData.length;
    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">📚 Öyrənməyə başla</h2>
                <button onclick="showMainMenu()" class="close-btn">✕</button>
            </div>
            <div class="mode-select-card" onclick="showVerbsSection()">
                <div class="mode-select-icon">🔤</div>
                <div>
                    <div class="mode-select-title">Feillər</div>
                    <div class="mode-select-desc">${getStandaloneVerbCount()} əsas feil — törəmə formalar bablarda göstərilir</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="showLexicalSection('nouns')">
                <div class="mode-select-icon">🧩</div>
                <div>
                    <div class="mode-select-title">İsimlər</div>
        <div class="mode-select-desc">${nounsData.length} isim — cəm formaları və cümlə nümunələri ilə</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="showLexicalSection('adjectives')">
                <div class="mode-select-icon">🎨</div>
                <div>
                    <div class="mode-select-title">Sifətlər</div>
                    <div class="mode-select-desc">${adjectivesData.length} sifət — kişi və qadın formaları ilə</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="showNumbersSection()">
                <div class="mode-select-icon">🔢</div>
                <div>
                    <div class="mode-select-title">Saylar</div>
                    <div class="mode-select-desc">Miqdar və sıra sayları — ${numbersData.length} nümunə</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="showMixedSection()">
                <div class="mode-select-icon">🔀</div>
                <div>
                    <div class="mode-select-title">Qarışıq</div>
                    <div class="mode-select-desc">Feillər, isimlər, sifətlər və saylar (${getStandaloneVerbCount() + lexicalTotal})</div>
                </div>
            </div>
        </div>
    `;
}

function saveLearnedWords() { localStorage.setItem('learnedWords', JSON.stringify(learnedWords)); }
function saveFavoriteWords() { localStorage.setItem('favoriteWords', JSON.stringify(favoriteWords)); }
function toggleWordFavorite(id) {
    if (favoriteWords.includes(id)) favoriteWords = favoriteWords.filter(x => x !== id);
    else favoriteWords.push(id);
    saveFavoriteWords();
}

let currentWordIndex = 0;

function showWordsSection(index) {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (index === undefined) {
        const nextUnlearned = wordsData.find(w => !learnedWords.includes(w.id));
        index = nextUnlearned ? wordsData.findIndex(w => w.id === nextUnlearned.id) : currentWordIndex;
        if (!nextUnlearned && learnedWords.length >= wordsData.length) {
            content.innerHTML = `
                <div class="glass-card text-center">
                    <p style="font-size: 2rem; margin-bottom: 16px;">🎉</p>
                    <h2 class="text-xl font-bold mb-2">Bütün sözləri öyrəndiniz!</h2>
                    <button onclick="showVocabModeSelect()" class="glass-button px-6 py-3">Geri</button>
                </div>
            `;
            return;
        }
    }
    index = clampIndex(index, wordsData.length);
    currentWordIndex = index;
    const word = wordsData[currentWordIndex];
    const isLearned = learnedWords.includes(word.id);
    const isFavorite = favoriteWords.includes(word.id);

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">Söz öyrən</h2>
                <div style="display:flex; align-items:center; gap:6px;">
                    <button onclick="showWordSearch()" class="fav-star-btn" title="Axtar">🔍</button>
                    <button onclick="toggleWordFavoriteAndRerender(${word.id})" class="fav-star-btn" title="Favoritə əlavə et">${isFavorite ? '⭐' : '☆'}</button>
                    <button onclick="showMainMenu()" class="close-btn">✕</button>
                </div>
            </div>
            <div class="progress-text">${currentWordIndex + 1} / ${wordsData.length}</div>
            <div class="text-center mb-4">
                <div style="display:flex; align-items:center; justify-content:center; gap:10px;">
                    <p class="arabic-text text-4xl font-bold mb-2">${displayArabic(word.arabic)}</p>
                    <button class="speak-btn" onclick="speakArabicFromEvent(event, '${word.arabic}')" title="Səsləndir">${speakerIconSvg}</button>
                </div>
                <p class="text-white-75 text-lg">${word.meaning}</p>
            </div>
            <button onclick="markWordLearned(${word.id})" class="glass-button py-3 font-bold text-lg">
                ${isLearned ? '✓ Öyrənilib' : '✓ Öyrəndim'}
            </button>
            <div class="nav-row">
                <button onclick="navigateWord(-1)" class="glass-button" ${currentWordIndex === 0 ? 'disabled' : ''}>◀ Əvvəlki</button>
                <button onclick="navigateWord(1)" class="glass-button" ${currentWordIndex === wordsData.length - 1 ? 'disabled' : ''}>Növbəti ▶</button>
            </div>
        </div>
    `;
}

function navigateWord(delta) {
    showWordsSection(currentWordIndex + delta);
}

// ==================== AXTARIŞ (SÖZLƏR) ====================
function showWordSearch() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';
    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-xl font-bold">🔍 Söz axtar</h2>
                <button onclick="showWordsSection(${currentWordIndex})" class="close-btn">✕</button>
            </div>
            <input type="text" id="word-search-input" class="input-field mb-4" placeholder="Ərəbcə və ya azərbaycanca yazın..." autocomplete="off" oninput="filterWordSearch(this.value)">
            <div id="word-search-results"></div>
        </div>
    `;
    document.getElementById('word-search-input').focus();
    filterWordSearch('');
}

function filterWordSearch(query) {
    const resultsDiv = document.getElementById('word-search-results');
    if (!resultsDiv) return;
    const q = query.trim().toLowerCase();
    const qNormalized = normalizeArabic(query.trim());

    let matches;
    if (q === '') {
        matches = wordsData.slice(0, 30);
    } else {
        matches = wordsData.filter(w =>
            w.meaning.toLowerCase().includes(q) ||
            (qNormalized && normalizeArabic(w.arabic).includes(qNormalized))
        ).slice(0, 60);
    }

    if (matches.length === 0) {
        resultsDiv.innerHTML = `<p class="text-white-75 text-center" style="padding: 20px 0;">Nəticə tapılmadı</p>`;
        return;
    }

    resultsDiv.innerHTML = matches.map(w => {
        const idx = wordsData.findIndex(x => x.id === w.id);
        const learned = learnedWords.includes(w.id) ? '✓ ' : '';
        return `
            <div class="flex-between border-b py-2 clickable" onclick="showWordsSection(${idx})">
                <span class="arabic-text">${displayArabic(w.arabic)}</span>
                <span class="text-white-75" style="font-size: 0.875rem;">${learned}${w.meaning}</span>
            </div>
        `;
    }).join('');
}

function toggleWordFavoriteAndRerender(id) {
    toggleWordFavorite(id);
    showWordsSection(currentWordIndex);
}

function markWordLearned(id) {
    if (!learnedWords.includes(id)) {
        learnedWords.push(id);
        saveLearnedWords();
        addXp(XP_PER_VERB);
        checkBadges();
    }
    if (currentWordIndex < wordsData.length - 1) {
        showWordsSection(currentWordIndex + 1);
    } else {
        showWordsSection(currentWordIndex);
    }
}

// Qarışıq: Feillər + Sözlər birləşdirilmiş siyahı
let currentMixedIndex = 0;
function getMixedPool() {
    return [
        ...getStandaloneVerbs().map(v => ({ kind: 'verb', item: v })),
        ...wordsData.map(w => ({ kind: 'word', item: w }))
    ];
}

function showMixedSection(index) {
    const pool = getMixedPool();
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    index = clampIndex(index === undefined ? currentMixedIndex : index, pool.length);
    currentMixedIndex = index;
    const entry = pool[currentMixedIndex];
    const isVerb = entry.kind === 'verb';
    const item = entry.item;
    const isLearned = isVerb ? learnedVerbs.includes(item.id) : learnedWords.includes(item.id);
    const isFavorite = isVerb ? favoriteVerbs.includes(item.id) : favoriteWords.includes(item.id);

    let formsHtml = '';
    if (isVerb) {
        const formLabels = { past: 'Keçmiş', present: 'İndiki', imperative: 'Əmr' };
        for (const [key, label] of Object.entries(formLabels)) {
            formsHtml += `
                <div class="flex-between border-b py-2 clickable" onclick="openFormExamples(${item.id}, '${key}', 'mixed')">
                    <span class="text-white-75">${label}</span>
                    <span style="display:flex; align-items:center; gap:6px;">
                        <button class="speak-btn-inline" onclick="speakArabicFromEvent(event, '${item.forms[key].arabic}')" title="Səsləndir">${speakerIconSvg}</button>
                        <span class="arabic-text font-bold">${displayArabic(item.forms[key].arabic)}</span>
                    </span>
                    <span class="text-white-75" style="font-size: 0.875rem;">${item.forms[key].translation}</span>
                </div>
            `;
        }
    }

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">Qarışıq — ${isVerb ? 'Fel' : 'Söz'}</h2>
                <div style="display:flex; align-items:center; gap:6px;">
                    <button onclick="toggleMixedFavorite(${item.id}, '${entry.kind}')" class="fav-star-btn" title="Favoritə əlavə et">${isFavorite ? '⭐' : '☆'}</button>
                    <button onclick="showMainMenu()" class="close-btn">✕</button>
                </div>
            </div>
            <div class="progress-text">${currentMixedIndex + 1} / ${pool.length}</div>
            <div class="text-center mb-4">
                <div style="display:flex; align-items:center; justify-content:center; gap:10px;">
                    <p class="arabic-text text-4xl font-bold mb-2">${displayArabic(item.arabic)}</p>
                    <button class="speak-btn" onclick="speakArabicFromEvent(event, '${item.arabic}')" title="Səsləndir">${speakerIconSvg}</button>
                </div>
                <p class="text-white-75 text-lg">${item.meaning}</p>
            </div>
            ${isVerb ? `<div class="mb-4"><h3 class="font-semibold mb-2">Formalar</h3><div>${formsHtml}</div></div>` : ''}
             ${isVerb && isBabReadyVerb(item)
                 ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(168,85,247,0.18); border-color: rgba(192,132,252,0.5);">🔟 Bütün babları gör</button>`
                 : ''}
            ${isVerb && isHamzatedWeakVerb(item)
                 ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(251,191,36,0.13); border-color: rgba(251,191,36,0.42);">هـ Həmzəli bab izahı <span style="float:right;">›</span></button>`
                 : ''}
            ${isVerb && isInitialWeakVerb(item)
                 ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(96,165,250,0.13); border-color: rgba(96,165,250,0.42);">و ي Başlanğıc zəif kök izahı <span style="float:right;">›</span></button>`
                 : ''}
            ${isVerb && isMedialWeakVerb(item)
                 ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(167,139,250,0.13); border-color: rgba(167,139,250,0.42);">و ي Orta zəif kök izahı <span style="float:right;">›</span></button>`
                 : ''}
            ${isVerb && isFinalWeakVerb(item)
                 ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(52,211,153,0.13); border-color: rgba(52,211,153,0.42);">و ي Son zəif kök izahı <span style="float:right;">›</span></button>`
                 : ''}
            ${isVerb && isMixedWeakVerb(item)
                 ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(244,114,182,0.13); border-color: rgba(244,114,182,0.42);">و ي Qarışıq zəif kök izahı <span style="float:right;">›</span></button>`
                 : ''}
            ${isVerb && isQuadriliteralRoot(item)
                 ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(52,211,153,0.13); border-color: rgba(52,211,153,0.42);">Dördhərfli kök və törəmələri <span style="float:right;">›</span></button>`
                 : ''}
            ${isVerb && isDerivedVerb(item)
                 && getRootVerbForDerived(item)
                 ? `<button onclick="showAllBabsSection(${getRootVerbForDerived(item).id}, 'mixed')" class="glass-button mb-3" style="background: rgba(96,165,250,0.13); border-color: rgba(96,165,250,0.42);">Kök feil və babları gör <span style="float:right;">›</span></button>`
                 : ''}
            ${isVerb && isDerivedVerb(item)
                 && !getRootVerbForDerived(item)
                 ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(148,163,184,0.13); border-color: rgba(148,163,184,0.42);">Törəmə feil bab izahı <span style="float:right;">›</span></button>`
                 : ''}
            ${isVerb ? getVerbStageNoticeHtml(item) : ''}
            <button onclick="markMixedLearned(${item.id}, '${entry.kind}')" class="glass-button py-3 font-bold text-lg">
                ${isLearned ? '✓ Öyrənilib' : '✓ Öyrəndim'}
            </button>
            <div class="nav-row">
                <button onclick="navigateMixed(-1)" class="glass-button" ${currentMixedIndex === 0 ? 'disabled' : ''}>◀ Əvvəlki</button>
                <button onclick="navigateMixed(1)" class="glass-button" ${currentMixedIndex === pool.length - 1 ? 'disabled' : ''}>Növbəti ▶</button>
            </div>
        </div>
    `;
}

function navigateMixed(delta) {
    showMixedSection(currentMixedIndex + delta);
}

function toggleMixedFavorite(id, kind) {
    if (kind === 'verb') toggleFavorite(id);
    else toggleWordFavorite(id);
    showMixedSection(currentMixedIndex);
}

function markMixedLearned(id, kind) {
    if (kind === 'verb') {
        if (!learnedVerbs.includes(id)) {
            learnedVerbs.push(id);
            saveLearnedVerbs();
            addXp(XP_PER_VERB);
            checkBadges();
        }
    } else {
        if (!learnedWords.includes(id)) {
            learnedWords.push(id);
            saveLearnedWords();
            addXp(XP_PER_VERB);
            checkBadges();
        }
    }
    if (currentMixedIndex < getMixedPool().length - 1) {
        showMixedSection(currentMixedIndex + 1);
    } else {
        showMixedSection(currentMixedIndex);
    }
}

// ==================== İSİM, SİFƏT VƏ SAYLAR ====================
// Köhnə wordsData axını geriyə uyğunluq üçün aşağıda saxlanılır, lakin
// görünən öyrənmə və qarışıq hovuz artıq bu kateqoriyalardan qurulur.
const lexicalCategoryMeta = {
    nouns: {
        title: 'İsimlər',
        singular: 'İsim',
        icon: '🧩',
        data: nounsData
    },
    adjectives: {
        title: 'Sifətlər',
        singular: 'Sifət',
        icon: '🎨',
        data: adjectivesData
    },
    cardinal: {
        title: 'Miqdar sayları',
        singular: 'Miqdar sayı',
        icon: '🔢',
        data: cardinalNumbersData
    },
    ordinal: {
        title: 'Sıra sayları',
        singular: 'Sıra sayı',
        icon: '🔢',
        data: ordinalNumbersData
    }
};

const currentLexicalIndices = {
    nouns: 0,
    adjectives: 0,
    cardinal: 0,
    ordinal: 0
};

function getLexicalExamplesHtml(item) {
    if (!item.examples || item.examples.length === 0) return '';
    const hasGenderExamples = item.examples.length > 1 && (item.feminine || item.numberType);
    const labels = hasGenderExamples
        ? (item.numberType
            ? ['Kişi cinsi', 'Qadın cinsi']
            : ['Kişi forması', 'Qadın forması'])
        : ['Cümlə nümunəsi'];

    return `
        <div class="mb-4">
            <h3 class="font-semibold mb-2">İşlənmə nümunələri</h3>
            ${item.examples.map((example, index) => `
                <div class="rounded-xl mb-2" style="padding: 12px 14px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);">
                    <div class="text-white-75" style="font-size: 0.78rem; margin-bottom: 4px;">${labels[index] || 'Nümunə'}</div>
                    <div style="display:flex; align-items:center; gap:8px; justify-content:space-between;">
                        <span class="arabic-text" style="font-size: 1.25rem; line-height: 1.7;">${displayArabic(example.arabic)}</span>
                        <button class="speak-btn-inline" onclick="speakArabicFromEvent(event, '${example.arabic}')" title="Səsləndir">${speakerIconSvg}</button>
                    </div>
                    <div class="text-white-75" style="font-size: 0.88rem; margin-top: 3px;">${example.translation}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function getLexicalFormsPanelHtml(item, includePrimary = false) {
    const rows = [];
    const formRow = (label, value, meaning = '', note = '') => `
        <div style="padding: 9px 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
                <span class="text-white-75" style="font-size:0.8rem; line-height:1.5;">${label}</span>
                <span class="arabic-text" style="font-size:1.2rem; line-height:1.5; text-align:right;">${displayArabic(value)}</span>
            </div>
            ${meaning ? `<div class="text-white-75" style="font-size:0.76rem; margin-top:2px; text-align:right;">${meaning}</div>` : ''}
            ${note ? `<div style="font-size:0.7rem; color:rgba(255,233,154,0.82); margin-top:2px; text-align:right;">${note}</div>` : ''}
        </div>
    `;

    if (includePrimary && item.arabic) {
        rows.push(formRow('Tək / əsas forma', item.arabic));
    }

    if (item.feminine) {
        rows.push(formRow('Qadın forması', item.feminine));
    }

    if (item.pluralArabic) {
        const hasGenderedPlural = Boolean(item.femininePluralArabic);
        rows.push(formRow(
            hasGenderedPlural ? 'Kişi cəmi' : 'Cəm',
            item.pluralArabic,
            item.pluralMeaning || ''
        ));
        if (hasGenderedPlural) {
            const samePlural = normalizeArabic(item.pluralArabic) === normalizeArabic(item.femininePluralArabic);
            rows.push(formRow(
                'Qadın cəmi',
                item.femininePluralArabic,
                item.femininePluralMeaning || '',
                samePlural ? 'Kişi cəmi ilə eynidir' : ''
            ));
        }
    }

    if (rows.length === 0) return '';
    return `
        <div style="margin: 14px 0 18px; padding: 4px 14px 5px; text-align:left; background:rgba(255,255,255,0.045); border:1px solid rgba(255,255,255,0.1); border-radius:14px;">
            <div style="padding: 7px 0 5px; color:var(--text-50); font-size:0.76rem; font-weight:700; letter-spacing:0.02em;">Formalar</div>
            ${rows.join('').replace(/border-bottom: 1px solid rgba\(255,255,255,0\.08\);(?=\s*<\/div>\s*$)/u, '')}
        </div>
    `;
}

function getLexicalBackAction(category) {
    return category === 'cardinal' || category === 'ordinal'
        ? 'showNumbersSection()'
        : 'showVocabModeSelect()';
}

function showNumbersSection() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';
    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">🔢 Saylar</h2>
                <button onclick="showVocabModeSelect()" class="close-btn">✕</button>
            </div>
            <div class="mode-select-card" onclick="showLexicalSection('cardinal')">
                <div class="mode-select-icon">🔢</div>
                <div>
                    <div class="mode-select-title">Miqdar sayları</div>
                    <div class="mode-select-desc">${cardinalNumbersData.length} say — kişi və qadın işlənməsi ilə</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="showLexicalSection('ordinal')">
                <div class="mode-select-icon">🏷️</div>
                <div>
                    <div class="mode-select-title">Sıra sayları</div>
                    <div class="mode-select-desc">${ordinalNumbersData.length} say — kişi və qadın işlənməsi ilə</div>
                </div>
            </div>
        </div>
    `;
}

function showLexicalSection(category, index) {
    const meta = lexicalCategoryMeta[category];
    if (!meta) return showVocabModeSelect();

    const content = document.getElementById('content-area');
    const data = meta.data;
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (index === undefined) {
        const nextUnlearned = data.find(item => !learnedWords.includes(item.id));
        if (nextUnlearned) {
            index = data.findIndex(item => item.id === nextUnlearned.id);
        } else {
            content.innerHTML = `
                <div class="glass-card text-center fade-in">
                    <p style="font-size: 2rem; margin-bottom: 16px;">🎉</p>
                    <h2 class="text-xl font-bold mb-2">Bütün ${meta.title.toLowerCase()} öyrənildi!</h2>
                    <p class="text-white-75 mb-4">${data.length} ${meta.singular.toLowerCase()} tamamlandı.</p>
                    <button onclick="${getLexicalBackAction(category)}" class="glass-button px-6 py-3">Geri</button>
                </div>
            `;
            return;
        }
    }

    index = clampIndex(index, data.length);
    currentLexicalIndices[category] = index;
    const item = data[index];
    const isLearned = learnedWords.includes(item.id);
    const isFavorite = favoriteWords.includes(item.id);
    const backAction = getLexicalBackAction(category);
    const lexicalForms = getLexicalFormsPanelHtml(item);

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">${meta.icon} ${meta.singular} öyrən</h2>
                <div style="display:flex; align-items:center; gap:6px;">
                    <button onclick="showLexicalSearch('${category}')" class="fav-star-btn" title="Axtar">🔍</button>
                    <button onclick="toggleLexicalFavoriteAndRerender('${category}', ${item.id})" class="fav-star-btn" title="Favoritə əlavə et">${isFavorite ? '⭐' : '☆'}</button>
                    <button onclick="${backAction}" class="close-btn">✕</button>
                </div>
            </div>
            <div class="progress-text">${index + 1} / ${data.length}</div>
            <div class="text-center mb-4">
                <div style="display:flex; align-items:center; justify-content:center; gap:10px;">
                    <p class="arabic-text text-4xl font-bold mb-2">${displayArabic(item.arabic)}</p>
                    <button class="speak-btn" onclick="speakArabicFromEvent(event, '${item.arabic}')" title="Səsləndir">${speakerIconSvg}</button>
                </div>
                <p class="text-white-75 text-lg">${item.meaning}</p>
                ${lexicalForms}
            </div>
            ${getLexicalExamplesHtml(item)}
            <button onclick="markLexicalLearned('${category}', ${item.id})" class="glass-button py-3 font-bold text-lg">
                ${isLearned ? '✓ Öyrənilib' : '✓ Öyrəndim'}
            </button>
            <div class="nav-row">
                <button onclick="navigateLexical('${category}', -1)" class="glass-button" ${index === 0 ? 'disabled' : ''}>◀ Əvvəlki</button>
                <button onclick="navigateLexical('${category}', 1)" class="glass-button" ${index === data.length - 1 ? 'disabled' : ''}>Növbəti ▶</button>
            </div>
        </div>
    `;
}

function navigateLexical(category, delta) {
    const data = lexicalCategoryMeta[category]?.data || [];
    showLexicalSection(category, currentLexicalIndices[category] + delta);
}

function showLexicalSearch(category) {
    const meta = lexicalCategoryMeta[category];
    if (!meta) return showVocabModeSelect();
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';
    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-xl font-bold">🔍 ${meta.title} axtar</h2>
                <button onclick="showLexicalSection('${category}', ${currentLexicalIndices[category]})" class="close-btn">✕</button>
            </div>
            <input type="text" id="lexical-search-input" class="input-field mb-4" placeholder="Ərəbcə və ya azərbaycanca yazın..." autocomplete="off" oninput="filterLexicalSearch('${category}', this.value)">
            <div id="lexical-search-results"></div>
        </div>
    `;
    document.getElementById('lexical-search-input').focus();
    filterLexicalSearch(category, '');
}

function filterLexicalSearch(category, query) {
    const resultsDiv = document.getElementById('lexical-search-results');
    const meta = lexicalCategoryMeta[category];
    if (!resultsDiv || !meta) return;
    const q = query.trim().toLowerCase();
    const qNormalized = normalizeArabic(query.trim());
    const matches = (q === ''
        ? meta.data
        : meta.data.filter(item =>
            item.meaning.toLowerCase().includes(q) ||
            (qNormalized && normalizeArabic(item.arabic).includes(qNormalized)) ||
            (item.feminine && normalizeArabic(item.feminine).includes(qNormalized))
        )).slice(0, 60);

    if (matches.length === 0) {
        resultsDiv.innerHTML = `<p class="text-white-75 text-center" style="padding: 20px 0;">Nəticə tapılmadı</p>`;
        return;
    }

    resultsDiv.innerHTML = matches.map(item => {
        const index = meta.data.findIndex(candidate => candidate.id === item.id);
        const learned = learnedWords.includes(item.id) ? '✓ ' : '';
        return `
            <div class="flex-between border-b py-2 clickable" onclick="showLexicalSection('${category}', ${index})">
                <span class="arabic-text">${displayArabic(item.arabic)}</span>
                <span class="text-white-75" style="font-size: 0.875rem;">${learned}${item.meaning}</span>
            </div>
        `;
    }).join('');
}

function toggleLexicalFavoriteAndRerender(category, id) {
    toggleWordFavorite(id);
    showLexicalSection(category, currentLexicalIndices[category]);
}

function markLexicalLearned(category, id) {
    if (!learnedWords.includes(id)) {
        learnedWords.push(id);
        saveLearnedWords();
        addXp(XP_PER_VERB);
        checkBadges();
    }
    const data = lexicalCategoryMeta[category].data;
    showLexicalSection(category, currentLexicalIndices[category] < data.length - 1
        ? currentLexicalIndices[category] + 1
        : currentLexicalIndices[category]);
}

// Köhnə daxili çağırışlar üçün təhlükəsiz uyğunluq adları.
function showWordsSection(index) { showLexicalSection('nouns', index); }
function showWordSearch() { showLexicalSearch('nouns'); }
function toggleWordFavoriteAndRerender(id) {
    toggleLexicalFavoriteAndRerender('nouns', id);
}
function markWordLearned(id) { markLexicalLearned('nouns', id); }

function getLexicalLearningPool() {
    return [
        ...nounsData.map(item => ({ kind: 'lexical', category: 'nouns', item })),
        ...adjectivesData.map(item => ({ kind: 'lexical', category: 'adjectives', item })),
        ...numbersData.map(item => ({
            kind: 'lexical',
            category: item.numberType === 'sira' ? 'ordinal' : 'cardinal',
            item
        }))
    ];
}

function getLexicalLearningUnitCount(item) {
    return 1
        + (item.feminine ? 1 : 0)
        + (item.pluralArabic ? 1 : 0)
        + (item.femininePluralArabic ? 1 : 0);
}

function getLearningWordProgress() {
    const flashcardPool = getFlashcardPool();
    const verbCards = flashcardPool.filter(isVerbFlashcardEntry);
    const lexicalEntries = getLexicalLearningPool();
    const lexicalTotal = lexicalEntries.reduce((sum, entry) => sum + getLexicalLearningUnitCount(entry.item), 0);
    const learnedVerbCards = verbCards.filter(isFlashcardLearned).length;
    const learnedLexicalUnits = lexicalEntries.reduce(
        (sum, entry) => sum + (learnedWords.includes(entry.item.id) ? getLexicalLearningUnitCount(entry.item) : 0),
        0
    );

    return {
        learned: learnedVerbCards + learnedLexicalUnits,
        total: verbCards.length + lexicalTotal
    };
}

function getMixedPool() {
    return [
        ...getStandaloneVerbs().map(item => ({ kind: 'verb', item })),
        ...getLexicalLearningPool()
    ];
}

function showMixedSection(index) {
    const pool = getMixedPool();
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    index = clampIndex(index === undefined ? currentMixedIndex : index, pool.length);
    currentMixedIndex = index;
    const entry = pool[index];
    const isVerb = entry.kind === 'verb';
    const item = entry.item;
    const isLearned = isVerb ? learnedVerbs.includes(item.id) : learnedWords.includes(item.id);
    const isFavorite = isVerb ? favoriteVerbs.includes(item.id) : favoriteWords.includes(item.id);
    const lexicalMeta = isVerb ? null : lexicalCategoryMeta[entry.category];
    const lexicalForms = !isVerb ? getLexicalFormsPanelHtml(item) : '';

    let formsHtml = '';
    if (isVerb) {
        const formLabels = { past: 'Keçmiş', present: 'İndiki', imperative: 'Əmr' };
        formsHtml = Object.entries(formLabels).map(([key, label]) => `
            <div class="flex-between border-b py-2 clickable" onclick="openFormExamples(${item.id}, '${key}', 'mixed')">
                <span class="text-white-75">${label}</span>
                <span style="display:flex; align-items:center; gap:6px;">
                    <button class="speak-btn-inline" onclick="speakArabicFromEvent(event, '${item.forms[key].arabic}')" title="Səsləndir">${speakerIconSvg}</button>
                    <span class="arabic-text font-bold">${displayArabic(item.forms[key].arabic)}</span>
                </span>
                <span class="text-white-75" style="font-size: 0.875rem;">${item.forms[key].translation}</span>
            </div>
        `).join('');
    }

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">Qarışıq — ${isVerb ? 'Fel' : lexicalMeta.title}</h2>
                <div style="display:flex; align-items:center; gap:6px;">
                    <button onclick="toggleMixedFavorite(${item.id}, '${entry.kind}')" class="fav-star-btn" title="Favoritə əlavə et">${isFavorite ? '⭐' : '☆'}</button>
                    <button onclick="showVocabModeSelect()" class="close-btn">✕</button>
                </div>
            </div>
            <div class="progress-text">${index + 1} / ${pool.length}</div>
            <div class="text-center mb-4">
                <div style="display:flex; align-items:center; justify-content:center; gap:10px;">
                    <p class="arabic-text text-4xl font-bold mb-2">${displayArabic(item.arabic)}</p>
                    <button class="speak-btn" onclick="speakArabicFromEvent(event, '${item.arabic}')" title="Səsləndir">${speakerIconSvg}</button>
                </div>
                <p class="text-white-75 text-lg">${item.meaning}</p>
                ${lexicalForms}
            </div>
            ${isVerb ? `<div class="mb-4"><h3 class="font-semibold mb-2">Formalar</h3><div>${formsHtml}</div></div>` : getLexicalExamplesHtml(item)}
            ${isVerb && isBabReadyVerb(item)
                ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(168,85,247,0.18); border-color: rgba(192,132,252,0.5);">🔟 Bütün babları gör</button>`
                : ''}
            ${isVerb && isHamzatedWeakVerb(item)
                ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(251,191,36,0.13); border-color: rgba(251,191,36,0.42);">هـ Həmzəli bab izahı <span style="float:right;">›</span></button>`
                : ''}
            ${isVerb && isInitialWeakVerb(item)
                ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(96,165,250,0.13); border-color: rgba(96,165,250,0.42);">و ي Başlanğıc zəif kök izahı <span style="float:right;">›</span></button>`
                : ''}
            ${isVerb && isMedialWeakVerb(item)
                ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(167,139,250,0.13); border-color: rgba(192,132,252,0.5);">و ي Orta zəif kök izahı <span style="float:right;">›</span></button>`
                : ''}
            ${isVerb && isFinalWeakVerb(item)
                ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(52,211,153,0.13); border-color: rgba(52,211,153,0.42);">و ي Son zəif kök izahı <span style="float:right;">›</span></button>`
                : ''}
            ${isVerb && isMixedWeakVerb(item)
                ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(244,114,182,0.13); border-color: rgba(244,114,182,0.42);">و ي Qarışıq zəif kök izahı <span style="float:right;">›</span></button>`
                : ''}
            ${isVerb && isQuadriliteralRoot(item)
                ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(52,211,153,0.13); border-color: rgba(52,211,153,0.42);">Dördhərfli kök və törəmələri <span style="float:right;">›</span></button>`
                : ''}
            ${isVerb && isDerivedVerb(item) && getRootVerbForDerived(item)
                ? `<button onclick="showAllBabsSection(${getRootVerbForDerived(item).id}, 'mixed')" class="glass-button mb-3" style="background: rgba(96,165,250,0.13); border-color: rgba(96,165,250,0.5);">Kök feil və babları gör <span style="float:right;">›</span></button>`
                : ''}
            ${isVerb && isDerivedVerb(item) && !getRootVerbForDerived(item)
                ? `<button onclick="showAllBabsSection(${item.id}, 'mixed')" class="glass-button mb-3" style="background: rgba(148,163,184,0.13); border-color: rgba(148,163,184,0.5);">Törəmə feil bab izahı <span style="float:right;">›</span></button>`
                : ''}
            ${isVerb ? getVerbStageNoticeHtml(item) : ''}
            <button onclick="markMixedLearned(${item.id}, '${entry.kind}')" class="glass-button py-3 font-bold text-lg">
                ${isLearned ? '✓ Öyrənilib' : '✓ Öyrəndim'}
            </button>
            <div class="nav-row">
                <button onclick="navigateMixed(-1)" class="glass-button" ${index === 0 ? 'disabled' : ''}>◀ Əvvəlki</button>
                <button onclick="navigateMixed(1)" class="glass-button" ${index === pool.length - 1 ? 'disabled' : ''}>Növbəti ▶</button>
            </div>
        </div>
    `;
}

function toggleMixedFavorite(id, kind) {
    if (kind === 'verb') toggleFavorite(id);
    else toggleWordFavorite(id);
    showMixedSection(currentMixedIndex);
}

function markMixedLearned(id, kind) {
    if (kind === 'verb') {
        if (!learnedVerbs.includes(id)) {
            learnedVerbs.push(id);
            saveLearnedVerbs();
            addXp(XP_PER_VERB);
            checkBadges();
        }
    } else if (!learnedWords.includes(id)) {
        learnedWords.push(id);
        saveLearnedWords();
        addXp(XP_PER_VERB);
        checkBadges();
    }
    showMixedSection(currentMixedIndex < getMixedPool().length - 1
        ? currentMixedIndex + 1
        : currentMixedIndex);
}

// ==================== FELİN BÜTÜN BABLARI (10 QƏLİB) ====================
// Yalnız TAM SAĞLAM (zəif hərfsiz) 3 hərfli köklər üçün etibarlı işləyir.
const WEAK_LETTERS = new Set(['و', 'ي', 'ى', 'ا', 'أ', 'إ', 'آ', 'ء', 'ؤ', 'ئ']);
const HARAKAT = { FATHA: '\u064E', KASRA: '\u0650', DAMMA: '\u064F', SUKUN: '\u0652', SHADDA: '\u0651' };

// Lüğəvi sərf yoxlamasından yüksək inamla çıxarılan törəmə-kök əlaqələri.
// Buradakı kök forma ayrıca feil kimi saxlanmırsa belə, törəmə forma həmin
// kökün uyğun bab kartına keçirilir.
const DERIVED_ROOT_OVERRIDES = {
    22: { root: 'سفر', bab: 'III' },
    36: { root: 'نظف', bab: 'II' },
    37: { root: 'صلو', bab: 'II' },
    41: { root: 'شري', bab: 'VIII' },
    45: { root: 'كلم', bab: 'V' },
    48: { root: 'جوب', bab: 'IV' },
    60: { root: 'وضؤ', bab: 'V' },
    64: { root: 'دبر', bab: 'V' },
    65: { root: 'علم', bab: 'V' },
    66: { root: 'علم', bab: 'II' },
    70: { root: 'سعد', bab: 'III' },
    71: { root: 'صدق', bab: 'V' },
    72: { root: 'نفق', bab: 'IV' },
    75: { root: 'جنب', bab: 'VIII' },
    80: { root: 'وفي', bab: 'IV' },
    81: { root: 'بشر', bab: 'II' },
    82: { root: 'حذر', bab: 'II' },
    84: { root: 'وكل', bab: 'V' },
    86: { root: 'طوع', bab: 'IV' },
    90: { root: 'حبب', bab: 'IV' },
    92: { root: 'عهد', bab: 'III' },
    93: { root: 'عون', bab: 'X' },
    94: { root: 'جهد', bab: 'VIII' },
    95: { root: 'وسل', bab: 'V' },
    97: { root: 'لزم', bab: 'VIII' },
    98: { root: 'قوم', bab: 'X' },
    101: { root: 'زوج', bab: 'V' },
    102: { root: 'طلق', bab: 'II' },
    103: { root: 'ربو', bab: 'II' },
    110: { root: 'سهم', bab: 'III' },
    111: { root: 'بدر', bab: 'III' },
    112: { root: 'أخر', bab: 'V' },
    113: { root: 'قدم', bab: 'V' },
    115: { root: 'همم', bab: 'VIII' },
    116: { root: 'أدب', bab: 'V' },
    117: { root: 'شجع', bab: 'II' },
    121: { root: 'وقر', bab: 'II' },
    122: { root: 'حرم', bab: 'VIII' },
    123: { root: 'كرم', bab: 'IV' },
    125: { root: 'صحب', bab: 'III' },
    127: { root: 'فرق', bab: 'V' },
    128: { root: 'عون', bab: 'VI' },
    129: { root: 'فرق', bab: 'VIII' },
    131: { root: 'خصم', bab: 'VIII' },
    132: { root: 'شور', bab: 'X' },
    133: { root: 'شور', bab: 'IV' },
    135: { root: 'ودع', bab: 'II' },
    137: { root: 'سلم', bab: 'II' },
    139: { root: 'عنق', bab: 'III' },
    140: { root: 'ضيف', bab: 'X' },
    141: { root: 'طعم', bab: 'IV' },
    143: { root: 'شغل', bab: 'VIII' },
    149: { root: 'ندو', bab: 'III' },
    151: { root: 'نذر', bab: 'IV' },
    152: { root: 'بلغ', bab: 'II' },
    153: { root: 'دول', bab: 'VI' },
    154: { root: 'دلل', bab: 'X' },
    156: { root: 'سأل', bab: 'VI' },
    157: { root: 'فسر', bab: 'X' },
    162: { root: 'شرك', bab: 'IV' },
    163: { root: 'وحد', bab: 'V' },
    164: { root: 'خلف', bab: 'VIII' },
    165: { root: 'وفق', bab: 'VIII' },
    167: { root: 'ثبت', bab: 'II' },
    168: { root: 'هدي', bab: 'VIII' },
    173: { root: 'عذر', bab: 'VIII' },
    175: { root: 'عزو', bab: 'II' },
    177: { root: 'عمر', bab: 'II' },
    181: { root: 'خلف', bab: 'IV' },
    182: { root: 'قرض', bab: 'X' },
    183: { root: 'قرض', bab: 'IV' },
    184: { root: 'وفي', bab: 'II' },
    185: { root: 'تجر', bab: 'VIII' },
    187: { root: 'وكل', bab: 'II' },
    189: { root: 'أجر', bab: 'X' },
    190: { root: 'أجر', bab: 'II' },
    191: { root: 'ثمر', bab: 'X' },
    192: { root: 'ذخر', bab: 'VIII' },
    193: { root: 'غلو', bab: 'X' },
    195: { root: 'حيي', bab: 'X' },
    196: { root: 'حشم', bab: 'VIII' },
    197: { root: 'وقي', bab: 'VIII' },
    198: { root: 'خير', bab: 'X' },
    200: { root: 'خير', bab: 'VIII' },
    201: { root: 'زكو', bab: 'V' },
    202: { root: 'غني', bab: 'X' },
    203: { root: 'فقر', bab: 'VIII' },
    204: { root: 'غوث', bab: 'X' },
    205: { root: 'جور', bab: 'X' },
    206: { root: 'عصم', bab: 'VIII' },
    208: { root: 'كبر', bab: 'V' },
    209: { root: 'خيل', bab: 'VIII' },
    210: { root: 'فخر', bab: 'VIII' },
    213: { root: 'نكر', bab: 'IV' },
    214: { root: 'قرر', bab: 'IV' },
    218: { root: 'وجز', bab: 'IV' },
    219: { root: 'طول', bab: 'IV' },
    220: { root: 'نصت', bab: 'IV' },
    221: { root: 'لفت', bab: 'VIII' },
    223: { root: 'عزل', bab: 'VIII' },
    225: { root: 'جنب', bab: 'VIII' },
    226: { root: 'لزم', bab: 'VIII' },
    227: { root: 'مسك', bab: 'X' },
    228: { root: 'درك', bab: 'IV' },
    232: { root: 'زيد', bab: 'VIII' },
    242: { root: 'حقق', bab: 'X' },
    249: { root: 'شوق', bab: 'VIII' },
    250: { root: 'طَمْأَنَ', bab: 'quadriliteral-derived' },
    251: { root: 'يقظ', bab: 'X' },
    253: { root: 'يمم', bab: 'V' },
    255: { root: 'أذن', bab: 'II' },
    256: { root: 'قوم', bab: 'IV' },
    257: { root: 'قدو', bab: 'VIII' },
    260: { root: 'عكف', bab: 'VIII' },
    261: { root: 'فطر', bab: 'IV' },
    263: { root: 'زكو', bab: 'II' },
    264: { root: 'صدق', bab: 'II' },
    265: { root: 'كذب', bab: 'II' },
    266: { root: 'هزأ', bab: 'X' },
    269: { root: 'غيب', bab: 'VIII' },
    274: { root: 'نقم', bab: 'VII' },
    275: { root: 'عقب', bab: 'III' },
    276: { root: 'ثوب', bab: 'IV' },
    277: { root: 'عدو', bab: 'VIII' },
    282: { root: 'أدي', bab: 'IV' },
    287: { root: 'قرر', bab: 'X' },
    288: { root: 'عدد', bab: 'X' },
    289: { root: 'روح', bab: 'X' },
    290: { root: 'روي', bab: 'V' },
    291: { root: 'أمل', bab: 'V' },
    292: { root: 'فكر', bab: 'V' },
    293: { root: 'وعظ', bab: 'VIII' },
    294: { root: 'فيد', bab: 'X' },
    295: { root: 'فيد', bab: 'IV' },
    301: { root: 'عوذ', bab: 'X' },
    302: { root: 'عوذ', bab: 'V' },
    306: { root: 'سبح', bab: 'II' },
    308: { root: 'كبر', bab: 'II' },
    309: { root: 'هلل', bab: 'II' },
    316: { root: 'تبع', bab: 'VIII' },
    320: { root: 'سلم', bab: 'X' },
    358: { root: 'بَسَمَ', bab: 'VIII' },
    367: { root: 'حَالَ', bab: 'III' },
    375: { root: 'رَحُبَ', bab: 'II' },
    376: { root: 'ضَمَّ', bab: 'VII' },
    377: { root: 'غَدَرَ', bab: 'III' },
    380: { root: 'قَرُبَ', bab: 'VIII' },
    382: { root: 'قَدِمَ', bab: 'V' },
    387: { root: 'مَرَّ', bab: 'X' },
    389: { root: 'نَهَى', bab: 'VIII' },
    391: { root: 'نَهَى', bab: 'IV' },
    392: { root: 'عَادَ', bab: 'IV' },
    393: { root: 'كَرَّ', bab: 'II' },
    394: { root: 'غَيَّرَ', bab: 'II' },
    395: { root: 'بَدَلَ', bab: 'II' },
    396: { root: 'قَرَّ', bab: 'II' },
    397: { root: 'خَبَرَ', bab: 'VIII' },
    398: { root: 'جَرَبَ', bab: 'II' },
    404: { root: 'فَسَرَ', bab: 'II' },
    405: { root: 'وَضَحَ', bab: 'II' },
    408: { root: 'نَبَهَ', bab: 'VIII' },
    409: { root: 'رَكَزَ', bab: 'II' },
    410: { root: 'فَكَرَ', bab: 'II' },
    411: { root: 'أَمَلَ', bab: 'V' },
    413: { root: 'وَقَعَ', bab: 'V' },
    418: { root: 'حَقَقَ', bab: 'V' },
    422: { root: 'دَرَبَ', bab: 'II' },
    423: { root: 'دَرَبَ', bab: 'V' },
    424: { root: 'حَدَثَ', bab: 'V' },
    425: { root: 'كَلِمَ', bab: 'V' },
    428: { root: 'خَبَرَ', bab: 'IV' },
    429: { root: 'عَلَنَ', bab: 'IV' },
    433: { root: 'رَسَلَ', bab: 'IV' },
    434: { root: 'سَلِمَ', bab: 'VIII' },
    435: { root: 'لَقِيَ', bab: 'V' },
    436: { root: 'وَصَلَ', bab: 'VIII' },
    440: { root: 'قَدِمَ', bab: 'II' },
    441: { root: 'أَخَرَ', bab: 'II' },
    456: { root: 'نَجَزَ', bab: 'IV' },
    457: { root: 'نَفَذَ', bab: 'II' },
    458: { root: 'طَبَقَ', bab: 'II' },
    459: { root: 'عَدَّ', bab: 'VIII' },
    460: { root: 'جَهَزَ', bab: 'II' },
    462: { root: 'عَدَّ', bab: 'II' },
    463: { root: 'نَظَمَ', bab: 'II' },
    464: { root: 'رَتَبَ', bab: 'II' },
    488: { root: 'فَسَدَ', bab: 'IV' },
    491: { root: 'صَبَحَ', bab: 'IV' },
    506: { root: 'وَفَقَ', bab: 'III' },
    507: { root: 'وَفَقَ', bab: 'VIII' },
    508: { root: 'نَفَسَ', bab: 'VI' },
    510: { root: 'شَجَرَ', bab: 'VI' },
    517: { root: 'حَفَلَ', bab: 'VIII' },
    518: { root: 'هَنَأَ', bab: 'II' },
    521: { root: 'ذَخَرَ', bab: 'II' },
    522: { root: 'ذَخَرَ', bab: 'VIII' },
    523: { root: 'أَجَرَ', bab: 'II' },
    524: { root: 'قَرَضَ', bab: 'VIII' },
    526: { root: 'وَظَفَ', bab: 'V' },
    527: { root: 'وَظَفَ', bab: 'II' },
    528: { root: 'دَارَ', bab: 'IV' },
    534: { root: 'جَازَ', bab: 'VI' },
    535: { root: 'حَرَكَ', bab: 'V' },
    536: { root: 'حَرَكَ', bab: 'II' },
    539: { root: 'لَقِيَ', bab: 'IV' },
    543: { root: 'مَسَكَ', bab: 'IV' },
    546: { root: 'حَقَقَ', bab: 'X' },
    552: { root: 'رَشَدَ', bab: 'IV' },
    555: { root: 'حَرَبَ', bab: 'III' },
    556: { root: 'هَزَمَ', bab: 'VII' },
    559: { root: 'طَلَقَ', bab: 'IV' },
    560: { root: 'حَرَرَ', bab: 'II' },
    561: { root: 'حَلَلَ', bab: 'VIII' },
    563: { root: 'طَرَدَ', bab: 'III' },
    568: { root: 'وَجَهَ', bab: 'V' },
    569: { root: 'وَجَهَ', bab: 'II' },
    572: { root: 'لَقِيَ', bab: 'III' },
    573: { root: 'صَدَفَ', bab: 'III' },
    577: { root: 'شَكَا', bab: 'VIII' },
    581: { root: 'نَظَمَ', bab: 'VIII' },
    582: { root: 'أَنِفَ', bab: 'X' },
    583: { root: 'شَوَرَ', bab: 'III' },
    591: { root: 'صَوَرَ', bab: 'II' },
    593: { root: 'قَرَنَ', bab: 'III' },
    594: { root: 'شَبَهَ', bab: 'II' },
    595: { root: 'مَيَزَ', bab: 'II' },
    596: { root: 'فَرَقَ', bab: 'II' },
    599: { root: 'وَزَعَ', bab: 'II' },
    605: { root: 'زَيَدَ', bab: 'II' },
    609: { root: 'وَعَبَ', bab: 'X' },
    610: { root: 'نَتَجَ', bab: 'X' },
    611: { root: 'خَلَصَ', bab: 'X' },
    612: { root: 'ثَنَى', bab: 'X' },
    613: { root: 'عَمَدَ', bab: 'VIII' },
    614: { root: 'سَنَدَ', bab: 'VIII' },
    615: { root: 'قَرَحَ', bab: 'VIII' },
    617: { root: 'طَوَرَ', bab: 'II' },
    618: { root: 'طَوَرَ', bab: 'V' },
    625: { root: 'نَجَبَ', bab: 'IV' },
    626: { root: 'زَوَجَ', bab: 'V' },
    627: { root: 'زَوَجَ', bab: 'II' },
    628: { root: 'طَلَقَ', bab: 'II' },
    630: { root: 'نَقَذَ', bab: 'IV' },
    632: { root: 'سَعِدَ', bab: 'IV' },
    633: { root: 'فَرَجَ', bab: 'II' },
    639: { root: 'مَاتَ', bab: 'IV' },
    640: { root: 'سَقَى', bab: 'IV' },
    642: { root: 'رَدَدَ', bab: 'VIII' },
    643: { root: 'حَمَّ', bab: 'X' },
    645: { root: 'مَشَطَ', bab: 'II' },
    650: { root: 'قَلَعَ', bab: 'VIII' },
    658: { root: 'قَرُبَ', bab: 'II' },
    659: { root: 'رَفَقَ', bab: 'III' },
    660: { root: 'فَرَقَ', bab: 'III' },
    661: { root: 'لَقِيَ', bab: 'VIII' },
    662: { root: 'جَازَ', bab: 'VIII' },
    663: { root: 'جَنَبَ', bab: 'V' },
    664: { root: 'مَتَعَ', bab: 'X' },
    666: { root: 'عَادَ', bab: 'X' },
    671: { root: 'لَحَظَ', bab: 'III' },
    678: { root: 'صَوَرَ', bab: 'V' },
    680: { root: 'وَضَحَ', bab: 'X' },
    681: { root: 'نَشَأَ', bab: 'IV' },
    682: { root: 'أَسَسَ', bab: 'II' },
    684: { root: 'بَكَرَ', bab: 'VIII' },
    685: { root: 'خَرَعَ', bab: 'VIII' },
    686: { root: 'صَمَمَ', bab: 'II' },
    688: { root: 'شَغَلَ', bab: 'II' },
    689: { root: 'وَقَدَ', bab: 'IV' },
    690: { root: 'شَعَلَ', bab: 'IV' },
    691: { root: 'طَفَأَ', bab: 'IV' },
    701: { root: 'ذَابَ', bab: 'IV' },
    713: { root: 'حَالَ', bab: 'II' },
    714: { root: 'حَالَ', bab: 'V' },
    716: { root: 'دَارَ', bab: 'II' },
    718: { root: 'دَارَ', bab: 'X' },
    720: { root: 'دَعَا', bab: 'X' },
    722: { root: 'حَقَّ', bab: 'II' },
    724: { root: 'قَضَى', bab: 'III' },
    726: { root: 'لَزِمَ', bab: 'IV' },
    727: { root: 'خَلَفَ', bab: 'III' },
    732: { root: 'حَاطَ', bab: 'VIII' },
    735: { root: 'سَهُلَ', bab: 'II' },
    736: { root: 'صَعُبَ', bab: 'II' },
    737: { root: 'سَهُلَ', bab: 'X' },
    738: { root: 'صَعُبَ', bab: 'X' },
    739: { root: 'قَنِعَ', bab: 'VIII' },
    740: { root: 'قَنِعَ', bab: 'IV' },
    743: { root: 'هَمَّ', bab: 'VIII' },
    744: { root: 'عَنِيَ', bab: 'VIII' },
    745: { root: 'هَاجَ', bab: 'VIII' },
    746: { root: 'دَهِشَ', bab: 'VII' },
    747: { root: 'فَجِئَ', bab: 'VI' },
    749: { root: 'عَجِبَ', bab: 'IV' },
    750: { root: 'عَجِبَ', bab: 'IV' },
    751: { root: 'فَضَلَ', bab: 'II' },
    754: { root: 'ثَبَطَ', bab: 'II' },
    756: { root: 'لَحِقَ', bab: 'IV' },
    757: { root: 'لَحِقَ', bab: 'III' },
    764: { root: 'خَفِيَ', bab: 'IV' },
    768: { root: 'بَدَا', bab: 'IV' },
    772: { root: 'رَسَا', bab: 'IV' },
    773: { root: 'قَرَّ', bab: 'VIII' },
    775: { root: 'سَوِيَ', bab: 'VIII' },
    776: { root: 'سَوِيَ', bab: 'III' },
    777: { root: 'عَدَلَ', bab: 'III' },
    782: { root: 'قَوِيَ', bab: 'II' },
    784: { root: 'خَفَّ', bab: 'VIII' },
    785: { root: 'قَوِيَ', bab: 'X' },
    788: { root: 'بَدَلَ', bab: 'X' },
    796: { root: 'خَصَرَ', bab: 'VIII' },
    799: { root: 'صَنَفَ', bab: 'II' },
    800: { root: 'صَحَّ', bab: 'II' },
    801: { root: 'خَطِئَ', bab: 'II' },
    802: { root: 'خَطِئَ', bab: 'IV' },
    805: { root: 'لَغَا', bab: 'IV' },
    806: { root: 'أَجَلَ', bab: 'II' },
    809: { root: 'سَاءَ', bab: 'IV' },
    810: { root: 'هَانَ', bab: 'IV' },
    811: { root: 'حَقَرَ', bab: 'VIII' },
    821: { root: 'فَرَقَ', bab: 'V' },
    822: { root: 'شَكَلَ', bab: 'V' },
    823: { root: 'شَكَلَ', bab: 'II' },
    825: { root: 'غَطِيَ', bab: 'II' },
    833: { root: 'قَرَنَ', bab: 'VIII' },
    837: { root: 'حَسَّ', bab: 'II' },
    844: { root: 'جَلَّ', bab: 'II' },
    845: { root: 'عَظُمَ', bab: 'II' },
    846: { root: 'قَدُسَ', bab: 'II' },
    850: { root: 'رَتَلَ', bab: 'II' },
    854: { root: 'جَدَلَ', bab: 'III' },
    858: { root: 'مَهَلَ', bab: 'V' },
    862: { root: 'فَتَشَ', bab: 'II' },
    871: { root: 'دَحْرَجَ', bab: 'quadriliteral V' },
    890: { root: 'طَوَى', bab: 'II' },
    896: { root: 'طَالَ', bab: 'II' },
    900: { root: 'ضَاقَ', bab: 'II' },
    901: { root: 'وَسِعَ', bab: 'VIII' },
    903: { root: 'وَسِعَ', bab: 'X' },
    904: { root: 'حَاطَ', bab: 'IV' },
    905: { root: 'حَرَفَ', bab: 'VII' },
    906: { root: 'حَنَى', bab: 'VII' },
    909: { root: 'مَهَدَ', bab: 'II' },
    911: { root: 'حَرَفَ', bab: 'VIII' },
    912: { root: 'خَصَّ', bab: 'V' },
    913: { root: 'خَصَّ', bab: 'II' },
    916: { root: 'خَصَّ', bab: 'VIII' },
    917: { root: 'شَرِكَ', bab: 'VIII' },
    918: { root: 'شَرِكَ', bab: 'III' },
    921: { root: 'خَلَا', bab: 'V' },
    923: { root: 'حَرَّ', bab: 'V' },
    924: { root: 'قَلَّ', bab: 'VIII' },
    925: { root: 'وَكَلَ', bab: 'V' },
    926: { root: 'نَجَدَ', bab: 'X' },
    927: { root: 'غَاثَ', bab: 'IV' },
    928: { root: 'عَانَ', bab: 'IV' },
    932: { root: 'كَفَى', bab: 'VIII' },
    933: { root: 'ضَرَّ', bab: 'VIII' },
    934: { root: 'جَبَرَ', bab: 'IV' },
    935: { root: 'كَلِفَ', bab: 'V' },
    936: { root: 'وَفَى', bab: 'X' },
    939: { root: 'دَعَا', bab: 'VIII' },
    941: { root: 'بَرِئَ', bab: 'II' },
    942: { root: 'دَانَ', bab: 'IV' },
    943: { root: 'عَقَلَ', bab: 'VIII' },
    944: { root: 'حَجَزَ', bab: 'VIII' },
    945: { root: 'فَرَجَ', bab: 'IV' },
    946: { root: 'حَجَّ', bab: 'VIII' },
    952: { root: 'نَقَدَ', bab: 'VII' },
    957: { root: 'شَبِهَ', bab: 'VIII' },
    958: { root: 'بَانَ', bab: 'V' },
    959: { root: 'بَانَ', bab: 'II' },
    960: { root: 'وَضَحَ', bab: 'IV' },
    961: { root: 'تَرْجَمَ', bab: 'quadriliteral I' },
    962: { root: 'قَبَسَ', bab: 'VIII' },
    964: { root: 'دَلَّ', bab: 'X' },
    965: { root: 'نَبَطَ', bab: 'X' },
    967: { root: 'فَتَى', bab: 'IV' },
    970: { root: 'أَلِفَ', bab: 'II' },
    972: { root: 'دَقَّ', bab: 'II' },
    975: { root: 'قَاسَ', bab: 'II' },
    976: { root: 'مَحَنَ', bab: 'VIII' },
    981: { root: 'لَقِنَ', bab: 'V' },
    982: { root: 'مَرَنَ', bab: 'V' },
    983: { root: 'فَاقَ', bab: 'V' },
    992: { root: 'نَسِيَ', bab: 'IV' },
    993: { root: 'نَسِيَ', bab: 'II' },
    994: { root: 'رَضِيَ', bab: 'IV' },
    995: { root: 'رَضِيَ', bab: 'II' },
    996: { root: 'سَاءَ', bab: 'VIII' },
    998: { root: 'طَمْأَنَ', bab: 'quadriliteral derived' }
};

function extractTriliteralRoot(arabicPast) {
    return getVerbMorphology({ forms: { past: { arabic: arabicPast } } }).root
        || arabicPast.replace(/[\u064B-\u0652\u0670\u0640]/g, '');
}

function isSoundTriliteralRoot(root) {
    if (!root || root.length !== 3) return false;
    return ![...root].some(ch => WEAK_LETTERS.has(ch));
}

function computeVerbMorphology(verb) {
    const raw = String(verb?.forms?.past?.arabic || verb?.arabic || '');
    if (!raw.trim()) return { kind: 'unknown', root: null, bab: null };
    if (/\s/u.test(raw)) return { kind: 'phrase', root: null, bab: null };

    const isPromotedRoot = typeof nibrasPromotedRootIds !== 'undefined'
        && nibrasPromotedRootIds.has(verb.id);
    const reviewedRoot = isPromotedRoot ? null : DERIVED_ROOT_OVERRIDES[verb.id];
    if (reviewedRoot) {
        return {
            kind: 'derived',
            root: normalizeArabic(stripHarakat(reviewedRoot.root)),
            bab: reviewedRoot.bab,
            rootDisplay: reviewedRoot.root
        };
    }

    // Keep shadda long enough to distinguish Form II/V from a genuine
    // doubled or quadriliteral base verb.
    const withoutShortVowels = raw
        .replace(/[\u064B-\u0650\u0652-\u065A\u0670\u0640]/g, '')
        .replace(/\s+/gu, '');
    const hasShadda = withoutShortVowels.includes('\u0651');
    const sourceLetters = [...withoutShortVowels.replace(/\u0651/g, '')];
    const letters = normalizeArabic(withoutShortVowels.replace(/\u0651/g, ''));

    if (letters.length === 2 && hasShadda) {
        return { kind: 'base', root: letters + letters[1], bab: 'I', shape: 'doubled' };
    }
    if (letters.length === 3 && !hasShadda) {
        return { kind: 'base', root: sourceLetters.join(''), bab: 'I', shape: 'triliteral' };
    }
    if (letters.length === 3 && hasShadda) {
        return { kind: 'derived', root: letters, bab: 'II' };
    }
    if (letters.length === 4 && letters[1] === 'ا') {
        return { kind: 'derived', root: letters[0] + letters.slice(2), bab: 'III' };
    }
    if (letters.length === 4 && letters[0] === 'ا') {
        return { kind: 'derived', root: letters.slice(1), bab: 'IV' };
    }
    if (letters.length === 4 && letters[0] === 'ت' && hasShadda) {
        return { kind: 'derived', root: letters.slice(1), bab: 'V' };
    }
    if (letters.length === 5 && letters[0] === 'ت' && letters[2] === 'ا') {
        return { kind: 'derived', root: letters[1] + letters.slice(3), bab: 'VI' };
    }
    if (letters.length === 5 && letters.startsWith('ان')) {
        return { kind: 'derived', root: letters.slice(2), bab: 'VII' };
    }
    if (letters.length === 5 && letters[0] === 'ا' && letters[2] === 'ت') {
        return { kind: 'derived', root: letters[1] + letters.slice(3), bab: 'VIII' };
    }
    if (letters === 'ازداد') {
        return { kind: 'derived', root: 'زيد', bab: 'VIII' };
    }
    if (letters.length === 6 && letters.startsWith('است')) {
        return { kind: 'derived', root: letters.slice(3), bab: 'X' };
    }
    if (letters.length === 5 && letters.startsWith('اطم')) {
        return { kind: 'derived', root: letters.slice(1), bab: 'IV-Q' };
    }
    if (letters.length === 5 && letters.startsWith('ت')) {
        return { kind: 'derived', root: letters.slice(1), bab: 'V-Q' };
    }
    if (letters.length === 4) {
        return { kind: 'base', root: letters, bab: 'I', shape: 'quadriliteral' };
    }
    return { kind: 'unknown', root: null, bab: null };
}

// Morfologiya sabit məlumatdır; hər render zamanı 1125 qeydi yenidən
// hesablamaq Android WebView-də keçid və scroll zamanı donma yaradır.
const verbMorphologyCache = new Map();
function getVerbMorphology(verb) {
    const cacheKey = verb?.id;
    if (cacheKey !== undefined && verbMorphologyCache.has(cacheKey)) {
        return verbMorphologyCache.get(cacheKey);
    }
    const morphology = computeVerbMorphology(verb);
    if (cacheKey !== undefined) verbMorphologyCache.set(cacheKey, morphology);
    return morphology;
}

function areMorphologicalRootsEquivalent(left, right) {
    const normalizeRoot = (value) => String(value || '')
        .replace(/[\u064B-\u0652\u0670\u0640]/g, '')
        .replace(/ى/g, 'ي')
        .replace(/ة/g, 'ه')
        .trim()
        .toLowerCase();
    const isHamzaLetter = (letter) => /[ءأإآؤئ]/u.test(letter);
    const a = normalizeRoot(left);
    const b = normalizeRoot(right);
    if (a === b) return true;
    if (a.length !== b.length || a.length < 3 || a.length > 4) return false;
    return [...a].every((letter, index) => {
        if (letter === b[index]) return true;
        // Alif, waw and ya may alternate in weak roots between the
        // underlying root and the surface I-bab past form.
        if (isHamzaLetter(letter) !== isHamzaLetter(b[index])) return false;
        return 'اوي'.includes(letter) && 'اوي'.includes(b[index]);
    });
}

// Bab mərhələsində sadə üçhərfli, ikiqat köklü və həqiqi dördhərfli
// əsas feillər kök sayılır; bab qəlibləri ayrıca kök xəritəsinə keçirilir.
function getVerbBabStage(verb) {
    const morphology = getVerbMorphology(verb);
    if (morphology.kind === 'base' && morphology.root.length === 3
        && [...morphology.root].some(ch => WEAK_LETTERS.has(ch))) {
        return 'weak-root';
    }
    if (morphology.kind === 'base' && morphology.shape === 'quadriliteral') {
        return 'quadriliteral-root';
    }
    if (morphology.kind === 'base' && morphology.root.length === 3) return 'sound-root';
    return 'deferred-derived';
}

function isDeferredWeakVerb(verb) {
    return getVerbBabStage(verb) === 'weak-root';
}

function isBabReadyVerb(verb) {
    return getVerbBabStage(verb) === 'sound-root';
}

function isQuadriliteralRoot(verb) {
    return getVerbBabStage(verb) === 'quadriliteral-root';
}

const WEAK_VERB_KIND_LABELS = {
    initial: 'Başlanğıc zəif kök (misal)',
    medial: 'Orta zəif kök (əc-vəf)',
    final: 'Son zəif kök (naqis)',
    hamzated: 'Həmzəli kök',
    mixed: 'Bir neçə zəif xüsusiyyət'
};

function getWeakVerbKind(verb) {
    const rawPast = stripHarakat(verb?.forms?.past?.arabic || verb?.arabic || '')
        .replace(/\s+/gu, '');
    const normalizedPast = normalizeArabic(rawPast);
    const letters = [...normalizedPast];
    const weakPositions = letters
        .map((letter, index) => WEAK_LETTERS.has(letter) ? index : -1)
        .filter(index => index !== -1);
    const hasHamza = /[ءأإآؤئ]/u.test(rawPast);

    if (hasHamza) return 'hamzated';
    if (weakPositions.length > 1) return 'mixed';
    if (weakPositions[0] === 0) return 'initial';
    if (weakPositions[0] === 1) return 'medial';
    if (weakPositions[0] === 2) return 'final';
    return 'mixed';
}

function getWeakVerbKindLabel(verb) {
    return WEAK_VERB_KIND_LABELS[getWeakVerbKind(verb)] || WEAK_VERB_KIND_LABELS.mixed;
}

function isHamzatedWeakVerb(verb) {
    return isDeferredWeakVerb(verb) && getWeakVerbKind(verb) === 'hamzated';
}

function isInitialWeakVerb(verb) {
    return isDeferredWeakVerb(verb) && getWeakVerbKind(verb) === 'initial';
}

function isMedialWeakVerb(verb) {
    return isDeferredWeakVerb(verb) && getWeakVerbKind(verb) === 'medial';
}

function isFinalWeakVerb(verb) {
    return isDeferredWeakVerb(verb) && getWeakVerbKind(verb) === 'final';
}

function isMixedWeakVerb(verb) {
    return isDeferredWeakVerb(verb) && getWeakVerbKind(verb) === 'mixed';
}

function isDerivedVerb(verb) {
    return getVerbBabStage(verb) === 'deferred-derived';
}

function hasAssignedBabForVerb(verb) {
    if (isDerivedVerb(verb) || isQuadriliteralRoot(verb)) return true;
    if (isDeferredWeakVerb(verb)) {
        return getWeakBabFormsForVerb(verb).some(bab => bab.applicable);
    }
    if (!isBabReadyVerb(verb)) return false;
    return getBabFormsForVerb(verb).some(bab => bab.applicable);
}

function getNoBabAssignmentNoticeHtml() {
    return '<div class="glass-button verb-babs-button" role="status" style="cursor: default; opacity: 0.78;">Bu feil heç bir baba salınmır</div>';
}

let standaloneVerbsCache = null;
function getStandaloneVerbs() {
    if (!standaloneVerbsCache) {
        standaloneVerbsCache = verbsData.filter(verb => !isDerivedVerb(verb));
    }
    return standaloneVerbsCache;
}

function getStandaloneVerbCount() {
    return getStandaloneVerbs().length;
}

function getDerivedRootLetters(verb) {
    return getVerbMorphology(verb).kind === 'derived'
        ? getVerbMorphology(verb).root
        : null;
}

function getDerivedRootLabel(verb) {
    const morphology = getVerbMorphology(verb);
    return morphology.rootDisplay || morphology.root || 'müəyyən edilməyib';
}

function getRootVerbForDerived(verb) {
    if (!isDerivedVerb(verb)) return null;
    if (derivedRootVerbCache.has(verb.id)) return derivedRootVerbCache.get(verb.id);
    const morphology = getVerbMorphology(verb);
    const root = morphology.root;
    if (!root) {
        derivedRootVerbCache.set(verb.id, null);
        return null;
    }
    const rootVerb = verbsData.find(candidate => {
        if (candidate.id === verb.id) return false;
        const candidateMorphology = getVerbMorphology(candidate);
        return candidateMorphology.kind === 'base'
            && areMorphologicalRootsEquivalent(candidateMorphology.root, root);
    }) || null;
    derivedRootVerbCache.set(verb.id, rootVerb);
    return rootVerb;
}

function getDerivedBabCode(verb) {
    return getVerbMorphology(verb).bab;
}

const derivedRootVerbCache = new Map();
const linkedDerivedBabEntriesCache = new Map();
function getLinkedDerivedBabEntries(rootVerb) {
    if (linkedDerivedBabEntriesCache.has(rootVerb.id)) {
        return linkedDerivedBabEntriesCache.get(rootVerb.id);
    }
    const retiredDerivedRecords = typeof nibrasRetiredDerivedBabRecords !== 'undefined'
        ? nibrasRetiredDerivedBabRecords
        : [];
    const legacyLinks = [...verbsData, ...retiredDerivedRecords]
        .filter(verb => isDerivedVerb(verb) && getRootVerbForDerived(verb)?.id === rootVerb.id)
        .map(verb => ({
            bab: getDerivedBabCode(verb),
            arabic: verb.forms.past.arabic,
            meaning: verb.meaning
        }))
        .filter(entry => entry.bab);
    const promotedLinks = typeof nibrasPromotedDerivedBabEntries !== 'undefined'
        ? nibrasPromotedDerivedBabEntries
            .filter(entry => areMorphologicalRootsEquivalent(
                getVerbMorphology(rootVerb).root,
                entry.root
            ))
            .map(entry => ({
                bab: entry.bab,
                arabic: entry.arabic,
                meaning: entry.meaning
            }))
        : [];
    const links = [...legacyLinks, ...promotedLinks].filter((entry, index, entries) => {
        const entryKey = [
            entry.bab,
            normalizeArabic(entry.arabic),
            String(entry.meaning || '').trim()
        ].join('|');
        return entries.findIndex(candidate => [
            candidate.bab,
            normalizeArabic(candidate.arabic),
            String(candidate.meaning || '').trim()
        ].join('|') === entryKey) === index;
    });
    linkedDerivedBabEntriesCache.set(rootVerb.id, links);
    return links;
}

function getHamzaPosition(verb) {
    const rawPast = stripHarakat(verb?.forms?.past?.arabic || verb?.arabic || '')
        .replace(/\s+/gu, '');
    const position = [...rawPast].findIndex(letter => /[ءأإآؤئ]/u.test(letter));
    if (position === 0) return 'başlanğıc';
    if (position === 1) return 'orta';
    if (position === 2) return 'son';
    return 'xüsusi';
}

function getHamzaPositionLabel(verb) {
    const position = getHamzaPosition(verb);
    if (position === 'başlanğıc') return 'birinci kök hərfi';
    if (position === 'orta') return 'ikinci kök hərfi';
    if (position === 'son') return 'üçüncü kök hərfi';
    return 'kök daxilində';
}

// Bu kolleksiya 1000-lik əsas məlumatdan yalnız görünüş və mərhələ seçimi üçün
// törədilir; heç bir feil, ID və orijinal forma buradan silinmir.
const weakVerbsData = verbsData.filter(isDeferredWeakVerb);

function getVerbStageNoticeHtml(verb) {
    if (isDerivedVerb(verb)) {
        const morphology = getVerbMorphology(verb);
        const rootLabel = getDerivedRootLabel(verb);
        const rootVerb = getRootVerbForDerived(verb);
        return `
            <div class="rounded-xl mb-3" style="background: rgba(96,165,250,0.11); border: 1px solid rgba(96,165,250,0.32); padding: 10px 12px; color: var(--text-75); font-size: 0.82rem;">
                <strong>Törəmə forma:</strong>
                <span class="arabic-text" style="font-size: 1rem;">${rootLabel}</span>
                — ${morphology.bab || 'bab'}.
                ${rootVerb
                    ? 'Bu forma ayrıca öyrədilmir; kök feilinin uyğun babında göstərilir.'
                    : 'Kök skeleti müəyyən edilib, lakin ayrıca kök feil qeydi siyahıda yoxdur; yeni məna uydurulmur.'}
            </div>
        `;
    }
    if (!isDeferredWeakVerb(verb)) return '';
    const title = isHamzatedWeakVerb(verb) ? 'Həmzəli kök' : 'Zəif kök';
    const detail = isHamzatedWeakVerb(verb)
        ? `Həmzə kökün ${getHamzaPositionLabel(verb)}dir; bablarda yazılışına hərəkə və söz quruluşu təsir edir.`
        : 'Bu zəif kök üçün yalnız lüğəvi olaraq təsdiqlənmiş bablar göstərilir; təsdiqlənməmiş qəliblər avtomatik öyrədilmir.';
    return `
        <div class="rounded-xl mb-3" style="background: rgba(251,191,36,0.11); border: 1px solid rgba(251,191,36,0.32); padding: 10px 12px; color: var(--text-75); font-size: 0.82rem;">
            ⏭️ <strong>${title}:</strong> ${detail}
        </div>
    `;
}

function showDeferredWeakVerbsSection() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';
    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-3">
                <div>
                    <h2 class="text-xl font-bold">و ي Zəif feillər</h2>
                    <p class="text-white-75" style="font-size: 0.8rem; margin-top: 4px;">
                        ${weakVerbsData.length} zəif kök kök tipinə uyğun bab qaydaları ilə işlənir.
                    </p>
                </div>
                <button onclick="showVocabModeSelect()" class="close-btn">✕</button>
            </div>
            <input type="text" id="weak-verb-search-input" class="input-field mb-3"
                placeholder="Ərəbcə və ya azərbaycanca axtarın..." autocomplete="off"
                oninput="filterDeferredWeakVerbs(this.value, document.getElementById('weak-verb-kind-filter').value)">
            <select id="weak-verb-kind-filter" class="input-field mb-3"
                onchange="filterDeferredWeakVerbs(document.getElementById('weak-verb-search-input').value, this.value)">
                <option value="">Bütün xəstə feil qrupları</option>
                ${Object.entries(WEAK_VERB_KIND_LABELS).map(([key, label]) => `<option value="${key}">${label}</option>`).join('')}
            </select>
            <div id="weak-verb-results"></div>
        </div>
    `;
    filterDeferredWeakVerbs('', '');
}

function filterDeferredWeakVerbs(query, kind = '') {
    const resultsDiv = document.getElementById('weak-verb-results');
    if (!resultsDiv) return;
    const q = String(query || '').trim().toLowerCase();
    const qNormalized = normalizeArabic(query || '');
    const matches = weakVerbsData.filter(v => {
        const matchesKind = !kind || getWeakVerbKind(v) === kind;
        const matchesQuery = !q || (
            v.meaning.toLowerCase().includes(q) ||
            (qNormalized && normalizeArabic(v.arabic).includes(qNormalized))
        );
        return matchesKind && matchesQuery;
    });

    if (matches.length === 0) {
        resultsDiv.innerHTML = `<p class="text-white-75 text-center" style="padding: 20px 0;">Nəticə tapılmadı</p>`;
        return;
    }

    resultsDiv.innerHTML = matches.map(v => {
        const idx = getStandaloneVerbs().findIndex(x => x.id === v.id);
        const learned = learnedVerbs.includes(v.id) ? '✓ ' : '';
        return `
            <div class="flex-between border-b py-2 clickable" onclick="showVerbsSection(${idx})">
                <span class="arabic-text">${displayArabic(v.arabic)}</span>
                <span class="text-white-75" style="font-size: 0.78rem; text-align: right;">
                    <span style="display:block;">${learned}${v.meaning}</span>
                    <span style="color: rgba(251,191,36,0.82);">${getWeakVerbKindLabel(v)}</span>
                </span>
            </div>
        `;
    }).join('');
}

function generateBabForms(root, meaning, actualPastForm) {
    const [r1, r2, r3] = root;
    const { FATHA, KASRA, SUKUN, SHADDA } = HARAKAT;
    const ALIF = 'ا', HAMZA = 'أ', TA = 'ت', NUN = 'ن', SIN = 'س';
    // Bab I-in özündə 3 alt-qəlib var (فَعَلَ / فَعِلَ / فَعُلَ) — orta hərfin hərəkəsi felə görə dəyişir,
    // ona görə mexaniki qurmaq əvəzinə felin ƏSL keçmiş zaman formasını istifadə edirik.
    const babOne = actualPastForm || (r1 + FATHA + r2 + FATHA + r3 + FATHA);

    // Bab VIII-də ت hərfi kökün ilk hərfindən asılı olaraq assimilyasiyaya uğrayır
    const emphaticGroup = new Set(['ص', 'ض', 'ط', 'ظ']);   // ت → ط (ayrıca qalır): اصطبر
    const doubleAssimilateGroup = new Set(['ت', 'ث', 'د', 'ذ']); // ت tam əriyir, r1 ikiqat olur: اتّبع، ادّفع، اذّكر
    let form8;
    if (emphaticGroup.has(r1)) {
        form8 = ALIF + KASRA + r1 + SUKUN + 'ط' + FATHA + r2 + FATHA + r3 + FATHA;
    } else if (r1 === 'ز') {
        form8 = ALIF + KASRA + r1 + SUKUN + 'د' + FATHA + r2 + FATHA + r3 + FATHA;
    } else if (doubleAssimilateGroup.has(r1)) {
        form8 = ALIF + KASRA + r1 + SHADDA + FATHA + r2 + FATHA + r3 + FATHA;
    } else {
        form8 = ALIF + KASRA + r1 + SUKUN + TA + FATHA + r2 + FATHA + r3 + FATHA;
    }

    return [
        { bab: 'I', arabic: babOne, note: 'Əsas fel' },
        { bab: 'II', arabic: r1 + FATHA + r2 + SHADDA + FATHA + r3 + FATHA, note: 'Etdirici / gücləndirici' },
        { bab: 'III', arabic: r1 + FATHA + ALIF + r2 + FATHA + r3 + FATHA, note: 'Qarşılıqlı (bir-biri ilə)' },
        { bab: 'IV', arabic: HAMZA + FATHA + r1 + SUKUN + r2 + FATHA + r3 + FATHA, note: 'Etdirici (səbəb olma)' },
        { bab: 'V', arabic: TA + FATHA + r1 + FATHA + r2 + SHADDA + FATHA + r3 + FATHA, note: 'Refleksiv (özü üçün)' },
        { bab: 'VI', arabic: TA + FATHA + r1 + FATHA + ALIF + r2 + FATHA + r3 + FATHA, note: 'Qarşılıqlı-iştirak' },
        { bab: 'VII', arabic: ALIF + KASRA + NUN + SUKUN + r1 + FATHA + r2 + FATHA + r3 + FATHA, note: 'Passiv (olunma)' },
        { bab: 'VIII', arabic: form8, note: 'Refleksiv/qarşılıqlı' },
        { bab: 'IX', arabic: ALIF + KASRA + r1 + SUKUN + r2 + FATHA + r3 + SHADDA + FATHA, note: 'Rəng/qüsur' },
        { bab: 'X', arabic: ALIF + KASRA + SIN + SUKUN + TA + FATHA + r1 + SUKUN + r2 + FATHA + r3 + FATHA, note: 'Tələb etmə' }
    ];
}

const BAB_PATTERN_LABELS = {
    I: 'فَعَلَ / فَعِلَ / فَعُلَ',
    II: 'فَعَّلَ',
    III: 'فَاعَلَ',
    IV: 'أَفْعَلَ',
    V: 'تَفَعَّلَ',
    VI: 'تَفَاعَلَ',
    VII: 'اِنْفَعَلَ',
    VIII: 'اِفْتَعَلَ',
    IX: 'اِفْعَلَّ',
    X: 'اِسْتَفْعَلَ'
};

function getNonApplicableBabNote(verb, entry, override, overrides) {
    if (override?.note) return override.note;

    const pattern = BAB_PATTERN_LABELS[entry.bab] || `${entry.bab} bab qəlibi`;
    const rootNote = overrides?._note ? `${overrides._note} ` : '';
    return `${rootNote}${verb.arabic}: ${entry.bab} Babı bu kök üçün təsdiqlənməyib.`;
}

function getBabMeaningHtml(bab) {
    if (!bab.applicable || !bab.meaning) return bab.note;
    return bab.detail
        ? `${bab.meaning}<br><span style="opacity: 0.78;">${bab.detail}</span>`
        : bab.meaning;
}

function computeWeakBabFormsForVerb(verb) {
    const root = extractTriliteralRoot(verb.forms.past.arabic)
        .replace(/\s+/gu, '');
    if ([...root].length !== 3) return [];

    const generated = generateBabForms(root, verb.meaning, verb.forms.past.arabic);
    const overrides = BAB_MEANING_OVERRIDES[verb.arabic] || {};
    const hasRootReview = Boolean(BAB_MEANING_OVERRIDES[verb.arabic]);
    const linkedEntries = getLinkedDerivedBabEntries(verb);
    return generated.map(entry => {
        const key = `${verb.arabic}:${entry.bab}`;
        const override = overrides[entry.bab];
        const hasReviewedMeaning = Boolean(override && override.meaning);
        const linked = linkedEntries.filter(item => item.bab === entry.bab);
        const hasLinkedEntry = linked.length > 0;
        // Kök feilinin öz keçmiş forması lüğəvi olaraq I babın təsdiqlənmiş
        // qeydidir. Digər bablar isə yalnız ayrıca override və ya törəmə
        // lüğət bağlantısı olduqda aktivləşdirilir.
        const isBaseBab = entry.bab === 'I';
        const status = hasReviewedMeaning || hasLinkedEntry || isBaseBab ? 'verified' : 'not-applicable';
        return {
            ...entry,
            arabic: BAB_ARABIC_OVERRIDES[key] || override?.arabic || linked.map(item => item.arabic).join(' / ') || entry.arabic,
            meaning: hasReviewedMeaning ? override.meaning : linked.map(item => item.meaning).join(' / ') || (isBaseBab ? verb.meaning : null),
            detail: override?.detail || null,
            applicable: (hasReviewedMeaning || hasLinkedEntry || isBaseBab) && override?.applicable !== false,
            status,
            note: hasReviewedMeaning
                ? 'Bu məna ayrıca yoxlanmış məlumatdan götürülüb.'
                : hasLinkedEntry
                    ? 'Bu bab forması siyahıdakı törəmə qeyddən kök babına keçirilib.'
                    : isBaseBab
                        ? 'Bu, kökün lüğəvi əsas I bab formasıdır.'
                        : getNonApplicableBabNote(verb, entry, override, overrides)
        };
    });
}

const weakBabFormsCache = new Map();
function getWeakBabFormsForVerb(verb) {
    if (weakBabFormsCache.has(verb.id)) return weakBabFormsCache.get(verb.id);
    const forms = computeWeakBabFormsForVerb(verb);
    weakBabFormsCache.set(verb.id, forms);
    return forms;
}

function getBabStatusLabel(status) {
    if (status === 'verified') return 'uyğundur';
    return 'daxil edilmir';
}

function getBabStatusColor(status) {
    if (status === 'verified') return 'rgba(74,222,128,0.9)';
    return 'rgba(248,113,113,0.9)';
}

function renderWeakBabFormsHtml(verb) {
    const babs = getWeakBabFormsForVerb(verb);
    if (babs.length === 0) {
        return `
            <div class="rounded-xl mb-3" style="background: rgba(251,191,36,0.10); padding: 12px;">
                <p class="text-white-75" style="font-size: 0.82rem;">Bu kök üçün üçhərfli Bab forması çıxarılmadı.</p>
            </div>
        `;
    }

    const babsHtml = babs.map(b => `
        <div class="rounded-xl mb-2" style="background: rgba(255,255,255,0.05); padding: 11px 12px;">
            <div class="flex-between mb-1">
                <span class="font-semibold" style="font-size: 0.8rem; color: var(--text-50);">${b.bab} bab</span>
                <span style="font-size: 0.7rem; color: ${getBabStatusColor(b.status)};">
                    ${getBabStatusLabel(b.status)}
                </span>
            </div>
            <p class="arabic-text mb-1">${displayArabic(b.arabic)}</p>
            <p class="text-white-75" style="font-size: 0.77rem;">${getBabMeaningHtml(b)}</p>
        </div>
    `).join('');
    const noBabAssigned = babs.every(bab => !bab.applicable);

    return `
        <div class="mb-3">
            <h3 class="font-semibold mb-2">Bab I–X statusları</h3>
            <p class="text-white-75 mb-2" style="font-size: 0.78rem;">
                ${noBabAssigned
                    ? 'Bu feil heç bir Baba aid deyil.'
                    : 'Yalnız təsdiqlənmiş Bablar göstərilir.'}
            </p>
            ${babsHtml}
        </div>
    `;
}

function computeBabFormsForVerb(verb) {
    const root = extractTriliteralRoot(verb.forms.past.arabic);
    const generated = generateBabForms(root, verb.meaning, verb.forms.past.arabic);
    const overrides = BAB_MEANING_OVERRIDES[verb.arabic];
    const linkedEntries = getLinkedDerivedBabEntries(verb);
    if (!overrides) {
        return generated.map((entry) => ({
            ...entry,
            ...(linkedEntries.some(item => item.bab === entry.bab) ? {
                arabic: linkedEntries.filter(item => item.bab === entry.bab).map(item => item.arabic).join(' / '),
                meaning: linkedEntries.filter(item => item.bab === entry.bab).map(item => item.meaning).join(' / '),
                applicable: true,
                status: 'verified',
                note: 'Bu bab forması siyahıdakı törəmə qeyddən kök babına keçirilib.'
            } : entry.bab === 'I' ? {
                meaning: verb.meaning,
                detail: null,
                applicable: true,
                status: 'verified',
                note: 'Bu, kökün lüğəvi əsas I bab formasıdır.'
            } : {
                meaning: null,
                detail: null,
                applicable: false,
                status: 'not-applicable',
                note: 'Bu kök üçün təsdiqlənmiş bab məlumatı yoxdur; bu bab tədris cədvəlinə daxil edilmir.'
            })
        }));
    }

    return generated.map((entry) => {
        const key = `${verb.arabic}:${entry.bab}`;
        const override = overrides[entry.bab];
        const hasMeaning = Boolean(override && override.meaning);
        const linked = linkedEntries.filter(item => item.bab === entry.bab);
        const hasLinkedEntry = linked.length > 0;
        const useBaseBab = entry.bab === 'I' && !override && !hasLinkedEntry;
        return {
            ...entry,
            arabic: BAB_ARABIC_OVERRIDES[key] || override?.arabic || linked.map(item => item.arabic).join(' / ') || entry.arabic,
            meaning: hasMeaning ? override.meaning : linked.map(item => item.meaning).join(' / ') || (useBaseBab ? verb.meaning : null),
            detail: override?.detail || null,
            applicable: (hasMeaning || hasLinkedEntry || useBaseBab) && override?.applicable !== false,
            status: hasMeaning || hasLinkedEntry || useBaseBab ? 'verified' : 'not-applicable',
            note: hasMeaning
                ? override.note || entry.note
                : hasLinkedEntry
                    ? 'Bu bab forması siyahıdakı törəmə qeyddən kök babına keçirilib.'
                : useBaseBab
                    ? 'Bu, kökün lüğəvi əsas I bab formasıdır.'
                : getNonApplicableBabNote(verb, entry, override, overrides)
        };
    });
}

const babFormsCache = new Map();
function getBabFormsForVerb(verb) {
    if (babFormsCache.has(verb.id)) return babFormsCache.get(verb.id);
    const forms = computeBabFormsForVerb(verb);
    babFormsCache.set(verb.id, forms);
    return forms;
}

function showAllBabsSection(verbId, returnTo = 'verbs') {
    const verb = verbsData.find(v => v.id === verbId);
    if (!verb) return;
    const root = extractTriliteralRoot(verb.forms.past.arabic);
    const content = document.getElementById('content-area');
    const backAction = returnTo === 'mixed'
        ? `showMixedSection(${currentMixedIndex})`
        : `showVerbsSection(${currentVerbIndex})`;
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (isQuadriliteralRoot(verb)) {
        const linked = getLinkedDerivedBabEntries(verb);
        const linkedHtml = linked.length
            ? linked.map(entry => `
                <div class="rounded-xl mb-2" style="background: rgba(255,255,255,0.05); padding: 12px;">
                    <div class="flex-between mb-1">
                        <span class="font-semibold" style="font-size: 0.8rem; color: var(--text-50);">${entry.bab} bab</span>
                        <span style="font-size: 0.7rem; color: ${getBabStatusColor('verified')};">uyğundur</span>
                    </div>
                    <p class="arabic-text mb-1">${displayArabic(entry.arabic)}</p>
                    <p class="text-white-75" style="font-size: 0.8rem;">${entry.meaning}</p>
                </div>
            `).join('')
            : `<p class="text-white-75" style="font-size: 0.8rem;">Bu dördhərfli kök üçün siyahıda ayrıca törəmə bab qeydi yoxdur.</p>`;
        content.innerHTML = `
            <div class="glass-card fade-in">
                <div class="flex-between mb-3">
                    <div>
                        <h2 class="text-xl font-bold">Dördhərfli kök</h2>
                        <p class="text-white-75" style="font-size: 0.8rem; margin-top: 4px;">
                            <span class="arabic-text" style="font-size: 1.15rem;">${displayArabic(verb.arabic)}</span> — ${verb.meaning}
                        </p>
                    </div>
                    <button onclick="${backAction}" class="close-btn">✕</button>
                </div>
                <p class="text-white-75 mb-3" style="font-size: 0.8rem;">
                    Bu feil üçhərfli I–X bab cədvəlinə zorla salınmır. Dördhərfli kökdən yaranan təsdiqlənmiş formalar burada göstərilir.
                </p>
                ${linkedHtml}
                <button onclick="${backAction}" class="glass-button py-3 font-bold mt-2">Geri</button>
            </div>
        `;
        return;
    }

    if (isHamzatedWeakVerb(verb)) {
        const position = getHamzaPosition(verb);
        const isQaraa = verb.arabic === 'قَرَأَ';
        const backButton = `<button onclick="${backAction}" class="glass-button py-3 font-bold mt-2">Geri</button>`;
        content.innerHTML = `
            <div class="glass-card fade-in">
                <div class="flex-between mb-3">
                    <div>
                        <h2 class="text-xl font-bold">هـ Həmzəli kökün babları</h2>
                        <p class="text-white-75" style="font-size: 0.8rem; margin-top: 4px;">
                            <span class="arabic-text" style="font-size: 1.15rem;">${displayArabic(verb.arabic)}</span> — ${verb.meaning}
                        </p>
                    </div>
                    <button onclick="${backAction}" class="close-btn">✕</button>
                </div>
                <div class="rounded-xl mb-3" style="background: rgba(251,191,36,0.12); border: 1px solid rgba(251,191,36,0.34); padding: 12px;">
                    <p class="font-semibold mb-1">Həmzə bu kökdə ${position} mövqedədir.</p>
                    <p class="text-white-75" style="font-size: 0.82rem;">
                        Həmzə kökün öz hərfidir; babın əlavə hərfləri ilə qarışdırılmamalıdır.
                    </p>
                </div>
                ${isQaraa ? `
                <div class="rounded-xl mb-3" style="background: rgba(96,165,250,0.10); border: 1px solid rgba(96,165,250,0.28); padding: 12px;">
                    <h3 class="font-semibold mb-1"><span class="arabic-text">قَرَأَ</span> üçün xüsusi qeyd</h3>
                    <p class="text-white-75" style="font-size: 0.82rem;">
                        Kök həmzəsi (<span class="arabic-text">ء</span>) dəyişmir. Qəlibdəki əlavə <span class="arabic-text">ا</span> kök hərfi deyil.
                    </p>
                </div>
                ` : ''}
                <div class="rounded-xl mb-3" style="background: rgba(255,255,255,0.05); padding: 12px;">
                    <h3 class="font-semibold mb-2">Bab formasında nə dəyişir?</h3>
                    <ul class="text-white-75" style="font-size: 0.84rem; padding-left: 20px; line-height: 1.65;">
                        <li><strong>Başlanğıc:</strong> həmzə <span class="arabic-text">أ</span>, <span class="arabic-text">إ</span> və ya <span class="arabic-text">آ</span> kimi yazıla bilər.</li>
                        <li><strong>Orta:</strong> yazılış hərəkəyə görə <span class="arabic-text">ئ</span>, <span class="arabic-text">ؤ</span> və ya <span class="arabic-text">أ</span> ola bilər.</li>
                        <li><strong>Son:</strong> son hərəkə yazılışı dəyişə bilər, amma kök həmzəsi qalır.</li>
                        <li><strong>Bab əlavələri:</strong> prefiks, şəddə və hərəkə formanı dəyişə bilər.</li>
                    </ul>
                </div>
                <div class="rounded-xl mb-3" style="background: rgba(96,165,250,0.10); border: 1px solid rgba(96,165,250,0.25); padding: 12px;">
                    <h3 class="font-semibold mb-1">Vacib fərq</h3>
                    <p class="text-white-75" style="font-size: 0.82rem;">
                        Hər əlif həmzə deyil. Buna görə bu feillərin Bab formaları mexaniki qayda ilə hesablanmır.
                    </p>
                </div>
                <p class="text-white-75 mb-3" style="font-size: 0.8rem;">
                    Yalnız təsdiqlənmiş Bab formaları göstərilir.
                </p>
                ${renderWeakBabFormsHtml(verb)}
                ${backButton}
            </div>
        `;
        return;
    }

    if (isInitialWeakVerb(verb)) {
        const root = extractTriliteralRoot(verb.forms.past.arabic);
        const backButton = `<button onclick="${backAction}" class="glass-button py-3 font-bold mt-2">Geri</button>`;
        content.innerHTML = `
            <div class="glass-card fade-in">
                <div class="flex-between mb-3">
                    <div>
                        <h2 class="text-xl font-bold">و ي Başlanğıc zəif kök</h2>
                        <p class="text-white-75" style="font-size: 0.8rem; margin-top: 4px;">
                            <span class="arabic-text" style="font-size: 1.15rem;">${displayArabic(verb.arabic)}</span> — ${verb.meaning}
                        </p>
                    </div>
                    <button onclick="${backAction}" class="close-btn">✕</button>
                </div>
                <div class="rounded-xl mb-3" style="background: rgba(96,165,250,0.11); border: 1px solid rgba(96,165,250,0.32); padding: 12px;">
                    <p class="font-semibold mb-1">Kök: <span class="arabic-text">${displayArabic(root)}</span></p>
                    <p class="text-white-75" style="font-size: 0.82rem;">
                        İlk kök hərfi adətən <span class="arabic-text">و</span> və ya <span class="arabic-text">ي</span> olur. Bu tipə misal deyilir.
                    </p>
                </div>
                <div class="rounded-xl mb-3" style="background: rgba(255,255,255,0.05); padding: 12px;">
                    <h3 class="font-semibold mb-2">Bab və təsriflərdə nə dəyişir?</h3>
                    <ul class="text-white-75" style="font-size: 0.84rem; padding-left: 20px; line-height: 1.65;">
                        <li>Bab prefiksi və hərəkə ilk zəif hərfi dəyişə bilər.</li>
                        <li><span class="arabic-text">و</span> və ya <span class="arabic-text">ي</span> bəzi qəliblərdə düşə bilər.</li>
                        <li>Hər Bab ayrıca lüğəvi yoxlanır.</li>
                    </ul>
                </div>
                <div class="rounded-xl mb-3" style="background: rgba(96,165,250,0.10); border: 1px solid rgba(96,165,250,0.25); padding: 12px;">
                    <h3 class="font-semibold mb-1">Niyə sağlam kök qəlibi istifadə edilmir?</h3>
                    <p class="text-white-75" style="font-size: 0.82rem;">
                        Zəif hərfin düşməsi kökdən asılıdır. Buna görə təsdiqlənməmiş forma və məna avtomatik yaradılmır.
                    </p>
                </div>
                <p class="text-white-75 mb-3" style="font-size: 0.8rem;">
                    Yalnız lüğəvi olaraq təsdiqlənmiş Bab formaları göstərilir.
                </p>
                ${renderWeakBabFormsHtml(verb)}
                ${backButton}
            </div>
        `;
        return;
    }

    if (isMedialWeakVerb(verb)) {
        const root = extractTriliteralRoot(verb.forms.past.arabic);
        const backButton = `<button onclick="${backAction}" class="glass-button py-3 font-bold mt-2">Geri</button>`;
        content.innerHTML = `
            <div class="glass-card fade-in">
                <div class="flex-between mb-3">
                    <div>
                        <h2 class="text-xl font-bold">و ي Orta zəif kök</h2>
                        <p class="text-white-75" style="font-size: 0.8rem; margin-top: 4px;">
                            <span class="arabic-text" style="font-size: 1.15rem;">${displayArabic(verb.arabic)}</span> — ${verb.meaning}
                        </p>
                    </div>
                    <button onclick="${backAction}" class="close-btn">✕</button>
                </div>
                <div class="rounded-xl mb-3" style="background: rgba(167,139,250,0.11); border: 1px solid rgba(167,139,250,0.32); padding: 12px;">
                    <p class="font-semibold mb-1">Kök: <span class="arabic-text">${displayArabic(root)}</span></p>
                    <p class="text-white-75" style="font-size: 0.82rem;">
                        İkinci kök hərfi adətən <span class="arabic-text">و</span> və ya <span class="arabic-text">ي</span> olur. Bu tipə əc-vəf deyilir.
                    </p>
                </div>
                <div class="rounded-xl mb-3" style="background: rgba(255,255,255,0.05); padding: 12px;">
                    <h3 class="font-semibold mb-2">Bab və təsriflərdə nə dəyişir?</h3>
                    <ul class="text-white-75" style="font-size: 0.84rem; padding-left: 20px; line-height: 1.65;">
                        <li>Orta zəif hərf uzun saitə çevrilə və ya görünməyə bilər.</li>
                        <li>Hərəkə və Bab qəlibi formanı dəyişir.</li>
                        <li>Keçmiş, indiki və əmr formaları fərqli görünə bilər.</li>
                    </ul>
                </div>
                <div class="rounded-xl mb-3" style="background: rgba(167,139,250,0.10); border: 1px solid rgba(167,139,250,0.25); padding: 12px;">
                    <h3 class="font-semibold mb-1">Niyə sağlam kök qəlibi kifayət etmir?</h3>
                    <p class="text-white-75" style="font-size: 0.82rem;">
                        Əc-vəf köklərdə orta zəif hərf ayrıca yoxlanır. Bab forması və mənası avtomatik təsdiqlənmir.
                    </p>
                </div>
                <p class="text-white-75 mb-3" style="font-size: 0.8rem;">
                    Yalnız lüğəvi olaraq təsdiqlənmiş Bab formaları göstərilir.
                </p>
                ${renderWeakBabFormsHtml(verb)}
                ${backButton}
            </div>
        `;
        return;
    }

    if (isFinalWeakVerb(verb)) {
        const root = extractTriliteralRoot(verb.forms.past.arabic);
        const backButton = `<button onclick="${backAction}" class="glass-button py-3 font-bold mt-2">Geri</button>`;
        content.innerHTML = `
            <div class="glass-card fade-in">
                <div class="flex-between mb-3">
                    <div>
                        <h2 class="text-xl font-bold">و ي Son zəif kök</h2>
                        <p class="text-white-75" style="font-size: 0.8rem; margin-top: 4px;">
                            <span class="arabic-text" style="font-size: 1.15rem;">${displayArabic(verb.arabic)}</span> — ${verb.meaning}
                        </p>
                    </div>
                    <button onclick="${backAction}" class="close-btn">✕</button>
                </div>
                <div class="rounded-xl mb-3" style="background: rgba(52,211,153,0.11); border: 1px solid rgba(52,211,153,0.32); padding: 12px;">
                    <p class="font-semibold mb-1">Kök: <span class="arabic-text">${displayArabic(root)}</span></p>
                    <p class="text-white-75" style="font-size: 0.82rem;">
                        Üçüncü kök hərfi adətən <span class="arabic-text">و</span> və ya <span class="arabic-text">ي</span> olur. Bu tipə naqis deyilir.
                    </p>
                </div>
                <div class="rounded-xl mb-3" style="background: rgba(255,255,255,0.05); padding: 12px;">
                    <h3 class="font-semibold mb-2">Bab və təsriflərdə nə dəyişir?</h3>
                    <ul class="text-white-75" style="font-size: 0.84rem; padding-left: 20px; line-height: 1.65;">
                        <li>Son zəif hərf <span class="arabic-text">ا</span>, <span class="arabic-text">ى</span>, <span class="arabic-text">و</span> və ya <span class="arabic-text">ي</span> kimi görünə bilər.</li>
                        <li>Şəkilçi qoşulduqda bu hərf düşə və ya üzə çıxa bilər.</li>
                        <li>Bab və son hərəkə keçmiş, indiki və əmr formalarını dəyişir.</li>
                    </ul>
                </div>
                <div class="rounded-xl mb-3" style="background: rgba(52,211,153,0.10); border: 1px solid rgba(52,211,153,0.25); padding: 12px;">
                    <h3 class="font-semibold mb-1">Niyə sağlam kök qəlibi kifayət etmir?</h3>
                    <p class="text-white-75" style="font-size: 0.82rem;">
                        Naqis feillərdə son hərf mühitə görə dəyişir. Buna görə forma və məna ayrıca yoxlanır.
                    </p>
                </div>
                <p class="text-white-75 mb-3" style="font-size: 0.8rem;">
                    Yalnız lüğəvi olaraq təsdiqlənmiş Bab formaları göstərilir.
                </p>
                ${renderWeakBabFormsHtml(verb)}
                ${backButton}
            </div>
        `;
        return;
    }

    if (isMixedWeakVerb(verb)) {
        const root = extractTriliteralRoot(verb.forms.past.arabic);
        const backButton = `<button onclick="${backAction}" class="glass-button py-3 font-bold mt-2">Geri</button>`;
        content.innerHTML = `
            <div class="glass-card fade-in">
                <div class="flex-between mb-3">
                    <div>
                        <h2 class="text-xl font-bold">و ي Qarışıq zəif kök</h2>
                        <p class="text-white-75" style="font-size: 0.8rem; margin-top: 4px;">
                            <span class="arabic-text" style="font-size: 1.15rem;">${displayArabic(verb.arabic)}</span> — ${verb.meaning}
                        </p>
                    </div>
                    <button onclick="${backAction}" class="close-btn">✕</button>
                </div>
                <div class="rounded-xl mb-3" style="background: rgba(244,114,182,0.11); border: 1px solid rgba(244,114,182,0.32); padding: 12px;">
                    <p class="font-semibold mb-1">Bu kök bir neçə zəif xüsusiyyət daşıyır.</p>
                    <p class="text-white-75" style="font-size: 0.82rem;">
                        Bu kökdə bir neçə zəiflik birlikdədir. Ona görə Bab forması ayrıca yoxlanır.
                    </p>
                </div>
                <div class="rounded-xl mb-3" style="background: rgba(255,255,255,0.05); padding: 12px;">
                    <h3 class="font-semibold mb-2">Bab formaları necə yoxlanır?</h3>
                    <ul class="text-white-75" style="font-size: 0.84rem; padding-left: 20px; line-height: 1.65;">
                        <li>Kökün zəif xüsusiyyətləri müəyyən edilir.</li>
                        <li>Hər Bab ayrıca yoxlanır.</li>
                    </ul>
                </div>
                <p class="text-white-75 mb-3" style="font-size: 0.8rem;">
                    Yalnız lüğəvi olaraq təsdiqlənmiş Bablar göstərilir.
                </p>
                ${renderWeakBabFormsHtml(verb)}
                ${backButton}
            </div>
        `;
        return;
    }

    const linkedRootVerb = getRootVerbForDerived(verb);
    if (linkedRootVerb) {
        showAllBabsSection(linkedRootVerb.id, returnTo);
        return;
    }

    if (isDerivedVerb(verb)) {
        const morphology = getVerbMorphology(verb);
        const rootLabel = getDerivedRootLabel(verb);
        const stageLabel = morphology.bab
            ? `${morphology.bab} bab`
            : verb.forms.past.arabic.startsWith('اِسْت')
                ? 'X bab (istifal) tipli forma'
                : verb.forms.past.arabic.startsWith('اِنْ')
                    ? 'VII bab tipli forma'
                    : 'törəmə və ya ifadə forması';
        content.innerHTML = `
            <div class="glass-card fade-in">
                <div class="flex-between mb-3">
                    <div>
                        <h2 class="text-xl font-bold">Törəmə feil bab izahı</h2>
                        <p class="text-white-75" style="font-size: 0.8rem; margin-top: 4px;">
                            <span class="arabic-text" style="font-size: 1.15rem;">${displayArabic(verb.arabic)}</span> — ${verb.meaning}
                        </p>
                    </div>
                    <button onclick="${backAction}" class="close-btn">✕</button>
                </div>
                <div class="rounded-xl mb-3" style="background: rgba(148,163,184,0.12); border: 1px solid rgba(148,163,184,0.34); padding: 12px;">
                    <p class="font-semibold mb-1">Mövcud forma: ${stageLabel}</p>
                    <p class="text-white-75" style="font-size: 0.84rem;">Kök: <span class="arabic-text">${rootLabel}</span></p>
                    <p class="text-white-75" style="font-size: 0.82rem;">
                        Bu törəmə forma uyğun kök və Bab altında göstərilir. Kök yoxdursa, uydurma tərcümə verilmir.
                    </p>
                </div>
                <div class="rounded-xl mb-3" style="background: rgba(255,255,255,0.05); padding: 12px;">
                    <h3 class="font-semibold mb-2">Bab məlumatının statusu</h3>
                    <ul class="text-white-75" style="font-size: 0.84rem; padding-left: 20px; line-height: 1.65;">
                        <li>Törəmə forma qorunur.</li>
                        <li>Kök-Bab əlaqəsi yoxlanılıb.</li>
                        <li>Təsdiqlənməmiş forma və məna əlavə edilmir.</li>
                    </ul>
                </div>
                <p class="text-white-75 mb-3" style="font-size: 0.8rem;">
                    Bu forma ayrıca kök kimi öyrədilmir; uyğun Bab kartında göstərilir.
                </p>
                ${backButton}
            </div>
        `;
        return;
    }

    if (!isBabReadyVerb(verb)) {
        const isDeferredWeak = isDeferredWeakVerb(verb);
        content.innerHTML = `
            <div class="glass-card text-center fade-in">
                <p style="font-size: 2rem; margin-bottom: 12px;">⏭️</p>
                <h2 class="text-xl font-bold mb-2">${
                    isDeferredWeak
                        ? 'Bu feil heç bir baba salınmır'
                        : 'Növbəti mərhələyə saxlanılıb'
                }</h2>
                <p class="text-white-75 mb-4">${
                    isDeferredWeak
                        ? 'Bu zəif kök üçün təsdiqli Bab məlumatı yoxdur.'
                        : 'Bu feil törəmə və ya ifadə formasıdır; kök əlaqəsi dəqiqləşdiriləndən sonra bab qrupuna əlavə ediləcək.'
                }</p>
                <button onclick="${backAction}" class="glass-button py-3">Geri</button>
            </div>
        `;
        return;
    }

    const hasReviewedBabData = Boolean(BAB_MEANING_OVERRIDES[verb.arabic]);
    const babs = getBabFormsForVerb(verb);
    const noBabAssigned = babs.every(bab => !bab.applicable);
    const babsHtml = babs.map(b => `
        <div class="rounded-xl mb-2" style="background: rgba(255,255,255,0.05); padding: 12px;">
            <div class="flex-between mb-1">
                <span class="font-semibold" style="font-size: 0.8rem; color: var(--text-50);">${b.bab} bab</span>
                <button class="speak-btn-inline" onclick="speakArabicFromEvent(event, '${b.arabic}')" title="Səsləndir">${speakerIconSvg}</button>
            </div>
            <p class="arabic-text mb-1">${b.arabic}</p>
            <p style="font-size: 0.72rem; color: ${getBabStatusColor(b.status)}; margin-bottom: 3px;">${getBabStatusLabel(b.status)}</p>
            <p class="text-white-75" style="font-size: 0.8rem;">${getBabMeaningHtml(b)}</p>
        </div>
    `).join('');

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-3">
                <h2 class="text-xl font-bold">🔟 Bütün babları</h2>
                <button onclick="showVerbsSection(${currentVerbIndex})" class="close-btn">✕</button>
            </div>
            <p class="text-white-75 mb-3" style="font-size: 0.8rem;">
                Kök: <span class="arabic-text" style="font-size: 1.1rem;">${root}</span> (${verb.meaning}) —
                ${noBabAssigned
                    ? 'Bu feil heç bir baba salınmır.'
                    : hasReviewedBabData
                    ? 'Yoxlanmış Bab mənaları göstərilir.'
                    : 'Yalnız təsdiqlənmiş Bablar göstərilir.'}
            </p>
            ${babsHtml}
            <button onclick="${backAction}" class="glass-button py-3 font-bold mt-2">Geri</button>
        </div>
    `;
}

function showVerbsSection(index) {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';
    const standaloneVerbs = getStandaloneVerbs();

    if (index === undefined) {
        const nextUnlearned = getNextUnlearnedVerb();
        if (!nextUnlearned) {
            content.innerHTML = `
                <div class="glass-card text-center">
                    <p style="font-size: 2rem; margin-bottom: 16px;">🎉</p>
                    <h2 class="text-xl font-bold mb-2">Bütün feilləri öyrəndiniz!</h2>
                    <p class="text-white-75 mb-4">Yeni feil əlavə edildikdə burada görünəcək.</p>
                    <button onclick="resetAllProgress()" class="glass-button px-6 py-3">Proqressi sıfırla</button>
                </div>
            `;
            return;
        }
        index = standaloneVerbs.findIndex(v => v.id === nextUnlearned.id);
    }
    index = clampIndex(index, standaloneVerbs.length);
    currentVerbIndex = index;
    const verb = standaloneVerbs[currentVerbIndex];
    const isLearned = learnedVerbs.includes(verb.id);
    const isFavorite = favoriteVerbs.includes(verb.id);
    const hasAssignedBab = hasAssignedBabForVerb(verb);

    let formsHtml = '';
    const formLabels = { past: 'Keçmiş', present: 'İndiki', imperative: 'Əmr' };
    for (const [key, label] of Object.entries(formLabels)) {
        formsHtml += `
            <div class="verb-form-row" onclick="openFormExamples(${verb.id}, '${key}')">
                <span class="form-label">${label}</span>
                <span class="form-arabic">
                    <button class="speak-btn-inline" onclick="speakArabicFromEvent(event, '${verb.forms[key].arabic}')" title="Səsləndir">${speakerIconSvg}</button>
                    <span class="arabic-text font-bold">${displayArabic(verb.forms[key].arabic)}</span>
                </span>
                <span class="form-translation">${verb.forms[key].translation}</span>
            </div>
        `;
    }

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="panel-topbar">
                <span class="panel-section-icon" aria-hidden="true">${panelBookIconSvg}</span>
                <div class="panel-topbar-title">
                    <h2>Feil öyrən</h2>
                    <p>${displayArabic(verb.arabic)} — ${verb.meaning}</p>
                </div>
                <div class="panel-topbar-actions">
                    <button onclick="showVerbSearch()" class="fav-star-btn" title="Axtar">🔍</button>
                    <button onclick="toggleFavoriteAndRerenderVerb(${verb.id})" class="fav-star-btn" title="Favoritə əlavə et">${isFavorite ? '⭐' : '☆'}</button>
                    <button onclick="showMainMenu()" class="close-btn">✕</button>
                </div>
            </div>
            <div class="verb-progress">${currentVerbIndex + 1} / ${standaloneVerbs.length}</div>
            <div class="verb-hero">
                <div class="verb-hero-row">
                    <p class="arabic-text font-bold">${displayArabic(verb.arabic)}</p>
                    <button class="speak-btn" onclick="speakArabicFromEvent(event, '${verb.arabic}')" title="Səsləndir">${speakerIconSvg}</button>
                </div>
                <p class="verb-hero-meaning">${verb.meaning}</p>
            </div>
            ${getVerbStageNoticeHtml(verb)}
            <div class="forms-panel">
                <div class="forms-panel-title">Formalar</div>
                <div>${formsHtml}</div>
            </div>
            ${!hasAssignedBab
                ? getNoBabAssignmentNoticeHtml()
                : isBabReadyVerb(verb)
                ? `<button onclick="showAllBabsSection(${verb.id})" class="glass-button verb-babs-button">${calendarIconSvg} &nbsp; Bütün babları gör <span style="float:right;">›</span></button>`
                : isHamzatedWeakVerb(verb)
                    ? `<button onclick="showAllBabsSection(${verb.id})" class="glass-button verb-babs-button" style="background: rgba(251,191,36,0.13); border-color: rgba(251,191,36,0.42);">هـ &nbsp; Həmzəli bab izahı <span style="float:right;">›</span></button>`
                    : isInitialWeakVerb(verb)
                        ? `<button onclick="showAllBabsSection(${verb.id})" class="glass-button verb-babs-button" style="background: rgba(96,165,250,0.13); border-color: rgba(96,165,250,0.42);">و ي &nbsp; Başlanğıc zəif kök izahı <span style="float:right;">›</span></button>`
                        : isMedialWeakVerb(verb)
                            ? `<button onclick="showAllBabsSection(${verb.id})" class="glass-button verb-babs-button" style="background: rgba(167,139,250,0.13); border-color: rgba(167,139,250,0.42);">و ي &nbsp; Orta zəif kök izahı <span style="float:right;">›</span></button>`
                        : isFinalWeakVerb(verb)
                            ? `<button onclick="showAllBabsSection(${verb.id})" class="glass-button verb-babs-button" style="background: rgba(52,211,153,0.13); border-color: rgba(52,211,153,0.42);">و ي &nbsp; Son zəif kök izahı <span style="float:right;">›</span></button>`
                        : isMixedWeakVerb(verb)
                            ? `<button onclick="showAllBabsSection(${verb.id})" class="glass-button verb-babs-button" style="background: rgba(244,114,182,0.13); border-color: rgba(244,114,182,0.42);">و ي &nbsp; Qarışıq zəif kök izahı <span style="float:right;">›</span></button>`
                        : isQuadriliteralRoot(verb)
                            ? `<button onclick="showAllBabsSection(${verb.id})" class="glass-button verb-babs-button" style="background: rgba(52,211,153,0.13); border-color: rgba(52,211,153,0.42);">Dördhərfli kök və törəmələri <span style="float:right;">›</span></button>`
                        : isDerivedVerb(verb)
                            && getRootVerbForDerived(verb)
                            ? `<button onclick="showAllBabsSection(${getRootVerbForDerived(verb).id})" class="glass-button verb-babs-button" style="background: rgba(96,165,250,0.13); border-color: rgba(96,165,250,0.42);">Kök feil və babları gör <span style="float:right;">›</span></button>`
                        : isDerivedVerb(verb)
                            && !getRootVerbForDerived(verb)
                            ? `<button onclick="showAllBabsSection(${verb.id})" class="glass-button verb-babs-button" style="background: rgba(148,163,184,0.13); border-color: rgba(148,163,184,0.42);">Törəmə feil bab izahı <span style="float:right;">›</span></button>`
                    : ''}
            <button onclick="markVerbLearned(${verb.id})" class="glass-button verb-learn-button py-3 font-bold text-lg">
                ${isLearned ? '✓ Öyrənilib' : '✓ Öyrəndim'}
            </button>
            <div class="nav-row">
                <button onclick="navigateVerb(-1)" class="glass-button" ${currentVerbIndex === 0 ? 'disabled' : ''}>‹ &nbsp; Əvvəlki</button>
                <button onclick="navigateVerb(1)" class="glass-button" ${currentVerbIndex === standaloneVerbs.length - 1 ? 'disabled' : ''}>Növbəti &nbsp; ›</button>
            </div>
        </div>
    `;
}

// ==================== AXTARIŞ (FEİLLƏR) ====================
function showVerbSearch() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-xl font-bold">🔍 Söz axtar</h2>
                <button onclick="showVerbsSection(${currentVerbIndex})" class="close-btn">✕</button>
            </div>
            <input type="text" id="verb-search-input" class="input-field mb-4" placeholder="Ərəbcə və ya azərbaycanca yazın..." autocomplete="off" oninput="filterVerbSearch(this.value)">
            <div id="verb-search-results"></div>
        </div>
    `;
    document.getElementById('verb-search-input').focus();
    filterVerbSearch('');
}

function filterVerbSearch(query) {
    const resultsDiv = document.getElementById('verb-search-results');
    if (!resultsDiv) return;
    const q = query.trim().toLowerCase();
    const qNormalized = normalizeArabic(query.trim());

    let matches;
    const standaloneVerbs = getStandaloneVerbs();
    if (q === '') {
        matches = standaloneVerbs.slice(0, 30);
    } else {
        matches = standaloneVerbs.filter(v =>
            v.meaning.toLowerCase().includes(q) ||
            (qNormalized && normalizeArabic(v.arabic).includes(qNormalized))
        ).slice(0, 60);
    }

    if (matches.length === 0) {
        resultsDiv.innerHTML = `<p class="text-white-75 text-center" style="padding: 20px 0;">Nəticə tapılmadı</p>`;
        return;
    }

    resultsDiv.innerHTML = matches.map(v => {
        const idx = standaloneVerbs.findIndex(x => x.id === v.id);
        const learned = learnedVerbs.includes(v.id) ? '✓ ' : '';
        return `
            <div class="flex-between border-b py-2 clickable" onclick="showVerbsSection(${idx})">
                <span class="arabic-text">${displayArabic(v.arabic)}</span>
                <span class="text-white-75" style="font-size: 0.875rem;">${learned}${v.meaning}</span>
            </div>
        `;
    }).join('');
}

function navigateVerb(delta) {
    showVerbsSection(currentVerbIndex + delta);
}

function toggleFavoriteAndRerenderVerb(id) {
    toggleFavorite(id);
    showVerbsSection(currentVerbIndex);
}

function openFormExamples(verbId, formKey, returnTo) {
    const verb = verbsData.find(v => v.id === verbId);
    if (!verb) return;
    const formData = verb.forms[formKey];
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    const backAction = returnTo === 'mixed' ? `showMixedSection(${currentMixedIndex})` : `showVerbsSection(${currentVerbIndex})`;

    let examplesHtml = '';
    formData.examples.forEach(ex => {
        examplesHtml += `
            <div class="rounded-xl mb-2" style="background: rgba(255,255,255,0.05); padding: 12px;">
                <div style="display:flex; align-items:center; gap:8px;">
                    <button class="speak-btn-inline" onclick="speakArabicFromEvent(event, '${ex.arabic}')" title="Səsləndir">${speakerIconSvg}</button>
                    <p class="arabic-text mb-1" style="flex:1;">${displayArabic(ex.arabic)}</p>
                </div>
                <p class="text-white-75" style="font-size: 0.875rem; direction: ltr; text-align: left;">${ex.translation}</p>
            </div>
        `;
    });

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-xl font-bold">Nümunə Cümlələr</h2>
                <button onclick="${backAction}" class="close-btn">✕</button>
            </div>
            <div class="text-center mb-4">
                <div style="display:flex; align-items:center; justify-content:center; gap:10px;">
                    <p class="arabic-text text-3xl font-bold">${displayArabic(formData.arabic)}</p>
                    <button class="speak-btn" onclick="speakArabicFromEvent(event, '${formData.arabic}')" title="Səsləndir">${speakerIconSvg}</button>
                </div>
                <p class="text-white-75">${verb.meaning} (${formData.translation})</p>
            </div>
            ${examplesHtml}
            <button onclick="${backAction}" class="glass-button py-3 font-bold mt-3">Geri</button>
        </div>
    `;
}

function markVerbLearned(id) {
    if (!learnedVerbs.includes(id)) {
        learnedVerbs.push(id);
        saveLearnedVerbs();
        addXp(XP_PER_VERB);
        checkBadges();
    }
    if (currentVerbIndex < getStandaloneVerbCount() - 1) {
        showVerbsSection(currentVerbIndex + 1);
    } else {
        showVerbsSection(currentVerbIndex);
    }
}

// Dialoqlar bölməsi
function showDialoguesSection(index) {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (index === undefined) {
        const nextUnlearned = getNextUnlearnedDialogue();
        if (!nextUnlearned) {
            content.innerHTML = `
                <div class="glass-card text-center">
                    <p style="font-size: 2rem; margin-bottom: 16px;">🎉</p>
                    <h2 class="text-xl font-bold mb-2">Bütün dialoqları öyrəndiniz!</h2>
                    <p class="text-white-75 mb-4">Yeni dialoq əlavə edildikdə burada görünəcək.</p>
                    <button onclick="resetAllProgress()" class="glass-button px-6 py-3">Proqressi sıfırla</button>
                </div>
            `;
            return;
        }
        index = dialoguesData.findIndex(d => d.id === nextUnlearned.id);
    }
    index = clampIndex(index, dialoguesData.length);
    currentDialogueIndex = index;
    const dialogue = dialoguesData[currentDialogueIndex];
    const isLearned = learnedDialogues.includes(dialogue.id);

    let dialogueHtml = '';
    dialogue.dialogue.forEach((line, lineIdx) => {
        dialogueHtml += `
            <div class="rounded-xl mb-2" style="background: rgba(255,255,255,0.05); padding: 12px;">
                <div style="display:flex; align-items:center; gap:8px;">
                    <button class="speak-btn-inline" onclick="speakArabicFromEvent(event, '${line.arabic}')" title="Səsləndir">${speakerIconSvg}</button>
                    <p class="arabic-text mb-1" style="flex:1;">${displayArabic(line.arabic)}</p>
                </div>
                <p class="dialogue-translation">${line.translation}</p>
            </div>
        `;
    });

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">${dialogue.title}</h2>
                <div style="display:flex; align-items:center; gap:6px;">
                    <button onclick="showDialogueSearch()" class="fav-star-btn" title="Axtar">🔍</button>
                    <button onclick="showMainMenu()" class="close-btn">✕</button>
                </div>
            </div>
            <div class="progress-text">${currentDialogueIndex + 1} / ${dialoguesData.length}</div>
            <div class="text-right mb-2">
                <button class="translation-toggle" onclick="toggleTranslations(this)">Tərcümələri gizlət</button>
            </div>
            <div class="mb-4">
                ${dialogueHtml}
            </div>
            <button onclick="markDialogueLearned(${dialogue.id})" class="glass-button py-3 font-bold text-lg">
                ${isLearned ? '✓ Öyrənilib' : '✓ Öyrəndim'}
            </button>
            <div class="nav-row">
                <button onclick="navigateDialogue(-1)" class="glass-button" ${currentDialogueIndex === 0 ? 'disabled' : ''}>◀ Əvvəlki</button>
                <button onclick="navigateDialogue(1)" class="glass-button" ${currentDialogueIndex === dialoguesData.length - 1 ? 'disabled' : ''}>Növbəti ▶</button>
            </div>
        </div>
    `;
}

function navigateDialogue(delta) {
    showDialoguesSection(currentDialogueIndex + delta);
}

// ==================== AXTARIŞ (DİALOQLAR) ====================
function showDialogueSearch() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';
    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-xl font-bold">🔍 Dialoq axtar</h2>
                <button onclick="showDialoguesSection(${currentDialogueIndex})" class="close-btn">✕</button>
            </div>
            <input type="text" id="dialogue-search-input" class="input-field mb-4" placeholder="Başlıq, ərəbcə və ya azərbaycanca yazın..." autocomplete="off" oninput="filterDialogueSearch(this.value)">
            <div id="dialogue-search-results"></div>
        </div>
    `;
    document.getElementById('dialogue-search-input').focus();
    filterDialogueSearch('');
}

function filterDialogueSearch(query) {
    const resultsDiv = document.getElementById('dialogue-search-results');
    if (!resultsDiv) return;
    const q = query.trim().toLowerCase();
    const qNormalized = normalizeArabic(query.trim());

    let matches;
    if (q === '') {
        matches = dialoguesData.slice(0, 30);
    } else {
        matches = dialoguesData.filter(d =>
            d.title.toLowerCase().includes(q) ||
            d.dialogue.some(line =>
                line.translation.toLowerCase().includes(q) ||
                (qNormalized && normalizeArabic(line.arabic).includes(qNormalized))
            )
        ).slice(0, 60);
    }

    if (matches.length === 0) {
        resultsDiv.innerHTML = `<p class="text-white-75 text-center" style="padding: 20px 0;">Nəticə tapılmadı</p>`;
        return;
    }

    resultsDiv.innerHTML = matches.map(d => {
        const idx = dialoguesData.findIndex(x => x.id === d.id);
        const learned = learnedDialogues.includes(d.id) ? '✓ ' : '';
        return `
            <div class="flex-between border-b py-2 clickable" onclick="showDialoguesSection(${idx})">
                <span>${learned}${d.title}</span>
                <span class="text-white-75" style="font-size: 0.8rem;">${d.dialogue.length} sətir</span>
            </div>
        `;
    }).join('');
}

function toggleTranslations(btn) {
    const card = btn.closest('.glass-card');
    const translations = card.querySelectorAll('.dialogue-translation');
    if (translations.length === 0) return;
    const isHidden = translations[0].style.display === 'none';
    if (isHidden) {
        translations.forEach(el => el.style.display = 'block');
        btn.textContent = 'Tərcümələri gizlət';
    } else {
        translations.forEach(el => el.style.display = 'none');
        btn.textContent = 'Tərcümələri göstər';
    }
}

function markDialogueLearned(id) {
    if (!learnedDialogues.includes(id)) {
        learnedDialogues.push(id);
        saveLearnedDialogues();
        addXp(XP_PER_DIALOGUE);
        checkBadges();
    }
    if (currentDialogueIndex < dialoguesData.length - 1) {
        showDialoguesSection(currentDialogueIndex + 1);
    } else {
        showDialoguesSection(currentDialogueIndex);
    }
}

// Test rejimi seçimi
let testDeck = questionsData;
let testMode = 'normal';

function showTestModeSelect() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';
    const normalProgress = questionsData.length > 0
        ? Math.min(100, Math.round((answeredQuestions.length / questionsData.length) * 100))
        : 0;
    const difficultProgress = questionsData.length > 0
        ? Math.min(100, Math.round((difficultQuestions.length / questionsData.length) * 100))
        : 0;

    content.innerHTML = `
        <div class="glass-card fade-in test-mode-page">
            <div class="test-mode-header">
                <div class="test-mode-heading">
                    <span class="test-mode-heading-icon">▤</span>
                    <div>
                        <h2>Testlər</h2>
                        <p>Biliklərini yoxla və inkişaf etdir</p>
                    </div>
                </div>
                <button onclick="showMainMenu()" class="test-mode-close">✕</button>
            </div>

            <div class="test-mode-card" onclick="startNormalTest()">
                <div class="test-mode-icon">📝</div>
                <div class="test-mode-copy">
                    <strong>Adi test</strong>
                    <span>${questionsData.length} ərəb dili sualı · öz sürətinlə</span>
                </div>
                <div class="test-mode-meta"><span>☷ ${questionsData.length}</span><i><b style="width:${normalProgress}%"></b></i></div>
                <span class="test-mode-arrow">›</span>
            </div>

            <div class="test-mode-card" onclick="startDifficultQuestionsReview()">
                <div class="test-mode-icon">⚙</div>
                <div class="test-mode-copy">
                    <strong>Çətin suallar</strong>
                    <span>${difficultQuestions.length} sual</span>
                </div>
                <div class="test-mode-meta"><span>☷ ${difficultQuestions.length}</span><i><b style="width:${difficultProgress}%"></b></i></div>
                <span class="test-mode-arrow">›</span>
            </div>

            <div class="test-mode-card" onclick="startSpeedRound()">
                <div class="test-mode-icon">ϟ</div>
                <div class="test-mode-copy">
                    <strong>Sürətli cavab</strong>
                    <span>10 sual, hər birinə 10 saniyə</span>
                </div>
                <div class="test-mode-meta"><span>☷ 10</span><i><b style="width:0%"></b></i></div>
                <span class="test-mode-arrow">›</span>
            </div>

            <div class="test-mode-card" onclick="startMatchingGame()">
                <div class="test-mode-icon">ↄ</div>
                <div class="test-mode-copy">
                    <strong>Söz birləşdirmə</strong>
                    <span>Ərəbcə sözü mənası ilə uyğunlaşdır</span>
                </div>
                <div class="test-mode-meta"><span>☷ 0</span><i><b style="width:0%"></b></i></div>
                <span class="test-mode-arrow">›</span>
            </div>

            <div class="test-mode-footer"><span></span><small>v${APP_VERSION}</small><span></span></div>
        </div>
    `;
}

function startNormalTest() {
    testMode = 'normal';
    testDeck = questionsData;
    showTestsSection();
}

function startDifficultQuestionsReview() {
    if (difficultQuestions.length === 0) {
        const content = document.getElementById('content-area');
        content.style.display = 'block';
        document.getElementById('main-menu').style.display = 'none';
        content.innerHTML = `
            <div class="glass-card text-center fade-in">
                <p style="font-size: 2rem; margin-bottom: 12px;">🎉</p>
                <h2 class="text-xl font-bold mb-2">Çətin sualınız yoxdur</h2>
                <p class="text-white-75 mb-4">Səhv cavabladığınız suallar buraya avtomatik toplanır.</p>
                <button onclick="showTestModeSelect()" class="glass-button py-3">Geri</button>
            </div>
        `;
        return;
    }
    testMode = 'difficult';
    testDeck = questionsData.filter(q => difficultQuestions.includes(q.id));
    showTestsSection(0);
}

function highlightSelectedOption(radio) {
    const label = radio.closest('.option-label');
    const group = label.parentElement;
    group.querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
    label.classList.add('selected');
}

// Testlər bölməsi
function showTestsSection(index) {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (index === undefined) {
        const nextUnanswered = testDeck.find(q => !answeredQuestions.includes(q.id));
        if (!nextUnanswered) {
            const isNormal = testMode === 'normal';
            content.innerHTML = `
                <div class="glass-card text-center">
                    <p style="font-size: 2rem; margin-bottom: 16px;">🏆</p>
                    <h2 class="text-xl font-bold mb-2">${isNormal ? 'Test tamamlandı!' : 'Bütün suallar öyrənildi!'}</h2>
                    <p class="text-white-75 mb-4">Bütün suallara düzgün cavab verdiniz.</p>
                    ${isNormal
                        ? '<button onclick="resetAllProgress()" class="glass-button px-6 py-3">Proqressi sıfırla</button>'
                        : '<button onclick="showTestModeSelect()" class="glass-button px-6 py-3">Geri</button>'}
                </div>
            `;
            return;
        }
        index = testDeck.findIndex(q => q.id === nextUnanswered.id);
    }
    index = clampIndex(index, testDeck.length);
    currentQuestionIndex = index;
    const question = testDeck[currentQuestionIndex];
    const questionProgress = testDeck.length > 0
        ? Math.min(100, Math.round(((currentQuestionIndex + 1) / testDeck.length) * 100))
        : 0;
    const categoryLabel = question.category === 'verb_meaning'
        ? 'Ərəb dili · Söz ehtiyatı'
        : question.category === 'az_to_arabic'
            ? 'Ərəb dili · Tərcümə'
            : 'Ərəb dili · Test';

    const navRowHtml = `
        <div class="nav-row test-question-nav">
            <button onclick="navigateQuestion(-1)" class="glass-button test-nav-button" ${currentQuestionIndex === 0 ? 'disabled' : ''}>‹ &nbsp;Əvvəlki</button>
            <button onclick="navigateQuestion(1)" class="glass-button test-nav-button" ${currentQuestionIndex === testDeck.length - 1 ? 'disabled' : ''}>Növbəti&nbsp; ›</button>
        </div>
    `;

    if (question.type === 'choice') {
        let optionsHtml = '';
        question.options.forEach((opt, idx) => {
            optionsHtml += `
                <label class="option-label test-option-label">
                    <input class="test-option-radio" type="radio" name="q${question.id}" value="${idx}" onchange="highlightSelectedOption(this)">
                    <span class="test-radio" aria-hidden="true"></span>
                    <span class="arabic-text text-lg">${displayArabic(opt)}</span>
                </label>
            `;
        });
        content.innerHTML = `
            <div class="glass-card fade-in test-question-page">
                <div class="test-question-header">
                    <div class="test-question-heading">
                        <span class="test-question-heading-icon">▧</span>
                        <div>
                            <h2>Test sualı</h2>
                            <p>Biliklərini yoxla</p>
                        </div>
                    </div>
                    <div class="test-question-progress">
                        <span>${currentQuestionIndex + 1} / ${testDeck.length}</span>
                        <i><b style="width:${questionProgress}%"></b></i>
                    </div>
                </div>

                <div class="test-question-card">
                    <span class="test-question-category">${categoryLabel}</span>
                    <p class="test-question-text">${question.question}</p>
                    ${question.hint ? `<button class="test-question-hint" onclick="toggleQuestionHint(${question.id})" title="Azərbaycanca kömək">?</button>` : ''}
                </div>

                ${question.hint ? `<div id="hint-${question.id}" class="test-question-hint-box" style="display:none;">💡 ${question.hint}</div>` : ''}
                <div class="test-options">${optionsHtml}</div>
                <button onclick="checkChoiceAnswer(${question.id})" class="glass-button test-check-button">✓ &nbsp; Cavabı yoxla</button>
                <div id="feedback-${question.id}" class="feedback"></div>
                ${navRowHtml}
                <div class="test-question-footer"><span></span><small>v${APP_VERSION}</small><span></span></div>
            </div>
        `;
    } else if (question.type === 'input') {
        content.innerHTML = `
            <div class="glass-card fade-in test-question-page">
                <div class="test-question-header">
                    <div class="test-question-heading">
                        <span class="test-question-heading-icon">▧</span>
                        <div>
                            <h2>Boşluğu doldur</h2>
                            <p>Biliklərini yoxla</p>
                        </div>
                    </div>
                    <div class="test-question-progress">
                        <span>${currentQuestionIndex + 1} / ${testDeck.length}</span>
                        <i><b style="width:${questionProgress}%"></b></i>
                    </div>
                </div>

                <div class="test-question-card">
                    <span class="test-question-category">${categoryLabel}</span>
                    <p class="test-question-text">${question.question}</p>
                    ${question.hint ? `<button class="test-question-hint" onclick="toggleQuestionHint(${question.id})" title="Azərbaycanca kömək">?</button>` : ''}
                </div>

                ${question.hint ? `<div id="hint-${question.id}" class="test-question-hint-box" style="display:none;">💡 ${question.hint}</div>` : ''}
                <input type="text" id="input-${question.id}" class="input-field test-answer-input" placeholder="Cavabınızı yazın" autocomplete="off">
                <button onclick="checkInputAnswer(${question.id})" class="glass-button test-check-button">✓ &nbsp; Cavabı yoxla</button>
                <div id="feedback-${question.id}" class="feedback"></div>
                ${navRowHtml}
                <div class="test-question-footer"><span></span><small>v${APP_VERSION}</small><span></span></div>
            </div>
        `;
    }
}

function navigateQuestion(delta) {
    showTestsSection(currentQuestionIndex + delta);
}

function toggleQuestionHint(id) {
    const el = document.getElementById('hint-' + id);
    if (!el) return;
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function checkChoiceAnswer(qid) {
    const question = questionsData.find(q => q.id === qid);
    const selected = document.querySelector(`input[name="q${qid}"]:checked`);
    const feedback = document.getElementById(`feedback-${qid}`);
    if (!selected) {
        feedback.innerHTML = '<span class="warning">Zəhmət olmasa bir variant seçin.</span>';
        return;
    }
    const selectedIdx = parseInt(selected.value);
    const selectedLabel = selected.closest('.option-label');
    if (selectedIdx === question.correct) {
        selectedLabel.classList.add('correct-choice');
        feedback.innerHTML = '<span class="success">✅ Düzgün!</span>';
        recordTestAttempt(true);
        unmarkQuestionDifficult(qid);
        if (!answeredQuestions.includes(qid)) {
            answeredQuestions.push(qid);
            saveAnsweredQuestions();
            addXp(XP_PER_CORRECT_ANSWER);
            checkBadges();
        }
        setTimeout(() => showTestsSection(currentQuestionIndex + 1), 1200);
    } else {
        selectedLabel.classList.add('wrong-choice');
        recordTestAttempt(false);
        markQuestionDifficult(qid);
        feedback.innerHTML = `
            <span class="error">❌ Səhvdir, yenidən cəhd edin.</span>
            <div class="correct-answer-box">
                <span class="text-white-75" style="font-size: 0.85rem;">Düzgün cavab:</span>
                <p class="arabic-text">${displayArabic(question.options[question.correct])}</p>
            </div>
        `;
    }
}

function checkInputAnswer(qid) {
    const question = questionsData.find(q => q.id === qid);
    const input = document.getElementById(`input-${qid}`);
    const feedback = document.getElementById(`feedback-${qid}`);
    const userAnswer = input.value.trim();
    const correct = question.correctAnswer.trim();

    const normalizedUser = normalizeArabic(userAnswer);
    const normalizedCorrect = normalizeArabic(correct);

    if (normalizedUser === normalizedCorrect) {
        feedback.innerHTML = '<span class="success">✅ Düzgün!</span>';
        recordTestAttempt(true);
        unmarkQuestionDifficult(qid);
        if (!answeredQuestions.includes(qid)) {
            answeredQuestions.push(qid);
            saveAnsweredQuestions();
            addXp(XP_PER_CORRECT_ANSWER);
            checkBadges();
        }
        setTimeout(() => showTestsSection(currentQuestionIndex + 1), 1200);
    } else {
        recordTestAttempt(false);
        markQuestionDifficult(qid);
        feedback.innerHTML = `
            <span class="error">❌ Səhvdir, yenidən cəhd edin.</span>
            <div class="correct-answer-box">
                <span class="text-white-75" style="font-size: 0.85rem;">Düzgün cavab:</span>
                <p class="arabic-text">${displayArabic(question.correctAnswer)}</p>
            </div>
        `;
    }
}

// ==================== SÜRƏTLİ CAVAB REJİMİ ====================
let speedRound = null; // { questions, index, score, timerId, timeLeft }

function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function startSpeedRound() {
    const pool = shuffleArray(questionsData.filter(q => q.type === 'choice'));
    const chosen = pool.slice(0, Math.min(10, pool.length));
    if (speedRound) clearInterval(speedRound.timerId);
    speedRound = { questions: chosen, index: 0, score: 0, timeLeft: 10, timerId: null, locked: false };
    renderSpeedRoundQuestion();
}

function renderSpeedRoundQuestion() {
    if (!speedRound) return;
    clearInterval(speedRound.timerId);
    speedRound.locked = false;
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (speedRound.index >= speedRound.questions.length) {
        content.innerHTML = `
            <div class="glass-card fade-in text-center">
                <p style="font-size: 2rem; margin-bottom: 12px;">⚡</p>
                <h2 class="text-xl font-bold mb-2">Nəticə: ${speedRound.score} / ${speedRound.questions.length}</h2>
                <p class="text-white-75 mb-4">Sürətli cavab rejimi tamamlandı!</p>
                <button onclick="startSpeedRound()" class="glass-button py-3 font-bold mb-3">Yenidən oyna</button>
                <button onclick="showTestModeSelect()" class="glass-button py-3">Geri</button>
            </div>
        `;
        speedRound = null;
        return;
    }

    const q = speedRound.questions[speedRound.index];
    speedRound.timeLeft = 10;
    let optionsHtml = '';
    q.options.forEach((opt, idx) => {
        optionsHtml += `<button class="glass-button mb-2" style="text-align:left;" onclick="answerSpeedRound(${idx})"><span class="arabic-text text-lg">${displayArabic(opt)}</span></button>`;
    });

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-2">
                <h2 class="text-xl font-bold">⚡ Sürətli cavab</h2>
                <button onclick="stopSpeedRound()" class="close-btn">✕</button>
            </div>
            <div class="progress-text">${speedRound.index + 1} / ${speedRound.questions.length} &nbsp;•&nbsp; Xal: ${speedRound.score}</div>
            <div class="timer-bar-wrap"><div id="speed-timer-fill" class="timer-bar-fill" style="width:100%"></div></div>
            <p class="text-lg mb-4">${q.question}</p>
            <div id="speed-options">${optionsHtml}</div>
        </div>
    `;

    const thisRound = speedRound;
    thisRound.timerId = setInterval(() => {
        if (speedRound !== thisRound) { clearInterval(thisRound.timerId); return; }
        speedRound.timeLeft -= 0.1;
        const pct = Math.max(0, (speedRound.timeLeft / 10) * 100);
        const fill = document.getElementById('speed-timer-fill');
        if (fill) fill.style.width = pct + '%';
        if (speedRound.timeLeft <= 0) {
            clearInterval(speedRound.timerId);
            answerSpeedRound(-1);
        }
    }, 100);
}

function answerSpeedRound(chosenIdx) {
    if (!speedRound || speedRound.locked) return;
    speedRound.locked = true;
    clearInterval(speedRound.timerId);
    const q = speedRound.questions[speedRound.index];
    const isCorrect = chosenIdx === q.correct;
    if (isCorrect) { speedRound.score += 1; unmarkQuestionDifficult(q.id); } else { markQuestionDifficult(q.id); }
    recordTestAttempt(isCorrect);

    const optionsDiv = document.getElementById('speed-options');
    if (optionsDiv) {
        const buttons = optionsDiv.querySelectorAll('button');
        buttons.forEach((btn, idx) => {
            if (idx === q.correct) btn.style.background = 'rgba(74,222,128,0.35)';
            else if (idx === chosenIdx) btn.style.background = 'rgba(248,113,113,0.35)';
        });
    }

    speedRound.index += 1;
    const roundRef = speedRound;
    setTimeout(() => { if (speedRound === roundRef) renderSpeedRoundQuestion(); }, 700);
}

function stopSpeedRound() {
    if (speedRound) clearInterval(speedRound.timerId);
    speedRound = null;
    showTestModeSelect();
}

// ==================== SÖZ BİRLƏŞDİRMƏ OYUNU ====================
let matchGame = null; // { pairs, leftOrder, rightOrder, selectedLeft, selectedRight, matched, mistakes }

function startMatchingGame() {
    const standaloneVerbs = getStandaloneVerbs();
    const source = learnedVerbs.filter(id => standaloneVerbs.some(v => v.id === id)).length >= 6
        ? standaloneVerbs.filter(v => learnedVerbs.includes(v.id))
        : standaloneVerbs;
    const chosen = shuffleArray(source).slice(0, 6);
    matchGame = {
        pairs: chosen,
        leftOrder: shuffleArray(chosen.map(v => v.id)),
        rightOrder: shuffleArray(chosen.map(v => v.id)),
        selectedLeft: null,
        selectedRight: null,
        matched: [],
        mistakes: 0
    };
    renderMatchingGame();
}

function renderMatchingGame() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (matchGame.matched.length === matchGame.pairs.length) {
        content.innerHTML = `
            <div class="glass-card fade-in text-center">
                <p style="font-size: 2rem; margin-bottom: 12px;">🔗</p>
                <h2 class="text-xl font-bold mb-2">Əla! Bütün cütlər tapıldı</h2>
                <p class="text-white-75 mb-4">Səhv sayı: ${matchGame.mistakes}</p>
                <button onclick="startMatchingGame()" class="glass-button py-3 font-bold mb-3">Yenidən oyna</button>
                <button onclick="showTestModeSelect()" class="glass-button py-3">Geri</button>
            </div>
        `;
        return;
    }

    const leftHtml = matchGame.leftOrder.map(id => {
        const verb = matchGame.pairs.find(v => v.id === id);
        const isMatched = matchGame.matched.includes(id);
        const isSelected = matchGame.selectedLeft === id;
        return `<div class="match-tile ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}" onclick="selectMatchTile('left', ${id})">
            <span class="arabic-text">${displayArabic(verb.arabic)}</span>
        </div>`;
    }).join('');

    const rightHtml = matchGame.rightOrder.map(id => {
        const verb = matchGame.pairs.find(v => v.id === id);
        const isMatched = matchGame.matched.includes(id);
        const isSelected = matchGame.selectedRight === id;
        return `<div class="match-tile ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}" onclick="selectMatchTile('right', ${id})">
            <span style="font-size: 0.9rem;">${verb.meaning}</span>
        </div>`;
    }).join('');

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-2">
                <h2 class="text-xl font-bold">🔗 Söz birləşdirmə</h2>
                <button onclick="showTestModeSelect()" class="close-btn">✕</button>
            </div>
            <p class="text-white-75 mb-3" style="font-size: 0.85rem;">Ərəbcə sözü mənası ilə uyğunlaşdırın · Səhv: ${matchGame.mistakes}</p>
            <div class="match-grid">
                <div class="match-col">${leftHtml}</div>
                <div class="match-col">${rightHtml}</div>
            </div>
        </div>
    `;
}

function selectMatchTile(side, id) {
    if (matchGame.matched.includes(id)) return;
    if (side === 'left') matchGame.selectedLeft = id;
    else matchGame.selectedRight = id;

    if (matchGame.selectedLeft !== null && matchGame.selectedRight !== null) {
        if (matchGame.selectedLeft === matchGame.selectedRight) {
            matchGame.matched.push(matchGame.selectedLeft);
            matchGame.selectedLeft = null;
            matchGame.selectedRight = null;
            renderMatchingGame();
        } else {
            matchGame.mistakes += 1;
            renderMatchingGame();
            setTimeout(() => {
                matchGame.selectedLeft = null;
                matchGame.selectedRight = null;
                renderMatchingGame();
            }, 600);
        }
    } else {
        renderMatchingGame();
    }
}

// ==================== FLASH KARTLAR ====================
let flashcardSession = null; // { deck, index, knownCount, unknownCount }

function showFlashcardModeSelect() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    const allCards = getFlashcardPool();
    const unlearnedCount = allCards.filter(entry => !isFlashcardLearned(entry)).length;
    const favCount = allCards.filter(entry => isFlashcardFavorite(entry)).length;
    const difficultCount = allCards.filter(entry => isFlashcardDifficult(entry)).length;
    const dueSrsCount = getDueSrsFlashcards().length;

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-4">
                <h2 class="text-2xl font-bold">Flash kartlar</h2>
                <button onclick="showMainMenu()" class="close-btn">✕</button>
            </div>
            <div class="mode-select-card" onclick="startFlashcards('srs')">
                <div>
                    <div class="mode-select-title">Ağıllı təkrar (SRS)</div>
                    <div class="mode-select-desc">${dueSrsCount} söz növbədə</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="startFlashcards('difficult')">
                <div>
                    <div class="mode-select-title">Çətin sözlər</div>
                    <div class="mode-select-desc">${difficultCount} söz</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="startFlashcards('all')">
                <div>
                    <div class="mode-select-title">Bütün sözlər</div>
                    <div class="mode-select-desc">${allCards.length} ayrı kart</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="startFlashcards('unlearned')">
                <div>
                    <div class="mode-select-title">Yalnız öyrənilməmiş</div>
                    <div class="mode-select-desc">${unlearnedCount} söz</div>
                </div>
            </div>
            <div class="mode-select-card" onclick="startFlashcards('favorites')">
                <div>
                    <div class="mode-select-title">Yalnız Favoritlər</div>
                    <div class="mode-select-desc">${favCount} söz</div>
                </div>
            </div>
        </div>
    `;
}

let flashcardPoolCache = null;
function getFlashcardPool() {
    if (!flashcardPoolCache) {
        flashcardPoolCache = [
            ...getStandaloneVerbs().flatMap(verb => getFlashcardVerbEntries(verb)),
            ...getLexicalLearningPool()
        ];
    }
    return flashcardPoolCache;
}

function isVerbFlashcardEntry(entry) {
    return entry.kind === 'verb'
        || entry.kind === 'verb-form'
        || entry.kind === 'verb-bab';
}

function getFlashcardEntryKey(entry) {
    if (entry.kind === 'verb-form') {
        return `verb-form:${entry.item.id}:${entry.formKey}`;
    }
    if (entry.kind === 'verb-bab') {
        return `verb-bab:${entry.item.id}:${entry.bab.bab}:${normalizeArabic(entry.bab.arabic)}`;
    }
    return isVerbFlashcardEntry(entry)
        ? `verb:${entry.item.id}`
        : `${entry.kind}:${entry.category}:${entry.item.id}`;
}

function isFlashcardLearned(entry) {
    if (entry.kind === 'verb-form' || entry.kind === 'verb-bab') {
        return learnedFlashcards.includes(getFlashcardEntryKey(entry));
    }
    return (entry.kind === 'verb' ? learnedVerbs : learnedWords).includes(entry.item.id);
}

function isFlashcardFavorite(entry) {
    if (entry.kind === 'verb-form' || entry.kind === 'verb-bab') {
        return favoriteFlashcards.includes(getFlashcardEntryKey(entry));
    }
    return (entry.kind === 'verb' ? favoriteVerbs : favoriteWords).includes(entry.item.id);
}

function isFlashcardDifficult(entry) {
    if (entry.kind === 'verb-form' || entry.kind === 'verb-bab') {
        return difficultFlashcards.includes(getFlashcardEntryKey(entry));
    }
    return (entry.kind === 'verb' ? difficultVerbs : difficultWords).includes(entry.item.id);
}

function saveFlashcardLists() {
    localStorage.setItem('learnedFlashcards', JSON.stringify(learnedFlashcards));
    localStorage.setItem('favoriteFlashcards', JSON.stringify(favoriteFlashcards));
    localStorage.setItem('difficultFlashcards', JSON.stringify(difficultFlashcards));
}

function saveDifficultWords() {
    localStorage.setItem('difficultWords', JSON.stringify(difficultWords));
}

function markFlashcardDifficult(entry) {
    if (entry.kind === 'verb-form' || entry.kind === 'verb-bab') {
        const key = getFlashcardEntryKey(entry);
        if (!difficultFlashcards.includes(key)) difficultFlashcards.push(key);
        saveFlashcardLists();
        return;
    }
    const list = entry.kind === 'verb' ? difficultVerbs : difficultWords;
    if (!list.includes(entry.item.id)) list.push(entry.item.id);
    if (entry.kind === 'verb') saveDifficultVerbs();
    else saveDifficultWords();
}

function unmarkFlashcardDifficult(entry) {
    if (entry.kind === 'verb-form' || entry.kind === 'verb-bab') {
        const key = getFlashcardEntryKey(entry);
        difficultFlashcards = difficultFlashcards.filter(itemKey => itemKey !== key);
        saveFlashcardLists();
        return;
    }
    const list = entry.kind === 'verb' ? difficultVerbs : difficultWords;
    const next = list.filter(id => id !== entry.item.id);
    if (entry.kind === 'verb') {
        difficultVerbs = next;
        saveDifficultVerbs();
    } else {
        difficultWords = next;
        saveDifficultWords();
    }
}

function getDueSrsFlashcards() {
    const today = todayStr();
    return getFlashcardPool().filter(entry => {
        const rec = srsData[getFlashcardEntryKey(entry)];
        return !rec || rec.nextReview <= today;
    }).sort((a, b) => {
        const da = srsData[getFlashcardEntryKey(a)] ? srsData[getFlashcardEntryKey(a)].nextReview : today;
        const db = srsData[getFlashcardEntryKey(b)] ? srsData[getFlashcardEntryKey(b)].nextReview : today;
        return da.localeCompare(db);
    });
}

function getDueSrsVerbs() {
    return getDueSrsFlashcards()
        .filter(isVerbFlashcardEntry)
        .map(entry => entry.item);
}

function updateSrsOnAnswer(entry, knewIt) {
    const schedule = [1, 3, 7, 16, 35, 90, 180];
    const key = getFlashcardEntryKey(entry);
    const rec = srsData[key] || { interval: 0, reps: 0 };
    if (knewIt) {
        rec.reps = (rec.reps || 0) + 1;
        rec.interval = schedule[Math.min(rec.reps - 1, schedule.length - 1)];
    } else {
        rec.reps = 0;
        rec.interval = 1;
    }
    const next = new Date();
    next.setDate(next.getDate() + rec.interval);
    rec.nextReview = next.toISOString().slice(0, 10);
    srsData[key] = rec;
    localStorage.setItem('srsData', JSON.stringify(srsData));
}

const FLASHCARD_VERB_FORM_META = [
    ['past', 'Keçmiş'],
    ['present', 'İndiki'],
    ['imperative', 'Əmr']
];

function getFlashcardVerbBabEntries(verb) {
    let babs = [];
    if (isBabReadyVerb(verb)) {
        babs = getBabFormsForVerb(verb);
    } else if (isDeferredWeakVerb(verb)) {
        babs = getWeakBabFormsForVerb(verb);
    } else if (isQuadriliteralRoot(verb)) {
        babs = getLinkedDerivedBabEntries(verb).map(entry => ({
            ...entry,
            status: 'verified',
            applicable: true
        }));
        if (babs.length === 0) {
            const morphology = getVerbMorphology(verb);
            babs = [{
                bab: morphology.bab || 'I',
                arabic: verb.forms.past.arabic,
                meaning: verb.meaning,
                status: 'verified',
                applicable: true
            }];
        }
    }
    return babs.filter(bab => bab.applicable === true && bab.status === 'verified');
}

function getFlashcardVerbEntries(verb) {
    const formEntries = FLASHCARD_VERB_FORM_META.map(([formKey, label]) => ({
        kind: 'verb-form',
        item: verb,
        formKey,
        label
    }));
    const babEntries = getFlashcardVerbBabEntries(verb).map(bab => ({
        kind: 'verb-bab',
        item: verb,
        bab
    }));
    return [...formEntries, ...babEntries];
}

function getFlashcardVerbFormHtml(entry) {
    const form = entry.item.forms[entry.formKey];
    return `
        <div style="padding:10px 12px; background:rgba(255,255,255,0.045); border:1px solid rgba(255,255,255,0.1); border-radius:13px;">
            <div style="color:var(--text-50); font-size:0.8rem; font-weight:700;">${entry.label} forması</div>
            <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-top:9px;">
                <span class="arabic-text" style="font-size:1.15rem;">${displayArabic(form.arabic)}</span>
                <button class="speak-btn-inline" onclick="event.stopPropagation(); speakArabic('${form.arabic}')" title="Səsləndir">${speakerIconSvg}</button>
            </div>
            <div class="text-white-75" style="font-size:0.82rem; margin-top:6px;">${form.translation}</div>
        </div>
    `;
}

function getFlashcardVerbBabHtml(entry) {
    const bab = entry.bab;
    const statusColor = getBabStatusColor(bab.status);
    const meaning = bab.applicable && bab.meaning
        ? getBabMeaningHtml(bab)
        : 'Bu kök üçün lüğəvi olaraq təsdiqlənməyib';
    return `
        <div style="padding:10px 12px; background:rgba(255,255,255,0.045); border:1px solid rgba(255,255,255,0.1); border-radius:13px;">
            <div style="color:var(--text-50); font-size:0.8rem; font-weight:700;">Bab ${bab.bab}</div>
            <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-top:9px;">
                <span class="arabic-text" style="font-size:1.15rem;">${displayArabic(bab.arabic)}</span>
                <span style="font-size:0.66rem; color:${statusColor}; white-space:nowrap;">${getBabStatusLabel(bab.status)}</span>
            </div>
            <div class="text-white-75" style="font-size:0.82rem; margin-top:6px;">${meaning}</div>
        </div>
    `;
}

function startFlashcards(filterType) {
    const allCards = getFlashcardPool();
    let pool;
    if (filterType === 'unlearned') pool = allCards.filter(entry => !isFlashcardLearned(entry));
    else if (filterType === 'favorites') pool = allCards.filter(entry => isFlashcardFavorite(entry));
    else if (filterType === 'difficult') pool = allCards.filter(entry => isFlashcardDifficult(entry));
    else if (filterType === 'srs') pool = getDueSrsFlashcards();
    else pool = allCards.slice();

    if (pool.length === 0) {
        const emptyMessages = {
            favorites: 'Hələ favorit söz əlavə etməmisiniz.',
            difficult: 'Çətin söz siyahınız boşdur — əla nəticədir! 🎉',
            srs: 'Bugün üçün təkrarlanacaq söz yoxdur, sabah yenidən baxın! 🎉',
            unlearned: 'Bütün sözləri artıq öyrənmisiniz!'
        };
        const content = document.getElementById('content-area');
        content.innerHTML = `
            <div class="glass-card text-center fade-in">
                <p style="font-size: 2rem; margin-bottom: 12px;">🤷</p>
                <h2 class="text-xl font-bold mb-2">Bu siyahı boşdur</h2>
                <p class="text-white-75 mb-4">${emptyMessages[filterType] || 'Bu siyahı hazırda boşdur.'}</p>
                <button onclick="showFlashcardModeSelect()" class="glass-button py-3">Geri</button>
            </div>
        `;
        return;
    }

    const deck = filterType === 'srs' ? pool : shuffleArray(pool);
    flashcardSession = { deck, index: 0, knownCount: 0, unknownCount: 0, mode: filterType, requeueCount: {} };
    renderFlashcard();
}

function renderFlashcard() {
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    if (flashcardSession.index >= flashcardSession.deck.length) {
        const { knownCount, unknownCount, deck } = flashcardSession;
        content.innerHTML = `
            <div class="glass-card text-center fade-in">
                <h2 class="text-xl font-bold mb-2">Deste bitdi!</h2>
                <p class="text-white-75 mb-4">🟢 Bilirdim: ${knownCount} &nbsp;•&nbsp; 🔴 Bilmirdim: ${unknownCount} &nbsp;•&nbsp; Cəmi: ${deck.length}</p>
                <button onclick="showFlashcardModeSelect()" class="glass-button py-3 font-bold mb-3">Yeni deste</button>
                <button onclick="showMainMenu()" class="glass-button py-3">Ana menyu</button>
            </div>
        `;
        flashcardSession = null;
        return;
    }

    const entry = flashcardSession.deck[flashcardSession.index];
    const item = entry.item;
    const isVerb = isVerbFlashcardEntry(entry);
    const isFavorite = isFlashcardFavorite(entry);
    const cardArabic = entry.kind === 'verb-form'
        ? item.forms[entry.formKey].arabic
        : entry.kind === 'verb-bab'
            ? entry.bab.arabic
            : item.arabic;
    const categoryLabel = entry.kind === 'verb-form'
        ? `Fel · ${entry.label}`
        : entry.kind === 'verb-bab'
            ? `Fel · Bab ${entry.bab.bab}`
            : isVerb
                ? 'Fel'
                : (lexicalCategoryMeta[entry.category]?.title || 'Söz');
    const backContent = entry.kind === 'verb-form'
        ? getFlashcardVerbFormHtml(entry)
        : entry.kind === 'verb-bab'
            ? getFlashcardVerbBabHtml(entry)
            : isVerb
                ? getFlashcardVerbFormHtml(getFlashcardVerbEntries(item)[0])
        : `<p class="text-2xl font-bold mb-2">${item.meaning}</p>${getLexicalFormsPanelHtml(item, true)}${getLexicalExamplesHtml(item)}`;

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-2">
                <h2 class="text-xl font-bold">Flash kart</h2>
                <button onclick="showFlashcardModeSelect()" class="close-btn">✕</button>
            </div>
            <div class="progress-text">${flashcardSession.index + 1} / ${flashcardSession.deck.length}</div>
            <div class="flashcard-scene">
                <div id="flashcard-el" class="flashcard" onclick="toggleFlashcardFlip()">
                    <div class="flashcard-inner">
                        <div class="flashcard-face flashcard-front">
                            <button class="fav-star-btn" style="position:absolute; top:10px; right:14px;" onclick="event.stopPropagation(); toggleFlashcardFavorite()">${isFavorite ? '⭐' : '☆'}</button>
                            <button class="speak-btn" style="position:absolute; top:10px; left:14px;" onclick="event.stopPropagation(); speakArabic('${cardArabic}')" title="Səsləndir">${speakerIconSvg}</button>
                            <span class="text-white-75" style="font-size:0.72rem; margin-bottom:12px;">${categoryLabel}</span>
                            <p class="arabic-text text-4xl font-bold">${displayArabic(cardArabic)}</p>
                            <p class="flip-hint">Çevirmək üçün toxunun</p>
                        </div>
                        <div class="flashcard-face flashcard-back">
                            <button class="speak-btn" style="position:absolute; top:10px; left:14px;" onclick="event.stopPropagation(); speakArabic('${cardArabic}')" title="Səsləndir">${speakerIconSvg}</button>
                            <div class="flashcard-back-content">${backContent}</div>
                            <p class="flip-hint">Geri qayıtmaq üçün toxunun</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="know-row">
                <button class="glass-button btn-dontknow" onclick="answerFlashcard(false)">🔴 Bilmirdim</button>
                <button class="glass-button btn-know" onclick="answerFlashcard(true)">🟢 Bilirdim</button>
            </div>
        </div>
    `;
}

function toggleFlashcardFlip() {
    const el = document.getElementById('flashcard-el');
    if (el) el.classList.toggle('flipped');
}

function toggleFlashcardFavorite() {
    const entry = flashcardSession?.deck?.[flashcardSession.index];
    if (!entry) return;
    if (entry.kind === 'verb-form' || entry.kind === 'verb-bab') {
        const key = getFlashcardEntryKey(entry);
        if (favoriteFlashcards.includes(key)) {
            favoriteFlashcards = favoriteFlashcards.filter(itemKey => itemKey !== key);
        } else {
            favoriteFlashcards.push(key);
        }
        saveFlashcardLists();
    } else if (entry.kind === 'verb') {
        toggleFavorite(entry.item.id);
    } else {
        toggleWordFavorite(entry.item.id);
    }
    renderFlashcard();
}

function answerFlashcard(knewIt) {
    if (!flashcardSession) return;
    const entry = flashcardSession.deck[flashcardSession.index];
    const key = getFlashcardEntryKey(entry);

    if (knewIt) {
        flashcardSession.knownCount += 1;
        unmarkFlashcardDifficult(entry);
        if (entry.kind === 'verb-form' || entry.kind === 'verb-bab') {
            if (!learnedFlashcards.includes(key)) learnedFlashcards.push(key);
            localStorage.setItem('learnedFlashcards', JSON.stringify(learnedFlashcards));
        }
    } else {
        flashcardSession.unknownCount += 1;
        markFlashcardDifficult(entry);
        if (entry.kind === 'verb-form' || entry.kind === 'verb-bab') {
            learnedFlashcards = learnedFlashcards.filter(itemKey => itemKey !== key);
            localStorage.setItem('learnedFlashcards', JSON.stringify(learnedFlashcards));
        }
    }

    if (flashcardSession.mode === 'srs') {
        updateSrsOnAnswer(entry, knewIt);
        if (!knewIt) {
            const reqCount = flashcardSession.requeueCount[key] || 0;
            if (reqCount < 2) {
                flashcardSession.requeueCount[key] = reqCount + 1;
                const insertAt = Math.min(flashcardSession.deck.length, flashcardSession.index + 3);
                flashcardSession.deck.splice(insertAt, 0, entry);
            }
        }
    }

    flashcardSession.index += 1;
    renderFlashcard();
}

// ==================== GÜNLÜK BİLDİRİŞ XATIRLATMASI ====================
const REMINDER_MESSAGES = [
    'Bugünkü gündəlik sözünü öyrənməyi unutma! 📖',
    '5 dəqiqəlik məşq et, seriyanı davam etdir! 🔥',
    'Gündəlik sözünə baxmağın vaxtıdır! 🕌',
    'Bir feil, bir dialoq — bu gün üçün kifayətdir! 💪',
    'Seriyanı qırma, indi bir sual həll et! 📝'
];

function saveNotificationSettings() {
    localStorage.setItem('notificationSettings', JSON.stringify(notificationSettings));
}

function isCapacitorApp() {
    return typeof window !== 'undefined' &&
        window.Capacitor &&
        typeof window.Capacitor.isNativePlatform === 'function' &&
        window.Capacitor.isNativePlatform();
}

function getLocalNotificationsPlugin() {
    if (!isCapacitorApp()) return null;
    return (window.Capacitor.Plugins && window.Capacitor.Plugins.LocalNotifications) || null;
}

// ==================== SƏSLƏNDİRMƏ (TEXT-TO-SPEECH) ====================
// ==================== EHTİYAT NÜSXƏ (BACKUP / BƏRPA) ====================
function buildBackupObject() {
    return {
        app: 'nibras-arabic',
        appVersion: APP_VERSION,
        exportedAt: new Date().toISOString(),
        data: {
            learnedVerbs, learnedFlashcards, learnedDialogues, answeredQuestions,
            favoriteVerbs, favoriteFlashcards,
            learnedWords, favoriteWords,
            xp, earnedBadges, testStats, streakData,
            difficultVerbs, difficultFlashcards, difficultWords, difficultQuestions,
            srsData, dailyXpLog, dailyGoalXp,
            hideHarakat, arabicFontScale, notificationSettings,
            theme: localStorage.getItem('theme') || 'dark'
        }
    };
}

async function exportBackup() {
    const jsonStr = JSON.stringify(buildBackupObject(), null, 2);
    const filename = `nibras-arabic-backup-${todayStr()}.json`;

    const capFS = isCapacitorApp() && window.Capacitor.Plugins.Filesystem;
    const capShare = isCapacitorApp() && window.Capacitor.Plugins.Share;

    if (capFS) {
        try {
            const result = await capFS.writeFile({
                path: filename,
                data: jsonStr,
                directory: 'CACHE',
                encoding: 'utf8'
            });
            if (capShare && capShare.share) {
                await capShare.share({ title: 'Nibras Arabic - Ehtiyat nüsxə', url: result.uri });
            } else {
                alert('Ehtiyat nüsxə yaradıldı: ' + result.uri);
            }
        } catch (e) {
            alert('Ehtiyat nüsxə yaradıla bilmədi: ' + (e && e.message ? e.message : e));
        }
        return;
    }

    // Veb fallback: brauzer vasitəsilə fayl yükləmək
    try {
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (e) {
        alert('Ehtiyat nüsxə yaradıla bilmədi.');
    }
}

function triggerImportPicker() {
    const input = document.getElementById('backup-file-input');
    if (input) input.click();
}

function handleBackupFileSelected(input) {
    const file = input.files && input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const parsed = JSON.parse(e.target.result);
            applyBackupData(parsed);
        } catch (err) {
            alert('Fayl oxuna bilmədi — düzgün ehtiyat nüsxə faylı deyil.');
        }
    };
    reader.readAsText(file);
    input.value = '';
}

function applyBackupData(parsed) {
    if (!parsed || !parsed.data) {
        alert('Fayl formatı tanınmadı.');
        return;
    }
    const confirmed = confirm('Bu, cari proqresinizi ehtiyat nüsxədəki ilə əvəz edəcək. Davam edilsin?');
    if (!confirmed) return;

    if (typeof parsed.data !== 'object' || Array.isArray(parsed.data) || (parsed.app && parsed.app !== 'nibras-arabic')) {
        alert('Fayl formatı tanınmadı.');
        return;
    }
    const A = (v) => Array.isArray(v) ? v : [];
    const O = (v, fb) => (v && typeof v === 'object' && !Array.isArray(v)) ? v : fb;
    const d = parsed.data;
    d.learnedVerbs = A(d.learnedVerbs); d.learnedFlashcards = A(d.learnedFlashcards);
    d.learnedDialogues = A(d.learnedDialogues); d.answeredQuestions = A(d.answeredQuestions);
    d.favoriteVerbs = A(d.favoriteVerbs); d.favoriteFlashcards = A(d.favoriteFlashcards);
    d.learnedWords = A(d.learnedWords); d.favoriteWords = A(d.favoriteWords);
    d.earnedBadges = A(d.earnedBadges); d.difficultVerbs = A(d.difficultVerbs);
    d.difficultFlashcards = A(d.difficultFlashcards); d.difficultWords = A(d.difficultWords);
    d.difficultQuestions = A(d.difficultQuestions);
    d.srsData = O(d.srsData, {}); d.dailyXpLog = O(d.dailyXpLog, {});
    d.testStats = O(d.testStats, { attempts: 0, correct: 0 });
    d.streakData = O(d.streakData, { lastActiveDate: null, currentStreak: 0, longestStreak: 0 });
    d.xp = Number.isFinite(Number(d.xp)) ? Number(d.xp) : 0;
    d.dailyGoalXp = Number.isFinite(Number(d.dailyGoalXp)) && Number(d.dailyGoalXp) > 0 ? Number(d.dailyGoalXp) : 50;
    d.arabicFontScale = Number.isFinite(Number(d.arabicFontScale)) && Number(d.arabicFontScale) > 0 ? Number(d.arabicFontScale) : 1;
    if (d.theme !== 'dark' && d.theme !== 'light') d.theme = null;
    learnedVerbs = d.learnedVerbs;
    learnedFlashcards = d.learnedFlashcards || [];
    learnedDialogues = d.learnedDialogues || [];
    answeredQuestions = d.answeredQuestions || [];
    favoriteVerbs = d.favoriteVerbs || [];
    favoriteFlashcards = d.favoriteFlashcards || [];
    learnedWords = d.learnedWords || [];
    favoriteWords = d.favoriteWords || [];
    xp = d.xp || 0;
    earnedBadges = d.earnedBadges || [];
    testStats = d.testStats || { attempts: 0, correct: 0 };
    streakData = d.streakData || { lastActiveDate: null, currentStreak: 0, longestStreak: 0 };
    difficultVerbs = d.difficultVerbs || [];
    difficultFlashcards = d.difficultFlashcards || [];
    difficultWords = d.difficultWords || [];
    difficultQuestions = d.difficultQuestions || [];
    srsData = d.srsData || {};
    dailyXpLog = d.dailyXpLog || {};
    dailyGoalXp = d.dailyGoalXp || 50;
    hideHarakat = !!d.hideHarakat;
    arabicFontScale = d.arabicFontScale || 1;
    if (d.notificationSettings && d.notificationSettings.time) {
        // Yalnız seçilmiş vaxtı bərpa edirik — icazə bu cihazda yenidən verilməlidir,
        // ona görə "enabled" vəziyyətini kor-koranə bərpa etmirik.
        notificationSettings.time = d.notificationSettings.time;
        saveNotificationSettings();
    }

    saveLearnedVerbs();
    saveFlashcardLists();
    saveLearnedDialogues();
    saveAnsweredQuestions();
    saveFavoriteVerbs();
    saveLearnedWords();
    saveFavoriteWords();
    localStorage.setItem('xp', String(xp));
    localStorage.setItem('earnedBadges', JSON.stringify(earnedBadges));
    localStorage.setItem('testStats', JSON.stringify(testStats));
    localStorage.setItem('streakData', JSON.stringify(streakData));
    saveDifficultVerbs();
    saveDifficultWords();
    saveDifficultQuestions();
    localStorage.setItem('srsData', JSON.stringify(srsData));
    localStorage.setItem('dailyXpLog', JSON.stringify(dailyXpLog));
    localStorage.setItem('dailyGoalXp', String(dailyGoalXp));
    localStorage.setItem('hideHarakat', String(hideHarakat));
    localStorage.setItem('arabicFontScale', String(arabicFontScale));
    if (d.theme) {
        localStorage.setItem('theme', d.theme);
        applyTheme(d.theme);
    }
    applyArabicFontScale();

    alert('Ehtiyat nüsxə uğurla bərpa edildi!');
    showMainMenu();
}

function renderBackupCardHtml() {
    return `
        <div class="notif-card">
            <h3 class="font-semibold mb-2">💾 Ehtiyat nüsxə</h3>
            <p class="notif-status mb-3">Proqresiniz (öyrənilən sözlər, XP, seriya, favoritlər) yalnız bu telefonda saxlanılır. Tətbiqi silsəniz və ya telefon dəyişsəniz itməməsi üçün ehtiyat nüsxə çıxarın.</p>
            <button class="glass-button mb-2" onclick="exportBackup()">⬆️ Ehtiyat nüsxə çıxar</button>
            <button class="glass-button" onclick="triggerImportPicker()">⬇️ Nüsxədən bərpa et</button>
            <input type="file" id="backup-file-input" accept="application/json" style="display:none" onchange="handleBackupFileSelected(this)">
        </div>
    `;
}

// ==================== ANDROID GERİ DÜYMƏSİ ====================
// ==================== YAZI MƏŞQİ (ƏRƏB ƏLİFBASI) ====================
const ARABIC_LETTERS = [
    { letter: 'ا', name: 'əlif' }, { letter: 'ب', name: 'bə' }, { letter: 'ت', name: 'tə' },
    { letter: 'ث', name: 'sə' }, { letter: 'ج', name: 'cim' }, { letter: 'ح', name: 'ha' },
    { letter: 'خ', name: 'xa' }, { letter: 'د', name: 'dəl' }, { letter: 'ذ', name: 'zəl' },
    { letter: 'ر', name: 'ra' }, { letter: 'ز', name: 'zey' }, { letter: 'س', name: 'sin' },
    { letter: 'ش', name: 'şin' }, { letter: 'ص', name: 'sad' }, { letter: 'ض', name: 'dad' },
    { letter: 'ط', name: 'ta' }, { letter: 'ظ', name: 'za' }, { letter: 'ع', name: 'ayn' },
    { letter: 'غ', name: 'ğayn' }, { letter: 'ف', name: 'fə' }, { letter: 'ق', name: 'qaf' },
    { letter: 'ك', name: 'kəf' }, { letter: 'ل', name: 'ləm' }, { letter: 'م', name: 'mim' },
    { letter: 'ن', name: 'nun' }, { letter: 'ه', name: 'hə' }, { letter: 'و', name: 'vav' },
    { letter: 'ي', name: 'yə' }
];

let currentLetterIndex = 0;
let isDrawingOnCanvas = false;
let lastDrawPoint = null;

function showWritingSection(index) {
    index = clampIndex(index === undefined ? currentLetterIndex : index, ARABIC_LETTERS.length);
    currentLetterIndex = index;
    const item = ARABIC_LETTERS[index];
    const content = document.getElementById('content-area');
    content.style.display = 'block';
    document.getElementById('main-menu').style.display = 'none';

    content.innerHTML = `
        <div class="glass-card fade-in">
            <div class="flex-between mb-2">
                <h2 class="text-xl font-bold">✍️ Yazı məşqi</h2>
                <button onclick="showMainMenu()" class="close-btn">✕</button>
            </div>
            <div class="progress-text">${index + 1} / ${ARABIC_LETTERS.length} — ${item.name}</div>
            <p class="text-center text-white-75 mb-2" style="font-size: 0.8rem;">Boz hərfin üzərindən barmağınızla keçin</p>
            <div class="writing-canvas-wrap">
                <canvas id="writing-canvas" width="300" height="300"></canvas>
            </div>
            <button class="glass-button mb-3" onclick="clearWritingCanvas()">🧹 Təmizlə</button>
            <div class="nav-row">
                <button class="glass-button" onclick="navigateWriting(-1)" ${index === 0 ? 'disabled' : ''}>◀ Əvvəlki</button>
                <button class="glass-button" onclick="navigateWriting(1)" ${index === ARABIC_LETTERS.length - 1 ? 'disabled' : ''}>Növbəti ▶</button>
            </div>
        </div>
    `;

    setupWritingCanvas(item.letter);
}

function navigateWriting(delta) {
    showWritingSection(currentLetterIndex + delta);
}

function drawGuideLetter(letter) {
    const canvas = document.getElementById('writing-canvas');
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.direction = 'rtl';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '200px "Traditional Arabic", "Scheherazade New", "Amiri", serif';
    ctx.fillStyle = 'rgba(150,150,150,0.4)';
    ctx.fillText(letter, canvas.width / 2, canvas.height / 2 + 10);
    ctx.restore();
}

function clearWritingCanvas() {
    const item = ARABIC_LETTERS[currentLetterIndex];
    drawGuideLetter(item.letter);
}

function setupWritingCanvas(letter) {
    const canvas = document.getElementById('writing-canvas');
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    drawGuideLetter(letter);

    const getPos = (evt) => {
        const rect = canvas.getBoundingClientRect();
        const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
        const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
        return {
            x: (clientX - rect.left) * (canvas.width / rect.width),
            y: (clientY - rect.top) * (canvas.height / rect.height)
        };
    };

    const start = (evt) => {
        evt.preventDefault();
        isDrawingOnCanvas = true;
        lastDrawPoint = getPos(evt);
    };
    const move = (evt) => {
        if (!isDrawingOnCanvas) return;
        evt.preventDefault();
        const pos = getPos(evt);
        ctx.strokeStyle = '#4ade80';
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(lastDrawPoint.x, lastDrawPoint.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        lastDrawPoint = pos;
    };
    const end = () => { isDrawingOnCanvas = false; lastDrawPoint = null; };

    canvas.onmousedown = start;
    canvas.onmousemove = move;
    canvas.onmouseup = end;
    canvas.onmouseleave = end;
    canvas.ontouchstart = start;
    canvas.ontouchmove = move;
    canvas.ontouchend = end;
}

function initNativeBackButton() {
    if (!isCapacitorApp()) return;
    const CapApp = window.Capacitor.Plugins.App;
    if (!CapApp || !CapApp.addListener) return;
    CapApp.addListener('backButton', () => {
        const mainMenu = document.getElementById('main-menu');
        const isOnMainMenu = mainMenu && mainMenu.style.display !== 'none';
        if (isOnMainMenu) {
            CapApp.exitApp();
        } else {
            showMainMenu();
        }
    });
}

const STARTUP_SPLASH_DURATION = 2500;
const startupSplashStartedAt = Date.now();

function hideStartupSplash() {
    const splash = document.getElementById('startup-splash');
    if (!splash) return;
    const remaining = Math.max(0, STARTUP_SPLASH_DURATION - (Date.now() - startupSplashStartedAt));
    window.setTimeout(() => splash.classList.add('is-hidden'), remaining);
}

function getSplashScreenPlugin() {
    if (!isCapacitorApp()) return null;
    return (window.Capacitor.Plugins && window.Capacitor.Plugins.SplashScreen) || null;
}

function hideSplashScreen() {
    hideStartupSplash();
    const plugin = getSplashScreenPlugin();
    if (!plugin || !plugin.hide) return;

    // Huawei planşetlərində WebView-in ilk çəkilişi daha gec hazır ola bilər.
    // Səhifə tam çəkilməmiş splash-ı bağlamaq yuxarı hissədə yarımçıq yazı
    // və təkrarlanmış görüntü effekti yaradır.
     const minVisibleUntil = Date.now() + STARTUP_SPLASH_DURATION;
    const hide = () => {
        const remaining = Math.max(0, minVisibleUntil - Date.now());
        window.setTimeout(() => {
            plugin.hide().catch(() => {});
        }, remaining);
    };

    if (document.readyState === 'complete') hide();
    else window.addEventListener('load', hide, { once: true });
}


// ==================== SƏSLƏNDİRMƏ (TEXT-TO-SPEECH) ====================
function getTextToSpeechPlugin() {
    if (!isCapacitorApp()) return null;
    const plugins = window.Capacitor.Plugins || {};
    if (plugins.TextToSpeech) return plugins.TextToSpeech;
    if (typeof window.Capacitor.registerPlugin === 'function') {
        try {
            return window.Capacitor.registerPlugin('TextToSpeech');
        } catch (e) {
            console.warn('TextToSpeech plugini qeydiyyatdan keçirilə bilmədi:', e);
        }
    }
    return null;
}

async function waitForTextToSpeechPlugin() {
    for (let attempt = 0; attempt < 12; attempt += 1) {
        const plugin = getTextToSpeechPlugin();
        if (plugin) return plugin;
        await new Promise(resolve => window.setTimeout(resolve, 100));
    }
    return null;
}

function pickArabicWebVoice() {
    if (typeof speechSynthesis === 'undefined') return null;
    const voices = speechSynthesis.getVoices() || [];
    const arabicVoices = voices.filter(v => /^ar([-_]|$)/i.test(v.lang));
    const maleVoice = arabicVoices.find(v =>
        /\b(male|man|mascul|m1|m2)\b/i.test(`${v.name || ''} ${v.voiceURI || ''}`)
    );
    return maleVoice || arabicVoices[0] || null;
}

async function getArabicMaleNativeVoice(nativePlugin) {
    if (!nativePlugin || typeof nativePlugin.getSupportedVoices !== 'function') return -1;

    try {
        const result = await nativePlugin.getSupportedVoices();
        const voices = Array.isArray(result?.voices) ? result.voices : [];
        const arabicVoices = voices
            .map((voice, index) => ({ voice, index }))
            .filter(({ voice }) => /^ar(?:[-_]|$)/i.test(String(voice?.lang || '')));
        if (arabicVoices.length === 0) return -1;

        const voiceLabel = ({ voice }) =>
            `${voice?.name || ''} ${voice?.voiceURI || ''} ${voice?.quality || ''}`.toLowerCase();
        const explicitMale = arabicVoices.find(({ voice }) =>
            /\b(male|man|mascul|m1|m2|boy|masculino|masculin|ذكر|رجل)\b/i.test(voiceLabel({ voice }))
        );
        if (explicitMale) return explicitMale.index;

        // Google/Huawei voice packs often encode variants as ...-b-..., ...-d-...
        // without exposing a gender field. Prefer these variants over the engine default.
        const codedMale = arabicVoices.find(({ voice }) =>
            /(?:^|[-_])(?:b|d|m|male)(?:[-_]|$)/i.test(voiceLabel({ voice }))
        );
        if (codedMale) return codedMale.index;

        const nonFemale = arabicVoices.filter(({ voice }) =>
            !/\b(female|woman|girl|f1|f2|zira|samantha|feminin|أنثى|امرأة)\b/i.test(voiceLabel({ voice }))
        );
        // Never use -1 here: -1 makes Android silently select its female default.
        return (nonFemale[nonFemale.length - 1] || arabicVoices[arabicVoices.length - 1]).index;
    } catch (e) {
        console.warn('Ərəb kişi TTS səsi yoxlanarkən xəta:', e);
        return -1;
    }
}

// Android TTS mühərriklərində ar-SA həmişə ayrıca mövcud olmur.
// Əvvəl cihazın həqiqətən dəstəklədiyi ərəb dilini tapırıq.
async function getSupportedArabicNativeLanguage(nativePlugin) {
    const candidates = [
        'ar-SA', 'ar', 'ar-XA', 'ar-001', 'ar-AE', 'ar-BH', 'ar-DZ',
        'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA',
        'ar-OM', 'ar-QA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE'
    ];

    if (!nativePlugin) return null;

    try {
        if (typeof nativePlugin.getSupportedLanguages === 'function') {
            const result = await nativePlugin.getSupportedLanguages();
            const languages = Array.isArray(result?.languages) ? result.languages : [];

            // Tam uyğunluğa üstünlük ver, sonra istənilən ərəb locale-ni qəbul et.
            const exact = candidates.find(c => languages.some(l => String(l).toLowerCase() === c.toLowerCase()));
            if (exact) return exact;

            const arabic = languages.find(l => /^ar(?:[-_]|$)/i.test(String(l)));
            if (arabic) return arabic;
        }

        if (typeof nativePlugin.isLanguageSupported === 'function') {
            for (const lang of candidates) {
                const result = await nativePlugin.isLanguageSupported({ lang });
                if (result?.supported) return lang;
            }
        }
    } catch (e) {
        console.warn('Ərəb TTS dili yoxlanarkən xəta:', e);
    }

    return null;
}

function showTtsWarning(message) {
    // Səs düyməsinə basıldıqda istifadəçiyə nə baş verdiyini göstər.
    // Əsas UI-nı pozmamaq üçün qısa toast istifadə edirik.
    let toast = document.getElementById('tts-warning-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'tts-warning-toast';
        toast.style.cssText = 'position:fixed;left:16px;right:16px;bottom:88px;z-index:99999;padding:14px 16px;border-radius:14px;background:rgba(15,44,63,.96);color:#fff;text-align:center;font-size:14px;box-shadow:0 8px 30px rgba(0,0,0,.25);';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.display = 'block';
    clearTimeout(window.__ttsWarningTimer);
    window.__ttsWarningTimer = setTimeout(() => { toast.style.display = 'none'; }, 3500);
}

// text: mütləq hərəkəli (harakatlı) orijinal mətn ötürülməlidir.
async function speakArabic(text) {
    if (!text) return;

    const nativePlugin = await waitForTextToSpeechPlugin();
    if (nativePlugin) {
        try {
            // Əvvəlki danışığı dayandır ki, sürətli kliklərdə növbə yaranmasın.
            if (typeof nativePlugin.stop === 'function') {
                try { await nativePlugin.stop(); } catch (_) {}
            }

            const detectedLanguage = await getSupportedArabicNativeLanguage(nativePlugin);
            const languageCandidates = [...new Set([
                detectedLanguage,
                'ar-SA',
                'ar',
                'ar-XA',
                'ar-001',
                'ar-AE',
                'ar-BH',
                'ar-DZ',
                'ar-EG',
                'ar-IQ',
                'ar-JO',
                'ar-KW',
                'ar-LB',
                'ar-LY',
                'ar-MA',
                'ar-OM',
                'ar-QA',
                'ar-SD',
                'ar-SY',
                'ar-TN',
                'ar-YE'
            ].filter(Boolean))];

            const maleVoiceIndex = await getArabicMaleNativeVoice(nativePlugin);
            let lastError = null;
            for (const lang of languageCandidates) {
                try {
                    const speechOptions = {
                        text: text,
                        lang,
                        rate: 0.85,
                        pitch: 0.72,
                        volume: 1.0,
                        queueStrategy: 0,
                        category: 'ambient'
                    };
                    if (maleVoiceIndex >= 0) speechOptions.voice = maleVoiceIndex;
                    await nativePlugin.speak(speechOptions);
                    return;
                } catch (e) {
                    lastError = e;
                }
            }

            console.warn('Heç bir ərəb TTS dili işləmədi:', lastError);
            // Ərəb səs paketi quraşdırılmayıbsa Android-in TTS quraşdırma ekranını aç.
            if (typeof nativePlugin.openInstall === 'function') {
                try {
                    await nativePlugin.openInstall();
                    showTtsWarning('Bu cihazda ərəb səsi aktiv deyil. Açılan TTS bölməsindən ərəb dili/səsini quraşdırın.');
                } catch (_) {
                    showTtsWarning('Bu cihazın TTS mühərrikində ərəb dili/səsi quraşdırılmayıb. Ayarlar → Dil və daxiletmə → Mətn-səs bölməsindən ərəb səsini quraşdırın.');
                }
            } else {
                showTtsWarning('Bu cihazın TTS mühərrikində ərəb dili/səsi quraşdırılmayıb. Ayarlar → Dil və daxiletmə → Mətn-səs bölməsindən ərəb səsini quraşdırın.');
            }
            return;
        } catch (e) {
            console.error('Native Arabic TTS xətası:', e);
            showTtsWarning('Səsləndirmə alınmadı. Cihazın TTS mühərrikini və ərəb səsini aktiv edin.');
            return;
        }
    }

    // Brauzer/PWA fallback.
    if (typeof speechSynthesis !== 'undefined') {
        try {
            speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ar-SA';
            const arVoice = pickArabicWebVoice();
            if (!arVoice) {
                showTtsWarning('Brauzerdə ərəb səsi tapılmadı.');
                return;
            }
            utterance.voice = arVoice;
            utterance.rate = 0.85;
            utterance.pitch = 0.72;
            utterance.volume = 1.0;
            speechSynthesis.speak(utterance);
        } catch (e) {
            console.error('Web Arabic TTS xətası:', e);
            showTtsWarning('Səsləndirmə alınmadı.');
        }
    } else {
        showTtsWarning('Bu cihazda mətn səsləndirməsi dəstəklənmir.');
    }
}

function speakArabicFromEvent(event, text) {
    if (event) event.stopPropagation();
    void speakArabic(text);
}

function getNotificationSupportInfo() {
    const capacitor = isCapacitorApp();
    const hasNotificationApi = typeof Notification !== 'undefined';
    const hasServiceWorker = typeof navigator !== 'undefined' && 'serviceWorker' in navigator;
    // Capacitor-da real native bildiriş imkanı brauzer API-sindən asılı deyil
    return { capacitor, hasNotificationApi: capacitor || hasNotificationApi, hasServiceWorker };
}

async function showLocalNotification(message) {
    const plugin = getLocalNotificationsPlugin();
    if (plugin) {
        try {
            await plugin.schedule({
                notifications: [{
                    id: 999,
                    title: 'Nibras Arabic',
                    body: message,
                    schedule: { at: new Date(Date.now() + 1000) }
                }]
            });
        } catch (e) {
            // native bildiriş göstərilə bilmədi
        }
        return;
    }

    const { hasNotificationApi, hasServiceWorker } = getNotificationSupportInfo();
    if (!hasNotificationApi || typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
    try {
        if (hasServiceWorker) {
            const reg = await navigator.serviceWorker.ready;
            if (reg && reg.showNotification) {
                reg.showNotification('Nibras Arabic', {
                    body: message,
                    icon: 'icons/icon-192.png',
                    badge: 'icons/icon-192.png'
                });
                return;
            }
        }
        new Notification('Nibras Arabic', { body: message, icon: 'icons/icon-192.png' });
    } catch (e) {
        // Bildiriş göstərilə bilmədi, tətbiq normal işləməyə davam edir
    }
}

// Native (Capacitor) rejimdə hər gün eyni saatda TƏKRARLANAN bildiriş qur —
// bu, tətbiq tam bağlı olsa belə Android sistemi tərəfindən işə salınır
async function scheduleNativeDailyReminder() {
    const plugin = getLocalNotificationsPlugin();
    if (!plugin) return;
    let [h, m] = (notificationSettings.time || '19:00').split(':').map(Number);
    if (!Number.isFinite(h) || !Number.isFinite(m)) { h = 19; m = 0; }
    try {
        await plugin.cancel({ notifications: [1, 2, 3, 4, 5, 6, 7].map(id => ({ id })) });
        // Həftənin hər günü üçün ayrı bildiriş (weekday: 1=Bazar ... 7=Şənbə) — mesajlar dəyişir
        const start = Math.floor(Math.random() * REMINDER_MESSAGES.length);
        const notifications = [1, 2, 3, 4, 5, 6, 7].map((weekday, i) => ({
            id: weekday,
            title: 'Nibras Arabic',
            body: REMINDER_MESSAGES[(start + i) % REMINDER_MESSAGES.length],
            schedule: { on: { weekday, hour: h, minute: m }, repeats: true, allowWhileIdle: true }
        }));
        await plugin.schedule({ notifications });
    } catch (e) {
        // Planlaşdırma alınmadı
    }
}

async function cancelNativeDailyReminder() {
    const plugin = getLocalNotificationsPlugin();
    if (!plugin) return;
    try {
        await plugin.cancel({ notifications: [1, 2, 3, 4, 5, 6, 7].map(id => ({ id })) });
    } catch (e) {
        // -
    }
}

async function registerPeriodicReminder() {
    // Yalnız veb (brauzer/PWA) mühiti üçün — Capacitor-da native planlaşdırma istifadə olunur
    try {
        if (isCapacitorApp() || !('serviceWorker' in navigator)) return;
        const reg = await navigator.serviceWorker.ready;
        if (!('periodicSync' in reg)) return;
        const status = await navigator.permissions.query({ name: 'periodic-background-sync' });
        if (status.state === 'granted') {
            await reg.periodicSync.register('daily-reminder', { minInterval: 20 * 60 * 60 * 1000 });
        }
    } catch (e) {
        // Periodic Background Sync dəstəklənmir və ya icazə yoxdur — foreground fallback davam edir
    }
}

async function enableNotifications(time) {
    const plugin = getLocalNotificationsPlugin();

    if (plugin) {
        try {
            const result = await plugin.requestPermissions();
            const granted = result && result.display === 'granted';
            notificationSettings.enabled = granted;
            notificationSettings.nativePermissionGranted = granted;
            if (granted) {
                notificationSettings.time = time || notificationSettings.time;
                saveNotificationSettings();
                await scheduleNativeDailyReminder();
            } else {
                saveNotificationSettings();
            }
        } catch (e) {
            notificationSettings.enabled = false;
            saveNotificationSettings();
        }
        showSettingsSection();
        return;
    }

    const { hasNotificationApi } = getNotificationSupportInfo();
    if (!hasNotificationApi || typeof Notification === 'undefined') {
        notificationSettings.enabled = false;
        saveNotificationSettings();
        showSettingsSection();
        return;
    }
    let permission = Notification.permission;
    if (permission === 'default') {
        permission = await Notification.requestPermission();
    }
    if (permission === 'granted') {
        notificationSettings.enabled = true;
        notificationSettings.time = time || notificationSettings.time;
        saveNotificationSettings();
        registerPeriodicReminder();
    } else {
        notificationSettings.enabled = false;
        saveNotificationSettings();
    }
    showSettingsSection();
}

function disableNotifications() {
    notificationSettings.enabled = false;
    saveNotificationSettings();
    cancelNativeDailyReminder();
    showSettingsSection();
}

function onNotificationToggle(checkbox) {
    const timeInput = document.getElementById('notif-time-input');
    const time = timeInput ? timeInput.value : notificationSettings.time;
    if (checkbox.checked) {
        enableNotifications(time);
    } else {
        disableNotifications();
    }
}

function saveNotificationTime() {
    const timeInput = document.getElementById('notif-time-input');
    if (!timeInput) return;
    notificationSettings.time = timeInput.value;
    saveNotificationSettings();
    if (notificationSettings.enabled) {
        scheduleNativeDailyReminder();
    }
    showSettingsSection();
}

function sendTestNotification() {
    const plugin = getLocalNotificationsPlugin();
    if (plugin) {
        showLocalNotification('Bu bir sınaq bildirişidir 👋');
        return;
    }
    const { hasNotificationApi } = getNotificationSupportInfo();
    if (!hasNotificationApi || typeof Notification === 'undefined') {
        alert('Bu mühit bildirişləri dəstəkləmir.');
        return;
    }
    if (Notification.permission === 'granted') {
        showLocalNotification('Bu bir sınaq bildirişidir 👋');
    } else {
        enableNotifications(notificationSettings.time);
    }
}

function maybeShowDailyReminder() {
    // Capacitor-da bildiriş artıq native sistem tərəfindən planlaşdırılıb, bura ehtiyac yoxdur
    if (isCapacitorApp()) return;

    const { hasNotificationApi } = getNotificationSupportInfo();
    if (!hasNotificationApi || typeof Notification === 'undefined' || !notificationSettings.enabled) return;
    if (Notification.permission !== 'granted') return;

    const now = new Date();
    const today = now.toISOString().slice(0, 10);
    if (notificationSettings.lastNotifiedDate === today) return;

    const [h, m] = (notificationSettings.time || '19:00').split(':').map(Number);
    const reminderMoment = new Date();
    reminderMoment.setHours(h, m, 0, 0);

    if (now >= reminderMoment) {
        const msg = REMINDER_MESSAGES[Math.floor(Math.random() * REMINDER_MESSAGES.length)];
        showLocalNotification(msg);
        notificationSettings.lastNotifiedDate = today;
        saveNotificationSettings();
    }
}


function renderSettingsCardHtml() {
    const percentLabel = Math.round(arabicFontScale * 100) + '%';
    return `
        <div class="notif-card">
            <h3 class="settings-section-title">🔤 Görünüş və oxu</h3>
            <div class="notif-row">
                <span class="text-white-75">Ərəb şrifti ölçüsü</span>
                <span id="arabic-scale-label" class="text-white-75">${percentLabel}</span>
            </div>
            <input type="range" min="0.8" max="1.6" step="0.05" value="${arabicFontScale}" style="width:100%; margin-bottom: 6px;" oninput="onArabicFontSliderChange(this)">
            <p class="arabic-text text-2xl text-center mb-3" style="direction: rtl;">أَجَابَ</p>
            <div class="notif-row">
                <span class="text-white-75">👁️ Hərəkəsiz oxu rejimi</span>
                <label class="switch">
                    <input type="checkbox" ${hideHarakat ? 'checked' : ''} onchange="toggleHideHarakatSetting(this)">
                    <span class="slider-toggle"></span>
                </label>
            </div>
            <p class="notif-status">Aktiv olanda hərəkələr (fəthə, kəsrə, damma) gizlədilir — orta/yuxarı səviyyə üçün faydalıdır.</p>
            <div class="settings-divider"></div>
            <h3 class="settings-section-title">🔒 Məxfilik</h3>
            <a href="privacy-policy.html" class="glass-button settings-link-button">Məxfilik siyasəti</a>
            <div class="settings-divider"></div>
            <h3 class="settings-section-title">ℹ️ Haqqında</h3>
            <p class="notif-status">Nibras Arabic · v${APP_VERSION}</p>
            <p class="notif-status">Hazırlayan: Nibras Code</p>
            <a href="https://nibrascode.com" target="_blank" rel="noopener noreferrer" class="glass-button settings-link-button">NibrasCode.com</a>
        </div>
    `;
}

function renderNotificationCardHtml() {
    const { capacitor, hasNotificationApi } = getNotificationSupportInfo();
    let permission;
    if (capacitor) {
        permission = notificationSettings.nativePermissionGranted ? 'granted'
            : (notificationSettings.nativePermissionGranted === false ? 'denied' : 'default');
    } else {
        permission = hasNotificationApi && typeof Notification !== 'undefined' ? Notification.permission : 'unsupported';
    }
    const checked = notificationSettings.enabled && permission === 'granted' ? 'checked' : '';
    const isDisabled = !hasNotificationApi || permission === 'denied';

    let statusText = '';
    if (!hasNotificationApi) {
        statusText = 'Bu mühit bildirişləri dəstəkləmir.';
    } else if (permission === 'denied') {
        statusText = capacitor
            ? 'Bildirişlərə icazə verilməyib. Telefonun Ayarlar → Tətbiqlər → Nibras Arabic → Bildirişlər bölməsindən icazəni aça bilərsiniz.'
            : 'Bildirişlərə icazə verilməyib. Brauzer ayarlarından sayt icazələrini dəyişməlisiniz.';
    } else if (notificationSettings.enabled) {
        statusText = capacitor
            ? `Hər gün ${notificationSettings.time} vaxtı Android sistemi tərəfindən etibarlı bildiriş göndəriləcək (tətbiq bağlı olsa belə).`
            : `Hər gün ~${notificationSettings.time} vaxtı xatırlatma göndəriləcək (tətbiq açıq və ya bəzi telefonlarda arxa fonda olduqda). Zəmanətli deyil, brauzer dəstəyindən asılıdır.`;
    } else {
        statusText = 'Xatırlatmaları aktiv etmək üçün düyməni açın.';
    }

    return `
        <div class="notif-card">
            <h3 class="font-semibold mb-2">🔔 Günlük xatırlatma</h3>
            <div class="notif-row">
                <span class="text-white-75">Bildirişlər</span>
                <label class="switch">
                    <input type="checkbox" ${checked} ${isDisabled ? 'disabled' : ''} onchange="onNotificationToggle(this)">
                    <span class="slider-toggle"></span>
                </label>
            </div>
            <div class="notif-row">
                <span class="text-white-75">Xatırlatma vaxtı</span>
                <input type="time" id="notif-time-input" class="notif-time-input" value="${notificationSettings.time}" onchange="saveNotificationTime()" ${isDisabled ? 'disabled' : ''}>
            </div>
            <p class="notif-status">${statusText}</p>
            <button class="glass-button notif-test-btn" onclick="sendTestNotification()" ${isDisabled ? 'disabled' : ''}>Sınaq bildirişi göndər</button>
        </div>
    `;
}

// ==================== EVENT LISTENERS ====================
document.getElementById('btn-vocab').addEventListener('click', () => showVocabModeSelect());
document.getElementById('btn-dialogues').addEventListener('click', () => showDialoguesSection());
document.getElementById('btn-tests').addEventListener('click', () => showTestModeSelect());
document.getElementById('btn-flashcards').addEventListener('click', () => showFlashcardModeSelect());
document.getElementById('btn-writing').addEventListener('click', () => showWritingSection(0));
document.getElementById('btn-stats').addEventListener('click', () => showStatsSection());
document.getElementById('theme-toggle-btn').addEventListener('click', () => toggleTheme());
document.getElementById('settings-toggle-btn').addEventListener('click', () => showSettingsSection());
document.getElementById('header-back-btn').addEventListener('click', () => showMainMenu());

// Başlanğıcda: temanı tətbiq et, versiyanı göstər, seriyanı yenilə, nişanları yoxla, ana menyunu göstər
initTheme();
applyArabicFontScale();
initVersionTag();
updateStreakOnVisit();
checkBadges();
showMainMenu();
initNativeBackButton();
hideSplashScreen();

// Offline istifadə üçün Service Worker qeydiyyatı (yalnız veb/PWA mühitində — native Capacitor tətbiqinə lazım deyil)
if (!isCapacitorApp() && typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {
            // Qeydiyyat alınmasa (məs. fayl protokolu ilə açılıbsa) tətbiq normal işləməyə davam edir
        });
    });
}

// Günlük bildiriş:
// - Capacitor (native APK): aktivdirsə, planı Android sisteminə yenidən tanıdırıq (məs. tətbiq yenilənəndən sonra)
// - Veb/PWA: yüklənəndə yoxla, açıq qalarsa hər dəqiqə yenidən yoxla, arxa fon sinxronizasiyasını qeydə al
if (isCapacitorApp()) {
    if (notificationSettings.enabled) {
        scheduleNativeDailyReminder();
    }
} else {
    maybeShowDailyReminder();
    if (typeof window !== 'undefined' && window.setInterval) {
        window.setInterval(maybeShowDailyReminder, 60000);
    }
    if (notificationSettings.enabled) {
        registerPeriodicReminder();
    }
}
