import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useEventsStore = defineStore('events', () => {
  const events = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const setEvents = (newEvents) => {
    events.value = newEvents;
  };

  const setLoading = (status) => {
    isLoading.value = status;
  };

  const setError = (err) => {
    error.value = err;
  };

  return { events, isLoading, error, setEvents, setLoading, setError };
});
