<template>
  <div class="p-4">
    <div v-if="isLoading" class="text-center">
      <p>Chargement des statistiques...</p>
    </div>
    <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
      <p class="font-bold">Erreur :</p>
      <p>{{ error }}</p>
    </div>
    <div v-else-if="stats" class="space-y-4">
      <h3 class="text-xl font-bold text-gray-900">Statistiques pour le joueur #{{ playerId }}</h3>
      <pre class="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">{{ stats }}</pre>
    </div>
    <div v-else class="text-center">
      <p>Aucune statistique trouvée pour ce joueur.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useApi } from '../../composables/useApi';

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

const fetchPlayerStats = async (id) => {
  if (!id) return;
  isLoading.value = true;
  error.value = null;
  stats.value = null;
  try {
    // Selon PLAN_STATISTIQUES.md, l'endpoint est /api/players/{user}/stats/averages
    const response = await fetchApi(`players/${id}/stats/averages`);
    stats.value = response;
  } catch (e) {
    error.value = e.message || 'Une erreur est survenue lors de la récupération des statistiques.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchPlayerStats(props.playerId);
});

// Si l'ID du joueur change alors que le composant est déjà monté (dans la modale)
watch(() => props.playerId, (newId) => {
  fetchPlayerStats(newId);
});
</script>