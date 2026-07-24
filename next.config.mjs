/** @type {import('next').NextConfig} */

// `output: "export"` yalnızca production build'de (next build) uygulanır.
// Neden: `next dev` + `output: "export"` birleşiminde Next.js, dinamik
// rotaları (ör. /hizmetler/[slug]) geliştirme sunucusunda çalıştıramaz ve
// 500 döndürür. Bu koşul sayesinde `next dev` normal dev modunda çalışır,
// `next build` ise NODE_ENV=production ile çalıştığından saf statik export
// (out/ klasörü) korunur. Dağıtım çıktısı değişmez.
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Statik export sadece build'de
  ...(isProd ? { output: "export" } : {}),
  // Her rota kendi klasörü + index.html olur (/hizmetler/ -> /hizmetler/index.html)
  trailingSlash: true,
  // next/image optimizasyonu sunucu ister; statik export için kapatılır.
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
