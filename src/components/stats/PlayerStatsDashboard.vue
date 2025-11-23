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

    <!-- Dashboard Content -->
    <div v-else-if="stats" class="space-y-6">
      
      <!-- Header -->
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-bold text-gray-900">Statistiques de la Saison</h2>
        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          {{ stats.matchesPlayed }} Matchs Joués
        </span>
      </div>

      <!-- KPI Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          label="Points / Match" 
          :value="stats.avgPoints" 
          icon-bg-color="bg-orange-100"
          icon-color="text-orange-600"
        />
        <StatCard 
          label="Rebonds / Match" 
          :value="stats.avgRebounds" 
          icon-bg-color="bg-blue-100"
          icon-color="text-blue-600"
        />
        <StatCard 
          label="Passes / Match" 
          :value="stats.avgAssists" 
          icon-bg-color="bg-green-100"
          icon-color="text-green-600"
        />
        <StatCard 
          label="Évaluation" 
          :value="calculateEfficiency(stats)" 
          subtext="Est. Efficiency"
          icon-bg-color="bg-purple-100"
          icon-color="text-purple-600"
        />
      </div>

      <!-- Shooting Stats Row -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 class="text-sm font-medium text-gray-500 mb-2">Tirs (FG)</h3>
          <div class="flex items-end space-x-2">
            <span class="text-2xl font-bold text-gray-900">{{ stats.fgPercentage }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div class="bg-blue-600 h-2.5 rounded-full" :style="{ width: stats.fgPercentage + '%' }"></div>
          </div>
        </div>

        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 class="text-sm font-medium text-gray-500 mb-2">3 Points</h3>
          <div class="flex items-end space-x-2">
            <span class="text-2xl font-bold text-gray-900">{{ stats.threePtPercentage }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div class="bg-green-500 h-2.5 rounded-full" :style="{ width: stats.threePtPercentage + '%' }"></div>
          </div>
        </div>

        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 class="text-sm font-medium text-gray-500 mb-2">Lancers Francs (1pt)</h3>
          <div class="flex items-end space-x-2">
            <span class="text-2xl font-bold text-gray-900">{{ stats.ftPercentage }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div class="bg-orange-500 h-2.5 rounded-full" :style="{ width: stats.ftPercentage + '%' }"></div>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Evolution Chart -->
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Évolution des Performances</h3>
          <BaseChart 
            v-if="historicalData.labels.length > 0"
            type="line" 
            :data="historicalData" 
            :options="lineChartOptions"
          />
          <div v-else class="h-64 flex items-center justify-center text-gray-400">
            Pas assez de données
          </div>
        </div>

        <!-- Distribution Chart (Mockup for now, could be real if we had detailed shot types) -->
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Répartition des Actions</h3>
          <BaseChart 
            v-if="stats"
            type="doughnut" 
            :data="distributionData" 
            :options="doughnutOptions"
          />
        </div>
      </div>

    </div>
    
    <div v-else class="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
      <p class="text-gray-500">Aucune statistique disponible pour ce joueur.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useApi } from '../../composables/useApi';
import StatCard from './kpi/StatCard.vue';
import BaseChart from './charts/BaseChart.vue';

const props = defineProps({
  playerId: {
    type: Number,
    required: true
  }
});

const { fetchApi } = useApi();
const isLoading = ref(false);
const error = ref(null);
const stats = ref(null);
const historicalPoints = ref([]);

const fetchPlayerStats = async (id) => {
  if (!id) return;
  isLoading.value = true;
  error.value = null;
  stats.value = null;
  historicalPoints.value = [];

  try {
    // 1. Fetch Averages
    const avgResponse = await fetchApi(`players/${id}/stats/averages`);
    stats.value = avgResponse;

    // 2. Fetch Historical Points (for the chart)
    const histResponse = await fetchApi(`players/${id}/stats/historical/points`);
    historicalPoints.value = histResponse;

  } catch (e) {
    error.value = e.message || 'Erreur lors du chargement des statistiques.';
    console.error(e);
  } finally {
    isLoading.value = false;
  }
};

const calculateEfficiency = (s) => {
  // Simple efficiency formula approximation: PTS + REB + AST + STL + BLK - Missed FG - Missed FT - TO
  // We don't have blocks or missed shots explicit counts in the DTO easily without calculation, 
  // so we'll do a simplified version: PTS + REB + AST + STL - TO
  if (!s) return 0;
  return (s.avgPoints + s.avgRebounds + s.avgAssists + s.avgSteals - s.avgTurnovers).toFixed(1);
};

// Chart Data Configuration
const historicalData = computed(() => {
  return {
    labels: historicalPoints.value.map(h => new Date(h.match_date).toLocaleDateString()),
    datasets: [
      {
        label: 'Points',
        backgroundColor: '#3B82F6',
        borderColor: '#3B82F6',
        data: historicalPoints.value.map(h => h.value),
        tension: 0.3,
        fill: true
      }
    ]
  };
});

const distributionData = computed(() => {
  if (!stats.value) return { labels: [], datasets: [] };
  return {
    labels: ['Points', 'Rebonds', 'Passes', 'Interceptions'],
    datasets: [
      {
        backgroundColor: ['#F97316', '#3B82F6', '#22C55E', '#A855F7'],
        data: [
          stats.value.avgPoints, 
          stats.value.avgRebounds, 
          stats.value.avgAssists, 
          stats.value.avgSteals
        ]
      }
    ]
  };
});

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }
  },
  scales: {
    y: { beginAtZero: true }
  }
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

onMounted(() => {
  fetchPlayerStats(props.playerId);
});

watch(() => props.playerId, (newId) => {
  fetchPlayerStats(newId);
});
</script>