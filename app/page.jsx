import DinoQuiz from "@/components/DinoQuiz";
import { getDictionary, getLocale } from "@/i18n";
import { format } from "@/i18n/format";
import { rankFor } from "@/lib/quiz";
import { ogImage, parseSharedResult } from "@/lib/share";

// A shared link lands on the cover like any other visit; only its preview
// card changes, so the score reads in the feed before anyone clicks.
export async function generateMetadata({ searchParams }) {
  const shared = parseSharedResult(await searchParams);
  if (!shared) return {};

  const dict = await getDictionary(await getLocale());
  const rank = dict.ranks[rankFor(shared.score, shared.total)];
  const title = format(dict.meta.sharedTitle, { ...shared, rank: rank.title });
  const description = dict.meta.sharedDescription;
  // openGraph merges shallowly: this object replaces the layout's whole
  // block, so the image has to be restated here, not inherited.
  const images = [ogImage(shared, title)];

  return {
    title,
    description,
    openGraph: { type: "website", siteName: "AHSP", title, description, images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export default async function Page() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  return <DinoQuiz dict={dict} locale={locale} />;
}
