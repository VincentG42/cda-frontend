<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Gestion des Matchs</h1>
        <p class="text-gray-600">Planifier les matchs et saisir les résultats</p>
      </div>
      <button class="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200">
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
        <div v-for="match in group.matches" :key="match.id" class="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <span class="text-sm font-medium text-gray-800">{{ match.time }}</span>
            </div>
            <div class="flex items-center space-x-4">
              <span class="font-medium">{{ match.is_at_home ? (match.team ? match.team.name : 'N/A') : match.opponent }}</span>
              <span class="text-gray-400">vs</span>
              <span class="font-medium">{{ match.is_at_home ? match.opponent : (match.team ? match.team.name : 'N/A') }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <template v-if="match.is_at_home">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span class="text-sm text-gray-600">Domicile</span>
              </template>
              <template v-else>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 1 4 4-1 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                <span class="text-sm text-gray-600">Extérieur</span>
              </template>
            </div>
          </div>
          
          <div class="flex items-center space-x-2">
            <button class="flex items-center space-x-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
              <span class="text-sm">Résultats</span>
            </button>
            <button class="p-1 text-blue-600 hover:bg-blue-50 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
            </button>
            <button class="p-1 text-red-600 hover:bg-red-50 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useApi } from '../../../composables/useApi.js';
import { useMatchesStore } from '../../../stores/matchesStore';

const { fetchApi } = useApi();
const matchesStore = useMatchesStore();

const groupedMatches = computed(() => {
  if (!matchesStore.matches) return [];

  const groups = matchesStore.matches.reduce((acc, match) => {
    const matchDate = new Date(match.happens_at);
    const dateKey = matchDate.toISOString().split('T')[0]; // 'YYYY-MM-DD' as a unique key

    if (!acc[dateKey]) {
      acc[dateKey] = {
        // Format the date for display in the header
        formattedDate: matchDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
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
    const response = await fetchApi('encounters'); // Assuming 'encounters' is the endpoint for matches
    matchesStore.setMatches(response.data);
  } catch (e) {
    matchesStore.setError(e.message);
  } finally {
    matchesStore.setLoading(false);
  }
};

onMounted(fetchMatches);
</script>
