import LocaleSwitch from "@/components/LocaleSwitch";
import { getDictionary, getLocale } from "@/i18n";

export default async function Page() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  return (
    <main style={{ padding: 24 }}>
      <LocaleSwitch initialLocale={locale} />
      <h1 style={{ fontFamily: "var(--font-bitter), Georgia, serif", color: "#e8dfd2" }}>
        {dict.cover.title}
      </h1>
      <p style={{ color: "#8a7f70", maxWidth: 460 }}>{dict.cover.subtitle}</p>
    </main>
  );
}
