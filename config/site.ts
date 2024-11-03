export interface siteConfig {
    siteName: string,
    description: string,
    currentlyAt: string,
    socialLinks: {
        twitter: string,
        youtube: string,
        github: string,
        linkedin: string,
        instagram: string,
        facebook: string
    }
}

const siteConfig: siteConfig = {
    siteName: "کاوشگر",
    description: "یک بلاگی از حیوانات و سفرهای جالب یه دور دنیا که تجربیاتی به یاد ماندنی از شهرهای دور دنیا را به نمایش میگذارد",
    currentlyAt: "ایران",
    socialLinks: {
        twitter: "https://www.twitter.com/#",
        youtube: "https://www.youtube.com/#",
        github: "https://www.github.com/#",
        linkedin: "https://www.linkedin.com/in/abbasiomid",
        instagram: "https://www.instagram.com/#",
        facebook: "https://www.facebook.com/#"
    }
}

export default siteConfig;