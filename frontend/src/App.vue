<template>
    <div id="app">
        <Header />
        <main class="flex-1 py-6">
            <router-view />
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Header from '@/layout/Header.vue';
import Footer from '@/layout/Footer.vue';
</script>

<style scoped>
#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
