<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
    <div class="text-sm font-medium text-gray-500">{{ label }}</div>
    <div class="mt-1 text-3xl font-bold text-gray-900">{{ value }}</div>
    <div v-if="unit" class="text-sm text-gray-500">{{ unit }}</div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  unit: {
    type: String,
    default: '',
  },
});
</script>
