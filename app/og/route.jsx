import { ImageResponse } from "next/og";
import { getDictionary, getLocale } from "@/i18n";
import { format } from "@/i18n/format";
import { rankFor } from "@/lib/quiz";
import { OG_SIZE, parseSharedResult } from "@/lib/share";
import { FONT_FAMILY, loadFonts } from "./fonts";

// A route handler rather than app/opengraph-image.jsx: the file convention
// never sees searchParams, and it outranks config metadata, so a page could
// not swap in a per-result card on top of it.

// Hexes, not the tokens from app/tokens.css: satori resolves no CSS variables
// and never sees the stylesheet. Authored dark theme — scrapers have no theme.
const COLOR = {
  canvas: "#333333", // --p-charcoal
  surface: "#3b3b3b", // --p-charcoal-700
  border: "#565656", // --p-charcoal-500
  accent: "#93ae97", // --p-sage-light
  warm: "#9e847e", // --p-taupe
  text: "#f0edec", // --p-paper
  secondary: "#d3c8c5", // --p-paper-dim
};

export async function GET(request) {
  const params = Object.fromEntries(new URL(request.url).searchParams);
  const shared = parseSharedResult(params);
  const [dict, fonts] = await Promise.all([
    getLocale().then(getDictionary),
    loadFonts(),
  ]);

  return new ImageResponse(
    shared ? <ResultCard dict={dict} {...shared} /> : <CoverCard dict={dict} />,
    { ...OG_SIZE, fonts }
  );
}

function Frame({ kicker, children }) {
  return (
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
        fontFamily: FONT_FAMILY,
        fontWeight: 400,
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
          fontWeight: 700,
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
        {kicker}
      </div>
      {children}
    </div>
  );
}

function CoverCard({ dict }) {
  return (
    <Frame kicker={dict.cover.kicker}>
      <div
        style={{
          fontSize: 92,
          fontWeight: 800,
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
      <div style={{ fontSize: 28, fontWeight: 700, color: COLOR.accent }}>
        {dict.cover.meta}
      </div>
    </Frame>
  );
}

function ResultCard({ dict, score, total }) {
  const rank = dict.ranks[rankFor(score, total)];

  return (
    <Frame kicker={dict.result.kicker}>
      <div
        style={{
          fontSize: 150,
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: -4,
          color: COLOR.accent,
        }}
      >
        {format(dict.result.scoreLine, { score, total })}
      </div>
      <div
        style={{
          fontSize: 76,
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: -1,
          color: COLOR.text,
        }}
      >
        {rank.title}
      </div>
      <div style={{ fontSize: 30, color: COLOR.secondary }}>
        {dict.meta.title}
      </div>
    </Frame>
  );
}
