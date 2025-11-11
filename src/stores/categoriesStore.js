import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '../composables/useApi';

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const { fetchApi } = useApi();

  const setLoading = (value) => {
    isLoading.value = value;
  };

  const setError = (value) => {
    error.value = value;
  };

  const setCategories = (newCategories) => {
    categories.value = newCategories;
  };

  async function fetchCategories() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchApi('categories'); // Assuming fetchApi is available globally or imported
      setCategories(response.data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return { categories, isLoading, error, setLoading, setError, setCategories, fetchCategories };
});
