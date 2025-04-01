<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
    <div class="container mx-auto">
        <h1 class="font-extrabold text-2xl mb-4">Movies</h1>

        <div class="card">
            <button
                type="button"
                class="bg-primary hover:bg-accent cursor-pointer text-primary-light font-medium px-4 py-2 rounded-md transition-colors"
                @click="count++"
            >
                Count is {{ count }}
            </button>
        </div>
    </div>
</template>

<style scoped></style>
