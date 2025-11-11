<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">Nom de la saison</label>
      <input type="text" id="name" v-model="formData.name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required />
    </div>
    <div>
      <label for="start_date" class="block text-sm font-medium text-gray-700">Date de début</label>
      <input type="date" id="start_date" v-model="formData.start_date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required />
    </div>
    <div>
      <label for="end_date" class="block text-sm font-medium text-gray-700">Date de fin</label>
      <input type="date" id="end_date" v-model="formData.end_date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required />
    </div>
    <div class="flex items-center">
      <input type="checkbox" id="is_active" v-model="formData.is_active" class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
      <label for="is_active" class="ml-2 block text-sm text-gray-900">Saison active</label>
    </div>

    <div class="flex justify-end space-x-3 mt-6">
      <button type="button" @click="$emit('cancel')" class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Annuler</button>
      <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">{{ initialData ? 'Modifier' : 'Créer' }}</button>
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
  name: '',
  start_date: '',
  end_date: '',
  is_active: false,
};

const formData = ref({ ...defaultFormData });

watch(() => props.initialData, (newVal) => {
  if (newVal) {
    // Format dates for input type="date"
    const startDate = newVal.start_date ? new Date(newVal.start_date).toISOString().split('T')[0] : '';
    const endDate = newVal.end_date ? new Date(newVal.end_date).toISOString().split('T')[0] : '';
    formData.value = { ...defaultFormData, ...newVal, start_date: startDate, end_date: endDate };
  } else {
    formData.value = { ...defaultFormData };
  }
}, { immediate: true });

const handleSubmit = () => {
  emit('submit', formData.value);
};
</script>
