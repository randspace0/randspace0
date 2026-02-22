<template>
    <article class="content">
        <Head>
            <Title>{{ title }} - 0x61space</Title>
            <Meta v-if="excerpt" name="description" :content="excerpt" />
        </Head>

        <h1 class="title">{{ title }}</h1>
        <div v-if="date" class="date">
            {{ new Date(date).toLocaleDateString() }}
        </div>
        <div class="text">
            <slot></slot>
        </div>
        <div class="comments">
            <div id="disqus_thread"></div>
            <noscript>
                Please enable JavaScript to view the
                <a href="https://disqus.com/?ref_noscript"
                    >comments powered by Disqus.</a
                >
            </noscript>
        </div>
    </article>
</template>

<script setup lang="ts">
interface Props {
    identifier: string;
    title: string;
    date?: string;
    excerpt?: string;
}

const props = defineProps<Props>();

onMounted(() => {
    const disqus_config = function (this: any) {
        this.page = {
            identifier: props.identifier,
        };
    };

    const script = document.createElement("script");
    script.src = "https://blognya-andra.disqus.com/embed.js";
    script.setAttribute("data-timestamp", new Date().toString());
    (document.head || document.body).appendChild(script);
});
</script>

<style scoped>
.title {
    font-size: 20px;
    font-weight: bold;
}

.date {
    font-size: 10px;
    color: black;
    margin-bottom: 4px;
}

.content {
    max-width: 500px;
    padding: 64px 16px 128px 16px;
    display: flex;
    flex-direction: column;
}

.text {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.text :deep(pre) {
    background: #2b2723;
    color: #ffffff;
    padding: 8px;
    border-radius: 8px;
}

.text :deep(h1) {
    font-size: 18px;
    font-weight: bold;
}

.text :deep(h2) {
    font-size: 16px;
    font-weight: bold;
}

.text :deep(h3) {
    font-size: 14px;
    font-weight: bold;
}

.text :deep(p) {
    line-height: 24px;
}

.text :deep(img) {
    max-width: 100%;
}

.comments {
    margin-top: 64px;
}
</style>
