<template>
  <div>
    <!-- Modal Component -->
    <UserFormModal v-if="isModalOpen" @close="closeModal" @user-created="handleUserCreated" />

    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Gestion des Licenciés</h2>
      <button @click="openModal" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Créer un licencié
      </button>
    </div>

    <div v-if="usersStore.loading">Chargement...</div>
    <div v-if="usersStore.error" class="text-red-500">{{ usersStore.error }}</div>
    <table v-if="usersStore.users.length > 0" class="min-w-full leading-normal">
      <thead>
        <tr>
          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nom</th>
          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">N° Licence</th>
          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in usersStore.users" :key="user.id">
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">{{ user.firstname }} {{ user.lastname }}</td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">{{ user.email }}</td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">{{ user.licence_number }}</td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <a :href="`/admin/players/${user.id}`" class="text-blue-600 hover:text-blue-900">
              Voir le profil
            </a>
          </td>
        </tr>
      </tbody>
    </table>
     <div v-else-if="!usersStore.loading && !usersStore.error" class="text-center text-gray-500 mt-6">
      Aucun licencié trouvé.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import UserFormModal from './UserFormModal.vue';
import { useUsersStore } from '../../stores/usersStore';

const usersStore = useUsersStore();

// Modal state and handlers
const isModalOpen = ref(false);
const openModal = () => { isModalOpen.value = true; };
const closeModal = () => { isModalOpen.value = false; };
const handleUserCreated = () => {
  closeModal();
  // The store now handles refreshing the list automatically
};

onMounted(() => {
  usersStore.fetchUsers();
});
</script>
