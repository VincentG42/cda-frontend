<template>
  <div class="w-full max-w-md">
    <div class="text-center mb-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">
        Mot de passe oublié ?
      </h1>
      <p class="text-gray-600">
        Entrez votre email pour recevoir un lien de réinitialisation.
      </p>
    </div>

    <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
      <div v-if="message" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
        <span class="block sm:inline">{{ message }}</span>
      </div>
      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
        <strong class="font-bold">Erreur:</strong>
        <span class="block sm:inline">{{ error }}</span>
      </div>

      <Form @submit="handleSubmit" :validation-schema="validationSchema" class="space-y-6" v-slot="{ isSubmitting }">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <Field name="email" type="email" id="email" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="votre@email.com" />
          <ErrorMessage name="email" class="text-red-500 text-xs mt-1" />
        </div>

        <button type="submit" :disabled="isSubmitting" class="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 shadow-lg">
          <div v-if="isSubmitting" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span v-else>Envoyer le lien</span>
        </button>
      </Form>

      <div class="mt-6 text-center">
        <a href="/" class="text-sm text-green-600 hover:text-green-500 font-medium">
          Retour à la connexion
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { useApi } from '../../composables/useApi';

const { fetchApi } = useApi();
const message = ref<string | null>(null);
const error = ref<string | null>(null);

const validationSchema = toTypedSchema(
  z.object({
    email: z.string().email('Email invalide').min(1, 'L\'email est requis'),
  })
);

const handleSubmit = async (values: any) => {
  message.value = null;
  error.value = null;
  try {
    await fetchApi('forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email: values.email })
    });
    message.value = 'Si un compte existe avec cet email, vous recevrez un lien de réinitialisation.';
  } catch (e: any) {
    // For security, we might want to show the same message even on error, 
    // but for now let's show the error or a generic one.
    error.value = e.message || 'Une erreur est survenue.';
  }
};
</script>
