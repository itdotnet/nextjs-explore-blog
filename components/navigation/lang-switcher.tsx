"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LangSwitcher = ({ locale }: { locale: string }) => {
  const targetLanguage = locale === "en" ? "fa" : "en";
  const pathname = usePathname();

  const redirectTarget = () => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = targetLanguage;
    return segments.join("/");
  };

  return (
    <Link
      className="font-semibold flex items-center gap-1"
      locale={targetLanguage}
      href={redirectTarget()}
    >
      <span>{targetLanguage === "en" ? "🇬🇧" : "🇮🇷"}</span>
      {targetLanguage.toUpperCase()}
    </Link>
  );
};

export default LangSwitcher;
