<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Gestion des Catégories</h1>
        <p class="text-gray-600">Gérer les catégories d'équipes (ex: Senior M, U18 F)</p>
      </div>
      <button @click="openCreateModal" class="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
        <span>Nouvelle Catégorie</span>
      </button>
    </div>

    <div class="bg-white rounded-xl border border-gray-200 p-6">
      <div v-if="categoriesStore.isLoading" class="text-center py-8">
        <p class="text-gray-500">Chargement des catégories...</p>
      </div>
      <div v-else-if="categoriesStore.error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
        <p class="font-bold">Erreur:</p>
        <p>{{ categoriesStore.error }}</p>
      </div>
      <div v-else>
        <!-- Desktop Table View -->
        <div class="hidden md:block overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-3 px-4 font-medium text-gray-900">Titre</th>
                <th class="text-left py-3 px-4 font-medium text-gray-900">Genre</th>
                <th class="text-right py-3 px-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="category in categoriesStore.categories" :key="category.id" class="border-b border-gray-100 hover:bg-gray-50">
                <td class="py-3 px-4">{{ category.title }}</td>
                <td class="py-3 px-4">{{ category.gender }}</td>
                <td class="py-3 px-4">
                  <div class="flex items-center justify-end space-x-2">
                    <button @click="openEditModal(category)" class="p-1 text-blue-600 hover:bg-blue-50 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                    </button>
                    <button @click="confirmDeleteCategory(category)" class="p-1 text-red-600 hover:bg-red-50 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile Card View -->
        <div class="md:hidden space-y-4">
          <div v-for="category in categoriesStore.categories" :key="category.id" class="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="font-bold text-gray-900">{{ category.title }}</h3>
                <p class="text-sm text-gray-500">{{ category.gender }}</p>
              </div>
              <div class="flex space-x-1">
                <button @click="openEditModal(category)" class="p-2 text-blue-600 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                </button>
                <button @click="confirmDeleteCategory(category)" class="p-2 text-red-600 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal :show="showForm" :title="currentEditingCategory ? 'Modifier une Catégorie' : 'Créer une nouvelle Catégorie'" @close="closeModal">
    <template #body>
      <CategoryForm :initialData="currentEditingCategory" @submit="handleCategoryFormSubmit" @cancel="closeModal" />
    </template>
  </Modal>

  <Modal :show="showDeleteConfirm" title="Confirmer la suppression" @close="cancelDelete">
    <template #body>
      <p class="mb-4">Êtes-vous sûr de vouloir supprimer la catégorie <strong>{{ categoryToDelete ? categoryToDelete.title : '' }}</strong> ? Cette action est irréversible.</p>
      <p class="mb-2">Pour confirmer, veuillez taper "supprimer" dans le champ ci-dessous :</p>
      <input type="text" v-model="deleteConfirmationInput" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
    </template>
    <template #footer>
      <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2" @click="cancelDelete">Annuler</button>
      <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700" :disabled="deleteConfirmationInput !== 'supprimer'" @click="executeDelete">Supprimer</button>
    </template>
  </Modal>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApi } from '../../../composables/useApi';
import { useCategoriesStore } from '../../../stores/categoriesStore';
import Modal from '../../common/Modal.vue';
import CategoryForm from '../forms/CategoryForm.vue';

const { fetchApi } = useApi();
const categoriesStore = useCategoriesStore();

const showForm = ref(false);
const currentEditingCategory = ref(null);
const showDeleteConfirm = ref(false);
const categoryToDelete = ref(null);
const deleteConfirmationInput = ref('');

const fetchCategories = async () => {
  categoriesStore.setLoading(true);
  categoriesStore.setError(null);
  try {
    const response = await fetchApi('categories');
    categoriesStore.setCategories(response.data);
  } catch (e) {
    categoriesStore.setError(e.message);
  } finally {
    categoriesStore.setLoading(false);
  }
};

const openCreateModal = () => {
  currentEditingCategory.value = null;
  showForm.value = true;
};

const openEditModal = (category) => {
  currentEditingCategory.value = { ...category };
  showForm.value = true;
};

const closeModal = () => {
  showForm.value = false;
  currentEditingCategory.value = null;
};

const handleCategoryFormSubmit = async (formData) => {
  categoriesStore.setLoading(true);
  categoriesStore.setError(null);
  try {
    if (currentEditingCategory.value) {
      // Update existing category
      await fetchApi(`categories/${currentEditingCategory.value.id}`, { method: 'PUT', body: JSON.stringify(formData) });
    } else {
      // Create new category
      await fetchApi('categories', { method: 'POST', body: JSON.stringify(formData) });
    }
    await fetchCategories(); // Refresh the list
    closeModal();
  } catch (e) {
    categoriesStore.setError(e.message);
  } finally {
    categoriesStore.setLoading(false);
  }
};

const confirmDeleteCategory = (category) => {
  categoryToDelete.value = category;
  showDeleteConfirm.value = true;
  deleteConfirmationInput.value = ''; // Clear input on open
};

const cancelDelete = () => {
  showDeleteConfirm.value = false;
  categoryToDelete.value = null;
  deleteConfirmationInput.value = ''; // Clear input on close
};

const executeDelete = async () => {
  if (!categoryToDelete.value || deleteConfirmationInput.value !== 'supprimer') {
    return;
  }

  categoriesStore.setLoading(true);
  categoriesStore.setError(null);
  try {
    await fetchApi(`categories/${categoryToDelete.value.id}`, { method: 'DELETE' });
    await fetchCategories(); // Refresh the list
    cancelDelete();
  } catch (e) {
    categoriesStore.setError(e.message);
  } finally {
    categoriesStore.setLoading(false);
  }
};

onMounted(fetchCategories);
</script>
