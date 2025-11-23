<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" @click.self="$emit('close')">
    <div class="relative top-10 mx-auto p-8 border w-full max-w-md shadow-lg rounded-md bg-white">
      <h3 class="text-2xl font-bold text-center mb-6">Create New Team</h3>
      <form @submit.prevent="handleFormSubmit">
        <!-- Team Name -->
        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" v-model="form.name" required
                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>

        <!-- Category -->
        <div class="mb-4">
          <label for="category" class="block text-gray-700 text-sm font-bold mb-2">Category</label>
          <select id="category" v-model="form.category_id" required
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option disabled value="">Please select one</option>
            <option v-for="category in categoriesStore.categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>

        <!-- Coach -->
        <div class="mb-4">
          <label for="coach" class="block text-gray-700 text-sm font-bold mb-2">Coach</label>
          <select id="coach" v-model="form.coach_id" required
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option disabled value="">Please select one</option>
            <option v-for="coach in usersStore.users" :key="coach.id" :value="coach.id">
              {{ coach.firstname }} {{ coach.lastname }}
            </option>
          </select>
        </div>

        <!-- Season -->
        <div class="mb-4">
          <label for="season" class="block text-gray-700 text-sm font-bold mb-2">Season</label>
          <select id="season" v-model="form.season_id" required
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option disabled value="">Please select one</option>
            <option v-for="season in seasonsStore.seasons" :key="season.id" :value="season.id">
              {{ season.name }}
            </option>
          </select>
        </div>
        
        <!-- Gender -->
        <div class="mb-6">
          <label for="gender" class="block text-gray-700 text-sm font-bold mb-2">Gender</label>
          <select id="gender" v-model="form.gender" required
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option>Male</option>
            <option>Female</option>
            <option>Mixed</option>
          </select>
        </div>

        <div v-if="error" class="text-red-500 text-sm mb-4">{{ error }}</div>

        <!-- Buttons -->
        <div class="flex items-center justify-end gap-4">
          <button type="button" @click="$emit('close')"
                  class="px-4 py-2 bg-gray-200 text-gray-800 text-base font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300">
            Cancel
          </button>
          <button type="submit"
                  class="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Create Team
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useCategoriesStore } from '../../stores/categoriesStore';
import { useSeasonsStore } from '../../stores/seasonsStore';
import { useUsersStore } from '../../stores/usersStore';
import { useTeamsStore } from '../../stores/teamsStore';
import type { Team } from '../../types';

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'team-created'): void;
}>();

const categoriesStore = useCategoriesStore();
const seasonsStore = useSeasonsStore();
const usersStore = useUsersStore();
const teamsStore = useTeamsStore();

// Form state
const form = reactive<Partial<Team> & { gender: string }>({
  name: '',
  category_id: undefined,
  coach_id: undefined,
  season_id: undefined, // Will be mapped to backend expected format if needed, or just ID
  gender: 'Mixed',
});

const error = ref<string | null>(null);
const isSubmitting = ref<boolean>(false);

// Fetch data for selects
const fetchDataForSelects = async () => {
  try {
    await Promise.all([
      categoriesStore.fetchCategories(),
      usersStore.fetchUsers(),
      seasonsStore.fetchSeasons(),
    ]);
  } catch (e) {
    console.error('Failed to fetch data for form', e);
    error.value = 'Could not load data for the form. Please try again later.';
  }
};

const handleFormSubmit = async () => {
  error.value = null;
  isSubmitting.value = true;
  try {
    // Ensure IDs are numbers if they are bound as strings from select
    const teamData = {
        ...form,
        category_id: Number(form.category_id),
        coach_id: Number(form.coach_id),
        // season_id might need to be handled depending on backend requirement, assuming it's part of the payload
    };
    
    await teamsStore.createTeam(teamData as any); // Type assertion as Team type might need adjustment for creation payload

    emit('team-created');
    emit('close');
  } catch (e: any) {
    console.error(e);
    error.value = e.message || "Une erreur est survenue.";
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  fetchDataForSelects();
});
</script>