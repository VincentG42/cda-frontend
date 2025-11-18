import { useAuthStore } from '../stores/authStore';

export function useApi() {
  const authStore = useAuthStore();
  const API_URL = import.meta.env.PUBLIC_API_URL;

  const fetchApi = async (endpoint, options = {}) => {
    const headers = {
      'Accept': 'application/json',
      ...options.headers,
    };

    // Only set Content-Type if not FormData, as browser handles it for FormData
    if (!(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }

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
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      let errorMessage = errorData.message || `API Error: ${response.statusText}`;

      if (response.status === 422 && errorData.errors) {
        errorMessage += '\nValidation Errors:';
        for (const field in errorData.errors) {
          errorMessage += `\n- ${field}: ${errorData.errors[field].join(', ')}`;
        }
      }
      throw new Error(errorMessage);
    }

    return response.json();
  };

  return { fetchApi };
}
