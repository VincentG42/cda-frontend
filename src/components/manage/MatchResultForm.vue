<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label for="team_score" class="block text-sm font-medium text-gray-700">Score de l'équipe</label>
      <input type="number" id="team_score" v-model.number="formData.team_score" class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
    </div>
    <div>
      <label for="opponent_score" class="block text-sm font-medium text-gray-700">Score de l'adversaire</label>
      <input type="number" id="opponent_score" v-model.number="formData.opponent_score" class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
    </div>
    <div>
      <label for="is_victory" class="block text-sm font-medium text-gray-700">Résultat</label>
      <select id="is_victory" v-model="formData.is_victory" class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" :disabled="hasScores">
        <option :value="null">Non renseigné</option>
        <option :value="true">Victoire</option>
        <option :value="false">Défaite</option>
      </select>
    </div>

    <div class="flex justify-end space-x-3 mt-6">
      <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Enregistrer le résultat</button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

const props = defineProps({
  initialData: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['submit', 'cancel']);

const defaultFormData = {
  team_score: null,
  opponent_score: null,
  is_victory: null,
};

const formData = ref({ ...defaultFormData });

const hasScores = computed(() => {
  return formData.value.team_score !== null && formData.value.opponent_score !== null;
});

watch(() => props.initialData, (newVal) => {
  if (newVal) {
    formData.value = {
      ...defaultFormData,
      team_score: newVal.team_score,
      opponent_score: newVal.opponent_score,
      is_victory: newVal.is_victory
    };
  } else {
    formData.value = { ...defaultFormData };
  }
}, { immediate: true });

watch([() => formData.value.team_score, () => formData.value.opponent_score], ([newTeamScore, newOpponentScore]) => {
  if (newTeamScore !== null && newOpponentScore !== null) {
    if (newTeamScore > newOpponentScore) {
      formData.value.is_victory = true;
    } else if (newTeamScore < newOpponentScore) {
      formData.value.is_victory = false;
    } else {
      formData.value.is_victory = null; // Draw or not determined
    }
  } else {
    formData.value.is_victory = null;
  }
});

const handleSubmit = () => {
  emit('submit', formData.value);
};
</script>
