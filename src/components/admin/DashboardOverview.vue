<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Vue d'overview</h2>

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

      <!-- Charts -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Répartition des licenciés</h3>
          <div class="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p class="text-gray-500">[Chart Placeholder]</p>
          </div>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Événements à venir</h3>
          <ul class="space-y-4">
            <li v-for="event in upcomingEvents" :key="event.name" class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              </div>
              <div>
                <p class="font-medium text-gray-800">{{ event.name }}</p>
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
const upcomingEvents = ref([]);
const isLoading = ref(false);
const error = ref(null);

const Users = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }), h('circle', { cx: '9', cy: '7', r: '4' }), h('path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }), h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })]);
const Shield = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })]);
const Calendar = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('rect', { width: '18', height: '18', x: '3', y: '4', rx: '2', ry: '2' }), h('line', { x1: '16', x2: '16', y1: '2', y2: '6' }), h('line', { x1: '8', x2: '8', y1: '2', y2: '6' }), h('line', { x1: '3', x2: '21', y1: '10', y2: '10' })]);
const Megaphone = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'm3 11 18-5v12L3 14v-3z' }), h('path', { d: 'M11.6 16.8a3 3 0 1 1-5.8-1.6' })]);

const fetchDashboardData = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetchApi('me/dashboard');
    stats.value = [
      { label: 'Total Licenciés', value: response.totalUsers, icon: Users, color: 'bg-blue-500' },
      { label: 'Équipes Actives', value: response.activeTeams, icon: Shield, color: 'bg-green-500' },
      { label: 'Matchs ce mois-ci', value: response.matchesThisMonth, icon: Calendar, color: 'bg-yellow-500' },
      { label: 'Événements prévus', value: response.upcomingEventsCount, icon: Megaphone, color: 'bg-purple-500' },
    ];
    upcomingEvents.value = (response.upcomingEvents || []).map(event => ({
      name: event.title,
      date: new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
    }));
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchDashboardData);
</script>
