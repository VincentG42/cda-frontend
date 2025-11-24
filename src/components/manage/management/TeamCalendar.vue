<template>
  <div>
    <div v-if="isLoading" class="text-center py-8">
      <p class="text-gray-500">Chargement des matchs...</p>
    </div>
    <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
      <p class="font-bold">Erreur:</p>
      <p>{{ error }}</p>
    </div>
    <div v-else-if="matches.length">
      <ul class="space-y-4">
        <li v-for="match in matches" :key="match.id" class="relative flex items-center justify-between p-4 rounded-lg border transition-colors duration-200" :class="{
          'bg-green-50 border-green-200 hover:bg-green-100': match.is_victory === true,
          'bg-red-50 border-red-200 hover:bg-red-100': match.is_victory === false,
          'border-gray-100 hover:bg-gray-50': match.is_victory == null
        }">
          <div class="flex items-center space-x-4">
            <div class="text-center w-16">
              <div class="text-sm font-medium text-gray-900">{{ new Date(match.happens_at).toLocaleDateString('fr-FR', { weekday: 'short' }).toUpperCase() }}</div>
              <div class="text-xs text-gray-500">{{ new Date(match.happens_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }).toUpperCase() }}</div>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-600">{{ new Date(match.happens_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) }}</span>
            </div>
            <div class="flex items-center space-x-4">
              <span class="font-medium" :class="{'font-bold': match.is_at_home}">{{ match.is_at_home ? match.team.name : match.opponent }}</span>
              <span class="text-gray-400">vs</span>
              <span class="font-medium" :class="{'font-bold': !match.is_at_home}">{{ match.is_at_home ? match.opponent : match.team.name }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-600">{{ match.location || 'N/A' }}</span>
            </div>
          </div>
          <div v-if="match.team_score != null && match.opponent_score != null" class="text-right">
            <div class="font-bold text-lg" :class="{
              'text-green-700': match.is_victory,
              'text-red-700': match.is_victory === false,
              'text-gray-800': match.is_victory == null
            }">
              {{ match.team_score }} - {{ match.opponent_score }}
            </div>
            <div v-if="match.is_victory" class="text-xs font-semibold text-green-600">VICTOIRE</div>
            <div v-else-if="match.is_victory === false" class="text-xs font-semibold text-red-600">DÉFAITE</div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="text-center py-8">
      <p class="text-gray-500">Aucun match passé trouvé pour cette équipe.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useApi } from '../../../composables/useApi';

const props = defineProps({
  teamId: {
    type: Number,
    required: true
  }
});

const { fetchApi } = useApi();
const matches = ref([]);
const isLoading = ref(false);
const error = ref(null);

const fetchTeamMatches = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    // Fetch past matches for the specific team
    const response = await fetchApi(`encounters?team_id=${props.teamId}&filter=past`);
    matches.value = response.data;
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchTeamMatches);

watch(() => props.teamId, () => {
  fetchTeamMatches();
});
</script>
