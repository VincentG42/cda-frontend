import { u as useAuthStore } from './_plugin-vue_export-helper_ceIx8-CJ.mjs';

function useApi() {
  const API_URL = "/api";
  const fetchApi = async (endpoint, options = {}) => {
    const authStore = useAuthStore();
    const headers = {
      "Accept": "application/json",
      ...options.headers
    };
    const isFormData = options.body instanceof FormData || options.body && options.body.constructor && options.body.constructor.name === "FormData";
    if (!isFormData) {
      headers["Content-Type"] = "application/json";
    }
    const response = await fetch(`${API_URL}/${endpoint}`, {
      ...options,
      headers
    });
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 401) {
        authStore.logout();
      }
      throw new Error(data.message || "Une erreur est survenue");
    }
    return data;
  };
  return { fetchApi };
}

export { useApi as u };
