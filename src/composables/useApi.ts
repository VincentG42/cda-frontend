import { useAuthStore } from '../stores/authStore';

export function useApi() {
  const API_URL = '/api';

  const fetchApi = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    // Lazy load store to avoid Pinia initialization issues
    const authStore = useAuthStore();

    const headers: HeadersInit = {
      'Accept': 'application/json',
      ...options.headers,
    };

    const isFormData = options.body instanceof FormData || (options.body && options.body.constructor && options.body.constructor.name === 'FormData');

    if (!isFormData) {
      (headers as Record<string, string>)['Content-Type'] = 'application/json';
    }

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