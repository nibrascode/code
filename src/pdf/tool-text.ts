// Tool names and one-line descriptions, taken from the Nibras PDF app (5 languages).
export const TOOL_IDS = ["write-pdf","merge","split","compress","image-pdf","pdf-image","rotate","protect","watermark","pages","scan","sign","ocr","pdf-ocr","pdf-word","preview","batch","extract-pages","word-pdf","page-numbers","unlock","crop","grayscale","excel-pdf","redact","invoice","pdf-excel","ppt-pdf","pdf-ppt"] as const;
export type ToolId = (typeof TOOL_IDS)[number];
export const TOOL_TEXT: Record<"az" | "en" | "tr" | "ar" | "ru", Record<ToolId, { title: string; description: string }>> = {
  "az": {
    "pdf-excel": { "title": "PDF-dən Excel", "description": "PDF cədvəlini XLSX faylına çevir" },
    "pdf-ppt": { "title": "PDF-dən PowerPoint", "description": "PDF səhifələrini PPTX slaydlarına çevir" },
    "ppt-pdf": { "title": "PowerPoint-dən PDF", "description": "PPTX slaydlarını PDF et" },
    "unlock": {
      "title": "PDF parolunu aç",
      "description": "Parolu bildiyiniz PDF-dən parolu götür"
    },
    "crop": {
      "title": "PDF-i kəs",
      "description": "Səhifə kənarlarını kəsib götür"
    },
    "grayscale": {
      "title": "PDF-i boz et",
      "description": "Rəngli PDF-i ağ-qara (boz) et"
    },
    "excel-pdf": {
      "title": "Excel/CSV-dən PDF",
      "description": "XLSX və ya CSV cədvəlini PDF et"
    },
    "redact": {
      "title": "PDF-də məlumatı gizlət",
      "description": "Seçdiyiniz yerləri qara qutu ilə ört"
    },
    "invoice": {
      "title": "Hesab-faktura PDF",
      "description": "Satıcı, alıcı və mallardan sadə faktura hazırla"
    },
    "write-pdf": {
      "title": "Sadə PDF düzəlt",
      "description": "Yazın və ya hazır şablon seçin: ərizə nümunəsi, sadə CV, izahnamə, qiymət təklifi"
    },
    "merge": {
      "title": "Birləşdir",
      "description": "Bir neçə PDF-i bir faylda topla"
    },
    "split": {
      "title": "Böl",
      "description": "Səhifələri ayrıca fayllara ayır"
    },
    "compress": {
      "title": "Sıxışdır",
      "description": "Fayl ölçüsünü kiçilt"
    },
    "image-pdf": {
      "title": "Şəkildən PDF",
      "description": "Şəkilləri PDF sənədinə çevir"
    },
    "pdf-image": {
      "title": "PDF-dən şəkil",
      "description": "Səhifələri şəkil kimi saxla"
    },
    "rotate": {
      "title": "Dönüştür",
      "description": "PDF-i sola və ya sağa çevir"
    },
    "protect": {
      "title": "Qoru",
      "description": "Parol ilə təhlükəsizləşdir"
    },
    "watermark": {
      "title": "Su nişanı",
      "description": "Sənədə yazı və ya nişan əlavə et"
    },
    "pages": {
      "title": "Səhifələri idarə et",
      "description": "Səhifələri sil və sırasını dəyiş"
    },
    "scan": {
      "title": "Skan et",
      "description": "Kamera ilə sənədi PDF-ə çevir"
    },
    "sign": {
      "title": "İmza əlavə et",
      "description": "PDF-ə elektron imza yerləşdir"
    },
    "ocr": {
      "title": "Mətni tanı",
      "description": "Şəkildən mətni cihazda çıxar"
    },
    "pdf-ocr": {
      "title": "PDF-dən mətn çıxar",
      "description": "PDF səhifələrindəki mətni cihazda tanı"
    },
    "pdf-word": {
      "title": "PDF-dən Word",
      "description": "Məzmunu redaktə etmək üçün"
    },
    "preview": {
      "title": "PDF önizləmə",
      "description": "Səhifələrə bax və böyüt"
    },
    "batch": {
      "title": "Toplu əməliyyatlar",
      "description": "Bir neçə PDF-i eyni anda emal et"
    },
    "extract-pages": {
      "title": "Səhifə seç və çıxar",
      "description": "Seçilmiş səhifələrdən yeni PDF hazırla"
    },
    "word-pdf": {
      "title": "Word-dan PDF",
      "description": "DOCX faylını PDF sənədinə çevir"
    },
    "page-numbers": {
      "title": "Səhifə nömrəsi qoy",
      "description": "Hazır PDF-ə səhifə nömrələri əlavə et"
    }
  },
  "en": {
    "pdf-excel": { "title": "PDF to Excel", "description": "Turn PDF tables into an XLSX file" },
    "pdf-ppt": { "title": "PDF to PowerPoint", "description": "Turn PDF pages into PPTX slides" },
    "ppt-pdf": { "title": "PowerPoint to PDF", "description": "Turn PPTX slides into a PDF" },
    "unlock": {
      "title": "Unlock PDF",
      "description": "Remove the password from a PDF you can open"
    },
    "crop": {
      "title": "Crop PDF",
      "description": "Trim the edges of PDF pages"
    },
    "grayscale": {
      "title": "Grayscale PDF",
      "description": "Turn a color PDF into black and white"
    },
    "excel-pdf": {
      "title": "Excel/CSV to PDF",
      "description": "Turn an XLSX or CSV table into a PDF"
    },
    "redact": {
      "title": "Redact PDF",
      "description": "Cover chosen areas with black boxes"
    },
    "invoice": {
      "title": "Invoice PDF",
      "description": "Make a simple invoice from seller, buyer and items"
    },
    "write-pdf": {
      "title": "Simple PDF editor",
      "description": "Type or pick a template: application letter, simple CV, explanatory note, price quote"
    },
    "merge": {
      "title": "Merge",
      "description": "Combine multiple PDFs into one file"
    },
    "split": {
      "title": "Split",
      "description": "Separate pages into individual files"
    },
    "compress": {
      "title": "Compress",
      "description": "Reduce the file size"
    },
    "image-pdf": {
      "title": "Image to PDF",
      "description": "Add one or more images to a PDF document"
    },
    "pdf-image": {
      "title": "PDF to image",
      "description": "Save pages as images"
    },
    "rotate": {
      "title": "Rotate",
      "description": "Turn the PDF left or right"
    },
    "protect": {
      "title": "Protect",
      "description": "Secure with a password"
    },
    "watermark": {
      "title": "Watermark",
      "description": "Add text or a mark to the document"
    },
    "pages": {
      "title": "Manage pages",
      "description": "Delete pages and change their order"
    },
    "scan": {
      "title": "Scan",
      "description": "Turn a document into a PDF with the camera"
    },
    "sign": {
      "title": "Add signature",
      "description": "Place an electronic signature on a PDF"
    },
    "ocr": {
      "title": "Recognize text",
      "description": "Extract text from an image on-device"
    },
    "pdf-ocr": {
      "title": "OCR PDF",
      "description": "Recognize text from PDF pages on-device"
    },
    "pdf-word": {
      "title": "Convert PDF to Word",
      "description": "Save PDF text as a DOCX file"
    },
    "word-pdf": {
      "title": "Word to PDF",
      "description": "Convert a DOCX file into a PDF"
    },
    "page-numbers": {
      "title": "Add page numbers",
      "description": "Put page numbers on an existing PDF"
    },
    "preview": {
      "title": "PDF preview",
      "description": "View and zoom pages"
    },
    "batch": {
      "title": "Batch processing",
      "description": "Process several PDFs at once"
    },
    "extract-pages": {
      "title": "Select and extract pages",
      "description": "Create a new PDF from selected pages"
    }
  },
  "tr": {
    "pdf-excel": { "title": "PDF'ten Excel", "description": "PDF tablolarını XLSX dosyasına çevirin" },
    "pdf-ppt": { "title": "PDF'ten PowerPoint", "description": "PDF sayfalarını PPTX slaytlarına çevirin" },
    "ppt-pdf": { "title": "PowerPoint'ten PDF", "description": "PPTX slaytlarını PDF yapın" },
    "unlock": {
      "title": "PDF parolasını kaldır",
      "description": "Bildiğiniz parolayı PDF'ten kaldırın"
    },
    "crop": {
      "title": "PDF kırp",
      "description": "Sayfa kenarlarını kırpın"
    },
    "grayscale": {
      "title": "PDF'i gri yap",
      "description": "Renkli PDF'i siyah beyaz yapın"
    },
    "excel-pdf": {
      "title": "Excel/CSV'den PDF",
      "description": "XLSX veya CSV tablosunu PDF yapın"
    },
    "redact": {
      "title": "PDF'te bilgiyi gizle",
      "description": "Seçtiğiniz alanları siyah kutuyla örtün"
    },
    "invoice": {
      "title": "Fatura PDF",
      "description": "Satıcı, alıcı ve kalemlerden basit fatura hazırlayın"
    },
    "write-pdf": {
      "title": "Basit PDF düzenle",
      "description": "Yazın veya şablon seçin: dilekçe, basit CV, açıklama yazısı, fiyat teklifi"
    },
    "merge": {
      "title": "Birleştir",
      "description": "Birden fazla PDF'yi tek dosyada topla"
    },
    "split": {
      "title": "Böl",
      "description": "Sayfaları ayrı dosyalara ayır"
    },
    "compress": {
      "title": "Sıkıştır",
      "description": "Dosya boyutunu küçült"
    },
    "image-pdf": {
      "title": "Görüntüden PDF",
      "description": "Bir veya daha fazla görüntüyü PDF belgesine ekle"
    },
    "pdf-image": {
      "title": "PDF'den görüntü",
      "description": "Sayfaları görüntü olarak kaydet"
    },
    "rotate": {
      "title": "Döndür",
      "description": "PDF’yi sola veya sağa çevir"
    },
    "protect": {
      "title": "Koru",
      "description": "Parola ile güvene al"
    },
    "watermark": {
      "title": "Filigran",
      "description": "Belgeye metin veya işaret ekle"
    },
    "pages": {
      "title": "Sayfaları yönet",
      "description": "Sayfaları silin ve sırasını değiştirin"
    },
    "scan": {
      "title": "Tara",
      "description": "Kamera ile belgeyi PDF'e dönüştür"
    },
    "sign": {
      "title": "İmza ekle",
      "description": "PDF'e elektronik imza yerleştir"
    },
    "ocr": {
      "title": "Metni tanı",
      "description": "Görüntüden metni cihazda çıkar"
    },
    "pdf-ocr": {
      "title": "PDF’den metin çıkar",
      "description": "PDF sayfalarındaki metni cihazda tanı"
    },
    "pdf-word": {
      "title": "PDF’yi Word’e çevir",
      "description": "PDF metnini DOCX dosyası olarak kaydet"
    },
    "word-pdf": {
      "title": "Word’den PDF",
      "description": "DOCX dosyasını PDF belgesine çevir"
    },
    "page-numbers": {
      "title": "Sayfa numarası ekle",
      "description": "Hazır PDF'e sayfa numarası ekle"
    },
    "preview": {
      "title": "PDF önizleme",
      "description": "Sayfaları görüntüle ve yakınlaştır"
    },
    "batch": {
      "title": "Toplu işlem",
      "description": "Birden fazla PDF'yi aynı anda işle"
    },
    "extract-pages": {
      "title": "Sayfa seç ve çıkar",
      "description": "Seçilen sayfalardan yeni PDF oluştur"
    }
  },
  "ru": {
    "pdf-excel": { "title": "PDF в Excel", "description": "Превратите таблицы PDF в файл XLSX" },
    "pdf-ppt": { "title": "PDF в PowerPoint", "description": "Превратите страницы PDF в слайды PPTX" },
    "ppt-pdf": { "title": "PowerPoint в PDF", "description": "Превратите слайды PPTX в PDF" },
    "unlock": {
      "title": "Снять пароль с PDF",
      "description": "Уберите пароль из PDF, который вы можете открыть"
    },
    "crop": {
      "title": "Обрезать PDF",
      "description": "Обрежьте поля страниц PDF"
    },
    "grayscale": {
      "title": "PDF в оттенки серого",
      "description": "Сделайте цветной PDF чёрно-белым"
    },
    "excel-pdf": {
      "title": "Excel/CSV в PDF",
      "description": "Превратите таблицу XLSX или CSV в PDF"
    },
    "redact": {
      "title": "Скрыть данные в PDF",
      "description": "Закройте выбранные места чёрными блоками"
    },
    "invoice": {
      "title": "Счёт в PDF",
      "description": "Простой счёт: продавец, покупатель, позиции"
    },
    "write-pdf": {
      "title": "Простой редактор PDF",
      "description": "Пишите или выберите шаблон: заявление, резюме, объяснительная, коммерческое предложение"
    },
    "merge": {
      "title": "Объединить",
      "description": "Объединить несколько PDF в один файл"
    },
    "split": {
      "title": "Разделить",
      "description": "Разделить страницы на отдельные файлы"
    },
    "compress": {
      "title": "Сжать",
      "description": "Уменьшить размер файла"
    },
    "image-pdf": {
      "title": "Изображение в PDF",
      "description": "Добавить одно или несколько изображений в PDF"
    },
    "pdf-image": {
      "title": "PDF в изображение",
      "description": "Сохранить страницы как изображения"
    },
    "rotate": {
      "title": "Повернуть",
      "description": "Повернуть PDF влево или вправо"
    },
    "protect": {
      "title": "Защитить",
      "description": "Защитить паролем"
    },
    "watermark": {
      "title": "Водяной знак",
      "description": "Добавить текст или знак в документ"
    },
    "pages": {
      "title": "Управление страницами",
      "description": "Удалять страницы и менять порядок"
    },
    "scan": {
      "title": "Сканировать",
      "description": "Преобразовать документ в PDF камерой"
    },
    "sign": {
      "title": "Добавить подпись",
      "description": "Разместить электронную подпись в PDF"
    },
    "ocr": {
      "title": "Распознать текст",
      "description": "Извлечь текст с изображения на устройстве"
    },
    "pdf-ocr": {
      "title": "OCR PDF",
      "description": "Распознать текст на страницах PDF на устройстве"
    },
    "pdf-word": {
      "title": "Конвертировать PDF в Word",
      "description": "Сохранить текст PDF как файл DOCX"
    },
    "word-pdf": {
      "title": "Word в PDF",
      "description": "Преобразовать DOCX в PDF"
    },
    "page-numbers": {
      "title": "Номера страниц",
      "description": "Добавьте номера страниц в готовый PDF"
    },
    "preview": {
      "title": "Предпросмотр PDF",
      "description": "Просматривать и увеличивать страницы"
    },
    "batch": {
      "title": "Пакетная обработка",
      "description": "Обработать несколько PDF одновременно"
    },
    "extract-pages": {
      "title": "Выбрать и извлечь страницы",
      "description": "Создать новый PDF из выбранных страниц"
    }
  },
  "ar": {
    "pdf-excel": { "title": "من PDF إلى Excel", "description": "حوّل جداول PDF إلى ملف XLSX" },
    "pdf-ppt": { "title": "من PDF إلى PowerPoint", "description": "حوّل صفحات PDF إلى شرائح PPTX" },
    "ppt-pdf": { "title": "من PowerPoint إلى PDF", "description": "حوّل شرائح PPTX إلى PDF" },
    "unlock": {
      "title": "إزالة كلمة مرور PDF",
      "description": "أزل كلمة المرور من ملف PDF تعرف كلمته"
    },
    "crop": {
      "title": "قص PDF",
      "description": "قصّ حواف صفحات PDF"
    },
    "grayscale": {
      "title": "PDF بالأبيض والأسود",
      "description": "حوّل PDF الملوّن إلى رمادي"
    },
    "excel-pdf": {
      "title": "من Excel/CSV إلى PDF",
      "description": "حوّل جدول XLSX أو CSV إلى PDF"
    },
    "redact": {
      "title": "إخفاء معلومات في PDF",
      "description": "غطِّ المناطق المختارة بمربعات سوداء"
    },
    "invoice": {
      "title": "فاتورة PDF",
      "description": "أعدّ فاتورة بسيطة من البائع والمشتري والبنود"
    },
    "write-pdf": {
      "title": "محرر PDF البسيط",
      "description": "اكتب أو اختر قالباً: طلب، سيرة ذاتية، مذكرة توضيحية، عرض سعر"
    },
    "merge": {
      "title": "دمج",
      "description": "جمع عدة ملفات PDF في ملف واحد"
    },
    "split": {
      "title": "تقسيم",
      "description": "فصل الصفحات إلى ملفات منفصلة"
    },
    "compress": {
      "title": "ضغط",
      "description": "تقليل حجم الملف"
    },
    "image-pdf": {
      "title": "صورة إلى PDF",
      "description": "إضافة صورة أو عدة صور إلى مستند PDF"
    },
    "pdf-image": {
      "title": "PDF إلى صورة",
      "description": "حفظ الصفحات كصور"
    },
    "rotate": {
      "title": "تدوير",
      "description": "تدوير PDF إلى اليسار أو اليمين"
    },
    "protect": {
      "title": "حماية",
      "description": "تأمين الملف بكلمة مرور"
    },
    "watermark": {
      "title": "علامة مائية",
      "description": "إضافة نص أو علامة إلى المستند"
    },
    "pages": {
      "title": "إدارة الصفحات",
      "description": "حذف الصفحات وتغيير ترتيبها"
    },
    "scan": {
      "title": "مسح",
      "description": "تحويل المستند إلى PDF باستخدام الكاميرا"
    },
    "sign": {
      "title": "إضافة توقيع",
      "description": "وضع توقيع إلكتروني على ملف PDF"
    },
    "ocr": {
      "title": "التعرف على النص",
      "description": "استخراج النص من صورة على الجهاز"
    },
    "pdf-ocr": {
      "title": "استخراج النص من PDF",
      "description": "التعرف على النص في صفحات PDF على الجهاز"
    },
    "pdf-word": {
      "title": "تحويل PDF إلى Word",
      "description": "حفظ نص PDF كملف DOCX"
    },
    "word-pdf": {
      "title": "من وورد إلى PDF",
      "description": "تحويل ملف DOCX إلى PDF"
    },
    "page-numbers": {
      "title": "ترقيم الصفحات",
      "description": "أضف أرقام الصفحات إلى ملف PDF جاهز"
    },
    "preview": {
      "title": "معاينة PDF",
      "description": "عرض الصفحات وتكبيرها"
    },
    "batch": {
      "title": "معالجة مجمعة",
      "description": "معالجة عدة ملفات PDF دفعة واحدة"
    },
    "extract-pages": {
      "title": "تحديد واستخراج الصفحات",
      "description": "إنشاء ملف PDF جديد من الصفحات المحددة"
    }
  }
};
