import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '../composables/useApi';
import type { Season } from '../types';

export const useSeasonsStore = defineStore('seasons', () => {
    const seasons = ref<Season[]>([]);
    const isLoading = ref<boolean>(false);
    const error = ref<string | null>(null);

    const { fetchApi } = useApi();

    const setLoading = (value: boolean) => {
        isLoading.value = value;
    };

    const setError = (value: string | null) => {
        error.value = value;
    };

    const setSeasons = (newSeasons: Season[]) => {
        seasons.value = newSeasons;
    };

    async function fetchSeasons() {
        setLoading(true);
        setError(null);
        try {
            const response = await fetchApi<{ data: Season[] }>('seasons');
            setSeasons(response.data);
        } catch (e: any) {
            setError(e.message || 'Une erreur est survenue');
        } finally {
            setLoading(false);
        }
    }

    return { seasons, isLoading, error, setLoading, setError, setSeasons, fetchSeasons };
});
