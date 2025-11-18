<template>
  <div v-if="isLoading" class="text-center py-8">
    <p class="text-gray-500">Chargement du profil de l'équipe...</p>
  </div>
  <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
    <p class="font-bold">Erreur:</p>
    <p>{{ error }}</p>
  </div>
  <div v-else-if="team" class="space-y-8">
    <div>
      <h1 class="text-3xl font-bold text-gray-900">{{ team.name }}</h1>
      <p class="text-gray-600">Saison: {{ team.season.name }} | Catégorie: {{ team.category.name }}</p>
    </div>
    
    <hr />

    <TeamStatsDashboard :team-id="teamId" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApi } from '../../composables/useApi.js';
import TeamStatsDashboard from '../stats/TeamStatsDashboard.vue';

const props = defineProps({
  teamId: {
    type: [String, Number],
    required: true,
  },
});

const { fetchApi } = useApi();
const team = ref(null);
const isLoading = ref(true);
const error = ref(null);

const fetchTeam = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetchApi(`/teams/${props.teamId}`);
    team.value = response.data;
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchTeam);
</script>
