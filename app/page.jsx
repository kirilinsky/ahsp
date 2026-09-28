import DinoQuiz from "@/components/DinoQuiz";
import { getDictionary, getLocale } from "@/i18n";
import { format } from "@/i18n/format";
import { rankFor } from "@/lib/quiz";
import { parseSharedResult } from "@/lib/share";

// A shared link lands on the cover like any other visit; only its preview
// card changes, so the score reads in the feed before anyone clicks.
export async function generateMetadata({ searchParams }) {
  const shared = parseSharedResult(await searchParams);
  if (!shared) return {};

  const dict = await getDictionary(await getLocale());
  const rank = dict.ranks[rankFor(shared.score, shared.total)];
  const title = format(dict.meta.sharedTitle, { ...shared, rank: rank.title });
  const description = dict.meta.sharedDescription;

  return {
    title,
    description,
    openGraph: { type: "website", siteName: "AHSP", title, description },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  return <DinoQuiz dict={dict} locale={locale} />;
}
