# ♛ The King AI v24.5

> مساعد ذكاء اصطناعي متكامل — **Claude + Gemini + بحث ذكي** — يعمل offline بعد أول تحميل

[![Live Demo](https://img.shields.io/badge/🌐_Live-GitHub_Pages-c9952a?style=for-the-badge)](https://YOUR_USERNAME.github.io/the-king-ai)
[![PWA](https://img.shields.io/badge/📱_PWA-قابل_للتثبيت-7c3aed?style=for-the-badge)](https://YOUR_USERNAME.github.io/the-king-ai)
[![Offline](https://img.shields.io/badge/✈️_Offline-يعمل_بدون_نت-22c55e?style=for-the-badge)](#)
[![Themes](https://img.shields.io/badge/🎨_السمات-22_سمة-e11d48?style=for-the-badge)](#)

---

## ✨ المميزات

| الميزة | التفاصيل |
|--------|----------|
| 🤖 **Claude + Gemini** | دعم نموذجين AI مع تبديل تلقائي ذكي |
| 🔍 **بحث ذكي** | DDG / Google Serper / بحث صور / ويب عميق |
| 🧠 **ذاكرة ذكية** | يتعلم ويحفظ ويسترجع — IndexedDB 50MB+ |
| 📱 **PWA كامل** | تثبيت كتطبيق + يعمل offline بعد أول تحميل |
| ✈️ **Service Worker** | ملف `sw.js` حقيقي = كاش دائم لا يُمسح |
| 🔒 **أمان** | قفل PIN + بصمة إصبع (WebAuthn) + Face ID |
| 🎨 **22 سمة** | غروب، مجرّة، نيون، نار، جليد، ليلة عربية... |
| 📐 **تحكم كامل** | أحجام العناصر والمسافات والتخطيط بـ sliders |
| 🔔 **تذكيرات** | 6 فئات + روتين تكراري + 10 نغمات |
| 🎹 **10 نغمات** | كلاسيك، بيانو، أذان، نيون، عسكري... |
| 📹 **بحث فيديو** | YouTube AI مع مشغّل داخلي |
| ♩ **TTS عربي** | قراءة صوتية مع تحكم بالسرعة |
| 📑 **تبويبات** | محادثات متعددة في نفس الوقت |
| ◎ **مراجعة** | Flashcards مع تقييم ذاتي |
| ↕ **تصدير/استيراد** | JSON / CSV / نص |
| 🌙 **داكن/فاتح** | مع تبديل سريع من الهيدر |

---

## 🚀 نشر على GitHub Pages

```bash
# 1. ارفع الملفات (يجب أن تكون كلها في نفس المجلد)
git init
git add .
git commit -m "The King AI v24.5"
git remote add origin https://github.com/USERNAME/the-king-ai.git
git push -u origin main

# 2. فعّل GitHub Pages
# Settings → Pages → Branch: main → / (root) → Save
```

رابطك: `https://USERNAME.github.io/the-king-ai`

---

## 📁 ملفات المشروع

```
the-king-ai/
  ├── index.html      — التطبيق كاملاً (~200KB)
  ├── sw.js           — Service Worker (Offline دائم) ⭐ مهم
  ├── manifest.json   — إعدادات PWA
  ├── icon-192.png    — أيقونة موبايل
  ├── icon-512.png    — أيقونة عالية الجودة
  └── README.md       — هذا الملف
```

> ⚠️ **مهم:** `sw.js` يجب أن يكون في **نفس مجلد** `index.html` — بدونه لن يعمل الـ Offline بشكل دائم.

---

## 📲 تثبيت كتطبيق

1. افتح الرابط في **Chrome** أو **Edge** على الجوال
2. اضغط زر **⬇** في أعلى الشاشة
3. أو: شريط العنوان ← أيقونة التثبيت ← "إضافة للشاشة الرئيسية"

### ✈️ بعد التثبيت — كيف يعمل Offline؟

1. افتح التطبيق **مع الإنترنت** مرة واحدة
2. انتظر **30 ثانية** حتى يحفظ الـ Service Worker كل شيء
3. الآن يعمل **إلى الأبد** بدون نت ✓

---

## 🔑 إعداد مفاتيح API

### Claude (Anthropic)
1. سجّل على [console.anthropic.com](https://console.anthropic.com)
2. أنشئ مفتاح API
3. في التطبيق: الإعدادات ← API ← أدخل المفتاح

### Gemini (Google)
1. سجّل على [aistudio.google.com](https://aistudio.google.com)
2. أنشئ مفتاح API (مجاني)
3. في التطبيق: الإعدادات ← API ← Gemini

### بحث Google (اختياري)
1. سجّل على [serper.dev](https://serper.dev) (مجاني 2500 بحث/شهر)
2. في التطبيق: الإعدادات ← API ← Google Search

---

## 📖 طرق التعليم

```
$ عاصمة اليابان # طوكيو        — تعليم مباشر بالرمز $
احفظ أن الخوارزمي مبتكر الجبر   — حفظ معلومة بالأمر
الجواب هو ...                  — بعد سؤال مجهول
لا، الصح هو ...                — تصحيح الإجابة
```

---

## ⚙ الإعدادات المتاحة (8 أقسام)

**عام:** إحصائيات، منطقة زمنية، سرعة صوت، ميزات، حجم محادثة

**API:** Claude + Gemini + Google Search + اختيار النموذج + محرك AI

**الذكاء:** تعلم تلقائي، دمج متشابهات، ذاكرة سياقية، بحث عميق، Markdown

**المظهر:** 22 سمة لونية، 4 أحجام خط، 4 تخطيطات، موضع التنقل، 6 sliders للأحجام

**الأمان:** بصمة إصبع WebAuthn، قفل PIN 4-8 أرقام، خصوصية، مسح بيانات

**الإشعارات:** إذن، 10 نغمات تنبيه، اهتزاز، تكرار

**النسخ:** نسخ تلقائي دوري، استعادة آخر 15 نسخة، تصدير JSON/CSV/نص

**متقدم:** معلومات نظام، إعادة ضبط، إدارة ذاكرة، منطقة خطر

---

*Made with ♛ — The King AI v24.5*
