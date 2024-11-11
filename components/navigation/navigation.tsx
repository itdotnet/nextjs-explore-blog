import React from "react";
import { getDictionary } from "@/lib/getDictionary";
import PaddingContainer from "../layout/padding-container";
import Link from "next/link";

const Navigation = async ({ locale }: { locale: string }) => {
  const dictionary = await getDictionary(locale);

  return (
    <div className="border-b sticky right-0 left-0 top-0 bg-white bg-opacity-50 backdrop-blur-md">
      <PaddingContainer>
        <div className="flex items-center justify-between py-5">
          <nav>
            <ul className="flex items-center gap-3 text-neutral-600">
              <li>
                <Link href={`/${locale}/cities`}>
                  {dictionary.navigation.links.cities}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/experiences`}>
                  {dictionary.navigation.links.experience}
                </Link>
              </li>
            </ul>
          </nav>
          <Link href={`/${locale}`} className="font-bold text-lg">
            {dictionary.site.title}
          </Link>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Navigation;
