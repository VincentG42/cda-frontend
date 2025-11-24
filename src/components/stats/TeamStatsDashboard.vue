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
        <h2 class="text-2xl font-bold text-gray-900">Vue d'ensemble de l'Équipe</h2>
        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          {{ stats.matchesPlayed }} Matchs Joués
        </span>
      </div>

      <!-- KPI Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          label="Victoires" 
          :value="stats.wins" 
          icon-bg-color="bg-green-100"
          icon-color="text-green-600"
        />
        <StatCard 
          label="Défaites" 
          :value="stats.losses" 
          icon-bg-color="bg-red-100"
          icon-color="text-red-600"
        />
        <StatCard 
          label="Pts Marqués (Moy)" 
          :value="stats.avgPointsFor" 
          icon-bg-color="bg-blue-100"
          icon-color="text-blue-600"
        />
        <StatCard 
          label="Pts Encaissés (Moy)" 
          :value="stats.avgPointsAgainst" 
          icon-bg-color="bg-orange-100"
          icon-color="text-orange-600"
        />
      </div>

      <!-- Shooting Stats Section -->
      <div v-if="shootingStats" class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 class="text-lg font-bold text-gray-900 mb-4">Efficacité aux Tirs (Équipe)</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- FG -->
          <div class="text-center">
            <div class="relative w-32 h-32 mx-auto">
              <BaseChart 
                type="doughnut" 
                :data="getDoughnutData(shootingStats.fg_percentage, '#3B82F6')" 
                :options="percentageChartOptions"
              />
              <div class="absolute inset-0 flex items-center justify-center flex-col">
                <span class="text-2xl font-bold text-gray-900">{{ shootingStats.fg_percentage }}%</span>
                <span class="text-xs text-gray-500">FG</span>
              </div>
            </div>
            <p class="mt-2 text-sm text-gray-600">
              {{ shootingStats.details.fgm }} / {{ shootingStats.details.fga }}
            </p>
          </div>

          <!-- 3PT -->
          <div class="text-center">
            <div class="relative w-32 h-32 mx-auto">
              <BaseChart 
                type="doughnut" 
                :data="getDoughnutData(shootingStats.three_pt_percentage, '#22C55E')" 
                :options="percentageChartOptions"
              />
              <div class="absolute inset-0 flex items-center justify-center flex-col">
                <span class="text-2xl font-bold text-gray-900">{{ shootingStats.three_pt_percentage }}%</span>
                <span class="text-xs text-gray-500">3PT</span>
              </div>
            </div>
            <p class="mt-2 text-sm text-gray-600">
              {{ shootingStats.details['3pm'] }} / {{ shootingStats.details['3pa'] }}
            </p>
          </div>

          <!-- FT -->
          <div class="text-center">
            <div class="relative w-32 h-32 mx-auto">
              <BaseChart 
                type="doughnut" 
                :data="getDoughnutData(shootingStats.ft_percentage, '#F97316')" 
                :options="percentageChartOptions"
              />
              <div class="absolute inset-0 flex items-center justify-center flex-col">
                <span class="text-2xl font-bold text-gray-900">{{ shootingStats.ft_percentage }}%</span>
                <span class="text-xs text-gray-500">1PT (LF)</span>
              </div>
            </div>
            <p class="mt-2 text-sm text-gray-600">
              {{ shootingStats.details.ftm }} / {{ shootingStats.details.fta }}
            </p>
          </div>

        </div>
      </div>

      <!-- Analysis Charts -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Win/Loss Ratio -->
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Ratio Victoires / Défaites</h3>
          <div class="h-64">
            <BaseChart 
              type="pie" 
              :data="winLossData" 
              :options="pieChartOptions"
            />
          </div>
        </div>

        <!-- Points Analysis -->
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Points Encaissés : Victoires vs Défaites</h3>
          <div class="h-64">
            <BaseChart 
              v-if="analysisStats"
              type="bar" 
              :data="analysisData" 
              :options="barChartOptions"
            />
            <div v-else class="h-full flex items-center justify-center text-gray-400">
              Chargement de l'analyse...
            </div>
          </div>
        </div>
      </div>

      <!-- Quarter Analysis -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" v-if="periodStats">
        <!-- Points per Quarter -->
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Moyenne de Points par Quart-Temps</h3>
          <div class="h-64">
            <BaseChart 
              type="bar" 
              :data="periodBarData" 
              :options="barChartOptions"
            />
          </div>
        </div>

        <!-- Scoring Evolution -->
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Évolution du Score (Moyenne)</h3>
          <div class="h-64">
            <BaseChart 
              type="line" 
              :data="evolutionLineData" 
              :options="lineChartOptions"
            />
          </div>
        </div>
      </div>

    </div>
    
    <div v-else class="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
      <p class="text-gray-500">Aucune statistique disponible pour cette équipe.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useApi } from '../../composables/useApi';
import StatCard from './kpi/StatCard.vue';
import BaseChart from './charts/BaseChart.vue';

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
const analysisStats = ref(null);
const shootingStats = ref(null);
const periodStats = ref(null);

const fetchTeamStats = async (id) => {
  if (!id) return;
  isLoading.value = true;
  error.value = null;
  stats.value = null;
  analysisStats.value = null;
  shootingStats.value = null;
  periodStats.value = null;

  try {
    // 1. Overview
    const overviewRes = await fetchApi(`teams/${id}/stats/overview`);
    stats.value = overviewRes;

    // 2. Analysis
    const analysisRes = await fetchApi(`teams/${id}/stats/analysis`);
    analysisStats.value = analysisRes;

    // 3. Shooting
    const shootingRes = await fetchApi(`teams/${id}/stats/shooting`);
    shootingStats.value = shootingRes;

    // 4. Periods
    const periodRes = await fetchApi(`teams/${id}/stats/periods`);
    periodStats.value = periodRes;

  } catch (e) {
    error.value = e.message || 'Erreur lors du chargement des statistiques.';
    console.error(e);
  } finally {
    isLoading.value = false;
  }
};

// Chart Data Generators
const winLossData = computed(() => {
  if (!stats.value) return { labels: [], datasets: [] };
  return {
    labels: ['Victoires', 'Défaites'],
    datasets: [
      {
        backgroundColor: ['#22C55E', '#EF4444'],
        data: [stats.value.wins, stats.value.losses]
      }
    ]
  };
});

const analysisData = computed(() => {
  if (!analysisStats.value) return { labels: [], datasets: [] };
  return {
    labels: ['En gagnant', 'En perdant'],
    datasets: [
      {
        label: 'Moyenne Pts Encaissés',
        backgroundColor: ['#22C55E', '#EF4444'],
        data: [analysisStats.value.in_wins, analysisStats.value.in_losses]
      }
    ]
  };
});

const periodBarData = computed(() => {
  if (!periodStats.value) return { labels: [], datasets: [] };
  const periods = periodStats.value.per_period;
  return {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Équipe',
        backgroundColor: '#3B82F6',
        data: [periods[1].team, periods[2].team, periods[3].team, periods[4].team]
      },
      {
        label: 'Adversaire',
        backgroundColor: '#F97316',
        data: [periods[1].opponent, periods[2].opponent, periods[3].opponent, periods[4].opponent]
      }
    ]
  };
});

const evolutionLineData = computed(() => {
  if (!periodStats.value) return { labels: [], datasets: [] };
  const evolution = periodStats.value.evolution;
  return {
    labels: ['Début', 'Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Équipe',
        borderColor: '#3B82F6',
        backgroundColor: '#3B82F6',
        data: [0, evolution[0].team_score, evolution[1].team_score, evolution[2].team_score, evolution[3].team_score],
        fill: false,
        tension: 0.1
      },
      {
        label: 'Adversaire',
        borderColor: '#F97316',
        backgroundColor: '#F97316',
        data: [0, evolution[0].opponent_score, evolution[1].opponent_score, evolution[2].opponent_score, evolution[3].opponent_score],
        fill: false,
        tension: 0.1
      }
    ]
  };
});

const getDoughnutData = (percentage, color) => {
  return {
    labels: ['Réussis', 'Manqués'],
    datasets: [
      {
        backgroundColor: [color, '#E5E7EB'],
        data: [percentage, 100 - percentage],
        borderWidth: 0
      }
    ]
  };
};

// Options
const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: { beginAtZero: true }
  },
  plugins: {
    legend: { display: true, position: 'bottom' }
  }
};

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: { beginAtZero: true }
  },
  plugins: {
    legend: { display: true, position: 'bottom' }
  }
};

const percentageChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '75%',
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false }
  }
};

onMounted(() => {
  fetchTeamStats(props.teamId);
});

watch(() => props.teamId, (newId) => {
  fetchTeamStats(newId);
});
</script>