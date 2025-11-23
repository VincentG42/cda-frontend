import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Match } from '../types';

export const useMatchesStore = defineStore('matches', () => {
    const matches = ref<Match[]>([]);
    const isLoading = ref<boolean>(false);
    const error = ref<string | null>(null);

    const setMatches = (newMatches: Match[]) => {
        matches.value = newMatches;
    };

    const setLoading = (status: boolean) => {
        isLoading.value = status;
    };

    const setError = (err: string | null) => {
        error.value = err;
    };

    return { matches, isLoading, error, setMatches, setLoading, setError };
});
