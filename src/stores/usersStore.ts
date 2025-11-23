import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '../composables/useApi';
import type { User } from '../types';

export const useUsersStore = defineStore('users', () => {
    const users = ref<User[]>([]);
    const isLoading = ref<boolean>(false);
    const error = ref<string | null>(null);

    const { fetchApi } = useApi();

    const setUsers = (newUsers: User[]) => {
        users.value = newUsers;
    };

    const setLoading = (status: boolean) => {
        isLoading.value = status;
    };

    const setError = (err: string | null) => {
        error.value = err;
    };

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetchApi<{ data: User[] }>('users');
            setUsers(response.data);
        } catch (err: any) {
            setError(err.message || 'Une erreur est survenue');
        } finally {
            setLoading(false);
        }
    };

    const createUser = async (userData: Partial<User>) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetchApi<{ data: User }>('users', {
                method: 'POST',
                body: JSON.stringify(userData),
            });
            // Optimistic update or re-fetch
            users.value.push(response.data);
            return response.data;
        } catch (err: any) {
            setError(err.message || 'Une erreur est survenue');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { users, isLoading, error, setUsers, setLoading, setError, fetchUsers, createUser };
});
