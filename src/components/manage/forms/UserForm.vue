<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label for="firstname" class="block text-sm font-medium text-gray-700">Prénom</label>
      <input type="text" id="firstname" v-model="formData.firstname" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required />
    </div>
    <div>
      <label for="lastname" class="block text-sm font-medium text-gray-700">Nom</label>
      <input type="text" id="lastname" v-model="formData.lastname" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required />
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input type="email" id="email" v-model="formData.email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required />
    </div>
    <div>
      <label for="licence_number" class="block text-sm font-medium text-gray-700">N° Licence</label>
      <input type="text" id="licence_number" v-model="formData.licence_number" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
    </div>
    <div>
      <label for="user_type_id" class="block text-sm font-medium text-gray-700">Type d'utilisateur</label>
      <select id="user_type_id" v-model="formData.user_type_id" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required>
        <option value="">Sélectionner un type</option>
        <!-- These should ideally be fetched from API -->
        <option value="1">Admin</option>
        <option value="2">Président</option>
        <option value="3">Staff</option>
        <option value="4">Coach</option>
        <option value="5">Licencié</option>
      </select>
    </div>
    <div v-if="!initialData">
      <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
      <input type="password" id="password" v-model="formData.password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" :required="!initialData" />
    </div>
    <div v-if="!initialData">
      <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirmer mot de passe</label>
      <input type="password" id="password_confirmation" v-model="formData.password_confirmation" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" :required="!initialData" />
    </div>

    <div class="flex justify-end space-x-3 mt-6">
      <button type="button" @click="$emit('cancel')" class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Annuler</button>
      <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">{{ initialData ? 'Modifier' : 'Créer' }}</button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  initialData: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['submit', 'cancel']);

const defaultFormData = {
  firstname: '',
  lastname: '',
  email: '',
  licence_number: '',
  user_type_id: '',
  password: '',
  password_confirmation: '',
};

const formData = ref({ ...defaultFormData });

watch(() => props.initialData, (newVal) => {
  if (newVal) {
    formData.value = { ...defaultFormData, ...newVal };
  } else {
    formData.value = { ...defaultFormData };
  }
}, { immediate: true });

const handleSubmit = () => {
  emit('submit', formData.value);
};
</script>
