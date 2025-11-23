<template>
  <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
    <div>
      <p class="text-sm text-gray-500 font-medium">{{ label }}</p>
      <p class="text-2xl font-bold text-gray-900 mt-1">{{ value }}</p>
      <p v-if="subtext" class="text-xs text-gray-400 mt-1">{{ subtext }}</p>
    </div>
    <div v-if="icon" :class="`p-3 rounded-full ${iconBgColor}`">
      <component :is="icon" :class="`w-6 h-6 ${iconColor}`" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  subtext: {
    type: String,
    default: ''
  },
  icon: {
    type: Object,
    default: null
  },
  iconBgColor: {
    type: String,
    default: 'bg-blue-50'
  },
  iconColor: {
    type: String,
    default: 'text-blue-600'
  }
});
</script>
