<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Gestion des Utilisateurs</h1>
        <p class="text-gray-600">Gérer les licenciés du club</p>
      </div>
      <button @click="openCreateModal" class="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
        <span>Nouveau Licencié</span>
      </button>
    </div>

    <div class="bg-white rounded-xl border border-gray-200 p-6">
      <div class="flex items-center space-x-4 mb-6">
        <div class="relative flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" placeholder="Rechercher par nom, prénom, licence..." v-model="searchTerm" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
        </div>
        <button class="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
          <span>Filtres</span>
        </button>
      </div>

      <div v-if="usersStore.isLoading" class="text-center py-8">
        <p class="text-gray-500">Chargement des utilisateurs...</p>
      </div>
      <div v-else-if="usersStore.error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
        <p class="font-bold">Erreur:</p>
        <p>{{ usersStore.error }}</p>
      </div>
      <div v-else class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="text-left py-3 px-4 font-medium text-gray-900">Nom</th>
              <th class="text-left py-3 px-4 font-medium text-gray-900">Prénom</th>
              <th class="text-left py-3 px-4 font-medium text-gray-900">N° Licence</th>
              <th class="text-left py-3 px-4 font-medium text-gray-900">Équipe</th>
              <th class="text-left py-3 px-4 font-medium text-gray-900">Catégorie</th>
              <th class="text-left py-3 px-4 font-medium text-gray-900">Email</th>
              <th class="text-right py-3 px-4 font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in filteredUsers" :key="user.id" class="border-b border-gray-100 hover:bg-gray-50">
              <td class="py-3 px-4">{{ user.lastname }}</td>
              <td class="py-3 px-4">{{ user.firstname }}</td>
              <td class="py-3 px-4">{{ user.licence_number }}</td>
              <td class="py-3 px-4">{{ user.teams && user.teams.length > 0 ? user.teams[0].name : 'N/A' }}</td>
              <td class="py-3 px-4">{{ user.teams && user.teams.length > 0 && user.teams[0].category ? user.teams[0].category.name : 'N/A' }}</td>
              <td class="py-3 px-4">{{ user.email }}</td>
              <td class="py-3 px-4">
                <div class="flex items-center justify-end space-x-2">
                  <button @click="statsModalStore.openModal(user.id)" class="p-1 text-purple-600 hover:bg-purple-50 rounded" title="Voir les statistiques">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
                  </button>
                  <button @click="openEditModal(user)" class="p-1 text-blue-600 hover:bg-blue-50 rounded" title="Modifier">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                  </button>
                  <button @click="confirmDeleteUser(user)" class="p-1 text-red-600 hover:bg-red-50 rounded" title="Supprimer">
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

  <Modal :show="showForm" :title="currentEditingUser ? 'Modifier un Licencié' : 'Créer un nouveau Licencié'" @close="closeModal">
    <template #body>
      <UserForm :initialData="currentEditingUser" @submit="handleUserFormSubmit" @cancel="closeModal" />
    </template>
  </Modal>

  <Modal :show="showDeleteConfirm" title="Confirmer la suppression" @close="cancelDelete">
    <template #body>
      <p class="mb-4">Êtes-vous sûr de vouloir supprimer l'utilisateur <strong>{{ userToDelete ? userToDelete.firstname + ' ' + userToDelete.lastname : '' }}</strong> ? Cette action est irréversible.</p>
      <p class="mb-2">Pour confirmer, veuillez taper "supprimer" dans le champ ci-dessous :</p>
      <input type="text" v-model="deleteConfirmationInput" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
    </template>
    <template #footer>
      <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2" @click="cancelDelete">Annuler</button>
      <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700" :disabled="deleteConfirmationInput !== 'supprimer'" @click="executeDelete">Supprimer</button>
    </template>
  </Modal>

  <Modal :show="statsModalStore.isOpen" title="Statistiques du Joueur" @close="statsModalStore.closeModal">
    <template #body>
      <PlayerStatsDashboard v-if="statsModalStore.playerId" :key="statsModalStore.playerId" :player-id="statsModalStore.playerId" />
    </template>
  </Modal>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useApi } from '../../../composables/useApi';
import { useUsersStore } from '../../../stores/usersStore';
import { useStatsModalStore } from '../../../stores/statsModalStore';
import Modal from '../../common/Modal.vue';
import UserForm from '../forms/UserForm.vue';
import PlayerStatsDashboard from '../../stats/PlayerStatsDashboard.vue';

const { fetchApi } = useApi();
const usersStore = useUsersStore();
const statsModalStore = useStatsModalStore();

const searchTerm = ref('');
const showForm = ref(false);
const currentEditingUser = ref(null);
const showDeleteConfirm = ref(false);
const userToDelete = ref(null);
const deleteConfirmationInput = ref('');

const filteredUsers = computed(() => {
  if (!usersStore.users) return [];
  const lowerCaseSearch = searchTerm.value.toLowerCase();
  return usersStore.users.filter(user =>
    (user.firstname || '').toLowerCase().includes(lowerCaseSearch) ||
    (user.lastname || '').toLowerCase().includes(lowerCaseSearch) ||
    (user.email || '').toLowerCase().includes(lowerCaseSearch) ||
    (user.licence_number || '').toLowerCase().includes(lowerCaseSearch)
  );
});

const fetchUsers = async () => {
  usersStore.setLoading(true);
  usersStore.setError(null);
  try {
    const response = await fetchApi('users');
    usersStore.setUsers(response.data);
  } catch (e) {
    usersStore.setError(e.message);
  } finally {
    usersStore.setLoading(false);
  }
};

const openCreateModal = () => {
  currentEditingUser.value = null;
  showForm.value = true;
};

const openEditModal = (user) => {
  currentEditingUser.value = { ...user };
  showForm.value = true;
};

const closeModal = () => {
  showForm.value = false;
  currentEditingUser.value = null;
};

const handleUserFormSubmit = async (formData) => {
  usersStore.setLoading(true);
  usersStore.setError(null);
  try {
    if (currentEditingUser.value) {
      // Update existing user
      await fetchApi(`users/${currentEditingUser.value.id}`, { method: 'PUT', body: JSON.stringify(formData) });
    } else {
      // Create new user
      await fetchApi('users', { method: 'POST', body: JSON.stringify(formData) });
    }
    await fetchUsers(); // Refresh the list
    closeModal();
  } catch (e) {
    usersStore.setError(e.message);
  } finally {
    usersStore.setLoading(false);
  }
};

const confirmDeleteUser = (user) => {
  userToDelete.value = user;
  showDeleteConfirm.value = true;
  deleteConfirmationInput.value = ''; // Clear input on open
};

const cancelDelete = () => {
  showDeleteConfirm.value = false;
  userToDelete.value = null;
  deleteConfirmationInput.value = ''; // Clear input on close
};

const executeDelete = async () => {
  if (!userToDelete.value || deleteConfirmationInput.value !== 'supprimer') {
    // Optionally, show an error message if confirmation is incorrect
    return;
  }

  usersStore.setLoading(true);
  usersStore.setError(null);
  try {
    await fetchApi(`users/${userToDelete.value.id}`, { method: 'DELETE' });
    await fetchUsers(); // Refresh the list
    cancelDelete();
  } catch (e) {
    usersStore.setError(e.message);
  } finally {
    usersStore.setLoading(false);
  }
};

onMounted(fetchUsers);
</script>
