"use client";

import { useRouter } from "next/navigation";
import { LanguageSelector } from "next-language-selector";
import { DEFAULT_LOCALE, LOCALES, LOCALE_COOKIE } from "@/i18n/config";
import styles from "./LocaleSwitch.module.css";

export default function LocaleSwitch({ initialLocale }) {
  const router = useRouter();

  return (
    <LanguageSelector
      locales={LOCALES}
      defaultLocale={DEFAULT_LOCALE}
      initialLocale={initialLocale}
      cookieName={LOCALE_COOKIE}
      reloadStrategy={() => router.refresh()}
      className={styles.row}
      itemClassName={styles.item}
    />
  );
}
