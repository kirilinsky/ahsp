import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import { themeInitScript } from "@/components/theme-init";
import { getDictionary, getLocale } from "@/i18n";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

// Plus Jakarta Sans ships no Cyrillic; Manrope covers ru without changing
// the geometric voice of the system.
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

// Share cards need absolute URLs. Set NEXT_PUBLIC_SITE_URL once the quiz has
// a public home; until then the localhost default keeps builds honest.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateMetadata() {
  const dict = await getDictionary(await getLocale());
  const { title, description } = dict.meta;

  // app/opengraph-image.jsx attaches itself to both cards.
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: { type: "website", siteName: "AHSP", title, description },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#17140f" },
  ],
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${jakarta.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
