<template>
  <div class="p-4">
    <div v-if="isLoading" class="text-center">
      <p>Chargement des statistiques de l'équipe...</p>
    </div>
    <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
      <p class="font-bold">Erreur :</p>
      <p>{{ error }}</p>
    </div>
    <div v-else-if="stats" class="space-y-4">
      <h3 class="text-xl font-bold text-gray-900">Statistiques pour l'équipe #{{ teamId }}</h3>
      
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="bg-gray-100 p-4 rounded-lg text-center">
          <p class="text-sm text-gray-600">Matchs Joués</p>
          <p class="text-2xl font-bold">{{ stats.matchesPlayed }}</p>
        </div>
        <div class="bg-green-100 p-4 rounded-lg text-center">
          <p class="text-sm text-gray-600">Victoires</p>
          <p class="text-2xl font-bold">{{ stats.wins }}</p>
        </div>
        <div class="bg-red-100 p-4 rounded-lg text-center">
          <p class="text-sm text-gray-600">Défaites</p>
          <p class="text-2xl font-bold">{{ stats.losses }}</p>
        </div>
        <div class="bg-blue-100 p-4 rounded-lg text-center">
          <p class="text-sm text-gray-600">% Victoire</p>
          <p class="text-2xl font-bold">{{ stats.winPercentage }}%</p>
        </div>
        <div class="bg-yellow-100 p-4 rounded-lg text-center">
          <p class="text-sm text-gray-600">Pts Marqués /match</p>
          <p class="text-2xl font-bold">{{ stats.avgPointsFor }}</p>
        </div>
        <div class="bg-orange-100 p-4 rounded-lg text-center">
          <p class="text-sm text-gray-600">Pts Encaissés /match</p>
          <p class="text-2xl font-bold">{{ stats.avgPointsAgainst }}</p>
        </div>
      </div>

    </div>
    <div v-else class="text-center">
      <p>Aucune statistique trouvée pour cette équipe.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useApi } from '../../composables/useApi';

const props = defineProps({
  teamId: {
    type: [Number, String],
    required: true
  }
});

const { fetchApi } = useApi();
const isLoading = ref(false);
const error = ref(null);
const stats = ref(null);

const fetchTeamStats = async (id) => {
  if (!id) return;
  isLoading.value = true;
  error.value = null;
  stats.value = null;
  try {
    const response = await fetchApi(`teams/${id}/stats/overview`);
    stats.value = response;
  } catch (e) {
    error.value = e.message || 'Une erreur est survenue lors de la récupération des statistiques.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchTeamStats(props.teamId);
});

// If the ID of the team changes while the component is already mounted
watch(() => props.teamId, (newId) => {
  fetchTeamStats(newId);
});
</script>