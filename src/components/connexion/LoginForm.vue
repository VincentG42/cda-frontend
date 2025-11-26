<template>
  <div class="w-full max-w-md">
    <!-- Logo and Header -->
    <div class="text-center mb-8">
      <div class="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
        <div class="w-16 h-16 bg-primary rounded-xl flex items-center justify-center filter brightness-90">
          <span class="text-white font-bold text-2xl">CC</span>
        </div>
      </div>
      <h1 class="text-2xl font-bold text-gray-900 mb-2">
        CCSLR Saint Joseph
      </h1>
      <p class="text-gray-600">
        Espace licencié
      </p>
    </div>

    <!-- Login Form -->
    <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-2">
          Connexion
        </h2>
        <p class="text-sm text-gray-600">Accédez à votre espace joueur</p>
      </div>

      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
        <strong class="font-bold">Erreur:</strong>
        <span class="block sm:inline">{{ error }}</span>
      </div>

      <Form @submit="handleSubmit" :validation-schema="validationSchema" class="space-y-6" v-slot="{ isSubmitting }">
        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <Field name="email" type="email" id="email" class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white" placeholder="Entrez votre email" />
          </div>
          <ErrorMessage name="email" class="text-red-500 text-xs mt-1" />
        </div>

        <!-- Password Field -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
            Mot de passe
          </label>
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <Field name="password" :type="showPassword ? 'text' : 'password'" id="password" class="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white" placeholder="Entrez votre mot de passe" />
            <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
            </button>
          </div>
          <ErrorMessage name="password" class="text-red-500 text-xs mt-1" />
        </div>

        <!-- Forgot Password Link -->
        <div class="text-right">
          <a href="/forgot-password" class="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200">
            Mot de passe oublié ?
          </a>
        </div>

        <!-- Submit Button -->
        <button type="submit" :disabled="isSubmitting" class="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-primary hover:bg-primary/80 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
          <div v-if="isSubmitting" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <template v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
            <span>Se connecter</span>
          </template>
        </button>
      </Form>

      <!-- Footer -->
      <div class="mt-6 pt-6 border-t border-gray-200 text-center">
        <p class="text-xs text-gray-500">Accès réservé aux licenciés du club</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../../stores/authStore';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { loginSchema } from '../../schemas';

const authStore = useAuthStore();
const showPassword = ref(false);
const error = ref<string | null>(null);

const validationSchema = toTypedSchema(loginSchema);

const handleSubmit = async (values: any) => {
  error.value = null;

  try {
    const response = await authStore.login({
      email: values.email,
      password: values.password
    });

    // Check if password change is required
    // The store login method might return the response or we check the store state
    // Let's assume login returns the response data if successful
    
    if (response && response.require_password_change) {
        window.location.href = '/change-password';
        return;
    }

    const user = authStore.user;
    if (user) {
        window.location.href = '/dashboard';
    } else {
        window.location.href = '/';
    }

  } catch (e: any) {
    error.value = e.message || 'Email ou mot de passe incorrect.';
  }
};
</script>
