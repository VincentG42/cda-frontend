<template>
  <header class="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
          <div class="w-10 h-10 bg-primary rounded-md flex items-center justify-center filter brightness-90">
            <span class="text-white font-bold text-lg">CC</span>
          </div>
        </div>
        <div>
          <h1 class="text-xl font-bold text-gray-900">
            CCSLR Saint Joseph
          </h1>
          <p class="text-sm text-gray-600">Espace Licencié</p>
        </div>
      </div>
      
      <div class="flex items-center space-x-4">
        <div class="text-right">
          <p class="text-sm font-medium text-gray-900">{{ userName }}</p>
          <p class="text-xs text-gray-500">Licencié</p>
        </div>
        
        <button @click="$emit('logout')" class="flex items-center space-x-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
          <span class="text-sm font-medium">Déconnexion</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
  defineProps({
    userName: String
  });
  defineEmits(['logout']);
</script>
