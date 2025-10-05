<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Mes Matchs</h2>

    <div v-if="isLoading" class="text-center py-8">
      <p class="text-gray-500">Chargement de vos matchs...</p>
    </div>
    <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
      <p class="font-bold">Erreur:</p>
      <p>{{ error }}</p>
    </div>
    <div v-else-if="matches.length">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-4">Prochains Matchs</h3>
        <ul class="space-y-4">
          <li v-for="match in matches" :key="match.id" class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div class="flex items-center space-x-4">
              <div class="text-center">
                <div class="text-sm font-medium text-gray-900">{{ new Date(match.date).toLocaleDateString('fr-FR', { weekday: 'short' }).toUpperCase() }}</div>
                <div class="text-xs text-gray-500">{{ new Date(match.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }).toUpperCase() }}</div>
              </div>
              <div class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <span class="text-sm text-gray-600">{{ match.time }}</span>
              </div>
              <div class="flex items-center space-x-4">
                <span class="font-medium">{{ match.home_team.name }}</span>
                <span class="text-gray-400">vs</span>
                <span class="font-medium">{{ match.away_team.name }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span class="text-sm text-gray-600">{{ match.location }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="text-center py-8">
      <p class="text-gray-500">Aucun match à venir.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApi } from '../../composables/useApi.js';

const { fetchApi } = useApi();

const matches = ref([]);
const isLoading = ref(false);
const error = ref(null);

const fetchUserMatches = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetchApi('me/matches'); // Assuming this endpoint returns the user's matches
    matches.value = response.data;
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchUserMatches);
</script>
