<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label for="season_id" class="block text-sm font-medium text-gray-700">Saison</label>
      <select id="season_id" v-model="formData.season_id" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required>
        <option value="">Sélectionner une saison</option>
        <option v-for="season in seasons" :key="season.id" :value="season.id">{{ season.name }}</option>
      </select>
    </div>
    <div>
      <label for="team_id" class="block text-sm font-medium text-gray-700">Équipe (CCSLR)</label>
      <select id="team_id" v-model="formData.team_id" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required>
        <option value="">Sélectionner une équipe</option>
        <option v-for="team in teams" :key="team.id" :value="team.id">{{ team.name }}</option>
      </select>
    </div>
    <div>
      <label for="opponent" class="block text-sm font-medium text-gray-700">Adversaire</label>
      <input type="text" id="opponent" v-model="formData.opponent" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required />
    </div>
    <div class="flex items-center">
      <input type="checkbox" id="is_at_home" v-model="formData.is_at_home" class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
      <label for="is_at_home" class="ml-2 block text-sm text-gray-900">Match à domicile</label>
    </div>
    <div>
      <label for="happens_at_date" class="block text-sm font-medium text-gray-700">Date du match</label>
      <input type="date" id="happens_at_date" v-model="happensAtDate" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required />
    </div>
    <div>
      <label for="happens_at_time" class="block text-sm font-medium text-gray-700">Heure du match</label>
      <input type="time" id="happens_at_time" v-model="happensAtTime" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required />
    </div>
    <div v-if="initialData">
      <label for="is_victory" class="block text-sm font-medium text-gray-700">Résultat</label>
      <select id="is_victory" v-model="formData.is_victory" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
        <option :value="null">Non renseigné</option>
        <option :value="true">Victoire</option>
        <option :value="false">Défaite</option>
      </select>
    </div>

    <div class="flex justify-end space-x-3 mt-6">
      <button type="button" @click="$emit('cancel')" class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Annuler</button>
      <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">{{ initialData ? 'Modifier' : 'Créer' }}</button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import { useApi } from '../../../composables/useApi.js';

const props = defineProps({
  initialData: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['submit', 'cancel']);
const { fetchApi } = useApi();

const seasons = ref([]);
const teams = ref([]);

const defaultFormData = {
  season_id: '',
  team_id: '',
  opponent: '',
  is_at_home: false,
  happens_at: '',
  is_victory: null,
};

const formData = ref({ ...defaultFormData });

// Separate refs for date and time inputs
const happensAtDate = ref('');
const happensAtTime = ref('');

// Watch for changes in happensAtDate and happensAtTime to update formData.happens_at
watch([happensAtDate, happensAtTime], ([newDate, newTime]) => {
  if (newDate && newTime) {
    formData.value.happens_at = `${newDate} ${newTime}:00`;
  } else {
    formData.value.happens_at = '';
  }
});

watch([() => props.initialData, seasons, teams], ([newVal, newSeasons, newTeams]) => {
  console.log('MatchForm - initialData or dependencies changed:', newVal, newSeasons, newTeams);
  if (newVal) {
    formData.value = { ...defaultFormData, ...newVal };
    // Split happens_at into date and time for input fields
    if (newVal.happens_at) {
      const dateObj = new Date(newVal.happens_at);
      happensAtDate.value = dateObj.toISOString().split('T')[0];
      happensAtTime.value = dateObj.toTimeString().split(' ')[0].substring(0, 5);
    }
  } else {
    formData.value = { ...defaultFormData };
    happensAtDate.value = '';
    happensAtTime.value = '';
    // Re-apply active season if initialData becomes null (e.g., after closing edit modal and opening create)
    const activeSeason = seasons.value.find(s => s.is_active);
    if (activeSeason) {
      formData.value.season_id = activeSeason.id;
    }
  }
}, { immediate: true });

const fetchDependencies = async () => {
  try {
    const [seasonsRes, teamsRes] = await Promise.all([
      fetchApi('seasons'),
      fetchApi('teams'),
    ]);
    seasons.value = seasonsRes.data;
    teams.value = teamsRes.data;

    // Set default season_id to the active season if creating a new match
    if (!props.initialData) {
      const activeSeason = seasons.value.find(s => s.is_active);
      if (activeSeason) {
        formData.value.season_id = activeSeason.id;
      }
    }
  } catch (e) {
    console.error("Error fetching form dependencies:", e);
  }
};

onMounted(fetchDependencies);

const handleSubmit = () => {
  emit('submit', formData.value);
};
</script>
