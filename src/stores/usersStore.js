import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '../composables/useApi'; // Import useApi

export const useUsersStore = defineStore('users', () => {
  const users = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const { fetchApi } = useApi(); // Initialize useApi

  const setUsers = (newUsers) => {
    users.value = newUsers;
  };

  const setLoading = (status) => {
    isLoading.value = status;
  };

  const setError = (err) => {
    error.value = err;
  };

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchApi('/users'); // Assuming /users endpoint returns { data: [...] }
      setUsers(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { users, isLoading, error, setUsers, setLoading, setError, fetchUsers };
});

