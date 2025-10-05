import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMatchesStore = defineStore('matches', () => {
  const matches = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const setMatches = (newMatches) => {
    matches.value = newMatches;
  };

  const setLoading = (status) => {
    isLoading.value = status;
  };

  const setError = (err) => {
    error.value = err;
  };

  return { matches, isLoading, error, setMatches, setLoading, setError };
});
