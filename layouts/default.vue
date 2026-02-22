<template>
    <div class="container">
        <Header />
        <main class="main">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import "normalize.css";
</script>

<style scoped>
:global(*) {
    padding: 0;
    margin: 0;
    font-family: "Plus Jakarta Sans", sans-serif;
}

.container {
    margin: 16px;
    border: 0.8px solid black;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
