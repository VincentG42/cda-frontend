<template>
  <Form @submit="onSubmit" :validation-schema="validationSchema" :initial-values="initialValues" class="space-y-4">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">Nom de l'équipe</label>
      <Field name="name" type="text" id="name" class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
      <ErrorMessage name="name" class="text-red-500 text-xs mt-1" />
    </div>
    <div>
      <label for="category_id" class="block text-sm font-medium text-gray-700">Catégorie</label>
      <Field name="category_id" as="select" id="category_id" class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
        <option value="">Sélectionner une catégorie</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.title }}</option>
      </Field>
      <ErrorMessage name="category_id" class="text-red-500 text-xs mt-1" />
    </div>
    <div>
      <label for="coach_id" class="block text-sm font-medium text-gray-700">Coach</label>
      <Field name="coach_id" as="select" id="coach_id" class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
        <option value="">Sélectionner un coach (optionnel)</option>
        <option v-for="coach in coaches" :key="coach.id" :value="coach.id">{{ coach.firstname }} {{ coach.lastname }}</option>
      </Field>
      <ErrorMessage name="coach_id" class="text-red-500 text-xs mt-1" />
    </div>
    <div>
      <label for="season_id" class="block text-sm font-medium text-gray-700">Saison</label>
      <Field name="season_id" as="select" id="season_id" class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
        <option value="">Sélectionner une saison</option>
        <option v-for="season in seasons" :key="season.id" :value="season.id">{{ season.name }}</option>
      </Field>
      <ErrorMessage name="season_id" class="text-red-500 text-xs mt-1" />
    </div>
    <div>
      <label for="gender" class="block text-sm font-medium text-gray-700">Genre</label>
      <Field name="gender" as="select" id="gender" class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
        <option value="">Sélectionner un genre</option>
        <option value="M">Masculin</option>
        <option value="F">Féminin</option>
        <option value="X">Mixte</option>
      </Field>
      <ErrorMessage name="gender" class="text-red-500 text-xs mt-1" />
    </div>

    <div class="flex justify-end space-x-3 mt-6">
      <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">{{ initialData ? 'Modifier' : 'Créer' }}</button>
    </div>
  </Form>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useApi } from '../../../composables/useApi';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { teamSchema } from '../../../schemas';

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

const validationSchema = toTypedSchema(teamSchema);

const fetchDependencies = async () => {
  try {
    const [categoriesRes, usersRes, seasonsRes] = await Promise.all([
      fetchApi('categories'),
      fetchApi('users'),
      fetchApi('seasons'),
    ]);
    categories.value = categoriesRes.data;
    coaches.value = usersRes.data.filter(user => user.user_type.name === 'coach');
    seasons.value = seasonsRes.data;
  } catch (e) {
    console.error("Error fetching form dependencies:", e);
  }
};

onMounted(fetchDependencies);

const initialValues = computed(() => {
  if (props.initialData) {
    return {
      ...props.initialData,
      // Ensure IDs are numbers
      category_id: props.initialData.category_id,
      coach_id: props.initialData.coach_id,
      season_id: props.initialData.season_id,
    };
  }
  
  // Default values for new team
  const activeSeason = seasons.value.find(s => s.is_active);
  return {
    name: '',
    category_id: '',
    coach_id: null,
    season_id: activeSeason ? activeSeason.id : '',
    gender: '',
  };
});

const onSubmit = (values) => {
  emit('submit', values);
};
</script>
