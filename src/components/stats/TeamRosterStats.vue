<template>
  <div class="space-y-6">
    <!-- Loading State -->
    <div v-if="isLoading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm text-red-700">{{ error }}</p>
        </div>
      </div>
    </div>

    <!-- Stats Table -->
    <div v-else-if="players.length > 0" class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10">Joueur</th>
              <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">MJ</th>
              <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">PTS</th>
              <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">REB</th>
              <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">PAD</th>
              <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">INT</th>
              <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">BP</th>
              <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">FTR</th>
              <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">%TIR</th>
              <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">%3PT</th>
              <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">%LF</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="player in players" :key="player.id" class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap sticky left-0 bg-white z-10 border-r border-gray-100">
                <div class="text-sm font-medium text-gray-900">{{ player.firstname }} {{ player.lastname }}</div>
              </td>
              <td class="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-500">{{ player.matchesPlayed }}</td>
              <td class="px-4 py-4 whitespace-nowrap text-center text-sm font-bold text-gray-900">{{ player.avgPoints }}</td>
              <td class="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-500">{{ player.avgRebounds }}</td>
              <td class="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-500">{{ player.avgAssists }}</td>
              <td class="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-500">{{ player.avgSteals }}</td>
              <td class="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-500">{{ player.avgTurnovers }}</td>
              <td class="px-4 py-4 whitespace-nowrap text-center text-sm text-gray-500">{{ player.avgFouls }}</td>
              <td class="px-4 py-4 whitespace-nowrap text-center text-sm" :class="getPercentageColor(player.fgPercentage)">{{ player.fgPercentage }}%</td>
              <td class="px-4 py-4 whitespace-nowrap text-center text-sm" :class="getPercentageColor(player.threePtPercentage)">{{ player.threePtPercentage }}%</td>
              <td class="px-4 py-4 whitespace-nowrap text-center text-sm" :class="getPercentageColor(player.ftPercentage)">{{ player.ftPercentage }}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-else class="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
      <p class="text-gray-500">Aucun joueur ou statistique disponible pour cette équipe.</p>
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
const players = ref([]);

const fetchPlayersStats = async (id) => {
  if (!id) return;
  isLoading.value = true;
  error.value = null;
  players.value = [];

  try {
    const response = await fetchApi(`teams/${id}/stats/players`);
    players.value = response;
  } catch (e) {
    error.value = e.message || 'Erreur lors du chargement des statistiques joueurs.';
    console.error(e);
  } finally {
    isLoading.value = false;
  }
};

const getPercentageColor = (percentage) => {
  if (percentage >= 50) return 'text-green-600 font-medium';
  if (percentage >= 35) return 'text-blue-600';
  if (percentage >= 0) return 'text-gray-600';
  return 'text-gray-400';
};

onMounted(() => {
  fetchPlayersStats(props.teamId);
});

watch(() => props.teamId, (newId) => {
  fetchPlayersStats(newId);
});
</script>
