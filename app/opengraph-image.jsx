import { ImageResponse } from "next/og";
import { getDictionary, getLocale } from "@/i18n";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "AHSP — are here some pteryx?";

// Hexes, not the tokens from app/tokens.css: satori resolves no CSS variables
// and never sees the stylesheet. Light theme only — scrapers have no theme.
const COLOR = {
  canvas: "#fff8f5",
  surface: "#ffffff",
  border: "#ddc0b7",
  accent: "#9d3e1a",
  warm: "#d96b43",
  text: "#1e1b18",
  secondary: "#56423c",
};

export default async function Image() {
  const dict = await getDictionary(await getLocale());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 28,
          background: COLOR.canvas,
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            alignSelf: "flex-start",
            padding: "10px 24px",
            borderRadius: 999,
            background: COLOR.surface,
            border: `1px solid ${COLOR.border}`,
            color: COLOR.secondary,
            fontSize: 26,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: COLOR.warm,
            }}
          />
          {dict.cover.kicker}
        </div>

        <div
          style={{
            fontSize: 92,
            lineHeight: 1.05,
            letterSpacing: -2,
            color: COLOR.text,
          }}
        >
          {dict.cover.title}
        </div>

        <div style={{ fontSize: 34, lineHeight: 1.35, color: COLOR.secondary }}>
          {dict.cover.subtitle}
        </div>

        <div style={{ fontSize: 28, color: COLOR.accent }}>
          {dict.cover.meta}
        </div>
      </div>
    ),
    size
  );
}
