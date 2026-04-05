import { queryCollection } from "@nuxt/content/server";
import { SitemapUrlInput } from "@nuxtjs/sitemap";

export default eventHandler(async (event) => {
    const posts = await queryCollection(event, "blog")
        .where("is_published", "=", true)
        .select("path", "date")
        .all();

    return posts.map((post) => ({
        loc: post.path,
        lastmod: post.date,
    })) satisfies Array<SitemapUrlInput>;
});
