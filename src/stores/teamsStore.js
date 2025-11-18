import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '../composables/useApi'; // Import useApi

export const useTeamsStore = defineStore('teams', () => {
  const teams = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const { fetchApi } = useApi(); // Initialize useApi

  const setTeams = (newTeams) => {
    teams.value = newTeams;
  };

  const setLoading = (status) => {
    isLoading.value = status;
  };

  const setError = (err) => {
    error.value = err;
  };

  const fetchTeams = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchApi('/teams'); // Assuming /teams endpoint returns { data: [...] }
      setTeams(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { teams, isLoading, error, setTeams, setLoading, setError, fetchTeams };
});
