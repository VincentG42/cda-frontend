<template>
  <div v-if="isLoading" class="text-center py-8">
    <p class="text-gray-500">Chargement du profil...</p>
  </div>
  <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
    <p class="font-bold">Erreur:</p>
    <p>{{ error }}</p>
  </div>
  <div v-else-if="user" class="space-y-8">
    <div>
      <h1 class="text-3xl font-bold text-gray-900">{{ user.firstname }} {{ user.lastname }}</h1>
      <p class="text-gray-600">Licence: {{ user.licence_number }}</p>
    </div>
    
    <hr />

    <PlayerStatsDashboard :user-id="userId" />

    <hr />

    <!-- Match History Table -->
    <div>
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Historique des Matchs</h3>
      <div v-if="user.individual_stats && user.individual_stats.length" class="bg-white shadow-md rounded-lg overflow-hidden">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Adversaire</th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Score</th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Résultat</th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="stat in sortedIndividualStats" :key="stat.id">
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {{ new Date(stat.encounter.happens_at).toLocaleDateString('fr-FR') }}
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {{ stat.encounter.opponent }}
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {{ stat.encounter.team_score }} - {{ stat.encounter.opponent_score }}
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span v-if="stat.encounter.is_victory === true" class="text-green-600 font-semibold">Victoire</span>
                <span v-else-if="stat.encounter.is_victory === false" class="text-red-600 font-semibold">Défaite</span>
                <span v-else class="text-gray-500">N/A</span>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                <button @click="openPeriodStatsModal(stat.encounter.id)" class="text-blue-600 hover:text-blue-900 font-bold">Détails</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="text-center py-4 text-gray-500">
        Aucun historique de match disponible pour ce joueur.
      </div>
    </div>
  </div>

  <!-- Match Period Stats Modal -->
  <MatchPeriodStatsModal
    :show="showPeriodStatsModal"
    :user-id="userId"
    :encounter-id="selectedEncounterId"
    @close="closePeriodStatsModal"
  />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useApi } from '../../composables/useApi.js';
import PlayerStatsDashboard from '../stats/PlayerStatsDashboard.vue';
import MatchPeriodStatsModal from './MatchPeriodStatsModal.vue';

const props = defineProps({
  userId: {
    type: [String, Number],
    required: true,
  },
});

const { fetchApi } = useApi();
const user = ref(null);
const isLoading = ref(true);
const error = ref(null);

const showPeriodStatsModal = ref(false);
const selectedEncounterId = ref(null);

const fetchUser = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetchApi(`/users/${props.userId}`);
    user.value = response.data;
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

const sortedIndividualStats = computed(() => {
  if (!user.value || !user.value.individual_stats) return [];
  return [...user.value.individual_stats].sort((a, b) => {
    return new Date(a.encounter.happens_at) - new Date(b.encounter.happens_at);
  });
});

const openPeriodStatsModal = (encounterId) => {
  selectedEncounterId.value = encounterId;
  showPeriodStatsModal.value = true;
};

const closePeriodStatsModal = () => {
  showPeriodStatsModal.value = false;
  selectedEncounterId.value = null;
};

onMounted(fetchUser);
</script>
