<template>
  <div class="w-full max-w-md">
    <div class="text-center mb-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">
        Réinitialisation du mot de passe
      </h1>
      <p class="text-gray-600">
        Choisissez un nouveau mot de passe.
      </p>
    </div>

    <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
      <div v-if="success" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
        <span class="block sm:inline">Votre mot de passe a été réinitialisé avec succès. <a href="/" class="font-bold underline">Se connecter</a></span>
      </div>
      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
        <strong class="font-bold">Erreur:</strong>
        <span class="block sm:inline">{{ error }}</span>
      </div>

      <Form v-if="!success" @submit="handleSubmit" :validation-schema="validationSchema" class="space-y-6" v-slot="{ isSubmitting }">
        <Field name="token" type="hidden" :value="token" />
        <Field name="email" type="hidden" :value="email" />

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
            Nouveau mot de passe
          </label>
          <Field name="password" type="password" id="password" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" />
          <ErrorMessage name="password" class="text-red-500 text-xs mt-1" />
        </div>

        <div>
          <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-2">
            Confirmer le mot de passe
          </label>
          <Field name="password_confirmation" type="password" id="password_confirmation" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" />
          <ErrorMessage name="password_confirmation" class="text-red-500 text-xs mt-1" />
        </div>

        <button type="submit" :disabled="isSubmitting" class="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 shadow-lg">
          <div v-if="isSubmitting" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span v-else>Réinitialiser</span>
        </button>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { useApi } from '../../composables/useApi';

const { fetchApi } = useApi();
const error = ref<string | null>(null);
const success = ref(false);
const token = ref('');
const email = ref('');

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  token.value = urlParams.get('token') || '';
  email.value = urlParams.get('email') || '';
});

const validationSchema = toTypedSchema(
  z.object({
    password: z.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères'),
    password_confirmation: z.string()
  }).refine((data) => data.password === data.password_confirmation, {
    message: "Les mots de passe ne correspondent pas",
    path: ["password_confirmation"],
  })
);

const handleSubmit = async (values: any) => {
  error.value = null;
  try {
    await fetchApi('reset-password', {
      method: 'POST',
      body: JSON.stringify({
        token: token.value,
        email: email.value,
        password: values.password,
        password_confirmation: values.password_confirmation
      })
    });
    success.value = true;
  } catch (e: any) {
    error.value = e.message || 'Une erreur est survenue lors de la réinitialisation.';
  }
};
</script>
