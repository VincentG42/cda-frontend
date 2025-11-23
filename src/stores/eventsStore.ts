import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Event } from '../types';

export const useEventsStore = defineStore('events', () => {
    const events = ref<Event[]>([]);
    const isLoading = ref<boolean>(false);
    const error = ref<string | null>(null);

    const setEvents = (newEvents: Event[]) => {
        events.value = newEvents;
    };

    const setLoading = (status: boolean) => {
        isLoading.value = status;
    };

    const setError = (err: string | null) => {
        error.value = err;
    };

    return { events, isLoading, error, setEvents, setLoading, setError };
});
