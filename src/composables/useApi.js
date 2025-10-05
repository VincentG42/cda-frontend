import { useAuthStore } from '../stores/authStore';

export function useApi() {
  const authStore = useAuthStore();
  const API_URL = import.meta.env.PUBLIC_API_URL;

  const fetchApi = async (endpoint, options = {}) => {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options.headers,
    };

    if (authStore.token) {
      headers['Authorization'] = `Bearer ${authStore.token}`;
    }

    const response = await fetch(`${API_URL}/api/${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      if (response.status === 401) {
        authStore.logout();
      }
      const errorData = await response.json();
      throw new Error(errorData.message || `API Error: ${response.statusText}`);
    }

    return response.json();
  };

  return { fetchApi };
}
