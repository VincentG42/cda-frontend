<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" @click.self="$emit('close')">
    <div class="relative top-20 mx-auto p-5 border w-full max-w-lg shadow-lg rounded-md bg-white">
      <div class="flex justify-between items-center pb-3 border-b">
        <h3 class="text-2xl font-bold">Créer un nouveau licencié</h3>
        <button @click="$emit('close')" class="text-black close-modal">&times;</button>
      </div>
      <div class="mt-5">
        <form @submit.prevent="submitForm">
          <!-- Form fields will go here -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">Prénom</label>
            <input v-model="formData.firstname" type="text" id="firstname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">Nom</label>
            <input v-model="formData.lastname" type="text" id="lastname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
            <input v-model="formData.email" type="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
           <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="licence_number">Numéro de Licence</label>
            <input v-model="formData.licence_number" type="text" id="licence_number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          
          <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>

          <div class="flex items-center justify-end pt-4 border-t">
            <button @click="$emit('close')" type="button" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mr-2">
              Annuler
            </button>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" :disabled="isSubmitting">
              {{ isSubmitting ? 'Création...' : 'Créer' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUsersStore } from '../../stores/usersStore';
import type { User } from '../../types';

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'user-created'): void;
}>();

const usersStore = useUsersStore();

const formData = ref<Partial<User>>({
  firstname: '',
  lastname: '',
  email: '',
  licence_number: '',
  // Le mot de passe sera généré par le backend
});

const error = ref<string | null>(null);
const isSubmitting = ref<boolean>(false);

const submitForm = async () => {
  error.value = null;
  isSubmitting.value = true;
  try {
    await usersStore.createUser(formData.value);
    emit('user-created');
  } catch (e: any) {
    error.value = e.message || "Une erreur est survenue.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>
