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

    // Handle 204 No Content
    if (response.status === 204) {
      return null; // Or an empty object, depending on desired behavior
    }

    if (!response.ok) {
      if (response.status === 401) {
        authStore.logout();
      }
      // Try to parse error as JSON, but handle if it's not
      let errorData = {};
      try {
        errorData = await response.json();
      } catch (e) {
        // If response is not JSON, use statusText
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      throw new Error(errorData.message || `API Error: ${response.statusText}`);
    }

    return response.json();
  };

  return { fetchApi };
}
