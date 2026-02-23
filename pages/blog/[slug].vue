<template>
    <ArticleLayout
        v-if="post"
        :title="post.title"
        :date="post.date"
        :identifier="slug"
    >
        <ContentRenderer :value="post" />
    </ArticleLayout>
</template>

<script setup lang="ts">
import { createError, useRoute } from "nuxt/app";

const route = useRoute();
const slug = route.params.slug as string;

const { data: post } = await useAsyncData(`blog-${slug}`, async () => {
    const content = await queryCollection("blog")
        .where("is_published", "!=", false)
        .path(`/blog/${slug}`)
        .first();
    if (!content) {
        throw createError({
            statusCode: 404,
            statusMessage: "Blog post not found",
        });
    }

    return content;
});
</script>
