<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Mon Tableau de Bord</h2>

    <div v-if="isLoading" class="text-center py-8">
      <p class="text-gray-500">Chargement des données du tableau de bord...</p>
    </div>
    <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
      <p class="font-bold">Erreur:</p>
      <p>{{ error }}</p>
    </div>
    <div v-else>
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div v-for="stat in stats" :key="stat.label" class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center space-x-4">
          <div :class="[stat.color, 'w-12 h-12 rounded-lg flex items-center justify-center']">
            <component :is="stat.icon" class="text-white" />
          </div>
          <div>
            <p class="text-sm text-gray-600">{{ stat.label }}</p>
            <p class="text-2xl font-bold text-gray-900">{{ stat.value }}</p>
          </div>
        </div>
      </div>

      <!-- Upcoming Matches -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Mes prochains matchs</h3>
          <ul class="space-y-4">
            <li v-for="match in upcomingMatches" :key="match.id" class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              </div>
              <div>
                <p class="font-medium text-gray-800">{{ match.homeTeam }} vs {{ match.awayTeam }}</p>
                <p class="text-sm text-gray-500">{{ match.date }} - {{ match.time }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Recent Events -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Actualités du club</h3>
          <ul class="space-y-4">
            <li v-for="event in recentEvents" :key="event.id" class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              </div>
              <div>
                <p class="font-medium text-gray-800">{{ event.title }}</p>
                <p class="text-sm text-gray-500">{{ event.date }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h, ref, onMounted } from 'vue';
import { useApi } from '../../composables/useApi.js';

const { fetchApi } = useApi();

const stats = ref([]);
const upcomingMatches = ref([]);
const recentEvents = ref([]);
const isLoading = ref(false);
const error = ref(null);

const Users = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }), h('circle', { cx: '9', cy: '7', r: '4' }), h('path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }), h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })]);
const Trophy = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6' }), h('path', { d: 'M18 9h1.5a2.5 2.5 0 0 0 0-5H18' }), h('path', { d: 'M4 22h16' }), h('path', { d: 'M10 11V7a3 3 0 0 1 6 0v4' }), h('path', { d: 'M12 17v5' }), h('path', { d: 'M12 17H6.5a2.5 2.5 0 0 1 0-5H12c0 .5 0 1 0 2s0 .5 0 1' }), h('path', { d: 'M12 17h5.5a2.5 2.5 0 0 0 0-5H12c0 .5 0 1 0 2s0 .5 0 1' })]);
const Medal = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M7.21 15.18 8 22l4-2 4 2-1.79-6.82M18 10a6 6 0 0 0-12 0v.34L12 14l6-3.66Z' }), h('path', { d: 'M12 8V2l4 2 4-2v6' }), h('path', { d: 'M12 8V2L8 4 4 2v6' })]);
const Clock = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('circle', { cx: '12', cy: '12', r: '10' }), h('polyline', { points: '12 6 12 12 16 14' })]);

const fetchDashboardData = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetchApi('me/dashboard');
    stats.value = [
      { label: 'Matchs Joués', value: response.matchesPlayed, icon: Trophy, color: 'bg-primary' },
      { label: 'Victoires', value: response.wins, icon: Medal, color: 'bg-primary' },
      { label: 'Prochain Match', value: response.nextMatchDate !== 'N/A' ? new Date(response.nextMatchDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'N/A', icon: Clock, color: 'bg-yellow-500' },
      { label: 'Points Moyens', value: response.avgPoints, icon: Users, color: 'bg-purple-500' },
    ];
    upcomingMatches.value = response.upcomingMatches.map(match => ({
      id: match.id,
      homeTeam: match.home_team.name,
      awayTeam: match.away_team.name,
      date: new Date(match.happens_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' }),
      time: new Date(match.happens_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
    }));
    recentEvents.value = response.recentEvents.map(event => ({
      id: event.id,
      title: event.title,
      date: new Date(event.start_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' }),
    }));
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchDashboardData);
</script>
