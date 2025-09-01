import { defineStore } from 'pinia';
import { ref } from 'vue';

const API_BASE_URL = 'https://backend-basketclub-app.ddev.site/api';

export const useSeasonsStore = defineStore('seasons', () => {
  const seasons = ref([]);
  const loading = ref(false);

  async function fetchSeasons() {
    if (seasons.value.length > 0) return;
    loading.value = true;
    try {
      const response = await fetch(`${API_BASE_URL}/seasons`);
      if (!response.ok) throw new Error('Failed to fetch seasons');
      seasons.value = await response.json();
    } catch (e) {
      console.error(e);
    } finally {
      loading.value = false;
    }
  }

  return { seasons, fetchSeasons };
});
