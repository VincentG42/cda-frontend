<template>
  <div v-if="userId" class="space-y-8">
    <!-- Player Stats Section -->
    <div>
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Mes Statistiques Personnelles</h2>
      <div class="bg-white rounded-xl border border-gray-200 p-6">
        <PlayerStatsDashboard :player-id="userId" />
      </div>
    </div>

    <!-- Team Stats Section -->
    <div v-if="teamId">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Statistiques de mon Équipe</h2>
      <div class="bg-white rounded-xl border border-gray-200 p-6">
        <TeamStatsDashboard :team-id="teamId" />
      </div>
    </div>
    <div v-else class="text-center p-4 bg-gray-50 rounded-lg">
      <p>Vous n'êtes actuellement associé à aucune équipe.</p>
    </div>

  </div>
  <div v-else class="text-center p-8">
    <p>Connexion requise pour voir les statistiques.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../../stores/authStore';
import PlayerStatsDashboard from '../stats/PlayerStatsDashboard.vue';
import TeamStatsDashboard from '../stats/TeamStatsDashboard.vue';

const authStore = useAuthStore();
const userId = ref(null);
const teamId = ref(null);

onMounted(() => {
  if (authStore.user) {
    userId.value = authStore.user.id;
    // Assuming the user object has a 'teams' array and we take the first one.
    if (authStore.user.teams && authStore.user.teams.length > 0) {
      teamId.value = authStore.user.teams[0].id;
    }
  } else {
    console.warn("User data not found in authStore for stats page.");
  }
});
</script>