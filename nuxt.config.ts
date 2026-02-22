export default defineNuxtConfig({
    modules: ["@nuxt/content"],

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
            routes: [
                "/",
                "/blog",
                "/portfolio",
                "/links",
                "/blog/all-you-can-eat-dan-konsumerisme",
                "/blog/functor-applicative-dan-monad-dengan-gambar",
                "/blog/japan-customs-that-arent-commonly-mentioned",
                "/blog/javascript-rust-webassembly-outside-browser-withssvm",
                "/blog/kepanjangan-nama-csw",
                "/blog/renaming-my-username",
                "/blog/speedup-rust-compile-time",
                "/blog/the-bug-that-ate-wednesday",
                "/blog/time-to-be-productive-on-weekends",
                "/blog/you-might-want-to-consider-to-upgrade-your-ssh-key-to-ed25519",
            ],
        },
    },

    css: ["normalize.css"],

    typescript: {
        strict: true,
        typeCheck: false,
    },

    compatibilityDate: "2026-02-21",
});
