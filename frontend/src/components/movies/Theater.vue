<script setup>
import { ref } from 'vue';
import Seat from './Seat.vue';

// Row letters A-J and seat numbers 1-5
const rows = 'ABCDE'.split('');
const seatMap = ref(rows.map((row) => {
    return {
        row,
        seats: Array.from({ length: 10 }, (_, i) => ({
            id: `${row}${i + 1}`,
            reserved: false,
            accessible: false,
            selected: false,
        })),
    };
}));

function toggleSeat(rowIndex, seatIndex) {
    const seat = seatMap.value[rowIndex].seats[seatIndex];
    if (!seat.reserved) {
        seat.selected = !seat.selected;
    }
}
</script>

<template>
    <div class="space-y-12">
        <div
            v-for="(row, rowIndex) in seatMap"
            :key="row.row"
            class="flex items-center gap-8"
        >
            <span class="w-4 text-right mr-2 font-mono text-sm">{{ row.row }}</span>

            <button
                v-for="(seat, seatIndex) in row.seats"
                :key="seat.id"
                :disabled="seat.reserved"
                @click="toggleSeat(rowIndex, seatIndex)"
                class="hover:cursor-pointer"
                :class="{
                    'text-red-500 opacity-40 cursor-not-allowed': seat.reserved,
                    'text-accent': seat.selected,
                    'text-gray-500': !seat.selected && !seat.reserved,
                }"
            >
                <Seat class="w-18 h-18" />
            </button>
        </div>
    </div>
</template>


<style scoped>

</style>