import { defineStore } from 'pinia';
import { ref } from 'vue';

const API_BASE_URL = 'https://backend-basketclub-app.ddev.site/api';

export const useTeamsStore = defineStore('teams', () => {
  // State
  const teams = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // Actions
  async function fetchTeams() {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${API_BASE_URL}/teams`);
      if (!response.ok) {
        throw new Error('Failed to fetch teams');
      }
      teams.value = await response.json();
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  }

  async function createTeam(teamData) {
    // No loading state change here to not affect the main list's loading indicator
    try {
      const response = await fetch(`${API_BASE_URL}/teams`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(teamData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        // Re-throw the error to be caught by the component
        throw new Error(errorData.message || 'Failed to create team.');
      }
      
      // Refresh the teams list to include the new one
      await fetchTeams(); 
    } catch (e) {
        console.error(e);
        // Re-throw so the component knows about the error
        throw e;
    }
  }

  // Return state and actions
  return { teams, loading, error, fetchTeams, createTeam };
});