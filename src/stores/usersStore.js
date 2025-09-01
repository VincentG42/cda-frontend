import { defineStore } from 'pinia';
import { ref } from 'vue';

const API_BASE_URL = 'https://backend-basketclub-app.ddev.site/api';

export const useUsersStore = defineStore('users', () => {
  const users = ref([]);
  const loading = ref(false);

  async function fetchUsers() {
    if (users.value.length > 0) return;
    loading.value = true;
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      if (!response.ok) throw new Error('Failed to fetch users');
      users.value = await response.json();
    } catch (e) {
      console.error(e);
    } finally {
      loading.value = false;
    }
  }

  return { users, fetchUsers };
});
