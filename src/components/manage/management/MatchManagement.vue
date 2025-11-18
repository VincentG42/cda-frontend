<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Gestion des Matchs</h1>
        <p class="text-gray-600">Planifier les matchs et saisir les résultats</p>
      </div>
      <button @click="openCreateModal" class="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
        <span>Nouveau Match</span>
      </button>
    </div>

    <div v-if="matchesStore.isLoading" class="text-center py-8">
      <p class="text-gray-500">Chargement des matchs...</p>
    </div>
    <div v-else-if="matchesStore.error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
      <p class="font-bold">Erreur:</p>
      <p>{{ matchesStore.error }}</p>
    </div>
    <div v-else class="space-y-8">
      <div v-for="group in groupedMatches" :key="group.formattedDate" class="space-y-4">
        <h2 class="text-base font-semibold text-gray-900 tracking-wide uppercase pb-2 border-b border-gray-200">{{ group.formattedDate }}</h2>
        <div v-for="match in group.matches" :key="match.id" class="flex items-center justify-between p-4 rounded-lg border transition-colors duration-200" :class="{
          'bg-green-50 border-green-200 hover:bg-green-100': match.is_victory === true,
          'bg-red-50 border-red-200 hover:bg-red-100': match.is_victory === false,
          'border-gray-100 hover:bg-gray-50': match.is_victory == null
        }">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <span class="text-sm font-medium text-gray-800">{{ new Date(match.happens_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) }}</span>
            </div>
            <div class="flex items-center space-x-4">
              <span class="font-medium">{{ match.home_team.name }}</span>
              <span class="text-gray-400">vs</span>
              <span class="font-medium">{{ match.away_team.name }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <template v-if="match.is_home_team">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span class="text-sm text-gray-600">Domicile</span>
              </template>
              <template v-else>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 1 4 4-1 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                <span class="text-sm text-gray-600">Extérieur</span>
              </template>
            </div>
          </div>

          <!-- Score Display -->
          <div v-if="match.team_score != null" class="text-center">
            <div class="font-bold text-lg" :class="{
              'text-green-700': match.is_victory,
              'text-red-700': match.is_victory === false,
              'text-gray-800': match.is_victory == null
            }">
              {{ match.team_score }} - {{ match.opponent_score }}
            </div>
            <div v-if="match.is_victory" class="text-xs font-semibold text-green-600">VICTOIRE</div>
            <div v-else-if="match.is_victory === false" class="text-xs font-semibold text-red-600">DÉFAITE</div>
          </div>
          
          <div class="flex items-center space-x-2">
            <button @click="openResultModal(match)" class="flex items-center space-x-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
              <span class="text-sm">Résultats</span>
            </button>
            <button @click="openEditModal(match)" class="p-1 text-blue-600 hover:bg-blue-50 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
            </button>
            <button @click="confirmDeleteMatch(match)" class="p-1 text-red-600 hover:bg-red-50 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal :show="showForm" :title="currentEditingMatch ? 'Modifier un Match' : 'Créer un nouveau Match'" @close="closeModal">
    <template #body>
      <MatchForm :initialData="currentEditingMatch" @submit="handleMatchFormSubmit" @cancel="closeModal" />
    </template>
  </Modal>

  <Modal :show="showDeleteConfirm" title="Confirmer la suppression" @close="cancelDelete">
    <template #body>
      <p class="mb-4">Êtes-vous sûr de vouloir supprimer le match <strong>{{ matchToDelete ? matchToDelete.home_team.name + ' vs ' + matchToDelete.away_team.name : '' }}</strong> ? Cette action est irréversible.</p>
      <p class="mb-2">Pour confirmer, veuillez taper "supprimer" dans le champ ci-dessous :</p>
      <input type="text" v-model="deleteConfirmationInput" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
    </template>
    <template #footer>
      <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2" @click="cancelDelete">Annuler</button>
      <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700" :disabled="deleteConfirmationInput !== 'supprimer'" @click="executeDelete">Supprimer</button>
    </template>
  </Modal>

  <!-- Match Result Modal -->
  <MatchResultModal :show="showResultModal" :match="selectedMatch" @close="closeResultModal" />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useApi } from '../../../composables/useApi.js';
import { useMatchesStore } from '../../../stores/matchesStore';
import Modal from '../../common/Modal.vue';
import MatchForm from '../forms/MatchForm.vue';
import MatchResultModal from '../MatchResultModal.vue'; // Import the new modal component

const { fetchApi } = useApi();
const matchesStore = useMatchesStore();

const showForm = ref(false);
const currentEditingMatch = ref(null);
const showDeleteConfirm = ref(false);
const matchToDelete = ref(null);
const deleteConfirmationInput = ref('');

const showResultModal = ref(false); // New ref for result modal visibility
const selectedMatch = ref(null); // New ref to hold the match for the result modal

const groupedMatches = computed(() => {
  if (!matchesStore.matches) return [];

  const groups = matchesStore.matches.reduce((acc, match) => {
    const matchDate = new Date(match.happens_at);
    const year = matchDate.getFullYear();
    const month = matchDate.getMonth(); // 0-indexed
    const dateKey = `${year}-${month}`; // 'YYYY-M' as a unique key

    if (!acc[dateKey]) {
      acc[dateKey] = {
        // Format the date for display in the header
        formattedDate: matchDate.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }),
        matches: []
      };
    }
    acc[dateKey].matches.push(match);
    return acc;
  }, {});

  // Convert the object of groups into an array to be able to use v-for
  return Object.values(groups);
});

const fetchMatches = async () => {
  matchesStore.setLoading(true);
  matchesStore.setError(null);
  try {
    const response = await fetchApi('encounters?filter=all'); // Fetch all encounters, including past ones
    matchesStore.setMatches(response.data);
  } catch (e) {
    matchesStore.setError(e.message);
  } finally {
    matchesStore.setLoading(false);
  }
};

const openCreateModal = () => {
  currentEditingMatch.value = null;
  showForm.value = true;
};

const openEditModal = (match) => {
  currentEditingMatch.value = { ...match };
  showForm.value = true;
};

const closeModal = () => {
  showForm.value = false;
  currentEditingMatch.value = null;
};

const openResultModal = (match) => {
  selectedMatch.value = match;
  showResultModal.value = true;
};

const closeResultModal = () => {
  showResultModal.value = false;
  selectedMatch.value = null;
  fetchMatches(); // Refresh matches after result update/import
};

const handleMatchFormSubmit = async (formData) => {
  matchesStore.setLoading(true);
  matchesStore.setError(null);
  try {
    if (currentEditingMatch.value) {
      // Update existing match
      await fetchApi(`encounters/${currentEditingMatch.value.id}`, { method: 'PUT', body: JSON.stringify(formData) });
    } else {
      // Create new match
      await fetchApi('encounters', { method: 'POST', body: JSON.stringify(formData) });
    }
    await fetchMatches(); // Refresh the list
    closeModal();
  } catch (e) {
    matchesStore.setError(e.message);
  } finally {
    matchesStore.setLoading(false);
  }
};

const confirmDeleteMatch = (match) => {
  matchToDelete.value = match;
  showDeleteConfirm.value = true;
  deleteConfirmationInput.value = ''; // Clear input on open
};

const cancelDelete = () => {
  showDeleteConfirm.value = false;
  matchToDelete.value = null;
  deleteConfirmationInput.value = ''; // Clear input on close
};

const executeDelete = async () => {
  if (!matchToDelete.value || deleteConfirmationInput.value !== 'supprimer') {
    return;
  }

  matchesStore.setLoading(true);
  matchesStore.setError(null);
  try {
    await fetchApi(`encounters/${matchToDelete.value.id}`, { method: 'DELETE' });
    await fetchMatches(); // Refresh the list
    cancelDelete();
  } catch (e) {
    matchesStore.setError(e.message);
  } finally {
    matchesStore.setLoading(false);
  }
};

onMounted(fetchMatches);
</script>