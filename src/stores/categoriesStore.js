import { defineStore } from 'pinia';
import { ref } from 'vue';

const API_BASE_URL = 'https://backend-basketclub-app.ddev.site/api';

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref([]);
  const loading = ref(false);

  async function fetchCategories() {
    if (categories.value.length > 0) return; // Don't re-fetch if already populated
    loading.value = true;
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      if (!response.ok) throw new Error('Failed to fetch categories');
      categories.value = await response.json();
    } catch (e) {
      console.error(e);
    } finally {
      loading.value = false;
    }
  }

  return { categories, fetchCategories };
});
