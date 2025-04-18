<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import {
    startOfToday,
    endOfWeek,
    addDays,
    setHours,
    setMinutes,
    isBefore,
    isSameDay,
    parseISO,
    format,
} from 'date-fns';

const route = useRoute();
const selectedTime = route.query.time;
const movieId = route.params.id;

const movie = ref(null);

const now = new Date();
const today = startOfToday();
const weekEnd = endOfWeek(today, { weekStartsOn: 1 });

const selectedShowtime = ref(null);
const ticketCount = ref(1);
const generateShowtimes = () => {
    const dailySlots = [
        { hour: 12, minute: 0 },
        { hour: 14, minute: 30 },
        { hour: 17, minute: 0 },
        { hour: 20, minute: 0 },
    ];

    const showtimes = [];

    for (let i = 0; i <= 1; i++) {
        const date = addDays(today, i);
        if (
            isBefore(date, today) ||
            isBefore(date, now) ||
            isBefore(date, weekEnd)
        ) {
            const dayLabel = format(date, 'EEEE'); // e.g., Monday
            const slots = dailySlots.map(({ hour, minute }) => {
                const time = setMinutes(setHours(date, hour), minute);
                return {
                    label: format(time, 'h:mm a'),
                    value: time.toISOString(),
                    disabled: isSameDay(time, now) && isBefore(time, now),
                };
            });

            showtimes.push({
                day: dayLabel,
                date: format(date, 'yyyy-MM-dd'),
                slots,
            });
        }
    }

    return showtimes;
};

onMounted(() => {
    movie.value = {
        id: movieId,
        title: 'Nebula\'s Grasp',
        description:
            'Reality bends and sanity fractures in this chilling descent into the unknown. When an astronomer uncovers a signal from deep space, the town begins to unravel — and so does she.',
        duration: '2h 5m',
        rating: 'R',
        genre: 'Cosmic Horror',
        thumbnail: `https://picsum.photos/seed/${movieId}/600/900`,
        showtimes: generateShowtimes(),
    };
});
</script>

<template>
    <div class="container mx-auto" v-if="movie">
        <div class="flex xl:items-center">
            <!-- 🎥 Trailer Column -->
            <div class="w-3/6">
                <video
                    class="w-full object-cover"
                    autoplay
                    muted
                    loop
                    playsinline
                >
                    <source src="/trailer.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <!-- 📋 Movie Details Column -->
            <div class="w-3/6">
                <div class="container mx-auto px-4">
                    <div>
                        <h1 class="text-4xl font-extrabold text-primary-light mb-2">
                            {{ movie.title }}
                        </h1>
                        <p class="text-gray-300 mb-2">
                            {{ movie.duration }} • {{ movie.rating }} •
                            {{ movie.genre }}
                        </p>
                    </div>

                    <p class="text-primary-light text-lg mb-6">
                        {{ movie.description }}
                    </p>

                    <h2 class="text-xl font-semibold mb-4">Showtimes</h2>
                    <div
                        v-for="(day, index) in movie.showtimes"
                        :key="index"
                        class="mb-6"
                    >
                        <h3 class="text-lg font-bold text-primary-light mb-2">
                            {{ day.day }}
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <button
                                v-for="slot in day.slots"
                                :key="slot.value"
                                :disabled="slot.disabled"
                                @click="
                                    selectedShowtime = {
                                        ...slot,
                                        date: day.date,
                                    }
                                "
                                class="px-3 py-1 rounded text-sm font-medium transition text-primary-light hover:bg-accent/80 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                                :class="{
                                    'bg-accent':
                                        selectedShowtime?.value !== slot.value,
                                    'bg-accent/10 text-black font-extrabold':
                                        selectedShowtime?.value === slot.value,
                                }"
                            >
                                {{ slot.label }}
                            </button>
                        </div>
                    </div>

                    <div class="mt-4">
                        <label
                            for="tickets"
                            class="block text-sm font-medium text-primary-light mb-1"
                        >
                            Number of Tickets
                        </label>
                        <input
                            id="tickets"
                            type="number"
                            min="1"
                            max="10"
                            v-model.number="ticketCount"
                            class="w-24 px-1 py-1 rounded bg-surface text-primary-light text-sm border border-gray-600 focus:outline-none"
                        />
                    </div>

                    <div class="mt-6">
                        <p class="mb-2 text-sm italic" v-if="selectedShowtime">
                            You selected
                            <strong>{{ ticketCount }}</strong> tickets for
                            <strong>{{ selectedShowtime.label }}</strong> on
                            <strong>
                                {{
                                    format(
                                        parseISO(selectedShowtime.value),
                                        'EEEE, MMMM d, yyyy'
                                    )
                                }}
                            </strong>
                        </p>
                        <!-- <a
                            href=""
                            class="bg-primary text-primary-light px-4 py-2 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
                            :disabled="!selectedShowtime"
                            @click="goToCheckout"
                        > -->
                        <router-link 
                            :to="`/movies/${movieId}/seats`"
                            href=""
                            class="bg-primary text-primary-light px-4 py-2 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
                            :disabled="!selectedShowtime"
                        >
                            Choose Your Seats
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
