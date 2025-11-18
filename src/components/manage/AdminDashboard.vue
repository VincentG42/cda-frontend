<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <HeaderBar :admin-name="adminName" @logout="handleLogout" />
    
    <div class="flex flex-1 overflow-hidden">
      <SidebarNavigation :active-section="activeSection" @section-change="handleSectionChange" />
      
      <main class="flex-1 overflow-auto">
        <div class="p-6">
          <transition name="fade" mode="out-in">
            <div :key="activeSection" class="h-full">
              <DashboardOverview v-if="activeSection === 'dashboard'" />
              <SectionManager v-else :section="activeSection" />
            </div>
          </transition>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/authStore';
import HeaderBar from './HeaderBar.vue';
import SidebarNavigation from './SidebarNavigation.vue';
import DashboardOverview from './DashboardOverview.vue';
import SectionManager from './SectionManager.vue';

const authStore = useAuthStore();

const activeSection = ref('dashboard');
const adminName = ref(authStore.user ? authStore.user.name : 'Admin'); // Use authenticated user's name

const handleLogout = () => {
  authStore.logout();
  window.location.href = '/connexion';
};

const handleSectionChange = (section) => {
  activeSection.value = section;
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
