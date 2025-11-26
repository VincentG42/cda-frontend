<template>
  <Form @submit="onSubmit" :validation-schema="validationSchema" :initial-values="initialValues" class="space-y-4" v-slot="{ setFieldValue }">
    <div>
      <label for="season_id" class="block text-sm font-medium text-gray-700">Saison</label>
      <Field name="season_id" as="select" id="season_id" class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
        <option value="">Sélectionner une saison</option>
        <option v-for="season in seasons" :key="season.id" :value="season.id">{{ season.name }}</option>
      </Field>
      <ErrorMessage name="season_id" class="text-red-500 text-xs mt-1" />
    </div>
    <div>
      <label for="team_id" class="block text-sm font-medium text-gray-700">Équipe (CCSLR)</label>
      <Field name="team_id" as="select" id="team_id" class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
        <option value="">Sélectionner une équipe</option>
        <option v-for="team in teams" :key="team.id" :value="team.id">{{ team.name }}</option>
      </Field>
      <ErrorMessage name="team_id" class="text-red-500 text-xs mt-1" />
    </div>
    <div>
      <label for="opponent" class="block text-sm font-medium text-gray-700">Adversaire</label>
      <Field name="opponent" type="text" id="opponent" class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
      <ErrorMessage name="opponent" class="text-red-500 text-xs mt-1" />
    </div>
    <div class="flex items-center">
      <Field name="is_at_home" type="checkbox" :value="true" id="is_at_home" class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
      <label for="is_at_home" class="ml-2 block text-sm text-gray-900">Match à domicile</label>
    </div>
    
    <!-- Hidden field for happens_at validation -->
    <Field name="happens_at" type="hidden" />
    <ErrorMessage name="happens_at" class="text-red-500 text-xs mt-1" />

    <div>
      <label for="happens_at_date" class="block text-sm font-medium text-gray-700">Date du match</label>
      <input 
        type="date" 
        id="happens_at_date" 
        v-model="happensAtDate" 
        @input="updateHappensAt(setFieldValue)"
        class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" 
        required 
      />
    </div>
    <div>
      <label for="happens_at_time" class="block text-sm font-medium text-gray-700">Heure du match</label>
      <input 
        type="time" 
        id="happens_at_time" 
        v-model="happensAtTime" 
        @input="updateHappensAt(setFieldValue)"
        class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" 
        required 
      />
    </div>

    <div v-if="initialData">
      <label for="is_victory" class="block text-sm font-medium text-gray-700">Résultat</label>
      <Field name="is_victory" as="select" id="is_victory" class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
        <option :value="null">Non renseigné</option>
        <option :value="true">Victoire</option>
        <option :value="false">Défaite</option>
      </Field>
      <ErrorMessage name="is_victory" class="text-red-500 text-xs mt-1" />
    </div>

    <div class="flex justify-end space-x-3 mt-6">
      <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">{{ initialData ? 'Modifier' : 'Créer' }}</button>
    </div>
  </Form>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useApi } from '../../../composables/useApi';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { matchSchema } from '../../../schemas';

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
const validationSchema = toTypedSchema(matchSchema);

const happensAtDate = ref('');
const happensAtTime = ref('');

const fetchDependencies = async () => {
  try {
    const [seasonsRes, teamsRes] = await Promise.all([
      fetchApi('seasons'),
      fetchApi('teams'),
    ]);
    seasons.value = seasonsRes.data;
    teams.value = teamsRes.data;
  } catch (e) {
    console.error("Error fetching form dependencies:", e);
  }
};

onMounted(fetchDependencies);

const initialValues = computed(() => {
  if (props.initialData) {
    // Initialize date/time refs
    if (props.initialData.happens_at) {
      const dateObj = new Date(props.initialData.happens_at);
      happensAtDate.value = dateObj.toISOString().split('T')[0];
      happensAtTime.value = dateObj.toTimeString().split(' ')[0].substring(0, 5);
    }
    
    return {
      ...props.initialData,
      season_id: props.initialData.season_id,
      team_id: props.initialData.team_id,
      is_at_home: !!props.initialData.is_at_home, // Ensure boolean
    };
  }
  
  // Default values
  const activeSeason = seasons.value.find(s => s.is_active);
  happensAtDate.value = '';
  happensAtTime.value = '';
  
  return {
    season_id: activeSeason ? activeSeason.id : '',
    team_id: '',
    opponent: '',
    is_at_home: false,
    happens_at: '',
    is_victory: null,
  };
});

const updateHappensAt = (setFieldValue) => {
  if (happensAtDate.value && happensAtTime.value) {
    setFieldValue('happens_at', `${happensAtDate.value} ${happensAtTime.value}:00`);
  } else {
    setFieldValue('happens_at', '');
  }
};

// Watch for initialData changes to update local refs if needed (e.g. switching from create to edit)
watch(() => props.initialData, (newVal) => {
  if (newVal && newVal.happens_at) {
    const dateObj = new Date(newVal.happens_at);
    happensAtDate.value = dateObj.toISOString().split('T')[0];
    happensAtTime.value = dateObj.toTimeString().split(' ')[0].substring(0, 5);
  } else if (!newVal) {
    happensAtDate.value = '';
    happensAtTime.value = '';
  }
}, { immediate: true });

const onSubmit = (values) => {
  emit('submit', values);
};
</script>
