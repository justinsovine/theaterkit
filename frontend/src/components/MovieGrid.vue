<script setup>
import MovieCard from './MovieCard.vue';

const movies = [
    {
        id: 1,
        title: "Nebula's Grasp",
        duration: '2h 5m',
        rating: 'R',
        showtimes: ['12:00 PM', '3:30 PM', '7:00 PM'],
        genre: 'Cosmic Horror',
    },
    {
        id: 2,
        title: 'Laugh Hard: The Sequel',
        duration: '1h 40m',
        rating: 'PG-13',
        showtimes: ['11:30 AM', '2:00 PM', '4:30 PM', '7:00 PM'],
        genre: 'Comedy',
    },
    {
        id: 3,
        title: 'The Last Station',
        duration: '1h 55m',
        rating: 'PG',
        showtimes: ['10:00 AM', '12:30 PM', '3:00 PM', '5:30 PM'],
        genre: 'Drama',
    },
    {
        id: 4,
        title: 'Hearts in Transit',
        duration: '2h',
        rating: 'PG',
        showtimes: ['1:15 PM', '4:00 PM', '6:45 PM'],
        genre: 'Romance',
    },
    {
        id: 5,
        title: 'Whispers Beyond Saturn',
        duration: '2h 15m',
        rating: 'R',
        showtimes: ['12:45 PM', '4:15 PM', '7:45 PM'],
        genre: 'Cosmic Horror',
    },
    {
        id: 6,
        title: 'Couch Kings',
        duration: '1h 35m',
        rating: 'PG-13',
        showtimes: ['11:00 AM', '1:30 PM', '4:00 PM'],
        genre: 'Comedy',
    },
    {
        id: 7,
        title: 'A Solitary Thread',
        duration: '1h 50m',
        rating: 'PG-13',
        showtimes: ['12:20 PM', '3:00 PM', '5:40 PM'],
        genre: 'Drama',
    },
    {
        id: 8,
        title: 'Letters to Europa',
        duration: '2h',
        rating: 'PG',
        showtimes: ['11:45 AM', '2:30 PM', '5:15 PM', '8:00 PM'],
        genre: 'Romance',
    },
];
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
</template>

<style scoped></style>
