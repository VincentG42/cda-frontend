<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Gestion des Équipes</h1>
        <p class="text-gray-600">Gérer les équipes et leurs compositions</p>
      </div>
      <button @click="openCreateModal" class="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
        <span>Nouvelle Équipe</span>
      </button>
    </div>

    <div v-if="teamsStore.isLoading" class="text-center py-8">
      <p class="text-gray-500">Chargement des équipes...</p>
    </div>
    <div v-else-if="teamsStore.error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
      <p class="font-bold">Erreur:</p>
      <p>{{ teamsStore.error }}</p>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="team in teamsStore.teams" :key="team.id" @click="teamStatsModalStore.openModal(team.id)" class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 block cursor-pointer">
        <div class="flex items-center justify-between mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <div class="flex space-x-2">
            <button @click.prevent.stop="openEditModal(team)" class="p-1 text-blue-600 hover:bg-blue-50 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
            </button>
            <button @click.prevent.stop="confirmDeleteTeam(team)" class="p-1 text-red-600 hover:bg-red-50 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
            </button>
          </div>
        </div>
        
        <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ team.name }}</h3>
        <div class="space-y-2 text-sm text-gray-600">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span>{{ team.users_count }} joueurs</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>Coach: {{ team.coach ? team.coach.firstname + ' ' + team.coach.lastname : 'N/A' }}</span>
          </div>
          <div v-if="team.users && team.users.length > 0" class="mt-2">
            <h4 class="font-semibold text-gray-700">Joueurs:</h4>
            <ul class="list-disc list-inside ml-4">
              <li v-for="player in team.users" :key="player.id" class="text-gray-600">{{ player.firstname }} {{ player.lastname }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal :show="showForm" :title="currentEditingTeam ? 'Modifier une Équipe' : 'Créer une nouvelle Équipe'" @close="closeModal">
    <template #body>
      <TeamForm :initialData="currentEditingTeam" @submit="handleTeamFormSubmit" @cancel="closeModal" />
    </template>
  </Modal>

  <Modal :show="showDeleteConfirm" title="Confirmer la suppression" @close="cancelDelete">
    <template #body>
      <p class="mb-4">Êtes-vous sûr de vouloir supprimer l'équipe <strong>{{ teamToDelete ? teamToDelete.name : '' }}</strong> ? Cette action est irréversible.</p>
      <p class="mb-2">Pour confirmer, veuillez taper "supprimer" dans le champ ci-dessous :</p>
      <input type="text" v-model="deleteConfirmationInput" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
    </template>
    <template #footer>
      <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2" @click="cancelDelete">Annuler</button>
      <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700" :disabled="deleteConfirmationInput !== 'supprimer'" @click="executeDelete">Supprimer</button>
    </template>
  </Modal>

  <Modal :show="teamStatsModalStore.isOpen" title="Statistiques de l'Équipe" @close="teamStatsModalStore.closeModal" maxWidth="max-w-4xl">
    <template #body>
      <TeamStatsDashboard v-if="teamStatsModalStore.teamId" :key="teamStatsModalStore.teamId" :team-id="teamStatsModalStore.teamId" />
    </template>
  </Modal>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApi } from '../../../composables/useApi';
import { useTeamsStore } from '../../../stores/teamsStore';
import { useTeamStatsModalStore } from '../../../stores/teamStatsModalStore';
import Modal from '../../common/Modal.vue';
import TeamForm from '../forms/TeamForm.vue';
import TeamStatsDashboard from '../../stats/TeamStatsDashboard.vue';

const { fetchApi } = useApi();
const teamsStore = useTeamsStore();
const teamStatsModalStore = useTeamStatsModalStore();

const showForm = ref(false);
const currentEditingTeam = ref(null);
const showDeleteConfirm = ref(false);
const teamToDelete = ref(null);
const deleteConfirmationInput = ref('');

const fetchTeams = async () => {
  teamsStore.setLoading(true);
  teamsStore.setError(null);
  try {
    const response = await fetchApi('teams');
    teamsStore.setTeams(response.data);
  } catch (e) {
    teamsStore.setError(e.message);
  } finally {
    teamsStore.setLoading(false);
  }
};

const openCreateModal = () => {
  currentEditingTeam.value = null;
  showForm.value = true;
};

const openEditModal = (team) => {
  currentEditingTeam.value = { ...team };
  showForm.value = true;
};

const closeModal = () => {
  showForm.value = false;
  currentEditingTeam.value = null;
};

const handleTeamFormSubmit = async (formData) => {
  teamsStore.setLoading(true);
  teamsStore.setError(null);
  try {
    if (currentEditingTeam.value) {
      // Update existing team
      await fetchApi(`teams/${currentEditingTeam.value.id}`, { method: 'PUT', body: JSON.stringify(formData) });
    } else {
      // Create new team
      await fetchApi('teams', { method: 'POST', body: JSON.stringify(formData) });
    }
    await fetchTeams(); // Refresh the list
    closeModal();
  } catch (e) {
    teamsStore.setError(e.message);
  } finally {
    teamsStore.setLoading(false);
  }
};

const confirmDeleteTeam = (team) => {
  teamToDelete.value = team;
  showDeleteConfirm.value = true;
  deleteConfirmationInput.value = ''; // Clear input on open
};

const cancelDelete = () => {
  showDeleteConfirm.value = false;
  teamToDelete.value = null;
  deleteConfirmationInput.value = ''; // Clear input on close
};

const executeDelete = async () => {
  if (!teamToDelete.value || deleteConfirmationInput.value !== 'supprimer') {
    return;
  }

  teamsStore.setLoading(true);
  teamsStore.setError(null);
  try {
    await fetchApi(`teams/${teamToDelete.value.id}`, { method: 'DELETE' });
    await fetchTeams(); // Refresh the list
    cancelDelete();
  } catch (e) {
    teamsStore.setError(e.message);
  } finally {
    teamsStore.setLoading(false);
  }
};

onMounted(fetchTeams);
</script>
