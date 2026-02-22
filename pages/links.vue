<template>
    <ArticleLayout
        v-if="page"
        :title="page.title || 'Links'"
        :excerpt="page.excerpt"
        identifier="links"
    >
        <ContentRenderer :value="page" />
    </ArticleLayout>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData("links-page", () =>
    queryCollection("links").first()
);
</script>
