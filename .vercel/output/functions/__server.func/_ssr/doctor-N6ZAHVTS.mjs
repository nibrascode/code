import { o as __toESM } from "../_runtime.mjs";
import { i as localeHref } from "./locale-path-fYvKyZ8f.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { Ir as Activity, K as Search, Zn as Copy, sr as CircleCheck, v as TriangleAlert } from "../_libs/lucide-react.mjs";
import { Cn as ui } from "./router-Da_pLWIk.mjs";
import { r as ToolsLegalLinks } from "./tools-legal-BYzcrNbU.mjs";
import { t as ShareReport } from "./share-report-BBpN8-PA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doctor-N6ZAHVTS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var R = (az, en, tr, ru, ar) => ({
	az,
	en,
	tr,
	ru,
	ar
});
var I = (t, why, ...fix) => ({
	t,
	why,
	fix
});
var ISSUES = {
	status: R(I("Səhifə xəta kodu qaytarır: {status}", "Axtarış sistemləri və istifadəçilər səhifəni görmür.", "Hostinq/server loglarında bu ünvanın niyə {status} verdiyini yoxlayın.", "Səhifə köçübsə, köhnə ünvandan yeni ünvana 301 yönləndirmə qoyun.", "Düzəldəndən sonra yoxlamanı təkrarlayın: kod 200 olmalıdır."), I("The page returns an error code: {status}", "Search engines and visitors can't see the page.", "Check the hosting/server logs for why this URL returns {status}.", "If the page moved, add a 301 redirect from the old URL to the new one.", "Re-run the check: the code should be 200."), I("Sayfa hata kodu döndürüyor: {status}", "Arama motorları ve ziyaretçiler sayfayı göremez.", "Sunucu kayıtlarında bu adresin neden {status} verdiğine bakın.", "Sayfa taşındıysa eski adresten yeniye 301 yönlendirme ekleyin."), I("Страница возвращает код ошибки: {status}", "Поисковики и посетители не видят страницу.", "Проверьте логи сервера: почему адрес отдаёт {status}.", "Если страница переехала, поставьте 301-редирект со старого адреса."), I("الصفحة تعيد رمز خطأ: {status}", "لا يراها الزوار ولا محركات البحث.", "راجع سجلات الخادم لمعرفة سبب الرمز {status}.", "إن نُقلت الصفحة فأضف تحويلاً 301 من العنوان القديم.")),
	"no-https": R(I("Sayt HTTPS ilə açılmır", "Brauzer saytı «təhlükəli deyil» kimi göstərir, Google HTTPS saytlarını üstün tutur.", "Hostinq panelində pulsuz SSL sertifikatını (Let's Encrypt) aktiv edin.", "Bütün http:// sorğularını https://-ə 301 ilə yönləndirin.", "Saytdakı daxili linkləri və şəkilləri https:// ilə yazın."), I("The site is not served over HTTPS", "Browsers mark it «Not secure» and Google prefers HTTPS.", "Turn on a free SSL certificate (Let's Encrypt) in your hosting panel.", "Redirect all http:// requests to https:// with a 301.", "Update internal links and images to https://."), I("Site HTTPS ile açılmıyor", "Tarayıcı «Güvenli değil» gösterir.", "Barındırma panelinde ücretsiz SSL (Let's Encrypt) açın.", "Tüm http:// isteklerini 301 ile https://'e yönlendirin."), I("Сайт работает без HTTPS", "Браузер пишет «Не защищено», Google предпочитает HTTPS.", "Включите бесплатный SSL (Let's Encrypt) в панели хостинга.", "Перенаправьте все http:// на https:// (301)."), I("الموقع لا يعمل عبر HTTPS", "يعرضه المتصفح كـ«غير آمن».", "فعّل شهادة SSL مجانية (Let's Encrypt) من لوحة الاستضافة.", "حوّل كل طلبات http:// إلى https:// بتحويل 301.")),
	"http-no-redirect": R(I("http:// versiyası https://-ə yönləndirmir", "Eyni sayt iki ünvanda açılır, ziyarətçi təhlükəsiz olmayan versiyaya düşə bilər.", "Serverdə və ya hostinqdə «Force HTTPS» seçimini açın.", "Nginx: return 301 https://$host$request_uri; Apache: .htaccess-də RewriteRule ilə 301."), I("http:// does not redirect to https://", "The same site opens on two addresses; visitors may land on the insecure one.", "Enable «Force HTTPS» in your host or server.", "Nginx: return 301 https://$host$request_uri; Apache: a 301 RewriteRule in .htaccess."), I("http:// sürümü https://'e yönlenmiyor", "Ziyaretçi güvensiz sürüme düşebilir.", "Sunucuda «Force HTTPS» seçeneğini açın.", "Nginx: return 301 https://$host$request_uri;"), I("http:// не перенаправляет на https://", "Посетитель может попасть на незащищённую версию.", "Включите «Force HTTPS» на хостинге.", "Nginx: return 301 https://$host$request_uri;"), I("نسخة http:// لا تُحوّل إلى https://", "قد يصل الزائر إلى النسخة غير الآمنة.", "فعّل خيار «Force HTTPS» في الاستضافة.", "Nginx: return 301 https://$host$request_uri;")),
	"no-hsts": R(I("HSTS başlığı yoxdur", "Brauzer saytı hər dəfə yalnız HTTPS ilə açmağı yadda saxlamır.", "Server cavabına əlavə edin: Strict-Transport-Security: max-age=31536000; includeSubDomains"), I("No HSTS header", "Browsers don't remember to always use HTTPS for this site.", "Add the response header: Strict-Transport-Security: max-age=31536000; includeSubDomains"), I("HSTS başlığı yok", "Tarayıcı her zaman HTTPS kullanmayı hatırlamaz.", "Başlık ekleyin: Strict-Transport-Security: max-age=31536000; includeSubDomains"), I("Нет заголовка HSTS", "Браузер не запоминает, что сайт только на HTTPS.", "Добавьте заголовок: Strict-Transport-Security: max-age=31536000; includeSubDomains"), I("لا يوجد ترويسة HSTS", "لا يتذكر المتصفح استخدام HTTPS دائماً.", "أضف: Strict-Transport-Security: max-age=31536000; includeSubDomains")),
	"redirect-chain": R(I("Yönləndirmə zənciri: {count} addım", "Hər yönləndirmə açılışı yavaşladır.", "Linkləri birbaşa son ünvana yazın.", "Server qaydalarını birləşdirin ki, http→https və www dəyişikliyi bir 301-də olsun."), I("Redirect chain: {count} hops", "Each redirect slows down loading.", "Link directly to the final URL.", "Merge rules so http→https and www changes happen in one 301."), I("Yönlendirme zinciri: {count} adım", "Her yönlendirme yavaşlatır.", "Bağlantıları doğrudan son adrese verin."), I("Цепочка редиректов: {count}", "Каждый редирект замедляет загрузку.", "Ссылайтесь сразу на конечный адрес.", "Объедините правила в один 301."), I("سلسلة تحويلات: {count}", "كل تحويل يبطئ التحميل.", "اربط مباشرة بالعنوان النهائي.")),
	"no-title": R(I("Səhifə başlığı (title) yoxdur", "Google nəticələrində və brauzer tabında səhifənin adı görünmür.", "<head> içinə əlavə edin: <title>Əsas açar söz — Brend</title>", "30–60 simvol saxlayın, hər səhifəyə fərqli başlıq yazın."), I("Missing page title", "Google results and the browser tab show no page name.", "Add inside <head>: <title>Main keyword — Brand</title>", "Keep it 30–60 characters and unique per page."), I("Sayfa başlığı (title) yok", "Google sonuçlarında sayfa adı görünmez.", "<head> içine ekleyin: <title>Anahtar kelime — Marka</title>", "30–60 karakter, her sayfada farklı."), I("Нет заголовка страницы (title)", "В выдаче Google и во вкладке нет названия.", "Добавьте в <head>: <title>Ключевое слово — Бренд</title>", "30–60 символов, уникально для каждой страницы."), I("لا يوجد عنوان للصفحة (title)", "لا يظهر اسم الصفحة في Google ولا في التبويب.", "أضف داخل <head>: <title>الكلمة المفتاحية — العلامة</title>", "اجعله 30–60 حرفاً ومختلفاً لكل صفحة.")),
	"title-long": R(I("Başlıq uzundur ({len} simvol)", "Google 60 simvoldan sonrasını kəsir.", "Başlığı 60 simvola qədər qısaldın, vacib sözü əvvələ yazın."), I("Title is long ({len} chars)", "Google cuts titles after about 60 characters.", "Shorten to 60 characters and put the key words first."), I("Başlık uzun ({len} karakter)", "Google 60 karakterden sonrasını keser.", "60 karaktere kısaltın."), I("Длинный title ({len} символов)", "Google обрезает после ~60 символов.", "Сократите до 60 символов, ключевые слова — в начало."), I("العنوان طويل ({len} حرفاً)", "يقطع Google ما بعد 60 حرفاً.", "اختصره إلى 60 حرفاً.")),
	"title-short": R(I("Başlıq çox qısadır ({len} simvol)", "Qısa başlıq səhifənin nə haqqında olduğunu izah etmir.", "Səhifənin mövzusunu və brendi əlavə edin (30–60 simvol)."), I("Title is very short ({len} chars)", "A short title doesn't explain the page.", "Add the topic and brand (30–60 characters)."), I("Başlık çok kısa ({len})", "Sayfayı anlatmıyor.", "Konuyu ve markayı ekleyin (30–60 karakter)."), I("Слишком короткий title ({len})", "Не объясняет, о чём страница.", "Добавьте тему и бренд (30–60 символов)."), I("العنوان قصير جداً ({len})", "لا يشرح محتوى الصفحة.", "أضف الموضوع والعلامة (30–60 حرفاً).")),
	"no-description": R(I("Meta təsvir (description) yoxdur", "Google nəticədə təsadüfi mətn parçası göstərir.", "<head> içinə əlavə edin: <meta name=\"description\" content=\"Səhifənin 1–2 cümləlik izahı\">", "70–160 simvol yazın, səhifəyə uyğun olsun."), I("Missing meta description", "Google shows a random text snippet instead.", "Add in <head>: <meta name=\"description\" content=\"1–2 sentence summary\">", "Use 70–160 characters that match the page."), I("Meta açıklama yok", "Google rastgele metin gösterir.", "<meta name=\"description\" content=\"1–2 cümlelik özet\"> ekleyin.", "70–160 karakter."), I("Нет meta description", "Google покажет случайный фрагмент.", "Добавьте <meta name=\"description\" content=\"Краткое описание\">.", "70–160 символов."), I("لا يوجد وصف meta", "يعرض Google مقطعاً عشوائياً.", "أضف <meta name=\"description\" content=\"ملخص من جملتين\">.", "70–160 حرفاً.")),
	"description-long": R(I("Meta təsvir uzundur ({len} simvol)", "160 simvoldan sonrası kəsilir.", "Təsviri 160 simvola qədər qısaldın."), I("Meta description is long ({len} chars)", "Text after ~160 characters is cut.", "Shorten it to 160 characters."), I("Açıklama uzun ({len})", "160 karakterden sonrası kesilir.", "160 karaktere kısaltın."), I("Длинное описание ({len})", "После ~160 символов текст обрезается.", "Сократите до 160 символов."), I("الوصف طويل ({len})", "يُقطع بعد 160 حرفاً.", "اختصره إلى 160 حرفاً.")),
	"description-short": R(I("Meta təsvir qısadır ({len} simvol)", "Qısa təsvir klik üçün az məlumat verir.", "Təsviri 70–160 simvola çatdırın: nə təklif edirsiniz və niyə."), I("Meta description is short ({len} chars)", "It gives little reason to click.", "Expand to 70–160 characters: what you offer and why."), I("Açıklama kısa ({len})", "Tıklamak için az bilgi verir.", "70–160 karaktere çıkarın."), I("Короткое описание ({len})", "Мало причин кликнуть.", "Расширьте до 70–160 символов."), I("الوصف قصير ({len})", "لا يقدّم سبباً للنقر.", "وسّعه إلى 70–160 حرفاً.")),
	"no-lang": R(I("<html> teqində lang yoxdur", "Ekran oxuyucuları və tərcümə düzgün dili bilmir.", "Yazın: <html lang=\"az\"> (və ya saytın dili)."), I("No lang on <html>", "Screen readers and translators don't know the language.", "Use: <html lang=\"en\"> (or your site's language)."), I("<html> etiketinde lang yok", "Ekran okuyucular dili bilmez.", "Yazın: <html lang=\"tr\">."), I("Нет lang у <html>", "Скринридеры не знают язык.", "Укажите: <html lang=\"ru\">."), I("لا توجد سمة lang في <html>", "قارئات الشاشة لا تعرف اللغة.", "اكتب: <html lang=\"ar\" dir=\"rtl\">.")),
	"no-charset": R(I("Kodlaşdırma (charset) göstərilməyib", "ə, ş, ç kimi hərflər səhv görünə bilər.", "<head>-in ən əvvəlinə yazın: <meta charset=\"utf-8\">"), I("No charset declared", "Special letters may show as garbage.", "Put first in <head>: <meta charset=\"utf-8\">"), I("Charset belirtilmemiş", "Özel harfler bozuk görünebilir.", "<head> başına: <meta charset=\"utf-8\">"), I("Не указана кодировка", "Буквы могут отображаться неверно.", "Первой строкой в <head>: <meta charset=\"utf-8\">"), I("لم يُحدد الترميز", "قد تظهر الحروف بشكل خاطئ.", "أضف أول <head>: <meta charset=\"utf-8\">")),
	"no-viewport": R(I("Mobil viewport teqi yoxdur", "Telefonda səhifə kiçilmiş masaüstü kimi açılır, Google mobil uyğunluğu aşağı qiymətləndirir.", "<head> içinə əlavə edin: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">", "Sonra telefonda yoxlayın: üfüqi sürüşmə olmamalıdır."), I("No mobile viewport tag", "On phones the page opens as a shrunken desktop page; Google rates it not mobile-friendly.", "Add in <head>: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">", "Then check on a phone: there should be no sideways scroll."), I("Mobil viewport etiketi yok", "Telefonda küçültülmüş masaüstü gibi açılır.", "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> ekleyin."), I("Нет мобильного viewport", "На телефоне страница открывается как уменьшенная десктопная.", "Добавьте <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">."), I("لا يوجد وسم viewport للجوال", "تظهر الصفحة مصغّرة على الهاتف.", "أضف <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">.")),
	"viewport-bad": R(I("Viewport düzgün deyil: {value}", "width=device-width olmadan səhifə ekran ölçüsünə uyğunlaşmır.", "Dəyəri belə edin: width=device-width, initial-scale=1"), I("Viewport is not set right: {value}", "Without width=device-width the page doesn't fit the screen.", "Use: width=device-width, initial-scale=1"), I("Viewport hatalı: {value}", "Sayfa ekrana uymaz.", "Kullanın: width=device-width, initial-scale=1"), I("Неверный viewport: {value}", "Страница не подстраивается под экран.", "Укажите: width=device-width, initial-scale=1"), I("viewport غير صحيح: {value}", "لا تتكيف الصفحة مع الشاشة.", "استخدم: width=device-width, initial-scale=1")),
	"viewport-zoom": R(I("Böyütmə (zoom) bağlanıb", "Görmə çətinliyi olan istifadəçi mətni böyüdə bilmir.", "viewport-dan user-scalable=no və maximum-scale=1 hissələrini silin."), I("Zoom is disabled", "People with low vision can't enlarge text.", "Remove user-scalable=no and maximum-scale=1 from the viewport."), I("Yakınlaştırma kapalı", "Metin büyütülemez.", "viewport'tan user-scalable=no ve maximum-scale=1'i silin."), I("Масштабирование запрещено", "Слабовидящие не могут увеличить текст.", "Уберите user-scalable=no и maximum-scale=1."), I("التكبير معطّل", "لا يستطيع ضعاف البصر تكبير النص.", "احذف user-scalable=no وmaximum-scale=1.")),
	"h1-none": R(I("Səhifədə H1 başlıq yoxdur", "Axtarış sistemi və ziyarətçi səhifənin əsas mövzusunu tez görmür.", "Səhifənin əsas başlığını <h1>…</h1> ilə yazın, bir dəfə."), I("No H1 heading", "Search engines and visitors can't quickly see the main topic.", "Wrap the main page heading in <h1>…</h1>, once."), I("H1 başlık yok", "Ana konu hemen görülmez.", "Ana başlığı bir kez <h1> ile yazın."), I("Нет заголовка H1", "Основная тема не видна сразу.", "Оформите главный заголовок как <h1> (один раз)."), I("لا يوجد عنوان H1", "لا يظهر الموضوع الرئيسي بسرعة.", "اكتب العنوان الرئيسي داخل <h1> مرة واحدة.")),
	"h1-many": R(I("{count} ədəd H1 var", "Bir neçə H1 əsas mövzunu qarışdırır.", "Yalnız bir H1 saxlayın, qalanlarını H2 edin."), I("{count} H1 headings", "Several H1s blur the main topic.", "Keep one H1 and turn the others into H2."), I("{count} adet H1 var", "Ana konu karışır.", "Bir H1 bırakın, diğerlerini H2 yapın."), I("{count} заголовков H1", "Главная тема размывается.", "Оставьте один H1, остальные — H2."), I("يوجد {count} عناوين H1", "يتشتت الموضوع الرئيسي.", "أبقِ H1 واحداً وحوّل البقية إلى H2.")),
	"heading-skip": R(I("Başlıq səviyyələri atlanıb (məs. H1 → H3)", "Ekran oxuyucuları üçün struktur qırılır.", "Başlıqları ardıcıl verin: H1, sonra H2, sonra H3. Görünüşü CSS ilə dəyişin."), I("Heading levels are skipped (e.g. H1 → H3)", "The outline breaks for screen readers.", "Use levels in order: H1, then H2, then H3. Change looks with CSS."), I("Başlık seviyeleri atlanmış", "Yapı bozulur.", "Sırayla kullanın: H1, H2, H3."), I("Пропущены уровни заголовков", "Ломается структура для скринридеров.", "Идите по порядку: H1, H2, H3."), I("تم تخطي مستويات العناوين", "تنكسر البنية لقارئات الشاشة.", "استخدم الترتيب: H1 ثم H2 ثم H3.")),
	"no-canonical": R(I("Canonical link yoxdur", "Parametrli eyni səhifələr dublikat sayıla bilər.", "<head> içinə: <link rel=\"canonical\" href=\"https://sayt.az/səhifə\">"), I("No canonical link", "Copies of the page with parameters may count as duplicates.", "Add in <head>: <link rel=\"canonical\" href=\"https://site.com/page\">"), I("Canonical yok", "Kopyalar çift sayılabilir.", "<link rel=\"canonical\" href=\"…\"> ekleyin."), I("Нет canonical", "Копии с параметрами могут считаться дублями.", "Добавьте <link rel=\"canonical\" href=\"…\">."), I("لا يوجد رابط canonical", "قد تُعد النسخ مكررة.", "أضف <link rel=\"canonical\" href=\"…\">.")),
	noindex: R(I("Səhifə noindex ilə bağlanıb", "Google bu səhifəni axtarışa salmayacaq.", "Səhifə axtarışda görünməlidirsə, <meta name=\"robots\" content=\"noindex\"> teqini silin.", "X-Robots-Tag başlığını da yoxlayın."), I("The page is set to noindex", "Google will not list this page.", "If it should appear in search, remove <meta name=\"robots\" content=\"noindex\">.", "Also check the X-Robots-Tag header."), I("Sayfa noindex", "Google listelemez.", "Aramada görünmesi gerekiyorsa noindex etiketini silin."), I("Страница закрыта noindex", "Google не покажет её в поиске.", "Если нужна в поиске — удалите noindex."), I("الصفحة محجوبة بـ noindex", "لن يعرضها Google.", "احذف وسم noindex إن أردت ظهورها.")),
	"robots-missing": R(I("robots.txt tapılmadı", "Axtarış robotlarına qaydalar və sitemap ünvanı verilmir.", "Saytın kökünə robots.txt qoyun:\nUser-agent: *\nAllow: /\nSitemap: https://sayt.az/sitemap.xml"), I("robots.txt not found", "Crawlers get no rules and no sitemap address.", "Put robots.txt at the site root:\nUser-agent: *\nAllow: /\nSitemap: https://site.com/sitemap.xml"), I("robots.txt bulunamadı", "Robotlara kural verilmiyor.", "Köke robots.txt koyun: User-agent: * / Allow: / / Sitemap: …"), I("robots.txt не найден", "Роботы не получают правил и sitemap.", "Положите robots.txt в корень: User-agent: * / Allow: / / Sitemap: …"), I("لم يُعثر على robots.txt", "لا قواعد للزواحف.", "ضع robots.txt في الجذر: User-agent: * / Allow: / / Sitemap: …")),
	"robots-block": R(I("robots.txt bu səhifəni bağlayır", "Google bu səhifəni oxuya bilmir.", "robots.txt-də bu yolu bağlayan Disallow sətrini silin və ya dəyişin."), I("robots.txt blocks this page", "Google can't crawl it.", "Remove or narrow the Disallow line that matches this path."), I("robots.txt bu sayfayı engelliyor", "Google tarayamaz.", "İlgili Disallow satırını silin."), I("robots.txt блокирует страницу", "Google не может её обойти.", "Удалите/сузьте строку Disallow."), I("robots.txt يحجب الصفحة", "لا يستطيع Google زحفها.", "احذف سطر Disallow المطابق.")),
	"sitemap-missing": R(I("sitemap.xml tapılmadı", "Yeni səhifələr axtarışa gec düşür.", "Saytın bütün səhifələri ilə sitemap.xml yaradın (CMS plaginləri bunu avtomatik edir).", "Ünvanı robots.txt-ə və Google Search Console-a əlavə edin."), I("sitemap.xml not found", "New pages get indexed slowly.", "Create sitemap.xml with all pages (CMS plugins do this automatically).", "Add its URL to robots.txt and Google Search Console."), I("sitemap.xml bulunamadı", "Yeni sayfalar geç indekslenir.", "sitemap.xml oluşturup Search Console'a ekleyin."), I("sitemap.xml не найден", "Новые страницы индексируются медленно.", "Создайте sitemap.xml и добавьте в Search Console."), I("لم يُعثر على sitemap.xml", "تُفهرس الصفحات الجديدة ببطء.", "أنشئ sitemap.xml وأضفه إلى Search Console.")),
	"no-og": R(I("Open Graph teqləri yoxdur", "WhatsApp, Facebook, Telegram-da paylaşanda şəkil və başlıq görünmür.", "<head>-ə əlavə edin: og:title, og:description, og:image (1200×630), og:url."), I("No Open Graph tags", "Shares on WhatsApp, Facebook, Telegram show no image or title.", "Add og:title, og:description, og:image (1200×630) and og:url to <head>."), I("Open Graph etiketleri yok", "Paylaşımlarda görsel çıkmaz.", "og:title, og:description, og:image ekleyin."), I("Нет тегов Open Graph", "При отправке ссылки нет картинки и заголовка.", "Добавьте og:title, og:description, og:image."), I("لا توجد وسوم Open Graph", "لا تظهر صورة عند المشاركة.", "أضف og:title وog:description وog:image.")),
	"no-favicon": R(I("Favicon tapılmadı", "Brauzer tabında və axtarışda sayt ikonu görünmür.", "<head>-ə: <link rel=\"icon\" href=\"/favicon.png\" sizes=\"48x48\">"), I("No favicon", "No site icon in tabs and search results.", "Add: <link rel=\"icon\" href=\"/favicon.png\" sizes=\"48x48\">"), I("Favicon yok", "Sekmede ikon görünmez.", "<link rel=\"icon\" href=\"/favicon.png\"> ekleyin."), I("Нет favicon", "Нет иконки во вкладке.", "Добавьте <link rel=\"icon\" href=\"/favicon.png\">."), I("لا توجد أيقونة favicon", "لا تظهر أيقونة في التبويب.", "أضف <link rel=\"icon\" href=\"/favicon.png\">.")),
	"img-alt": R(I("{count} şəkildə alt mətni yoxdur", "Ekran oxuyucuları və Google şəklin nə olduğunu bilmir.", "Hər <img>-ə məzmunu izah edən alt yazın: alt=\"Bakıda gün batımı\".", "Bəzək şəkillərinə boş alt=\"\" verin."), I("{count} images have no alt text", "Screen readers and Google don't know what they show.", "Give each <img> a descriptive alt, e.g. alt=\"Sunset over the bay\".", "Use empty alt=\"\" for decorative images."), I("{count} görselde alt yok", "Görsel anlaşılmaz.", "Her <img>'e açıklayıcı alt yazın."), I("У {count} изображений нет alt", "Скринридеры и Google не понимают картинку.", "Добавьте описательный alt каждому <img>."), I("{count} صور بلا نص alt", "لا تُفهم الصور.", "أضف alt وصفياً لكل <img>.")),
	"img-size": R(I("{count} şəkildə width/height yoxdur", "Səhifə yüklənəndə məzmun tullanır (CLS).", "<img>-ə real ölçüləri yazın: width=\"800\" height=\"600\", CSS-də height:auto saxlayın."), I("{count} images lack width/height", "Content jumps while loading (CLS).", "Set real sizes on <img>: width=\"800\" height=\"600\", keep height:auto in CSS."), I("{count} görselde width/height yok", "Sayfa yüklenirken kayar.", "<img>'e width ve height yazın."), I("У {count} изображений нет width/height", "Контент прыгает при загрузке.", "Укажите width и height у <img>."), I("{count} صور بلا width/height", "يقفز المحتوى أثناء التحميل.", "أضف width وheight لكل <img>.")),
	"img-lazy": R(I("{count} şəkil lazy yüklənmir", "Görünməyən şəkillər də dərhal yüklənir, səhifə gec açılır.", "Ekranın aşağısındakı şəkillərə loading=\"lazy\" əlavə edin."), I("{count} images are not lazy-loaded", "Off-screen images load right away and slow the page.", "Add loading=\"lazy\" to images below the fold."), I("{count} görsel lazy değil", "Sayfa yavaş açılır.", "Alttaki görsellere loading=\"lazy\" ekleyin."), I("{count} изображений без lazy", "Страница грузится дольше.", "Добавьте loading=\"lazy\" нижним картинкам."), I("{count} صور بلا تحميل كسول", "تبطئ الصفحة.", "أضف loading=\"lazy\" للصور السفلية.")),
	mixed: R(I("{count} fayl http:// ilə yüklənir (qarışıq məzmun)", "HTTPS səhifədə http faylları brauzer tərəfindən bloklanır.", "Bu faylların ünvanını https:// edin və ya özünüzdə saxlayın."), I("{count} files load over http:// (mixed content)", "Browsers block http files on HTTPS pages.", "Change those URLs to https:// or host the files yourself."), I("{count} dosya http:// ile yükleniyor", "Tarayıcı engeller.", "Adresleri https:// yapın."), I("{count} файлов по http:// (смешанный контент)", "Браузер блокирует их.", "Замените адреса на https://."), I("{count} ملفات عبر http:// (محتوى مختلط)", "يحجبها المتصفح.", "غيّر العناوين إلى https://.")),
	"broken-links": R(I("{count} qırıq keçid tapıldı", "Ziyarətçi boş səhifəyə düşür, Google saytı keyfiyyətsiz sayır.", "Aşağıdakı siyahıdakı linkləri düzgün ünvanla əvəz edin və ya silin.", "Səhifə köçübsə, köhnə ünvana 301 yönləndirmə qoyun."), I("{count} broken links found", "Visitors hit dead ends and Google sees lower quality.", "Fix or remove the links listed below.", "If a page moved, add a 301 redirect from the old URL."), I("{count} kırık bağlantı", "Ziyaretçi boş sayfaya düşer.", "Aşağıdaki bağlantıları düzeltin veya silin."), I("Найдено {count} битых ссылок", "Посетитель попадает в тупик.", "Исправьте или удалите ссылки ниже.", "Если страница переехала — 301-редирект."), I("{count} روابط معطلة", "يصل الزائر إلى صفحة فارغة.", "أصلح الروابط أدناه أو احذفها.")),
	"broken-assets": R(I("{count} fayl (şəkil/skript/stil) açılmır", "Səhifənin hissəsi görünmür və ya işləmir.", "Aşağıdakı faylların yolunu yoxlayın, faylı serverə yenidən yükləyin."), I("{count} files (image/script/style) fail to load", "Part of the page is missing or broken.", "Check the paths below and re-upload the files."), I("{count} dosya yüklenmiyor", "Sayfanın bir kısmı bozuk.", "Yolları kontrol edin, dosyaları yeniden yükleyin."), I("{count} файлов не загружаются", "Часть страницы не работает.", "Проверьте пути и загрузите файлы заново."), I("{count} ملفات لا تُحمّل", "جزء من الصفحة معطل.", "تحقق من المسارات وأعد رفع الملفات.")),
	"slow-ttfb": R(I("Server gec cavab verir: {ms} ms", "İlk bayt 800 ms-dən gec gəlir, səhifə ləng açılır.", "Səhifə keşini (page cache) və ya CDN-i (Cloudflare, Vercel) aktiv edin.", "Ağır verilənlər bazası sorğularını və plaginləri azaldın.", "Server istifadəçilərə yaxın regionda olsun."), I("Slow server response: {ms} ms", "The first byte arrives after 800 ms, so the page opens late.", "Turn on page caching or a CDN (Cloudflare, Vercel).", "Reduce heavy database queries and plugins.", "Host in a region close to your visitors."), I("Sunucu yavaş: {ms} ms", "Sayfa geç açılır.", "Sayfa önbelleği veya CDN açın.", "Ağır sorguları azaltın."), I("Медленный ответ сервера: {ms} мс", "Страница открывается с задержкой.", "Включите кэш страниц или CDN.", "Сократите тяжёлые запросы и плагины."), I("استجابة الخادم بطيئة: {ms} م.ث", "تفتح الصفحة متأخرة.", "فعّل التخزين المؤقت أو CDN.", "قلّل الاستعلامات الثقيلة.")),
	"html-big": R(I("HTML böyükdür: {kb} KB", "Telefonda yükləmə uzanır.", "Daxili (inline) böyük skript və stilləri ayrı fayla çıxarın.", "Uzun siyahıları səhifələrə bölün."), I("HTML is large: {kb} KB", "It loads slowly on phones.", "Move large inline scripts and styles to separate files.", "Paginate long lists."), I("HTML büyük: {kb} KB", "Telefonda yavaş.", "Satır içi kodları ayrı dosyaya taşıyın."), I("Большой HTML: {kb} КБ", "Медленно на телефоне.", "Вынесите inline-скрипты и стили в файлы."), I("HTML كبير: {kb} ك.ب", "بطيء على الهاتف.", "انقل الأكواد المضمنة إلى ملفات.")),
	"no-compression": R(I("HTML sıxılmadan göndərilir", "gzip/brotli olmadan trafik 3–5 dəfə çox olur.", "Serverdə gzip və ya brotli sıxmanı aktiv edin (Nginx: gzip on; Apache: mod_deflate)."), I("HTML is sent uncompressed", "Without gzip/brotli transfer is 3–5× larger.", "Enable gzip or brotli on the server (Nginx: gzip on; Apache: mod_deflate)."), I("HTML sıkıştırılmıyor", "Trafik 3–5 kat artar.", "gzip veya brotli açın."), I("HTML отдаётся без сжатия", "Трафик в 3–5 раз больше.", "Включите gzip или brotli."), I("HTML بلا ضغط", "حجم النقل أكبر 3–5 مرات.", "فعّل gzip أو brotli.")),
	"assets-no-compression": R(I("{count} JS/CSS faylı sıxılmır", "Skript və stillər yavaş gəlir.", "Serverdə JS və CSS üçün gzip/brotli aktiv edin."), I("{count} JS/CSS files are uncompressed", "Scripts and styles arrive slowly.", "Enable gzip/brotli for JS and CSS."), I("{count} JS/CSS sıkıştırılmıyor", "Yavaş yüklenir.", "JS/CSS için gzip/brotli açın."), I("{count} JS/CSS без сжатия", "Грузятся медленно.", "Включите gzip/brotli для JS и CSS."), I("{count} ملفات JS/CSS بلا ضغط", "تُحمّل ببطء.", "فعّل gzip/brotli لها.")),
	"render-blocking": R(I("{count} skript səhifənin görünməsini bloklayır", "<head>-də async/defer olmayan skript bitməyincə səhifə çəkilmir.", "Bu <script src> teqlərinə defer əlavə edin və ya </body>-dən əvvələ köçürün."), I("{count} scripts block rendering", "Scripts in <head> without async/defer stop the page from drawing.", "Add defer to those <script src> tags or move them before </body>."), I("{count} betik görüntülemeyi engelliyor", "Sayfa geç çizilir.", "<script src>'ye defer ekleyin."), I("{count} скриптов блокируют отрисовку", "Страница рисуется позже.", "Добавьте defer или перенесите перед </body>."), I("{count} سكربتات تحجب العرض", "تتأخر الصفحة.", "أضف defer أو انقلها قبل </body>.")),
	"many-scripts": R(I("Çox skript var: {count}", "Hər fayl əlavə sorğu deməkdir.", "İstifadə olunmayan plagin və izləyiciləri silin, skriptləri birləşdirin."), I("Many scripts: {count}", "Each file is another request.", "Remove unused plugins and trackers; bundle scripts."), I("Çok betik: {count}", "Her dosya ek istek.", "Kullanılmayanları silin."), I("Много скриптов: {count}", "Каждый файл — лишний запрос.", "Удалите лишние плагины и трекеры."), I("سكربتات كثيرة: {count}", "كل ملف طلب إضافي.", "احذف غير المستخدم.")),
	"big-assets": R(I("Böyük fayllar var (500 KB-dan çox)", "Telefon internetində səhifə çox gec açılır.", "Şəkilləri WebP/AVIF formatına çevirin və ölçüsünü kiçildin (nibrascode.com/image).", "Böyük JS kitabxanalarını yalnız lazım olan səhifədə yükləyin."), I("Large files (over 500 KB)", "On mobile data the page opens very slowly.", "Convert images to WebP/AVIF and resize them (nibrascode.com/en/image).", "Load big JS libraries only where needed."), I("Büyük dosyalar (500 KB üstü)", "Mobilde çok yavaş.", "Görselleri WebP'ye çevirip küçültün."), I("Большие файлы (более 500 КБ)", "На мобильном интернете очень медленно.", "Переведите картинки в WebP/AVIF и уменьшите."), I("ملفات كبيرة (أكثر من 500 ك.ب)", "بطيء جداً على الجوال.", "حوّل الصور إلى WebP وصغّرها.")),
	"asset-cache": R(I("{count} fayl brauzerdə uzun müddət keşlənmir", "Təkrar girişdə eyni fayllar yenidən yüklənir.", "Dəyişməyən fayllara (şəkil, CSS, JS) başlıq verin: Cache-Control: public, max-age=31536000, immutable", "Fayl dəyişəndə adına versiya əlavə edin (style.v2.css)."), I("{count} files are not cached long-term", "Repeat visits download the same files again.", "Send for static files (images, CSS, JS): Cache-Control: public, max-age=31536000, immutable", "Put a version in the file name when it changes (style.v2.css)."), I("{count} dosya uzun süre önbelleğe alınmıyor", "Tekrar ziyarette yeniden iner.", "Cache-Control: public, max-age=31536000, immutable verin."), I("{count} файлов не кэшируются надолго", "При повторном визите качаются заново.", "Отдавайте Cache-Control: public, max-age=31536000, immutable."), I("{count} ملفات بلا تخزين مؤقت طويل", "تُنزّل مجدداً في كل زيارة.", "أرسل Cache-Control: public, max-age=31536000, immutable.")),
	"inline-big": R(I("Daxili kod böyükdür: {kb} KB", "Brauzer bu kodu keşləyə bilmir.", "Böyük <script> və <style> bloklarını ayrı fayllara çıxarın."), I("Large inline code: {kb} KB", "Browsers can't cache it.", "Move big <script> and <style> blocks into files."), I("Satır içi kod büyük: {kb} KB", "Önbelleğe alınamaz.", "Ayrı dosyalara taşıyın."), I("Большой inline-код: {kb} КБ", "Не кэшируется.", "Вынесите в отдельные файлы."), I("كود مضمّن كبير: {kb} ك.ب", "لا يُخزّن مؤقتاً.", "انقله إلى ملفات.")),
	truncated: R(I("Səhifə 2 MB-dan böyükdür, yalnız əvvəli yoxlandı", "Hesabat natamam ola bilər.", "HTML ölçüsünü azaldın."), I("Page is over 2 MB; only the start was checked", "The report may be incomplete.", "Reduce the HTML size."), I("Sayfa 2 MB'tan büyük", "Rapor eksik olabilir.", "HTML'i küçültün."), I("Страница больше 2 МБ", "Отчёт может быть неполным.", "Уменьшите HTML."), I("الصفحة أكبر من 2 م.ب", "قد يكون التقرير ناقصاً.", "قلّل حجم HTML."))
};
var UI = {
	az: {
		h1: "Nibras Site Doctor",
		lead: "Sayt ünvanını yazın. Başlıqları, meta təsvirləri, qırıq keçidləri, mobil uyğunluğu və sürəti yoxlayırıq. Hər problem üçün necə düzəltmək lazım olduğunu yazırıq.",
		ph: "məs. example.az",
		go: "Yoxla",
		busy: "Yoxlanılır… (15–30 san.)",
		score: "Ümumi vəziyyət",
		issues: "Problemlər və düzəliş addımları",
		none: "Ciddi problem tapılmadı. Əla!",
		fix: "Necə düzəltmək olar",
		why: "Niyə vacibdir",
		sum: "Qısa məlumat",
		high: "Vacib",
		medium: "Orta",
		low: "Kiçik",
		title: "Başlıq",
		desc: "Təsvir",
		ttfb: "Server cavabı",
		html: "HTML ölçüsü",
		comp: "Sıxma",
		imgs: "Şəkillər",
		scripts: "Skriptlər",
		styles: "Stil faylları",
		links: "Linklər (yoxlanan)",
		heads: "Başlıq quruluşu",
		robots: "robots.txt",
		sitemap: "sitemap",
		yes: "var",
		no: "yox",
		copy: "Hesabatı kopyala",
		copied: "Kopyalandı",
		e_blocked: "Bu ünvan yoxlanmır (daxili və ya qorunan şəbəkə).",
		"e_bad-url": "Ünvan düzgün deyil. Məs.: example.az",
		e_unreachable: "Sayta qoşulmaq olmadı. Ünvanı yoxlayın.",
		e_rate: "Çox tez-tez. 15 saniyə sonra yenə yoxlayın.",
		e_redirects: "Çox yönləndirmə var.",
		e_other: "Yoxlama alınmadı. Yenidən cəhd edin.",
		note: "Yalnız açıq səhifə yoxlanır: maksimum 25 link və 12 fayl. Nəticə saxlanmır.",
		took: "Müddət",
		status: "Status"
	},
	en: {
		h1: "Nibras Site Doctor",
		lead: "Enter a site address. We check titles, meta descriptions, broken links, mobile-friendliness and speed, and give concrete fix steps for every issue.",
		ph: "e.g. example.com",
		go: "Check",
		busy: "Checking… (15–30 s)",
		score: "Overall health",
		issues: "Issues and fix steps",
		none: "No serious issues found. Great!",
		fix: "How to fix",
		why: "Why it matters",
		sum: "Summary",
		high: "High",
		medium: "Medium",
		low: "Low",
		title: "Title",
		desc: "Description",
		ttfb: "Server response",
		html: "HTML size",
		comp: "Compression",
		imgs: "Images",
		scripts: "Scripts",
		styles: "Stylesheets",
		links: "Links (checked)",
		heads: "Heading outline",
		robots: "robots.txt",
		sitemap: "sitemap",
		yes: "yes",
		no: "no",
		copy: "Copy report",
		copied: "Copied",
		e_blocked: "This address can't be checked (private or protected network).",
		"e_bad-url": "Invalid address. E.g.: example.com",
		e_unreachable: "Couldn't reach the site. Check the address.",
		e_rate: "Too fast. Try again in 15 seconds.",
		e_redirects: "Too many redirects.",
		e_other: "The check failed. Try again.",
		note: "Only public pages are checked: up to 25 links and 12 files. Results are not stored.",
		took: "Time",
		status: "Status"
	},
	tr: {
		h1: "Nibras Site Doctor",
		lead: "Site adresini yazın. Başlıkları, meta açıklamaları, kırık bağlantıları, mobil uyumu ve hızı kontrol ediyoruz; her sorun için düzeltme adımları veriyoruz.",
		ph: "örn. example.com",
		go: "Kontrol et",
		busy: "Kontrol ediliyor… (15–30 sn)",
		score: "Genel durum",
		issues: "Sorunlar ve düzeltme adımları",
		none: "Ciddi sorun yok. Harika!",
		fix: "Nasıl düzeltilir",
		why: "Neden önemli",
		sum: "Özet",
		high: "Önemli",
		medium: "Orta",
		low: "Küçük",
		title: "Başlık",
		desc: "Açıklama",
		ttfb: "Sunucu yanıtı",
		html: "HTML boyutu",
		comp: "Sıkıştırma",
		imgs: "Görseller",
		scripts: "Betikler",
		styles: "Stil dosyaları",
		links: "Bağlantılar (kontrol)",
		heads: "Başlık yapısı",
		robots: "robots.txt",
		sitemap: "sitemap",
		yes: "var",
		no: "yok",
		copy: "Raporu kopyala",
		copied: "Kopyalandı",
		e_blocked: "Bu adres kontrol edilemez.",
		"e_bad-url": "Geçersiz adres.",
		e_unreachable: "Siteye ulaşılamadı.",
		e_rate: "Çok hızlı. 15 saniye sonra deneyin.",
		e_redirects: "Çok fazla yönlendirme.",
		e_other: "Kontrol başarısız.",
		note: "Yalnızca açık sayfalar: en fazla 25 bağlantı ve 12 dosya. Sonuç saklanmaz.",
		took: "Süre",
		status: "Durum"
	},
	ru: {
		h1: "Nibras Site Doctor",
		lead: "Введите адрес сайта. Проверяем заголовки, описания, битые ссылки, мобильную адаптацию и скорость — и даём конкретные шаги исправления.",
		ph: "напр. example.com",
		go: "Проверить",
		busy: "Проверяем… (15–30 с)",
		score: "Общее состояние",
		issues: "Проблемы и шаги исправления",
		none: "Серьёзных проблем нет. Отлично!",
		fix: "Как исправить",
		why: "Почему важно",
		sum: "Сводка",
		high: "Важно",
		medium: "Средне",
		low: "Мелочь",
		title: "Заголовок",
		desc: "Описание",
		ttfb: "Ответ сервера",
		html: "Размер HTML",
		comp: "Сжатие",
		imgs: "Изображения",
		scripts: "Скрипты",
		styles: "Стили",
		links: "Ссылки (проверено)",
		heads: "Структура заголовков",
		robots: "robots.txt",
		sitemap: "sitemap",
		yes: "есть",
		no: "нет",
		copy: "Копировать отчёт",
		copied: "Скопировано",
		e_blocked: "Этот адрес проверить нельзя.",
		"e_bad-url": "Неверный адрес.",
		e_unreachable: "Не удалось подключиться.",
		e_rate: "Слишком часто. Подождите 15 секунд.",
		e_redirects: "Слишком много редиректов.",
		e_other: "Проверка не удалась.",
		note: "Проверяются только открытые страницы: до 25 ссылок и 12 файлов. Результат не хранится.",
		took: "Время",
		status: "Статус"
	},
	ar: {
		h1: "Nibras Site Doctor",
		lead: "أدخل عنوان الموقع. نفحص العناوين والأوصاف والروابط المعطلة وملاءمة الجوال والسرعة، ونقدّم خطوات إصلاح لكل مشكلة.",
		ph: "مثال: example.com",
		go: "افحص",
		busy: "جارٍ الفحص… (15–30 ث)",
		score: "الحالة العامة",
		issues: "المشاكل وخطوات الإصلاح",
		none: "لا مشاكل جدية. ممتاز!",
		fix: "كيف تُصلح",
		why: "لماذا يهم",
		sum: "ملخص",
		high: "مهم",
		medium: "متوسط",
		low: "بسيط",
		title: "العنوان",
		desc: "الوصف",
		ttfb: "استجابة الخادم",
		html: "حجم HTML",
		comp: "الضغط",
		imgs: "الصور",
		scripts: "السكربتات",
		styles: "ملفات الأنماط",
		links: "الروابط (المفحوصة)",
		heads: "بنية العناوين",
		robots: "robots.txt",
		sitemap: "sitemap",
		yes: "نعم",
		no: "لا",
		copy: "انسخ التقرير",
		copied: "تم النسخ",
		e_blocked: "لا يمكن فحص هذا العنوان.",
		"e_bad-url": "عنوان غير صالح.",
		e_unreachable: "تعذر الوصول إلى الموقع.",
		e_rate: "بسرعة كبيرة. أعد بعد 15 ثانية.",
		e_redirects: "تحويلات كثيرة.",
		e_other: "فشل الفحص.",
		note: "تُفحص الصفحات العامة فقط: حتى 25 رابطاً و12 ملفاً. لا تُحفظ النتائج.",
		took: "المدة",
		status: "الحالة"
	}
};
var fill = (s, d) => s.replace(/\{(\w+)\}/g, (_, k) => String(d[k] ?? ""));
var COLOR = {
	high: "border-red-400/40 bg-red-500/10",
	medium: "border-amber-400/40 bg-amber-500/10",
	low: "border-sky-400/30 bg-sky-500/10"
};
var DOT = {
	high: "bg-red-400",
	medium: "bg-amber-400",
	low: "bg-sky-400"
};
function DoctorPage() {
	const { lang } = useI18n();
	const t = UI[lang] ?? UI.en;
	const [url, setUrl] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [auto, setAuto] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const u = new URLSearchParams(location.search).get("url");
		if (u) {
			setUrl(u.slice(0, 2048));
			setAuto(true);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.classList.add("nx-print-report");
		return () => document.body.classList.remove("nx-print-report");
	}, []);
	const [err, setErr] = (0, import_react.useState)("");
	const [rep, setRep] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const run = async () => {
		if (!url.trim() || busy) return;
		setBusy(true);
		setErr("");
		setRep(null);
		try {
			const j = await (await fetch("/api/site-doctor", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ url: url.trim() })
			})).json().catch(() => ({
				ok: false,
				error: "other"
			}));
			if (j.ok) setRep(j);
			else setErr(t[`e_${j.error}`] ?? t.e_other);
		} catch {
			setErr(t.e_other);
		} finally {
			setBusy(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (auto && url) {
			setAuto(false);
			run();
		}
	}, [auto, url]);
	const text = (i) => {
		const row = ISSUES[i.code];
		return row ? row[lang] ?? row.en : null;
	};
	const order = {
		high: 0,
		medium: 1,
		low: 2
	};
	const issues = rep ? [...rep.issues].sort((a, b) => order[a.severity] - order[b.severity]) : [];
	const copy = async () => {
		if (!rep) return;
		const lines = [
			`${t.h1}: ${rep.url}`,
			`${t.score}: ${rep.score}/100`,
			""
		];
		issues.forEach((i, n) => {
			const x = text(i);
			if (!x) return;
			lines.push(`${n + 1}. [${t[i.severity]}] ${fill(x.t, i.data)}`, ...x.fix.map((f) => `   - ${fill(f, i.data)}`), ...(i.data.items ?? []).map((it) => `   • ${it.url} ${it.status ?? it.kb ?? it.cache ?? ""}`), "");
		});
		await navigator.clipboard.writeText(lines.join("\n")).catch(() => {});
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};
	const s = rep?.summary;
	const ring = rep ? rep.score >= 85 ? "#34d399" : rep.score >= 60 ? "#fbbf24" : "#f87171" : "#fff";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "files-page mx-auto w-full max-w-3xl px-3 pt-24 pb-16 md:px-6 md:pt-28",
		dir: lang === "ar" ? "rtl" : "ltr",
		"data-testid": "doctor",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "flex items-center gap-2 font-display text-2xl font-bold tracking-tight md:text-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-6 text-[#2f6bff]" }),
						" ",
						t.h1
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted md:text-base",
					children: t.lead
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:flex-row",
				onSubmit: (e) => {
					e.preventDefault();
					run();
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: ui.field + " min-h-12 text-base",
					inputMode: "url",
					autoCapitalize: "off",
					autoCorrect: "off",
					spellCheck: false,
					placeholder: t.ph,
					value: url,
					onChange: (e) => setUrl(e.target.value),
					dir: "ltr",
					"data-testid": "doc-url",
					"aria-label": t.ph
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: ui.primary + " min-h-12 justify-center",
					disabled: busy || !url.trim(),
					"data-testid": "doc-go",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }),
						" ",
						busy ? t.busy : t.go
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted",
				children: t.note
			}),
			busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 h-1.5 overflow-hidden rounded-full bg-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-1/3 animate-pulse rounded-full bg-[#2f6bff]" })
			}) : null,
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200",
				"data-testid": "doc-err",
				children: err
			}) : null,
			rep && s ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				"data-testid": "doc-report",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-20 shrink-0 place-items-center rounded-full",
							style: { background: `conic-gradient(${ring} ${rep.score * 3.6}deg, rgba(255,255,255,.08) 0)` },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-16 place-items-center rounded-full bg-[#0b1020] text-xl font-bold",
								"data-testid": "doc-score",
								children: rep.score
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted",
									children: t.score
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "block truncate font-semibold hover:underline",
									href: rep.url,
									target: "_blank",
									rel: "noopener noreferrer nofollow",
									dir: "ltr",
									children: rep.url
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 flex flex-wrap gap-2 text-xs",
									children: [
										"high",
										"medium",
										"low"
									].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-2 rounded-full " + DOT[k] }),
											t[k],
											": ",
											issues.filter((i) => i.severity === k).length
										]
									}, k))
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 mb-3 text-base font-semibold",
						children: t.issues
					}),
					issues.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-emerald-300" }), t.none]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-3",
						"data-testid": "doc-issues",
						children: issues.map((i, n) => {
							const x = text(i);
							if (!x) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-2xl border p-4 " + COLOR[i.severity],
								"data-code": i.code,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 size-4 shrink-0 opacity-80" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
												className: "text-sm leading-snug",
												children: fill(x.t, i.data)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ms-auto shrink-0 rounded-full bg-black/30 px-2 py-0.5 text-[11px]",
												children: t[i.severity]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs text-muted",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [t.why, ":"] }),
											" ",
											x.why
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 text-xs font-semibold",
										children: [t.fix, ":"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
										className: "mt-1 list-decimal space-y-1 ps-5 text-sm",
										children: x.fix.map((f, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "whitespace-pre-wrap break-words",
											children: fill(f, i.data)
										}, k))
									}),
									i.data.items?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2 space-y-1 rounded-xl bg-black/30 p-2 font-mono text-[11px]",
										dir: "ltr",
										children: i.data.items.map((it, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "break-all",
											children: [
												String(it.url),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-amber-200",
													children: it.status !== void 0 ? it.status ? String(it.status) : "no response" : it.kb !== void 0 ? `${it.kb} KB` : String(it.cache ?? "")
												})
											]
										}, k))
									}) : null
								]
							}, i.code + n);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 mb-3 text-base font-semibold",
						children: t.sum
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "grid grid-cols-2 gap-2 text-sm sm:grid-cols-3",
						children: [
							[t.status, rep.status],
							[t.ttfb, `${s.ttfb} ms`],
							[t.html, `${s.htmlKb} KB`],
							[t.comp, s.compression || t.no],
							[t.imgs, s.images],
							[t.scripts, s.scripts],
							[t.styles, s.styles],
							[t.links, `${s.links} (${s.checkedLinks})`],
							[t.robots, s.robots ? t.yes : t.no],
							[t.sitemap, s.sitemap.found ? `${t.yes} · ${s.sitemap.count}` : t.no],
							[t.took, `${(rep.took / 1e3).toFixed(1)} s`]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-white/10 bg-white/[0.04] p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-semibold",
								children: String(v)
							})]
						}, String(k)))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-2 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted",
								children: [t.title, ":"]
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								dir: "auto",
								children: s.title || "—"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted",
								children: [t.desc, ":"]
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								dir: "auto",
								children: s.description || "—"
							})
						] })]
					}),
					s.headings.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "mt-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "cursor-pointer font-semibold",
							children: [
								t.heads,
								" (",
								s.headings.length,
								")"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-0.5",
							children: s.headings.map((h, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								style: { paddingInlineStart: (h.level - 1) * 12 },
								dir: "auto",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: ["H", h.level]
									}),
									" ",
									h.text || "—"
								]
							}, k))
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: ui.btn + " min-h-11",
							onClick: () => void copy(),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }),
								" ",
								copied ? t.copied : t.copy
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareReport, {
							lang,
							params: { url: rep.url }
						})]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "mt-8 flex items-center justify-between gap-3 rounded-2xl border border-[#ff3d7f]/40 bg-gradient-to-r from-[#ff3d7f]/15 to-[#7a5cff]/10 px-4 py-3 text-sm hover:border-[#ff3d7f]",
				href: localeHref(lang, "/mirror"),
				"data-testid": "doc-to-mirror",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Nibras Site Mirror" }),
					" · ",
					{
						az: "Bütün saytın strukturunu Site Mirror ilə gör (sitemap xəritəsi)",
						en: "See the whole site structure with Site Mirror (sitemap map)",
						tr: "Tüm site yapısını Site Mirror ile görün (sitemap haritası)",
						ar: "شاهد بنية الموقع كاملة مع Site Mirror (خريطة sitemap)",
						ru: "Вся структура сайта в Site Mirror (карта sitemap)"
					}[lang] ?? "Site Mirror"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					children: "→"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-10 border-t border-white/10 pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsLegalLinks, {})
			})
		]
	});
}
//#endregion
export { DoctorPage as t };
