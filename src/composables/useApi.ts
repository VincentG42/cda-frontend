import { useAuthStore } from '../stores/authStore';

export function useApi() {
  const API_URL = '/api';

  const fetchApi = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    // Lazy load store to avoid Pinia initialization issues
    const authStore = useAuthStore();

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options.headers,
    };

    const response = await fetch(`${API_URL}/${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 401) {
        authStore.logout();
      }
      throw new Error(data.message || 'Une erreur est survenue');
    }

    return data;
  };

  return { fetchApi };
}
