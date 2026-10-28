import { i as localeHref } from "./locale-path-fYvKyZ8f.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { $ as Scale, En as FileText, R as ShieldCheck, Vt as Mail } from "../_libs/lucide-react.mjs";
import { Ln as InfoCard, Rn as InfoCards } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools-legal-BYzcrNbU.js
var import_jsx_runtime = require_jsx_runtime();
var STUDIO_VERSION = "1.0.0";
/** Privacy policy and terms of use for Studio-family browser tools (incl. Error Help). */
var C = {
	az: {
		eyebrow: `Məxfilik və şərtlər`,
		title: `Nibras Code alətləri: Alətlər, Studio, Workspace, Learn, Site Doctor, Error Help`,
		updated: `Yenilənib: 27 oktyabr 2026`,
		pTitle: `Məxfilik siyasəti`,
		privacy: [
			{
				title: `1. Bu səhifə nəyi əhatə edir`,
				paras: [
					`Həmçinin ana səhifədəki «Alətlər» qrupunu əhatə edir: PDF hazırla, QR hazırla, Fon sil, Şəkil sıx, ZIP, Hesabla, Plan hazırla, Sual qur, SEO yoxla və Nibras AI.`,
					`Bu məxfilik siyasəti və istifadə şərtləri nibrascode.com üzərindəki brauzer alətlərinə aiddir: Code Studio (/studio), Workspace (/workspace), Learn (/learn), Site Doctor (/doctor), Error Help (/error-help), Logic Lab (/learn/logic), Site Mirror (/mirror), Shortcuts (/shortcuts), Schema (/schema) və File Check (/filecheck). Onlar ana səhifədə «Studio və kod» və «Öyrən və yoxla» qruplarında göstərilir.`,
					`Operator: Nibras Code (nibrascode.com). Əlaqə: nibrascode@gmail.com. Bu səhifənin ünvanı: https://nibrascode.com/tools-legal. Mobil tətbiqlərin (Nibras Docs, QR, PDF, Arabic, Office və s.) ayrıca məxfilik səhifələri /privacy altında toplanır.`
				]
			},
			{
				title: `2. Alətlər — PDF, QR, Fon sil, Şəkil, ZIP, Hesabla, Plan, Sual, SEO və Nibras AI`,
				paras: [
					`PDF hazırla (/pdf), QR hazırla (/qr), Fon sil (/erase), Şəkil sıx (/image) və ZIP (/zip) brauzerinizdə işləyir. Seçdiyiniz fayllar Nibras Code serverinə yüklənmir. Fon silmə modeli ilk dəfə brauzerə endirilir, şəkil isə cihazınızda emal olunur.`,
					`Hesabla (/calc), Plan hazırla (/flow, /planner) və Sual qur (/logic) yazdıqlarınızı brauzerdə işləyir və lazım olduqda localStorage-da saxlayır.`,
					`SEO yoxla (/seo) yazdığınız ünvanı yoxlamaq üçün serverimizə göndərir. Nibras AI (/ai) yazdığınız mətni cavab hazırlamaq üçün serverə göndərir. Ətraflı: /privacy səhifəsindəki Nibras AI bölməsi. Şəxsi məlumat, şifrə və ya kart nömrəsi yazmayın.`
				]
			},
			{
				title: `3. Hesab və şəxsiyyət`,
				paras: [`Bu alətlərdə hesab yoxdur. Qeydiyyat, giriş, ad, telefon və e-poçt istənmir. Ödəniş və abunəlik yoxdur. Alətlər pulsuzdur.`]
			},
			{
				title: `4. Studio, Workspace və Learn — brauzerdə saxlama`,
				paras: [
					`Layihələr, fayllar, kod, PDF-dən çıxarılmış mətn, suallar, kurslar, nəticələr və nüsxələr yalnız sizin brauzerinizin localStorage (və lazım gəldikdə IndexedDB) yaddaşında saxlanır. Nibras Code serverinə yüklənmir; bizdə surəti yoxdur.`,
					`Studio və Workspace eyni layihə açarını paylaşır: birində yazdığınız digərində görünə bilər. «Nibras Dev-də aç» layihəni linkin # hissəsinə yazır; bu hissə serverə getmir. «APK Studio» ZIP-i cihazınıza endirir; onu siz yükləyirsiniz.`,
					`Studio-dakı «AI köməkçi» brauzerdə işləyən daxili qaydalar və şablonlardır; kodunuz xarici süni intellektə göndərilmir. PDF faylları brauzerdə oxunur, serverə göndərilmir.`
				]
			},
			{
				title: `5. Logic Lab, Site Mirror, Shortcuts, Schema, File Check`,
				paras: [`Hamısı brauzerdə işləyir. Sxemlər, kolleksiyalar, irəliləyiş, sitemap XML, açdığınız fayllar və hash nəticələri localStorage və ya yaddaşda qalır. Seçdiyiniz fayllar və yapışdırdığınız sitemap Nibras Code serverinə göndərilmir. File Check magic bayt və SHA hash-ləri cihazınızda hesablayır.`]
			},
			{
				title: `6. Site Doctor — server yoxlaması`,
				paras: [`Yazdığınız ünvanı yoxlamaq üçün serverimiz açıq səhifəni, robots.txt, sitemap və məhdud sayda keçidi açır (təxminən 25 link və 12 fayl). Nəticə sizə qaytarılır və saxlanmır.`, `Sui-istifadənin qarşısını almaq üçün IP ünvanı qısa müddət yalnız yaddaşda sorğu sürətini məhdudlaşdırmaq üçün istifadə olunur. Yalnız yoxlamağa haqqınız olan saytlarda istifadə edin.`]
			},
			{
				title: `7. Error Help — xəta mətninin AI ilə izahı`,
				paras: [
					`Error Help yapışdırdığınız xəta mesajını və ya stack trace-i (ən çoxu təxminən 6000 simvol) və seçdiyiniz dili /api/error-help vasitəsilə Nibras Code serverinə göndərir. Server cavabı hazırlamaq üçün xarici süni intellekt xidmətlərinə (məsələn Groq, Mistral, OpenRouter və digər konfiqurasiya olunmuş provayderlər) ötürür. Onlar mətni yalnız izah hazırlamaq üçün oxuyur.`,
					`Xəta mətni hesabla bağlanmır, reklam üçün istifadə olunmur və bizim modelimizi öyrətmək üçün saxlanmır. Sorğular diskə uzunmüddətli jurnal kimi yazılmır. IP ünvanı qısa müddət yaddaşda sürət limiti (təxminən 4 saniyə) üçün istifadə olunur. Brauzerdə gündəlik limit (10 sorğu) localStorage-da saxlanır.`,
					`Gizli açar, şifrə, token, şəxsi və ya başqasının məlumatını yapışdırmayın. İzah yeni başlayanlar üçündür; rəsmi sənədləri əvəz etmir və səhv ola bilər.`
				]
			},
			{
				title: `8. Analitika`,
				paras: [`Sayt anonim ziyarət statistikası (Google Analytics və sadə onlayn sayğac) istifadə edə bilər. Layihə məzmunu, xəta mətni, fayllar və hash-lər bu statistikaya göndərilmir. Brauzerdə izləməni bağlasanız, sayğac getməyə bilər.`]
			},
			{
				title: `9. Məlumatın silinməsi`,
				paras: [`Layihəni silmə düyməsi ilə və ya brauzerdə bu saytın məlumatlarını təmizləməklə silin. Təmizlənən localStorage geri qaytarılmır — vacib işin ZIP nüsxəsini saxlayın. Error Help və Doctor nəticələri serverdə saxlanmadığı üçün silinəcək surət yoxdur.`]
			},
			{
				title: `10. Uşaqlar və dəyişikliklər`,
				paras: [`Alətlər 13 yaşdan kiçik uşaqlar üçün nəzərdə tutulmayıb. Siyasət dəyişəndə bu səhifə yenilənir; keçərli olan son haldır. Suallar: nibrascode@gmail.com.`]
			}
		],
		tTitle: `İstifadə şərtləri`,
		terms: [
			{
				title: `1. Xidmətin mahiyyəti`,
				paras: [`Alətlər pulsuzdur və «olduğu kimi» təqdim olunur. İşləmə, dəqiqlik, fasiləsizlik və ya məlumatın qorunması üçün zəmanət verilmir. Nibras Code məqsədəuyğunluq və ya əmtəə qabiliyyəti vəd etmir.`]
			},
			{
				title: `2. Sizin məsuliyyətiniz`,
				paras: [`Yazdığınız kod, mətn, sxem və digər məzmun sizindir. Başqasının hüququnu pozan, zərərli, virus və ya qanuna zidd məzmun yaratmayın və paylaşmayın. Error Help-ə yalnız öz xəta mətninizi yapışdırın.`]
			},
			{
				title: `3. Site Doctor və Error Help`,
				paras: [`Site Doctor yalnız yoxlamağa haqqınız olan ünvanlar üçündür; hesabat avtomatik yoxlamadır, peşəkar auditi əvəz etmir. Error Help izahı məsləhətdir, peşəkar dəstək deyil; kodu həmişə öz mühitinizdə yoxlayın.`]
			},
			{
				title: `4. Studio və digər yerli alətlər`,
				paras: [`Studio-nun yoxlama, düzəliş və izah funksiyaları sadə qaydalara əsaslanır və səhv nəticə verə bilər. Dəyişiklikdən əvvəl nüsxə saxlayın. Brauzer yaddaşı dolarsa və ya təmizlənərsə məlumat itə bilər; Nibras Code bu itkiyə görə məsuliyyət daşımır.`]
			},
			{
				title: `5. Əqli mülkiyyət və dəyişiklik`,
				paras: [`Saytın brendi, dizaynı və alət interfeysi Nibras Code-a aiddir. Sizin yaratdığınız layihə məzmunu sizindir. Şərtlər dəyişə bilər; keçərli olan bu səhifənin son halıdır. Hüquqi mübahisələr üçün əlaqə: nibrascode@gmail.com.`]
			}
		],
		contact: `Əlaqə`,
		general: `Saytın ümumi məxfilik siyasəti`,
		generalTerms: `Saytın ümumi istifadə şərtləri`
	},
	en: {
		eyebrow: `Privacy and terms`,
		title: `Nibras Code tools: Tools, Studio, Workspace, Learn, Site Doctor, Error Help`,
		updated: `Updated: 27 October 2026`,
		pTitle: `Privacy policy`,
		privacy: [
			{
				title: `1. What this page covers`,
				paras: [
					`It also covers the “Tools” group on the home page: Make a PDF, Make a QR, Remove background, Compress photo, ZIP, Calculate, Make a plan, Build questions, Check SEO and Nibras AI.`,
					`This privacy policy and these terms of use cover the browser tools on nibrascode.com: Code Studio (/studio), Workspace (/workspace), Learn (/learn), Site Doctor (/doctor), Error Help (/error-help), Logic Lab (/learn/logic), Site Mirror (/mirror), Shortcuts (/shortcuts), Schema (/schema) and File Check (/filecheck). They appear on the home page under “Studio & code” and “Learn & check”.`,
					`Operator: Nibras Code (nibrascode.com). Contact: nibrascode@gmail.com. Page URL: https://nibrascode.com/en/tools-legal. Mobile apps (Nibras Docs, QR, PDF, Arabic, Office, etc.) have separate policies under /privacy.`
				]
			},
			{
				title: `2. Tools — PDF, QR, Remove background, Photo, ZIP, Calculate, Plan, Questions, SEO and Nibras AI`,
				paras: [
					`Make a PDF (/pdf), Make a QR (/qr), Remove background (/erase), Compress photo (/image) and ZIP (/zip) run in your browser. Files you choose are not uploaded to a Nibras Code server. The background-removal model is downloaded to the browser the first time; the image is processed on your device.`,
					`Calculate (/calc), Make a plan (/flow, /planner) and Build questions (/logic) work in your browser and may keep data in localStorage.`,
					`Check SEO (/seo) sends the address you enter to our server to check it. Nibras AI (/ai) sends the text you type to a server to prepare an answer. Details: the Nibras AI section on /privacy. Do not type personal data, passwords or card numbers.`
				]
			},
			{
				title: `3. Accounts and identity`,
				paras: [`These tools have no accounts. No sign-up, login, name, phone or email is required. There is no payment or subscription. The tools are free.`]
			},
			{
				title: `4. Studio, Workspace and Learn — browser storage`,
				paras: [
					`Projects, files, code, text extracted from PDFs, questions, courses, results and snapshots are stored only in your browser’s localStorage (and IndexedDB when needed). They are not uploaded to a Nibras Code server; we have no copy.`,
					`Studio and Workspace share the same project key, so work in one can appear in the other. “Open in Nibras Dev” puts the project in the link’s # fragment, which is not sent to a server. “APK Studio” downloads a ZIP to your device; you upload it yourself.`,
					`The “AI Assistant” in Studio is built-in rules and templates running in your browser; your code is not sent to external AI. PDF files are read in the browser and are not uploaded.`
				]
			},
			{
				title: `5. Logic Lab, Site Mirror, Shortcuts, Schema, File Check`,
				paras: [`All run in your browser. Circuits, collections, progress, sitemap XML, opened files and hash results stay in localStorage or memory. Files you choose and sitemaps you paste are not sent to a Nibras Code server. File Check computes magic-byte types and SHA hashes on your device.`]
			},
			{
				title: `6. Site Doctor — server check`,
				paras: [`To check the address you enter, our server opens the public page, robots.txt, sitemap and a limited number of links (about 25 links and 12 files). The result is returned to you and not stored.`, `To prevent abuse, your IP is used briefly in memory only to rate-limit requests. Use Site Doctor only on sites you are allowed to check.`]
			},
			{
				title: `7. Error Help — AI explanation of error text`,
				paras: [
					`Error Help sends the error message or stack trace you paste (up to about 6,000 characters) and your chosen language to the Nibras Code server via /api/error-help. The server forwards that text to external AI providers (for example Groq, Mistral, OpenRouter and other configured providers) solely to prepare an explanation.`,
					`The error text is not tied to an account, not used for advertising, and not kept to train our own model. Requests are not written as long-term disk logs. Your IP is used briefly in memory for a short rate limit (about 4 seconds). A daily limit (10 requests) is stored in localStorage in your browser.`,
					`Do not paste secret keys, passwords, tokens, or personal or third-party data. The explanation is for beginners; it does not replace official docs and can be wrong.`
				]
			},
			{
				title: `8. Analytics`,
				paras: [`The site may use anonymous visit statistics (Google Analytics and a simple online counter). Project content, error text, files and hashes are never sent to them. If tracking is disabled in your browser, the counter may not run.`]
			},
			{
				title: `9. Deleting data`,
				paras: [`Delete a project with the delete button, or clear this site’s data in your browser. Cleared localStorage cannot be recovered — keep a ZIP of important work. Error Help and Doctor results are not stored on the server, so there is no server copy to delete.`]
			},
			{
				title: `10. Children and changes`,
				paras: [`These tools are not directed at children under 13. When this policy changes, this page is updated; the latest version applies. Questions: nibrascode@gmail.com.`]
			}
		],
		tTitle: `Terms of use`,
		terms: [
			{
				title: `1. Nature of the service`,
				paras: [`The tools are free and provided “as is”, without warranty of availability, accuracy, continuity or data safety. Nibras Code does not promise fitness for a particular purpose.`]
			},
			{
				title: `2. Your responsibility`,
				paras: [`Your code, text, schemas and other content are yours. Do not create or share content that infringes others’ rights, is harmful, malicious or unlawful. Paste only your own error text into Error Help.`]
			},
			{
				title: `3. Site Doctor and Error Help`,
				paras: [`Use Site Doctor only on addresses you may check; the report is an automated check, not a professional audit. Error Help is guidance, not professional support; always verify code in your own environment.`]
			},
			{
				title: `4. Studio and other local tools`,
				paras: [`Studio’s analyze, fix and explain features use simple rules and can be wrong. Save a snapshot before changes. Data can be lost if browser storage fills or is cleared; Nibras Code is not liable for that loss.`]
			},
			{
				title: `5. Intellectual property and changes`,
				paras: [`The site brand, design and tool UI belong to Nibras Code. Project content you create is yours. These terms may change; the current page applies. Legal contact: nibrascode@gmail.com.`]
			}
		],
		contact: `Contact`,
		general: `General site privacy policy`,
		generalTerms: `General site terms of use`
	},
	tr: {
		eyebrow: `Gizlilik ve koşullar`,
		title: `Nibras Code araçları: Araçlar, Studio, Workspace, Learn, Site Doctor, Error Help`,
		updated: `Güncellendi: 27 Ekim 2026`,
		pTitle: `Gizlilik politikası`,
		privacy: [
			{
				title: `1. Bu sayfa neyi kapsar`,
				paras: [
					`Ana sayfadaki «Araçlar» grubunu da kapsar: PDF hazırla, QR hazırla, Arka plan sil, Foto sıkıştır, ZIP, Hesapla, Plan hazırla, Soru kur, SEO bak ve Nibras AI.`,
					`Bu gizlilik politikası ve kullanım koşulları nibrascode.com üzerindeki tarayıcı araçlarını kapsar: Code Studio, Workspace, Learn, Site Doctor, Error Help, Logic Lab, Site Mirror, Shortcuts, Schema ve File Check. Ana sayfada «Studio ve kod» ile «Öğren ve kontrol et» gruplarında yer alırlar.`,
					`İşletmeci: Nibras Code (nibrascode.com). İletişim: nibrascode@gmail.com. Adres: https://nibrascode.com/tr/tools-legal. Mobil uygulamaların ayrı politikaları /privacy altındadır.`
				]
			},
			{
				title: `2. Araçlar — PDF, QR, Arka plan sil, Foto, ZIP, Hesapla, Plan, Soru, SEO ve Nibras AI`,
				paras: [
					`PDF hazırla (/pdf), QR hazırla (/qr), Arka plan sil (/erase), Foto sıkıştır (/image) ve ZIP (/zip) tarayıcınızda çalışır. Seçtiğiniz dosyalar Nibras Code sunucusuna yüklenmez. Arka plan silme modeli ilk seferde tarayıcıya indirilir; görsel cihazınızda işlenir.`,
					`Hesapla (/calc), Plan hazırla (/flow, /planner) ve Soru kur (/logic) tarayıcıda çalışır ve gerekirse verileri localStorage'da saklar.`,
					`SEO bak (/seo) girdiğiniz adresi kontrol için sunucumuza gönderir. Nibras AI (/ai) yazdığınız metni cevap için sunucuya gönderir. Ayrıntı: /privacy sayfasındaki Nibras AI bölümü. Kişisel veri, şifre veya kart numarası yazmayın.`
				]
			},
			{
				title: `3. Hesap ve kimlik`,
				paras: [`Bu araçlarda hesap yoktur. Kayıt, giriş, ad, telefon veya e-posta istenmez. Ödeme veya abonelik yoktur; araçlar ücretsizdir.`]
			},
			{
				title: `4. Studio, Workspace ve Learn`,
				paras: [`Projeler, dosyalar, kod, PDF metni, sorular, kurslar ve kopyalar yalnızca tarayıcınızın localStorage (gerekirse IndexedDB) alanında saklanır. Nibras Code sunucusuna yüklenmez; bizde kopyası yoktur.`, `Studio ile Workspace aynı proje anahtarını paylaşır. «Nibras Dev'de aç» projeyi bağlantının # kısmına yazar; sunucuya gitmez. Studio'daki AI Asistan tarayıcıdaki yerleşik kurallardır; kodunuz harici yapay zekâya gönderilmez.`]
			},
			{
				title: `5. Logic Lab, Mirror, Shortcuts, Schema, File Check`,
				paras: [`Hepsi tarayıcıda çalışır. Devreler, koleksiyonlar, ilerleme, sitemap ve açtığınız dosyalar sunucuya gönderilmez. File Check hash hesaplarını cihazınızda yapar.`]
			},
			{
				title: `6. Site Doctor`,
				paras: [`Girdiğiniz adresi kontrol etmek için sunucumuz herkese açık sayfayı, robots.txt, sitemap ve sınırlı sayıda bağlantıyı açar. Sonuç size döner ve saklanmaz. IP yalnızca bellekte kısa süre hız sınırı için kullanılır. Yalnızca kontrol etme hakkınız olan sitelerde kullanın.`]
			},
			{
				title: `7. Error Help`,
				paras: [`Yapıştırdığınız hata metni (yaklaşık 6000 karaktere kadar) ve dil seçiminiz /api/error-help ile Nibras Code sunucusuna gider; sunucu açıklama için harici yapay zekâ sağlayıcılarına (ör. Groq, Mistral, OpenRouter) iletir. Metin hesaba bağlanmaz, reklam için kullanılmaz ve kendi modelimizi eğitmek için saklanmaz. IP kısa süre bellekte hız sınırı içindir; günlük 10 istek limiti tarayıcı localStorage'ındadır.`, `Gizli anahtar, parola, token veya kişisel veri yapıştırmayın. Açıklama resmi belgelerin yerini tutmaz ve hatalı olabilir.`]
			},
			{
				title: `8. Analitik ve silme`,
				paras: [`Site anonim ziyaret istatistiği kullanabilir; proje içeriği ve hata metni bunlara gitmez. Projeyi sil düğmesi veya tarayıcı site verisini temizleme ile silin. Temizlenen veri geri gelmez.`]
			},
			{
				title: `9. Çocuklar ve değişiklikler`,
				paras: [`Araçlar 13 yaş altı çocuklara yönelik değildir. Politika değişince bu sayfa güncellenir. Sorular: nibrascode@gmail.com.`]
			}
		],
		tTitle: `Kullanım koşulları`,
		terms: [
			{
				title: `1. Hizmetin niteliği`,
				paras: [`Araçlar ücretsizdir ve «olduğu gibi» sunulur; erişilebilirlik, doğruluk veya veri güvenliği garantisi yoktur.`]
			},
			{
				title: `2. Sorumluluğunuz`,
				paras: [`Kodunuz ve içeriğiniz size aittir. Başkalarının haklarını ihlal eden, zararlı veya yasa dışı içerik oluşturmayın. Error Help'e yalnızca kendi hata metninizi yapıştırın.`]
			},
			{
				title: `3. Site Doctor ve Error Help`,
				paras: [`Site Doctor yalnızca kontrol etme hakkınız olan adresler içindir. Error Help rehberliktir, profesyonel destek değildir; kodu kendi ortamınızda doğrulayın.`]
			},
			{
				title: `4. Yerel araçlar ve değişiklik`,
				paras: [`Studio analiz/düzeltme özellikleri hata yapabilir; önce kopya kaydedin. Tarayıcı depolaması temizlenirse veri kaybolabilir. Koşullar değişebilir; bu sayfanın güncel hali geçerlidir. İletişim: nibrascode@gmail.com.`]
			}
		],
		contact: `İletişim`,
		general: `Genel gizlilik politikası`,
		generalTerms: `Genel kullanım koşulları`
	},
	ar: {
		eyebrow: `الخصوصية والشروط`,
		title: `أدوات Nibras Code: الأدوات وStudio وWorkspace وLearn وSite Doctor وError Help`,
		updated: `آخر تحديث: 27 أكتوبر 2026`,
		pTitle: `سياسة الخصوصية`,
		privacy: [
			{
				title: `1. ما الذي تغطيه هذه الصفحة`,
				paras: [
					`وتشمل أيضاً مجموعة «أدوات» في الصفحة الرئيسية: PDF وQR وحذف الخلفية وضغط الصور وZIP والحساب والخطة والأسئلة وفحص SEO وNibras AI.`,
					`تغطي سياسة الخصوصية وشروط الاستخدام هذه أدوات المتصفح على nibrascode.com: Code Studio وWorkspace وLearn وSite Doctor وError Help وLogic Lab وSite Mirror وShortcuts وSchema وFile Check. تظهر في الصفحة الرئيسية ضمن «Studio والكود» و«تعلّم وتحقق».`,
					`المشغّل: Nibras Code (nibrascode.com). التواصل: nibrascode@gmail.com. العنوان: https://nibrascode.com/ar/tools-legal. لتطبيقات الجوال سياسات منفصلة تحت /privacy.`
				]
			},
			{
				title: `2. الأدوات — PDF وQR وحذف الخلفية والصور وZIP والحساب والخطة والأسئلة وSEO وNibras AI`,
				paras: [
					`أدوات PDF (/pdf) وQR (/qr) وحذف الخلفية (/erase) وضغط الصور (/image) وZIP (/zip) تعمل في متصفحك. لا تُرفع الملفات التي تختارها إلى خادم Nibras Code. يُنزَّل نموذج حذف الخلفية إلى المتصفح أول مرة، وتُعالج الصورة على جهازك.`,
					`أدوات الحساب (/calc) والخطة (/flow و/planner) والأسئلة (/logic) تعمل في المتصفح وقد تحفظ البيانات في localStorage.`,
					`فحص SEO (/seo) يرسل العنوان الذي تكتبه إلى خادمنا لفحصه. Nibras AI (/ai) يرسل نصك إلى الخادم لإعداد الجواب. التفاصيل: قسم Nibras AI في صفحة /privacy. لا تكتب بيانات شخصية أو كلمات مرور أو أرقام بطاقات.`
				]
			},
			{
				title: `3. الحسابات والهوية`,
				paras: [`لا حسابات في هذه الأدوات. لا يُطلب تسجيل أو دخول أو اسم أو هاتف أو بريد. لا دفع ولا اشتراك؛ الأدوات مجانية.`]
			},
			{
				title: `4. Studio وWorkspace وLearn`,
				paras: [`تُحفظ المشاريع والملفات والكود ونص PDF والأسئلة والدورات والنسخ في localStorage بمتصفحك فقط (وIndexedDB عند الحاجة). لا تُرفع إلى خادم Nibras Code وليست لدينا نسخة.`, `يشترك Studio وWorkspace في مفتاح المشاريع نفسه. زر «افتح في Nibras Dev» يضع المشروع في جزء # من الرابط ولا يُرسل إلى الخادم. «المساعد» في Studio قواعد مدمجة في المتصفح؛ لا يُرسل كودك إلى ذكاء اصطناعي خارجي.`]
			},
			{
				title: `5. Logic Lab وMirror وShortcuts وSchema وFile Check`,
				paras: [`تعمل كلها في المتصفح. الدوائر والمجموعات والتقدم وsitemap والملفات التي تفتحها لا تُرسل إلى الخادم. File Check يحسب التجزئة على جهازك.`]
			},
			{
				title: `6. Site Doctor`,
				paras: [`لفحص العنوان الذي تكتبه يفتح خادمنا الصفحة العامة وrobots.txt وsitemap وعدداً محدوداً من الروابط. تُعاد النتيجة إليك ولا تُحفظ. يُستخدم عنوان IP لفترة قصيرة في الذاكرة فقط لتحديد المعدل. استخدمه فقط على مواقع يحق لك فحصها.`]
			},
			{
				title: `7. Error Help`,
				paras: [`يُرسل نص الخطأ الذي تلصقه (حتى نحو 6000 حرف) واللغة عبر /api/error-help إلى خادم Nibras Code، ثم إلى مزوّدي ذكاء اصطناعي خارجيين (مثل Groq وMistral وOpenRouter) لإعداد الشرح فقط. لا يُربط النص بحساب ولا يُستخدم للإعلان ولا يُحفظ لتدريب نموذجنا. الحد اليومي (10 طلبات) في localStorage؛ وIP لفترة قصيرة في الذاكرة لحد المعدل.`, `لا تلصق مفاتيح سرية أو كلمات مرور أو بيانات شخصية. الشرح للمبتدئين وقد يخطئ ولا يغني عن الوثائق الرسمية.`]
			},
			{
				title: `8. التحليلات والحذف`,
				paras: [`قد يستخدم الموقع إحصاءات زيارات مجهولة؛ لا يُرسل إليها محتوى المشاريع أو نص الخطأ. احذف المشروع بالزر أو امسح بيانات الموقع في المتصفح. البيانات الممسوحة لا تُستعاد.`]
			},
			{
				title: `9. الأطفال والتغييرات`,
				paras: [`الأدوات غير موجّهة لمن دون 13 عاماً. عند تغيير السياسة تُحدَّث هذه الصفحة. الأسئلة: nibrascode@gmail.com.`]
			}
		],
		tTitle: `شروط الاستخدام`,
		terms: [
			{
				title: `1. طبيعة الخدمة`,
				paras: [`الأدوات مجانية وتُقدَّم «كما هي» دون ضمان للتوفر أو الدقة أو سلامة البيانات.`]
			},
			{
				title: `2. مسؤوليتك`,
				paras: [`كودك ومحتواك ملكك. لا تنشئ محتوى ينتهك حقوق الآخرين أو ضاراً أو مخالفاً للقانون. الصق في Error Help نص خطئك فقط.`]
			},
			{
				title: `3. Site Doctor وError Help`,
				paras: [`استخدم Site Doctor فقط على عناوين يحق لك فحصها. Error Help إرشاد وليس دعماً مهنياً؛ تحقق من الكود في بيئتك.`]
			},
			{
				title: `4. الأدوات المحلية والتغيير`,
				paras: [`ميزات التحليل في Studio قد تخطئ؛ احفظ نسخة قبل التغيير. قد تضيع البيانات عند مسح المتصفح. قد تتغير الشروط؛ النسخة الحالية من هذه الصفحة هي المعتمدة. التواصل: nibrascode@gmail.com.`]
			}
		],
		contact: `التواصل`,
		general: `سياسة الخصوصية العامة للموقع`,
		generalTerms: `شروط الاستخدام العامة للموقع`
	},
	ru: {
		eyebrow: `Конфиденциальность и условия`,
		title: `Инструменты Nibras Code: Инструменты, Studio, Workspace, Learn, Site Doctor, Error Help`,
		updated: `Обновлено: 27 октября 2026`,
		pTitle: `Политика конфиденциальности`,
		privacy: [
			{
				title: `1. Что покрывает эта страница`,
				paras: [
					`Также охватывает группу «Инструменты» на главной: PDF, QR, удаление фона, сжатие фото, ZIP, расчёты, план, вопросы, проверку SEO и Nibras AI.`,
					`Эта политика конфиденциальности и условия использования относятся к браузерным инструментам на nibrascode.com: Code Studio, Workspace, Learn, Site Doctor, Error Help, Logic Lab, Site Mirror, Shortcuts, Schema и File Check. Они показаны на главной в группах «Studio и код» и «Учись и проверяй».`,
					`Оператор: Nibras Code (nibrascode.com). Связь: nibrascode@gmail.com. Адрес: https://nibrascode.com/ru/tools-legal. У мобильных приложений отдельные политики в /privacy.`
				]
			},
			{
				title: `2. Инструменты — PDF, QR, удаление фона, фото, ZIP, расчёты, план, вопросы, SEO и Nibras AI`,
				paras: [
					`PDF (/pdf), QR (/qr), удаление фона (/erase), сжатие фото (/image) и ZIP (/zip) работают в браузере. Выбранные файлы не загружаются на сервер Nibras Code. Модель удаления фона скачивается в браузер при первом запуске; изображение обрабатывается на устройстве.`,
					`Расчёты (/calc), планы (/flow, /planner) и вопросы (/logic) работают в браузере и могут хранить данные в localStorage.`,
					`Проверка SEO (/seo) отправляет введённый адрес на наш сервер. Nibras AI (/ai) отправляет ваш текст на сервер для ответа. Подробнее: раздел Nibras AI на странице /privacy. Не вводите личные данные, пароли и номера карт.`
				]
			},
			{
				title: `3. Аккаунты и личность`,
				paras: [`В этих инструментах нет аккаунтов. Регистрация, вход, имя, телефон и e-mail не требуются. Оплаты и подписки нет; инструменты бесплатны.`]
			},
			{
				title: `4. Studio, Workspace и Learn`,
				paras: [`Проекты, файлы, код, текст из PDF, вопросы, курсы и снимки хранятся только в localStorage браузера (при необходимости IndexedDB). На сервер Nibras Code не загружаются; копии у нас нет.`, `Studio и Workspace делят один ключ проектов. «Открыть в Nibras Dev» пишет проект в # ссылки; на сервер это не уходит. «Помощник» в Studio — встроенные правила в браузере; код во внешний ИИ не отправляется.`]
			},
			{
				title: `5. Logic Lab, Mirror, Shortcuts, Schema, File Check`,
				paras: [`Всё работает в браузере. Схемы, коллекции, прогресс, sitemap и открытые файлы на сервер не отправляются. File Check считает хеши на вашем устройстве.`]
			},
			{
				title: `6. Site Doctor`,
				paras: [`Чтобы проверить введённый адрес, наш сервер открывает публичную страницу, robots.txt, sitemap и ограниченное число ссылок. Результат возвращается вам и не сохраняется. IP кратко используется только в памяти для ограничения частоты. Проверяйте только сайты, которые вам разрешено проверять.`]
			},
			{
				title: `7. Error Help`,
				paras: [`Вставленный текст ошибки (до ~6000 символов) и язык уходят через /api/error-help на сервер Nibras Code, затем к внешним ИИ-провайдерам (например Groq, Mistral, OpenRouter) только для подготовки объяснения. Текст не привязан к аккаунту, не идёт в рекламу и не хранится для обучения нашей модели. Дневной лимит (10 запросов) — в localStorage; IP кратко в памяти для rate limit.`, `Не вставляйте секретные ключи, пароли, токены и чужие данные. Объяснение для новичков, может ошибаться и не заменяет официальную документацию.`]
			},
			{
				title: `8. Аналитика и удаление`,
				paras: [`Сайт может использовать анонимную статистику посещений; содержимое проектов и текст ошибки туда не отправляются. Удалите проект кнопкой или очистите данные сайта в браузере. Очищенное не восстановить.`]
			},
			{
				title: `9. Дети и изменения`,
				paras: [`Инструменты не предназначены для детей младше 13 лет. При изменении политики обновляется эта страница. Вопросы: nibrascode@gmail.com.`]
			}
		],
		tTitle: `Условия использования`,
		terms: [
			{
				title: `1. Характер сервиса`,
				paras: [`Инструменты бесплатны и предоставляются «как есть», без гарантий доступности, точности или сохранности данных.`]
			},
			{
				title: `2. Ваша ответственность`,
				paras: [`Ваш код и контент принадлежат вам. Не создавайте контент, нарушающий чужие права, вредоносный или незаконный. В Error Help вставляйте только свой текст ошибки.`]
			},
			{
				title: `3. Site Doctor и Error Help`,
				paras: [`Site Doctor — только для адресов, которые вам разрешено проверять. Error Help — подсказка, не профессиональная поддержка; проверяйте код в своей среде.`]
			},
			{
				title: `4. Локальные инструменты и изменения`,
				paras: [`Анализ в Studio может ошибаться; сохраняйте снимок до правок. Данные могут пропасть при очистке браузера. Условия могут меняться; действует текущая версия страницы. Контакт: nibrascode@gmail.com.`]
			}
		],
		contact: `Контакты`,
		general: `Общая политика конфиденциальности`,
		generalTerms: `Общие условия использования`
	}
};
var LEGAL_LABEL = {
	az: {
		privacy: "Məxfilik",
		terms: "İstifadə şərtləri"
	},
	en: {
		privacy: "Privacy",
		terms: "Terms of use"
	},
	tr: {
		privacy: "Gizlilik",
		terms: "Kullanım koşulları"
	},
	ar: {
		privacy: "الخصوصية",
		terms: "شروط الاستخدام"
	},
	ru: {
		privacy: "Конфиденциальность",
		terms: "Условия"
	}
};
/** Small footer used by the tools: version, privacy and terms links. */
function ToolsLegalLinks({ version = false, className = "" }) {
	const { lang } = useI18n();
	const l = LEGAL_LABEL[lang] ?? LEGAL_LABEL.en;
	const base = localeHref(lang, "/tools-legal");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted " + className,
		"data-testid": "tools-legal",
		children: [
			version ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Code Studio v", STUDIO_VERSION] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "underline-offset-2 hover:underline",
				href: `${base}#privacy`,
				children: l.privacy
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "underline-offset-2 hover:underline",
				href: `${base}#terms`,
				children: l.terms
			})
		]
	});
}
function ToolsLegalPage() {
	const { lang } = useI18n();
	const c = C[lang] ?? C.en;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		dir: lang === "ar" ? "rtl" : "ltr",
		"data-testid": "tools-legal-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), c.eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: c.title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm opacity-70",
				children: [
					c.updated,
					" · Code Studio v",
					STUDIO_VERSION
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "privacy",
				className: "info-section-title scroll-mt-28",
				children: c.pTitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: c.privacy.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: ShieldCheck,
				title: s.title,
				children: s.paras.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: x }, x.slice(0, 48)))
			}, s.title)) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "terms",
				className: "info-section-title scroll-mt-28",
				children: c.tTitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: c.terms.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: FileText,
				title: s.title,
				children: s.paras.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: x }, x.slice(0, 48)))
			}, s.title)) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCards, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Mail,
					title: c.contact,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:nibrascode@gmail.com",
							children: "nibrascode@gmail.com"
						}),
						" · ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: localeHref(lang, "/contact"),
							children: "nibrascode.com/contact"
						})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: ShieldCheck,
					title: c.general,
					href: localeHref(lang, "/privacy")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Scale,
					title: c.generalTerms,
					href: localeHref(lang, "/terms")
				})
			] })
		]
	});
}
//#endregion
export { ToolsLegalPage as i, STUDIO_VERSION as n, ToolsLegalLinks as r, LEGAL_LABEL as t };
