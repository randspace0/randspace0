<template>
    <article class="content">
        <Head>
            <Title>{{ title }} - 0x61space</Title>
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
    font-size: 15px;
    line-height: 1.7;
}

/* Headings */
.text :deep(h1),
.text :deep(h2),
.text :deep(h3),
.text :deep(h4),
.text :deep(h5),
.text :deep(h6) {
    font-weight: bold;
    margin-top: 2em;
    margin-bottom: 0.5em;
    line-height: 1.3;
}

.text :deep(h1) { font-size: 20px; }
.text :deep(h2) { font-size: 18px; }
.text :deep(h3) { font-size: 16px; }
.text :deep(h4),
.text :deep(h5),
.text :deep(h6) { font-size: 14px; }

/* Paragraphs */
.text :deep(p) {
    margin-bottom: 1em;
}

/* Links */
.text :deep(a) {
    color: black;
    text-underline-offset: 3px;
}

.text :deep(a:hover) {
    opacity: 0.6;
}

/* Lists */
.text :deep(ul),
.text :deep(ol) {
    padding-left: 1.5em;
    margin-bottom: 1em;
}

.text :deep(ul) { list-style-type: disc; }
.text :deep(ol) { list-style-type: decimal; }

.text :deep(li) {
    margin-bottom: 0.25em;
}

/* Blockquote */
.text :deep(blockquote) {
    border-left: 3px solid #000;
    margin: 1.5em 0;
    padding: 0.25em 1em;
    color: #555;
}

.text :deep(blockquote p) {
    margin-bottom: 0;
}

/* Code */
.text :deep(code) {
    font-family: monospace;
    font-size: 13px;
    background: #f0ede8;
    padding: 1px 5px;
    border-radius: 4px;
}

.text :deep(pre) {
    background: #2b2723;
    color: #ffffff;
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    margin-bottom: 1em;
    white-space: pre-wrap;
}

.text :deep(pre code) {
    background: none;
    padding: 0;
    border-radius: 0;
    font-size: 13px;
}

/* Images */
.text :deep(img) {
    max-width: 100%;
    border-radius: 4px;
    display: block;
    margin: 1em 0;
}

/* Horizontal rule */
.text :deep(hr) {
    border: none;
    border-top: 1px solid #000;
    margin: 2em 0;
}

/* Tables */
.text :deep(table) {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    margin-bottom: 1em;
}

.text :deep(th),
.text :deep(td) {
    border: 1px solid #ddd;
    padding: 8px 12px;
    text-align: left;
}

.text :deep(th) {
    font-weight: bold;
    background: #f5f5f5;
}

.comments {
    margin-top: 64px;
}
</style>
