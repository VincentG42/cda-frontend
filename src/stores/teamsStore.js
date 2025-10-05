import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTeamsStore = defineStore('teams', () => {
  const teams = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const setTeams = (newTeams) => {
    teams.value = newTeams;
  };

  const setLoading = (status) => {
    isLoading.value = status;
  };

  const setError = (err) => {
    error.value = err;
  };

  return { teams, isLoading, error, setTeams, setLoading, setError };
});
