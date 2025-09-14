<template>
  <div class="p-4 md:p-8">
    <!-- Header and Navigation -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-4">
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Dashboard Admin</h1>
        <p class="text-gray-500 mt-1">Sélectionnez une section à gérer.</p>
      </div>
      <div class="flex items-center mt-4 md:mt-0">
                        <nav class="flex space-x-2 bg-gray-200 p-1 rounded-lg">
          <button @click="setView('users')" :class="['px-4 py-2 text-sm font-medium rounded-md transition-colors', currentView === 'users' ? 'bg-white text-gray-800 shadow' : 'text-gray-600 hover:bg-gray-100']">
            Licenciés
          </button>
          <button @click="setView('teams')" :class="['px-4 py-2 text-sm font-medium rounded-md transition-colors', currentView === 'teams' ? 'bg-white text-gray-800 shadow' : 'text-gray-600 hover:bg-gray-100']">
            Équipes
          </button>
        </nav>
        <button @click="logout" class="ml-4 text-sm text-gray-500 hover:text-gray-800" title="Déconnexion">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
        </button>
      </div>
    </div>

    <!-- Dynamic Component View -->
    <main class="mt-8">
      <UsersManager v-if="currentView === 'users'" />
      <TeamsManager v-if="currentView === 'teams'" />
    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import UsersManager from './UsersManager.vue';
import TeamsManager from './TeamsManager.vue';

const currentView = ref('users'); // Default view

const setView = (view) => {
  currentView.value = view;
};

const logout = () => {
  localStorage.removeItem('auth_token');
  window.location.href = '/login';
};
</script>
