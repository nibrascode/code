// Tool names and one-line descriptions, taken from the Nibras PDF app (5 languages).
export const TOOL_IDS = ["write-pdf","merge","split","compress","image-pdf","pdf-image","rotate","protect","watermark","pages","scan","sign","ocr","pdf-ocr","pdf-word","preview","batch","extract-pages","word-pdf","page-numbers"] as const;
export type ToolId = (typeof TOOL_IDS)[number];
export const TOOL_TEXT: Record<"az" | "en" | "tr" | "ar" | "ru", Record<ToolId, { title: string; description: string }>> = {
  "az": {
    "write-pdf": {
      "title": "Sadə PDF düzəlt",
      "description": "Sadə səhifədə yazın və PDF-i düzəldin"
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
      "description": "Seçilmiş səhifələrdən yeni PDF yarat"
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
    "write-pdf": {
      "title": "Simple PDF editor",
      "description": "Write on a simple page and edit it into a PDF"
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
    "write-pdf": {
      "title": "Basit PDF düzenle",
      "description": "Basit bir sayfaya yazın ve PDF olarak düzenleyin"
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
    "write-pdf": {
      "title": "Простой редактор PDF",
      "description": "Пишите на простой странице и создавайте PDF"
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
    "write-pdf": {
      "title": "محرر PDF البسيط",
      "description": "اكتب على صفحة بسيطة وحوّلها إلى PDF"
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
