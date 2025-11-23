import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '../composables/useApi';
import type { Category } from '../types';

export const useCategoriesStore = defineStore('categories', () => {
    const categories = ref<Category[]>([]);
    const isLoading = ref<boolean>(false);
    const error = ref<string | null>(null);

    const { fetchApi } = useApi();

    const setLoading = (value: boolean) => {
        isLoading.value = value;
    };

    const setError = (value: string | null) => {
        error.value = value;
    };

    const setCategories = (newCategories: Category[]) => {
        categories.value = newCategories;
    };

    async function fetchCategories() {
        setLoading(true);
        setError(null);
        try {
            const response = await fetchApi<{ data: Category[] }>('categories');
            setCategories(response.data);
        } catch (e: any) {
            setError(e.message || 'Une erreur est survenue');
        } finally {
            setLoading(false);
        }
    }

    return { categories, isLoading, error, setLoading, setError, setCategories, fetchCategories };
});
