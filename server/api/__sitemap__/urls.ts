import { queryCollection } from "#imports";

export default eventHandler(async (event) => {
    const posts = await queryCollection(event, "blog")
        .where("is_published", "=", true)
        .select("path", "date")
        .all();

    return posts.map((post) => ({
        loc: post.path,
        lastmod: post.date,
    }));
});
