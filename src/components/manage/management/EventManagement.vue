<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Événements Publics</h1>
        <p class="text-gray-600">Gérer les événements pour la communication</p>
      </div>
      <button class="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
        <span>Nouvel Événement</span>
      </button>
    </div>

    <div v-if="eventsStore.isLoading" class="text-center py-8">
      <p class="text-gray-500">Chargement des événements...</p>
    </div>
    <div v-else-if="eventsStore.error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
      <p class="font-bold">Erreur:</p>
      <p>{{ eventsStore.error }}</p>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="event in eventsStore.events" :key="event.id" class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
        <div class="flex items-center justify-between mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <div class="flex space-x-2">
            <button class="p-1 text-blue-600 hover:bg-blue-50 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
            </button>
            <button class="p-1 text-red-600 hover:bg-red-50 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
            </button>
          </div>
        </div>
        
        <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ event.title }}</h3>
        <div class="space-y-2 text-sm text-gray-600">
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            <span>{{ new Date(event.date).toLocaleDateString('fr-FR') }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span>{{ event.time }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>{{ event.location }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApi } from '../../../composables/useApi';
import { useEventsStore } from '../../../stores/eventsStore';

const { fetchApi } = useApi();
const eventsStore = useEventsStore();

const fetchEvents = async () => {
  eventsStore.setLoading(true);
  eventsStore.setError(null);
  try {
    const response = await fetchApi('events');
    eventsStore.setEvents(response.data);
  } catch (e) {
    eventsStore.setError(e.message);
  } finally {
    eventsStore.setLoading(false);
  }
};

onMounted(fetchEvents);
</script>
