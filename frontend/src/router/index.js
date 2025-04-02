import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '@/views/NotFound.vue';
import MoviesListingPage from '@/views/MoviesListingPage.vue';
import MovieDetailPage from '@/views/MovieDetailPage.vue';

const routes = [
    { path: '/', name: 'Home', component: MoviesListingPage },
    {
        path: '/movies/:id',
        name: 'movie-detail',
        component: MovieDetailPage,
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
