import { defineStore } from 'pinia';
import { ref } from 'vue';

const API_BASE_URL = import.meta.env.PUBLIC_API_URL + '/api';

export const useUsersStore = defineStore('users', () => {
  // State
  const users = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // Actions
  async function fetchUsers() {
    const token = localStorage.getItem('auth_token');
    if (!token) {
        error.value = 'Authentification requise.';
        return;
    }

    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
          headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!response.ok) throw new Error('Failed to fetch users');
      const result = await response.json();
      users.value = result.data || result;
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  }

  async function createUser(userData) {
    const token = localStorage.getItem('auth_token');
    if (!token) throw new Error('Authentification requise.');

    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create user.');
      }
      
      await fetchUsers(); // Refresh the list
    } catch (e) {
        console.error(e);
        throw e; // Re-throw to be caught by the component
    }
  }

  return { users, loading, error, fetchUsers, createUser };
});