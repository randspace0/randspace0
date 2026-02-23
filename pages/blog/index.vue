<template>
    <div class="content">
        <Head>
            <Title>Blog - Andra Space</Title>
        </Head>

        <article v-for="post in posts" :key="post.path">
            <NuxtLink :to="post.path" class="link">
                <h2 class="title">{{ post.title }}</h2>
                <div class="info">
                    <p>
                        {{ new Date(post.date).toLocaleDateString() }}
                    </p>
                    <p>{{ post.readingTime.text }}</p>
                </div>
            </NuxtLink>
        </article>
    </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData(
    "blog-posts",
    () =>
        queryCollection("blog")
            .where("is_published", "!=", false)
            .order("date", "DESC")
            .all(),
    {
        transform: (data) =>
            data.map((post) => ({
                ...post,
                slug: post.path.split("/").pop() ?? "",
            })),
    },
);
</script>

<style scoped>
.content {
    max-width: 500px;
    padding: 64px 16px 128px 16px;
    display: flex;
    flex-direction: column;
}

.title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 4px;
}

.summary {
    font-size: 14px;
    color: black;
}

.info {
    font-size: 10px;
    color: black;
    display: flex;
    gap: 8px;
}

.link {
    text-decoration: none;
    color: black;
}

article + article {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #000000;
}
</style>
