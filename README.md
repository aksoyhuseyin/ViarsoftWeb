# Viarsoft — Kurumsal Web Sitesi

Modern, kurumsal ve SEO odaklı, **tamamen statik** yazılım firması web sitesi.
Next.js 14 App Router + `output: "export"` ile saf HTML üretir; sunucu, API route
veya middleware gerektirmez. **Cloudflare Pages** üzerinde yayınlanmak üzere hazırdır.

## Teknoloji Yığını

| Katman        | Teknoloji                              |
| ------------- | -------------------------------------- |
| Framework     | Next.js 14.2.35 (App Router)           |
| Render        | Statik export (`output: "export"`)     |
| UI            | React 18.3.1 + TypeScript 5.5.3        |
| Stil          | Tailwind CSS 3.4.6 + PostCSS + Autoprefixer |
| Fontlar       | Inter + Manrope (`next/font`, self-hosted) |
| Lint          | ESLint + eslint-config-next            |
| Node          | >= 20                                  |

## Kurulum ve Çalıştırma

> Not: Bu makinede Node.js kurulu değildi. Aşağıdaki adımlar Node 20+ gerektirir.

```bash
# 1) Bağımlılıkları yükle
npm install

# 2) Geliştirme sunucusu (http://localhost:3000)
npm run dev

# 3) Statik üretim -> out/ klasörüne saf HTML
npm run build
```

Build sonrası çıktı `out/` klasöründe oluşur:

```
out/
├── index.html                     (Ana sayfa)
├── hizmetler/index.html
├── hizmetler/ozel-yazilim-gelistirme/index.html
├── hizmetler/web-uygulamalari/index.html
├── hizmetler/masaustu-yazilim/index.html
├── hizmetler/mobil-uygulama/index.html
├── hizmetler/api-entegrasyonlari/index.html
├── hizmetler/erp-crm-entegrasyonlari/index.html
├── hizmetler/yazilim-danismanligi/index.html
├── teknolojiler/index.html
├── hakkimizda/index.html
├── iletisim/index.html
├── blog/index.html
├── 404.html
├── sitemap.xml
├── robots.txt
└── _next/ ...  (JS, CSS, fontlar)
```

## Cloudflare Pages Dağıtımı

Cloudflare Pages panelinde yeni bir proje oluşturup depoyu bağladıktan sonra:

| Ayar                     | Değer            |
| ------------------------ | ---------------- |
| **Framework preset**     | Next.js (Static Export) veya "None" |
| **Build command**        | `npm run build`  |
| **Build output directory** | `out`          |
| **Node version**         | `20` (`.nvmrc` ile otomatik okunur) |

Deponuz yoksa `out/` klasörünü doğrudan sürükle-bırak ile de yükleyebilirsiniz.
`trailingSlash: true` sayesinde tüm rotalar `/klasör/` biçiminde çalışır.

### www → apex yönlendirmesi (panelden, tek seferlik)

`www.viarsoft.com` Pages'te özel alan adı olarak tanımlı olduğu için apex ile
aynı içeriği 200 döndürür. Sayfalardaki canonical apex'e işaret ettiğinden
Google yanlış sayfayı dizine eklemez, ancak her sayfayı iki kez tarar ve
Search Console bunu "Doğru standart etikete sahip alternatif sayfa" olarak
raporlar.

Bu **depodan çözülemez**: Cloudflare Pages'in `_redirects` dosyası alan adı
düzeyinde yönlendirmeyi desteklemez (yalnızca göreli yollar). Kural zone
düzeyinde tanımlanmalıdır:

**Dashboard → viarsoft.com → Rules → Redirect Rules → Create rule**

| Alan | Değer |
| ---- | ----- |
| Name | `www -> apex` |
| If → Custom filter expression | Field: `Hostname`, Operator: `equals`, Value: `www.viarsoft.com` |
| Then → Type | `Dynamic` |
| Expression | `concat("https://viarsoft.com", http.request.uri.path)` |
| Status code | `301` |
| Preserve query string | açık |

Doğrulama: `curl -I https://www.viarsoft.com/` → `301` ve
`location: https://viarsoft.com/` dönmelidir.

## Proje Yapısı

```
app/
├── layout.tsx              # Kök layout, global metadata, Organization+WebSite JSON-LD
├── page.tsx                # Ana sayfa (Hero, Hizmetler, Çözümler, Neden Biz, Teknoloji, Süreç, CTA)
├── globals.css             # Tailwind + temel stiller
├── sitemap.ts              # -> sitemap.xml (statik)
├── robots.ts               # -> robots.txt (statik)
├── not-found.tsx           # 404 sayfası
├── hizmetler/
│   ├── page.tsx            # Hizmetler listesi
│   └── [slug]/page.tsx     # Hizmet detay (generateStaticParams ile 7 sayfa)
├── teknolojiler/page.tsx
├── hakkimizda/page.tsx
├── iletisim/page.tsx
└── blog/page.tsx
components/                 # Header, Footer, Hero, Services, Solutions, Technologies,
                            # Process, WhyUs, CTA, JsonLd, Icon, DashboardMockup, ...
lib/
├── site.ts                 # Site sabitleri (URL, iletişim, sosyal)
├── seo/
│   ├── metadata.ts         # buildMetadata(): title/desc + canonical + OG + Twitter
│   └── jsonld.ts           # Organization / WebSite / Breadcrumb / Service şemaları
└── data/
    ├── services.ts         # Hizmetler (detay sayfalarını besler)
    ├── technologies.ts     # Teknolojiler
    ├── solutions.ts        # Çözümler
    ├── content.ts          # Neden Biz + Süreç + İstatistikler
    └── nav.ts              # Menü yapılandırması
public/
├── favicon.svg
├── og.png                  # 1200x630 sosyal paylaşım görseli
├── logo.png                # JSON-LD logosu
└── site.webmanifest
```

## SEO Özellikleri

- **Metadata API** ile her sayfada `title` + `description`
- **Open Graph** ve **Twitter Card** meta etiketleri
- **Canonical URL** (trailingSlash uyumlu, mutlak URL)
- **JSON-LD** yapısal veri: Organization, WebSite, BreadcrumbList, Service
- Statik **sitemap.xml** ve **robots.txt**
- Semantik HTML, erişilebilirlik (skip link, aria etiketleri), `prefers-reduced-motion`

## Özelleştirme

- **İletişim/marka bilgileri:** `lib/site.ts` (e-posta, telefon, sosyal linkler, domain)
- **Hizmet/çözüm/teknoloji içerikleri:** `lib/data/*.ts`
- **Renkler:** `tailwind.config.ts` (`navy` ve `accent` paletleri)
- **İletişim formu:** Şu an backend olmadığından `mailto` ile e-posta istemcisini açar.
  Gerçek gönderim için `components/ContactForm.tsx` içindeki `handleSubmit` fonksiyonunu
  [Formspree](https://formspree.io) veya Cloudflare Pages Forms gibi bir servise bağlayın.

## Yapılacaklar (opsiyonel)

- `public/favicon.ico` ve `public/apple-touch-icon.png` ekleyerek ikon setini tamamlayın.
- Blog için gerçek içerik eklendiğinde `app/blog/[slug]/page.tsx` dinamik rotası oluşturun.
- `lib/site.ts` içindeki telefon/e-posta/sosyal alanlarını gerçek değerlerle güncelleyin.

---

© 2026 Viarsoft. Tüm hakları saklıdır.
