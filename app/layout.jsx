import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import { themeInitScript } from "@/components/theme-init";
import { getDictionary, getLocale } from "@/i18n";
import { ogImage } from "@/lib/share";
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

// Share cards need absolute URLs, and scrapers only ever see production, so
// that is the default even in dev. NEXT_PUBLIC_SITE_URL overrides it for a
// custom domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahsp-psi.vercel.app";

export async function generateMetadata() {
  const dict = await getDictionary(await getLocale());
  const { title, description } = dict.meta;
  const images = [ogImage(null, title)];

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: { type: "website", siteName: "AHSP", title, description, images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export const viewport = {
  // --bg-canvas of the authored dark theme; the toggle's light theme is a
  // per-visitor choice the server never sees.
  themeColor: "#333333",
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
