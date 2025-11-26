<template>
  <div>
    <!-- Modal Component -->
    <TeamFormModal v-if="isModalOpen" @close="closeModal" @team-created="handleTeamCreated" />

    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Teams Management</h2>
      <button @click="openModal" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Create Team
      </button>
    </div>

    <div v-if="teamsStore.isLoading" class="text-center">Loading...</div>
    <div v-if="teamsStore.error" class="text-red-500 text-center">{{ teamsStore.error }}</div>

    <div v-if="teamsStore.teams.length > 0" class="bg-white shadow-md rounded-lg">
      <table class="min-w-full leading-normal">
        <thead>
          <tr>
            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Category
            </th>
            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Coach
            </th>
            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in teamsStore.teams" :key="team.id">
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <a :href="`/manage/teams/${team.id}`" class="text-blue-600 hover:text-blue-900 font-bold">
                {{ team.name }}
              </a>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">
                {{ (typeof team.category === 'object' && team.category !== null) ? team.category.name : team.category || 'N/A' }}
              </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">{{ team.coach ? `${team.coach.firstname} ${team.coach.lastname}` : 'N/A' }}</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
              <button class="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
              <button class="text-red-600 hover:text-red-900">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
     <div v-else-if="!teamsStore.isLoading && !teamsStore.error" class="text-center text-gray-500 mt-6">
      No teams found.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TeamFormModal from './TeamFormModal.vue';
import { useTeamsStore } from '../../stores/teamsStore';

const teamsStore = useTeamsStore();
const isModalOpen = ref<boolean>(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const handleTeamCreated = () => {
  teamsStore.fetchTeams(); // Re-fetch the teams list using the store's action
};

onMounted(() => {
  teamsStore.fetchTeams();
});
</script>
