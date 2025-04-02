<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    movie: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="bg-surface rounded-md overflow-hidden shadow-md transition-transform duration-200 hover:scale-[1.015]">

        <!-- Poster -->

        <RouterLink :to="`/movies/${movie.id}`" class="hover:underline;">
            <div
                class="aspect-[2/3] bg-gray-700 flex items-center justify-center text-primary-light text-xl"
            >
                Poster
            </div>
        </RouterLink>

        <!-- Info -->
        <div class="p-4 space-y-2">
            <h3 class="text-lg font-semibold">
                <RouterLink :to="`/movies/${movie.id}`" class="hover:underline;">
                    {{ movie.title }}
                </RouterLink>
            </h3>
            <p class="text-sm text-gray-400">
                {{ movie.duration }} • {{ movie.rating }}
            </p>

            <div class="flex flex-wrap gap-2 mt-2">
                <RouterLink
                    v-for="time in movie.showtimes"
                    :key="time"
                    :to="`/movies/${movie.id}?time=${encodeURIComponent(time)}`"
                    class="bg-accent text-primary-light px-2 py-1 text-xs rounded"
                >
                    {{ time }}
                </RouterLink>

            </div>
        </div>
    </div>
</template>

<style scoped></style>
