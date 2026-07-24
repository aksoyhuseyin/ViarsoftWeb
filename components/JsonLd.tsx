/**
 * JSON-LD yapısal veriyi <script type="application/ld+json"> olarak basar.
 * Server component; statik export ile tam uyumlu.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <>
      {json.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify çıktısı güvenlidir; XSS riski taşımaz.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
