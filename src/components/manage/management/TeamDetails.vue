<template>
  <div>
    <!-- Tabs Navigation -->
    <div class="flex border-b border-gray-200 mb-6">
      <button
        @click="activeTab = 'stats'"
        class="px-6 py-3 text-sm font-medium transition-colors duration-200 border-b-2"
        :class="activeTab === 'stats' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
      >
        Statistiques
      </button>
      <button
        @click="activeTab = 'calendar'"
        class="px-6 py-3 text-sm font-medium transition-colors duration-200 border-b-2"
        :class="activeTab === 'calendar' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
      >
        Calendrier & Résultats
      </button>
      <button
        @click="activeTab = 'roster'"
        class="px-6 py-3 text-sm font-medium transition-colors duration-200 border-b-2"
        :class="activeTab === 'roster' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
      >
        Joueurs
      </button>
    </div>

    <!-- Tab Content -->
    <div class="min-h-[400px]">
      <Transition name="fade" mode="out-in">
        <div v-if="activeTab === 'stats'" key="stats">
          <TeamStatsDashboard :team-id="teamId" />
        </div>
        <div v-else-if="activeTab === 'calendar'" key="calendar">
          <TeamCalendar :team-id="teamId" />
        </div>
        <div v-else-if="activeTab === 'roster'" key="roster">
          <TeamRosterStats :team-id="teamId" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TeamStatsDashboard from '../../stats/TeamStatsDashboard.vue';
import TeamCalendar from './TeamCalendar.vue';
import TeamRosterStats from '../../stats/TeamRosterStats.vue';

const props = defineProps({
  teamId: {
    type: Number,
    required: true
  }
});

const activeTab = ref('stats');
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
