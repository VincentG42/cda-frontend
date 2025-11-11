<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label for="is_victory" class="block text-sm font-medium text-gray-700">Résultat</label>
      <select id="is_victory" v-model="formData.is_victory" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
        <option :value="null">Non renseigné</option>
        <option :value="true">Victoire</option>
        <option :value="false">Défaite</option>
      </select>
    </div>
    <!-- Add fields for scores if needed -->

    <div class="flex justify-end space-x-3 mt-6">
      <button type="button" @click="$emit('cancel')" class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Annuler</button>
      <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Enregistrer le résultat</button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  initialData: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['submit', 'cancel']);

const defaultFormData = {
  is_victory: null,
  // Add score fields here if needed
};

const formData = ref({ ...defaultFormData });

watch(() => props.initialData, (newVal) => {
  if (newVal) {
    formData.value = { ...defaultFormData, is_victory: newVal.is_victory };
  } else {
    formData.value = { ...defaultFormData };
  }
}, { immediate: true });

const handleSubmit = () => {
  emit('submit', formData.value);
};
</script>
