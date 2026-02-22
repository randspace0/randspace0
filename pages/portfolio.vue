<template>
    <div class="content">
        <Head>
            <Title>Portfolio - Andra Space</Title>
        </Head>

        <iframe
            ref="iframeRef"
            loading="lazy"
            src="https://www.canva.com/design/DAFrJrArj4w/V_PHd7gCASOaTFlHmtEfYw/view?embed"
            allowfullscreen
            allow="fullscreen"
            title="Portfolio - Andra Space"
        >
        </iframe>
        <a
            href="https://www.canva.com/design/DAFrJrArj4w/V_PHd7gCASOaTFlHmtEfYw/view?utm_content=DAFrJrArj4w&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener"
            >Link to Canva</a
        >
    </div>
</template>

<script setup lang="ts">
const iframeRef = ref<HTMLIFrameElement | null>(null);
</script>

<style scoped>
.content {
    width: 100%;
    padding-bottom: 64px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
}

iframe {
    width: 100%;
    height: 100vh;
}
</style>
