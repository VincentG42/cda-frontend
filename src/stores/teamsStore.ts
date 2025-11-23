import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '../composables/useApi';
import type { Team } from '../types';

export const useTeamsStore = defineStore('teams', () => {
    const teams = ref<Team[]>([]);
    const isLoading = ref<boolean>(false);
    const error = ref<string | null>(null);

    const { fetchApi } = useApi();

    const setTeams = (newTeams: Team[]) => {
        teams.value = newTeams;
    };

    const setLoading = (status: boolean) => {
        isLoading.value = status;
    };

    const setError = (err: string | null) => {
        error.value = err;
    };

    const fetchTeams = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetchApi<{ data: Team[] }>('teams');
            setTeams(response.data);
        } catch (err: any) {
            setError(err.message || 'Une erreur est survenue');
        } finally {
            setLoading(false);
        }
    };

    const createTeam = async (teamData: Partial<Team>) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetchApi<{ data: Team }>('teams', {
                method: 'POST',
                body: JSON.stringify(teamData),
            });
            teams.value.push(response.data);
            return response.data;
        } catch (err: any) {
            setError(err.message || 'Une erreur est survenue');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { teams, isLoading, error, setTeams, setLoading, setError, fetchTeams, createTeam };
});
