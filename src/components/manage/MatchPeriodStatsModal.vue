<template>
  <Modal :show="show" title="Statistiques par Quart-Temps" @close="$emit('close')">
    <template #body>
      <div v-if="isLoading" class="text-center py-4">
        <p class="text-gray-500">Chargement des statistiques par quart-temps...</p>
      </div>
      <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-lg">
        <p class="font-bold">Erreur:</p>
        <p>{{ error }}</p>
      </div>
      <div v-else-if="periodStats.length">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th class="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quart-Temps</th>
              <th class="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Points</th>
              <th class="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Rebonds</th>
              <th class="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Passes</th>
              <th class="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Interceptions</th>
              <th class="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Pertes de balle</th>
              <th class="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Fautes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="stats in periodStats" :key="stats.period">
              <td class="px-3 py-3 border-b border-gray-200 bg-white text-sm">{{ stats.period }}</td>
              <td class="px-3 py-3 border-b border-gray-200 bg-white text-sm">{{ stats.points }}</td>
              <td class="px-3 py-3 border-b border-gray-200 bg-white text-sm">{{ stats.rebounds }}</td>
              <td class="px-3 py-3 border-b border-gray-200 bg-white text-sm">{{ stats.assists }}</td>
              <td class="px-3 py-3 border-b border-gray-200 bg-white text-sm">{{ stats.steals }}</td>
              <td class="px-3 py-3 border-b border-gray-200 bg-white text-sm">{{ stats.turnovers }}</td>
              <td class="px-3 py-3 border-b border-gray-200 bg-white text-sm">{{ stats.fouls }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="text-center py-4">
        <p class="text-gray-500">Aucune statistique par quart-temps disponible pour ce match.</p>
      </div>
    </template>
  </Modal>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useApi } from '../../composables/useApi';
import Modal from '../common/Modal.vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: [String, Number],
    required: true,
  },
  encounterId: {
    type: [String, Number],
    required: true,
  },
});

const emit = defineEmits(['close']);

const { fetchApi } = useApi();
const periodStats = ref([]);
const isLoading = ref(false);
const error = ref(null);

const fetchPeriodStats = async () => {
  if (!props.show || !props.userId || !props.encounterId) {
    periodStats.value = [];
    return;
  }

  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetchApi(`/players/${props.userId}/match/${props.encounterId}/stats`);
    periodStats.value = response;
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

// Watch for changes in show prop to fetch data when modal opens
watch(() => props.show, (newVal) => {
  if (newVal) {
    fetchPeriodStats();
  }
});
</script>
