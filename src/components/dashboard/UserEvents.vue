<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Événements du Club</h2>

    <div v-if="isLoading" class="text-center py-8">
      <p class="text-gray-500">Chargement des événements...</p>
    </div>
    <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
      <p class="font-bold">Erreur:</p>
      <p>{{ error }}</p>
    </div>
    <div v-else-if="events.length">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="event in events" :key="event.id" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ event.title }}</h3>
          <p class="text-sm text-gray-600 mb-4">{{ event.description }}</p>
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
    <div v-else class="text-center py-8">
      <p class="text-gray-500">Aucun événement à afficher.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApi } from '../../composables/useApi.js';

const { fetchApi } = useApi();

const events = ref([]);
const isLoading = ref(false);
const error = ref(null);

const fetchUserEvents = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetchApi('events'); // Assuming this endpoint returns all events
    events.value = response.data;
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchUserEvents);
</script>
