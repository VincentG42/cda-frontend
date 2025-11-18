<template>
  <Modal :show="show" :title="modalTitle" @close="$emit('close')">
    <template #body>
      <div class="flex border-b border-gray-200 mb-4">
        <button
          @click="activeTab = 'manual'"
          :class="['px-4 py-2 text-sm font-medium', activeTab === 'manual' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700']"
        >
          Saisie Manuelle
        </button>
        <button
          @click="activeTab = 'json-import'"
          :class="['px-4 py-2 text-sm font-medium', activeTab === 'json-import' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700']"
        >
          Import JSON
        </button>
      </div>

      <div v-if="activeTab === 'manual'">
        <MatchResultForm :initialData="match" @submit="handleManualSubmit" @cancel="$emit('close')" />
      </div>
      <div v-else-if="activeTab === 'json-import'">
        <MatchRecapImporter :match="match" @import-success="handleImportSuccess" />
      </div>
    </template>
  </Modal>
</template>

<script setup>
import { ref, computed } from 'vue';
import Modal from '../common/Modal.vue';
import MatchResultForm from './MatchResultForm.vue';
import MatchRecapImporter from './MatchRecapImporter.vue'; // Will create this next
import { useApi } from '../../composables/useApi.js';

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  match: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close']);
const { fetchApi } = useApi();

const activeTab = ref('manual'); // 'manual' or 'json-import'

const modalTitle = computed(() => {
  if (!props.match) return 'Résultats du Match';
  return `Résultats du Match: ${props.match.home_team.name} vs ${props.match.away_team.name}`;
});

const handleManualSubmit = async (formData) => {
  try {
    await fetchApi(`encounters/${props.match.id}`, {
      method: 'PUT',
      body: JSON.stringify(formData)
    });
    emit('close'); // Close modal and trigger refresh in parent
  } catch (e) {
    console.error("Error updating match result manually:", e);
    // TODO: Display error to user
  }
};

const handleImportSuccess = () => {
  emit('close'); // Close modal and trigger refresh in parent
};
</script>