<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Mon Équipe</h2>

    <div v-if="isLoading" class="text-center py-8">
      <p class="text-gray-500">Chargement des informations de l'équipe...</p>
    </div>
    <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
      <p class="font-bold">Erreur:</p>
      <p>{{ error }}</p>
    </div>
    <div v-else-if="team">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ team.name }}</h3>
        <p class="text-gray-600 mb-4">Coach: {{ team.coach ? team.coach.firstname + ' ' + team.coach.lastname : 'N/A' }}</p>
        <p class="text-gray-600">Catégorie: {{ team.category ? team.category.name : 'N/A' }}</p>
      </div>

      <h3 class="text-xl font-semibold text-gray-900 mb-4">Joueurs</h3>
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <ul class="space-y-4">
          <li v-for="player in team.users" :key="player.id" class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div>
              <p class="font-medium text-gray-800">{{ player.firstname }} {{ player.lastname }}</p>
              <p class="text-sm text-gray-500">{{ player.position || 'Joueur' }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="text-center py-8">
      <p class="text-gray-500">Aucune information d'équipe disponible.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApi } from '../../composables/useApi';

const { fetchApi } = useApi();

const team = ref(null);
const isLoading = ref(false);
const error = ref(null);

const fetchTeamInfo = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetchApi('me/teams'); // Assuming this endpoint returns the user's team info
    team.value = response.data;
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchTeamInfo);
</script>
