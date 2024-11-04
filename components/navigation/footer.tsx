import React from "react";
import PaddingContainer from "../layout/padding-container";
import siteConfig from "@/config/site";
import Link from "next/link";
import SocialLink from "../elements/social-link";

const Footer = () => {
  return (
    <div className="py-8 mt-10 border-t">
      <PaddingContainer>
        <div>
          <h2 className="font-bold text-3xl">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-lg text-neutral-700">
            {siteConfig.description}
          </p>
        </div>
        {/* Social And CurrentlyAt */}
        <div className="flex justify-between flex-wrap gap-4 mt-6">
          <div>
            <div className="text-lg font-medium">#جهانگردی</div>
            <div className="flex items-center justify-center gap-3 mt-2 text-neutral-600">
              <SocialLink
                platform="twitter"
                link={siteConfig.socialLinks.twitter}
              />
              <SocialLink
                platform="instagram"
                link={siteConfig.socialLinks.instagram}
              />
              <SocialLink
                platform="youtube"
                link={siteConfig.socialLinks.youtube}
              />
              <SocialLink
                platform="linkedin"
                link={siteConfig.socialLinks.linkedin}
              />
              <SocialLink
                platform="github"
                link={siteConfig.socialLinks.github}
              />
              <SocialLink
                platform="facebook"
                link={siteConfig.socialLinks.facebook}
              />
            </div>
          </div>
          <div>
            <div className="text-sm text-neutral-400">موقعیت</div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md">
              <div className="bg-emerald-400 w-2 h-2 rounded-full" />
              {siteConfig.currentlyAt}
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="py-3 border-t mt-16 flex flex-wrap items-center justify-between gap-4">
          <div className="text-sm text-neutral-400">
            تمام حقوق محفوظ است | کپی رایت {new Date().getFullYear()}
          </div>
          <div className="text-sm">
            طراحی شده توسط{" "}
            <Link
              className="underline underline-offset-4"
              href="https://www.linkedin.com/in/abbasiomid"
              target="_blank"
            >
              omidabbasi@
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
