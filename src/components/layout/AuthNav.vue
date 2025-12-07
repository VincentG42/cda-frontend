<template>
  <div class="flex items-center space-x-8 ml-8">
    <template v-if="authStore.user">
      <a v-if="canAccessAdminDashboard" href="/manage" class="nav-link font-medium transition-colors hover:text-[#FF7F11]">
        Admin Dashboard
      </a>
      <a v-if="canAccessPlayerDashboard" href="/dashboard" class_name="nav-link font-medium transition-colors hover:text-[#FF7F11]">
        Mon Dashboard
      </a>
      <button @click="handleLogout" class="bg-[#FF7F11] text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors">
        Déconnexion
      </button>
    </template>
    <template v-else>
      <a href="/connexion" class="bg-[#FF7F11] text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors">
        Connexion
      </a>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '../../stores/authStore';

const authStore = useAuthStore();

const canAccessAdminDashboard = computed(() => {
  if (!authStore.user || !authStore.user.user_type_id) return false;
  // 1: Player, 2: Coach, 3: Staff, 4: President, 5: Admin
  return [2, 3, 4, 5].includes(Number(authStore.user.user_type_id));
});

const canAccessPlayerDashboard = computed(() => {
  // Any logged-in user can access their personal dashboard
  return !!authStore.user;
});

const handleLogout = () => {
  authStore.logout();
  // Redirect to homepage after logout
  window.location.href = '/';
};
</script>
