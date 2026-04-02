export default defineNuxtConfig({
    modules: ["@nuxt/content", "@nuxtjs/sitemap"],

    sitemap: {
        sources: ["/api/__sitemap__/urls"],
    },


    content: {
        build: {
            markdown: {
                toc: { depth: 3, searchDepth: 3 },
                remarkPlugins: {
                    "remark-reading-time": {},
                },
            },
        },
        highlight: {
            theme: "dark-plus",
            preload: ["typescript", "javascript", "rust", "python", "go"],
        },
    },

    app: {
        head: {
            link: [
                { rel: "icon", type: "image/png", href: "/favicon.png" },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap",
                },
            ],
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
            ],
        },
    },

    nitro: {
        preset: "cloudflare-pages",
        prerender: {
            crawlLinks: true,
        },
    },

    css: ["normalize.css"],

    typescript: {
        strict: true,
        typeCheck: false,
    },

    compatibilityDate: "2026-02-21",
});