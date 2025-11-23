<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Gestion des Saisons</h1>
        <p class="text-gray-600">Gérer les saisons sportives</p>
      </div>
      <button @click="openCreateModal" class="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
        <span>Nouvelle Saison</span>
      </button>
    </div>

    <div class="bg-white rounded-xl border border-gray-200 p-6">
      <div v-if="seasonsStore.isLoading" class="text-center py-8">
        <p class="text-gray-500">Chargement des saisons...</p>
      </div>
      <div v-else-if="seasonsStore.error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
        <p class="font-bold">Erreur:</p>
        <p>{{ seasonsStore.error }}</p>
      </div>
      <div v-else class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="text-left py-3 px-4 font-medium text-gray-900">Nom</th>
              <th class="text-left py-3 px-4 font-medium text-gray-900">Début</th>
              <th class="text-left py-3 px-4 font-medium text-gray-900">Fin</th>
              <th class="text-left py-3 px-4 font-medium text-gray-900">Active</th>
              <th class="text-right py-3 px-4 font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="season in seasonsStore.seasons" :key="season.id" class="border-b border-gray-100 hover:bg-gray-50">
              <td class="py-3 px-4">{{ season.name }}</td>
              <td class="py-3 px-4">{{ new Date(season.start_date).toLocaleDateString('fr-FR') }}</td>
              <td class="py-3 px-4">{{ new Date(season.end_date).toLocaleDateString('fr-FR') }}</td>
              <td class="py-3 px-4">
                <span :class="[season.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800', 'px-2.5 py-0.5 rounded-full text-xs font-medium']">
                  {{ season.is_active ? 'Oui' : 'Non' }}
                </span>
              </td>
              <td class="py-3 px-4">
                <div class="flex items-center justify-end space-x-2">
                  <button @click="openEditModal(season)" class="p-1 text-blue-600 hover:bg-blue-50 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                  </button>
                  <button @click="confirmDeleteSeason(season)" class="p-1 text-red-600 hover:bg-red-50 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <Modal :show="showForm" :title="currentEditingSeason ? 'Modifier une Saison' : 'Créer une nouvelle Saison'" @close="closeModal">
    <template #body>
      <SeasonForm :initialData="currentEditingSeason" @submit="handleSeasonFormSubmit" @cancel="closeModal" />
    </template>
  </Modal>

  <Modal :show="showDeleteConfirm" title="Confirmer la suppression" @close="cancelDelete">
    <template #body>
      <p class="mb-4">Êtes-vous sûr de vouloir supprimer la saison <strong>{{ seasonToDelete ? seasonToDelete.name : '' }}</strong> ? Cette action est irréversible.</p>
      <p class="mb-2">Pour confirmer, veuillez taper "supprimer" dans le champ ci-dessous :</p>
      <input type="text" v-model="deleteConfirmationInput" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
    </template>
    <template #footer>
      <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2" @click="cancelDelete">Annuler</button>
      <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700" :disabled="deleteConfirmationInput !== 'supprimer'" @click="executeDelete">Supprimer</button>
    </template>
  </Modal>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApi } from '../../../composables/useApi';
import { useSeasonsStore } from '../../../stores/seasonsStore';
import Modal from '../../common/Modal.vue';
import SeasonForm from '../forms/SeasonForm.vue';

const { fetchApi } = useApi();
const seasonsStore = useSeasonsStore();

const showForm = ref(false);
const currentEditingSeason = ref(null);
const showDeleteConfirm = ref(false);
const seasonToDelete = ref(null);
const deleteConfirmationInput = ref('');

const fetchSeasons = async () => {
  seasonsStore.setLoading(true);
  seasonsStore.setError(null);
  try {
    const response = await fetchApi('seasons');
    seasonsStore.setSeasons(response.data);
  } catch (e) {
    seasonsStore.setError(e.message);
  } finally {
    seasonsStore.setLoading(false);
  }
};

const openCreateModal = () => {
  currentEditingSeason.value = null;
  showForm.value = true;
};

const openEditModal = (season) => {
  currentEditingSeason.value = { ...season };
  showForm.value = true;
};

const closeModal = () => {
  showForm.value = false;
  currentEditingSeason.value = null;
};

const handleSeasonFormSubmit = async (formData) => {
  seasonsStore.setLoading(true);
  seasonsStore.setError(null);
  try {
    if (currentEditingSeason.value) {
      // Update existing season
      await fetchApi(`seasons/${currentEditingSeason.value.id}`, { method: 'PUT', body: JSON.stringify(formData) });
    } else {
      // Create new season
      await fetchApi('seasons', { method: 'POST', body: JSON.stringify(formData) });
    }
    await fetchSeasons(); // Refresh the list
    closeModal();
  } catch (e) {
    seasonsStore.setError(e.message);
  } finally {
    seasonsStore.setLoading(false);
  }
};

const confirmDeleteSeason = (season) => {
  seasonToDelete.value = season;
  showDeleteConfirm.value = true;
  deleteConfirmationInput.value = ''; // Clear input on open
};

const cancelDelete = () => {
  showDeleteConfirm.value = false;
  seasonToDelete.value = null;
  deleteConfirmationInput.value = ''; // Clear input on close
};

const executeDelete = async () => {
  if (!seasonToDelete.value || deleteConfirmationInput.value !== 'supprimer') {
    return;
  }

  seasonsStore.setLoading(true);
  seasonsStore.setError(null);
  try {
    await fetchApi(`seasons/${seasonToDelete.value.id}`, { method: 'DELETE' });
    await fetchSeasons(); // Refresh the list
    cancelDelete();
  } catch (e) {
    seasonsStore.setError(e.message);
  } finally {
    seasonsStore.setLoading(false);
  }
};

onMounted(fetchSeasons);
</script>
