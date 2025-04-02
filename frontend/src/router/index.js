import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '@/views/NotFound.vue';
import MovieList from '@/views/movies/List.vue';
import MovieDetails from '@/views/movies/Details.vue';
import MovieSeats from '@/views/movies/Seats.vue';

const routes = [
    { path: '/', name: 'all-movies', component: MovieList },
    { path: '/movies/:id', name: 'movie-detail', component: MovieDetails, },
    { path: '/movies/:id/seats', name: 'movie-seats', component: MovieSeats, },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
