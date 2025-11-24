<template>
  <header class="bg-white shadow-sm border-b border-gray-200 px-4 py-3 md:px-6 md:py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-3 md:space-x-4">
        <!-- Mobile Menu Button -->
        <button @click="$emit('toggle-sidebar')" class="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
          <span class="sr-only">Ouvrir le menu</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <a href="/" class="flex items-center space-x-3 md:space-x-4 hover:opacity-80 transition-opacity">
          <div class="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
            <div class="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-md flex items-center justify-center filter brightness-90">
              <span class="text-white font-bold text-base md:text-lg">CC</span>
            </div>
          </div>
          <div>
            <h1 class="text-lg md:text-xl font-bold text-gray-900 truncate max-w-[150px] md:max-w-none">
              CCSLR Saint Joseph
            </h1>
            <p class="text-xs md:text-sm text-gray-600">Espace Licencié</p>
          </div>
        </a>
      </div>
      
      <div class="flex items-center space-x-2 md:space-x-4">
        <div class="hidden md:flex items-center space-x-4">
          <a href="/" class="text-gray-600 hover:text-primary font-medium text-sm transition-colors">
            Accueil
          </a>
          <a v-if="canAccessAdminDashboard" href="/admin/dashboard" class="text-gray-600 hover:text-primary font-medium text-sm transition-colors">
            Admin Dashboard
          </a>

          <div class="h-6 w-px bg-gray-300 mx-2"></div>

          <div class="text-right">
            <p class="text-sm font-medium text-gray-900">{{ userName }}</p>
            <p class="text-xs text-gray-500">Licencié</p>
          </div>
        </div>
        
        <button @click="$emit('logout')" class="flex items-center space-x-2 px-3 py-2 md:px-4 md:py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
          <span class="text-sm font-medium hidden md:inline">Déconnexion</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '../../stores/authStore';

const authStore = useAuthStore();

defineProps({
  userName: String
});

defineEmits(['logout', 'toggle-sidebar']);

const canAccessAdminDashboard = computed(() => {
  if (!authStore.user || !authStore.user.user_type_id) return false;
  // 1: Player, 2: Coach, 3: Staff, 4: President, 5: Admin
  return [2, 3, 4, 5].includes(Number(authStore.user.user_type_id));
});
</script>
