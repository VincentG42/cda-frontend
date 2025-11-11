import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '../composables/useApi';

export const useSeasonsStore = defineStore('seasons', () => {
  const seasons = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const { fetchApi } = useApi();

  const setLoading = (value) => {
    isLoading.value = value;
  };

  const setError = (value) => {
    error.value = value;
  };

  const setSeasons = (newSeasons) => {
    seasons.value = newSeasons;
  };

  async function fetchSeasons() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchApi('seasons');
      setSeasons(response.data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return { seasons, isLoading, error, setLoading, setError, setSeasons, fetchSeasons };
});