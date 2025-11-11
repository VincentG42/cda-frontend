<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">Nom de l'équipe</label>
      <input type="text" id="name" v-model="formData.name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required />
    </div>
    <div>
      <label for="category_id" class="block text-sm font-medium text-gray-700">Catégorie</label>
      <select id="category_id" v-model="formData.category_id" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required>
        <option value="">Sélectionner une catégorie</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.title }}</option>
      </select>
    </div>
    <div>
      <label for="coach_id" class="block text-sm font-medium text-gray-700">Coach</label>
      <select id="coach_id" v-model="formData.coach_id" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
        <option value="">Sélectionner un coach (optionnel)</option>
        <option v-for="coach in coaches" :key="coach.id" :value="coach.id">{{ coach.firstname }} {{ coach.lastname }}</option>
      </select>
    </div>
    <div>
      <label for="season_id" class="block text-sm font-medium text-gray-700">Saison</label>
      <select id="season_id" v-model="formData.season_id" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required>
        <option value="">Sélectionner une saison</option>
        <option v-for="season in seasons" :key="season.id" :value="season.id">{{ season.name }}</option>
      </select>
    </div>
    <div>
      <label for="gender" class="block text-sm font-medium text-gray-700">Genre</label>
      <select id="gender" v-model="formData.gender" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required>
        <option value="">Sélectionner un genre</option>
        <option value="M">Masculin</option>
        <option value="F">Féminin</option>
        <option value="X">Mixte</option>
      </select>
    </div>

    <div class="flex justify-end space-x-3 mt-6">
      <button type="button" @click="$emit('cancel')" class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Annuler</button>
      <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">{{ initialData ? 'Modifier' : 'Créer' }}</button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch, onMounted, defineProps, defineEmits } from 'vue';
import { useApi } from '../../../composables/useApi.js';

const props = defineProps({
  initialData: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['submit', 'cancel']);
const { fetchApi } = useApi();

const categories = ref([]);
const coaches = ref([]);
const seasons = ref([]);

const defaultFormData = {
  name: '',
  category_id: '',
  coach_id: null,
  season_id: '',
  gender: '',
};

const formData = ref({ ...defaultFormData });

watch(() => props.initialData, (newVal) => {
  if (newVal) {
    formData.value = { ...defaultFormData, ...newVal };
  } else {
    formData.value = { ...defaultFormData };
  }
}, { immediate: true });

const fetchDependencies = async () => {
  try {
    const [categoriesRes, usersRes, seasonsRes] = await Promise.all([
      fetchApi('categories'),
      fetchApi('users'), // Assuming this returns all users, we'll filter for coaches
      fetchApi('seasons'),
    ]);
    categories.value = categoriesRes.data;
    coaches.value = usersRes.data.filter(user => user.user_type.name === 'coach');
    seasons.value = seasonsRes.data;

    // Set default season_id to the active season if creating a new team
    if (!props.initialData) {
      const activeSeason = seasons.value.find(s => s.is_active);
      if (activeSeason) {
        formData.value.season_id = activeSeason.id;
      }
    }

    console.log('Fetched Categories:', categories.value);
    console.log('Fetched Coaches:', coaches.value);
    console.log('Fetched Seasons:', seasons.value);
  } catch (e) {
    console.error("Error fetching form dependencies:", e);
  }
};

onMounted(fetchDependencies);

const handleSubmit = () => {
  emit('submit', formData.value);
};

watch(() => props.initialData, (newVal) => {
  if (newVal) {
    formData.value = { ...defaultFormData, ...newVal };
  } else {
    formData.value = { ...defaultFormData };
    // Re-apply active season if initialData becomes null (e.g., after closing edit modal and opening create)
    const activeSeason = seasons.value.find(s => s.is_active);
    if (activeSeason) {
      formData.value.season_id = activeSeason.id;
    }
  }
}, { immediate: true });</script>
