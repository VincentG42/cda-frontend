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

    <!-- Centralized Stats Modal -->
    <Modal :show="statsModalStore.isOpen" :title="modalTitle" @close="statsModalStore.closeModal">
      <template #body>
        <component 
          v-if="statsModalStore.modalContent"
          :is="statsComponents[statsModalStore.modalContent]" 
          :key="JSON.stringify(statsModalStore.modalProps)"
          v-bind="statsModalStore.modalProps"
        />
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '../../stores/authStore';
import { useStatsModalStore } from '../../stores/statsModalStore';

import HeaderBar from './HeaderBar.vue';
import SidebarNavigation from './SidebarNavigation.vue';
import DashboardOverview from './DashboardOverview.vue';
import SectionManager from './SectionManager.vue';
import Modal from '../common/Modal.vue';
import PlayerStatsDashboard from '../stats/PlayerStatsDashboard.vue';
import TeamStatsDashboard from '../stats/TeamStatsDashboard.vue';

const authStore = useAuthStore();
const statsModalStore = useStatsModalStore();

const activeSection = ref('dashboard');
const adminName = ref(authStore.user ? authStore.user.name : 'Admin');

// Map content type strings to actual components
const statsComponents = {
  playerStats: PlayerStatsDashboard,
  teamStats: TeamStatsDashboard,
};

const modalTitle = computed(() => {
  if (statsModalStore.modalContent === 'playerStats') {
    return 'Statistiques du Joueur';
  }
  if (statsModalStore.modalContent === 'teamStats') {
    return "Statistiques de l'Équipe";
  }
  return 'Statistiques';
});

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
