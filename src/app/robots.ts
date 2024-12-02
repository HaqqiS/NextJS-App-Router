import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/login", "/register"],
        },
        sitemap: "https://www.sitemaps.org/schemas/sitemap/0.9",
    };
}
