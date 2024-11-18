import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/navigation/footer";
import { getDictionary } from "@/lib/getDictionary";
import siteConfig from "@/config/site";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export const generateMetadata = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  const dictionary = await getDictionary(lang);

  return {
    title: {
      template: "%s | " + siteConfig.siteName,
      default: siteConfig.siteName,
    },
    description: dictionary.footer.description,
    openGraph: {
      title: siteConfig.siteName,
      description: siteConfig.description,
      url: "https://fxxqtl-3000.csb.app",
      siteName: "Next.js",
      images: [
        {
          url: "https://fxxqtl-3000.csb.app/opengraph-image.png",
          width: 1200,
          height: 600,
        },
      ],
      locale: lang,
      type: "website",
    },
  };
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={lang} dir={`${lang === "fa" ? "rtl" : "ltr"}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation locale={lang} />
        <div className="pt-10">{children}</div>
        <Footer locale={lang} />
      </body>
    </html>
  );
}
