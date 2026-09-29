"use client";

import { useEffect, useState } from "react";
import { THEME_STORAGE_KEY } from "./theme-init";
import styles from "./ThemeToggle.module.css";

function readStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

export default function ThemeToggle({ label }) {
  // Server render has no idea which theme won; stay neutral until mount.
  const [theme, setTheme] = useState(null);

  // Dark is authored and ignores the system setting; light exists only as a
  // stored choice made with this toggle.
  useEffect(() => {
    setTheme(readStoredTheme() ?? "dark");
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // private mode — the theme just won't survive a reload
    }
  }

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={label}
      title={label}
      suppressHydrationWarning
    >
      <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
    </button>
  );
}
