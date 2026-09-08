import DinoQuiz from "@/components/DinoQuiz";
import { getDictionary, getLocale } from "@/i18n";

export default async function Page() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  return <DinoQuiz dict={dict} locale={locale} />;
}
