import { useState } from "react";
import { format } from "@/i18n/format";
import styles from "./ShareBox.module.css";

// Facebook and LinkedIn take no text of their own — they scrape the page's
// Open Graph tags, so the score line below reaches X and Telegram only, until
// a result gets its own shareable URL.
const NETWORKS = [
  {
    key: "twitter",
    href: (url, text) =>
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
  },
  {
    key: "telegram",
    href: (url, text) => `https://t.me/share/url?url=${url}&text=${text}`,
  },
  {
    key: "facebook",
    href: (url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
  {
    key: "linkedin",
    href: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  },
];

export default function ShareBox({ copy, text }) {
  // The result stage only ever mounts on the client, so the page URL is read
  // once at mount rather than through an effect that would flash an empty row.
  const [url] = useState(() =>
    typeof window === "undefined" ? "" : window.location.href
  );

  if (!url) return null;

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  return (
    <div className={styles.box}>
      <p className={`${styles.label} t-label-sm`}>{copy.label}</p>
      <ul className={styles.row}>
        {NETWORKS.map(({ key, href }) => (
          <li key={key}>
            <a
              className={styles.link}
              href={href(encodedUrl, encodedText)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={format(copy.action, { network: copy[key] })}
            >
              {copy[key]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
