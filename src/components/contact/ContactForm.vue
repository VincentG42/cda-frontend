<template>
  <div class="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-2" style="font-family: Lato">Contactez-nous</h2>
    <p class="text-center text-gray-600 mb-8 md:mb-12">Une question, une suggestion ? N'hésitez pas.</p>

    <div v-if="success" class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg">
      <p class="font-bold">Message envoyé !</p>
      <p>Merci pour votre message. Nous vous répondrons bientôt.</p>
    </div>

    <div v-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
      <p class="font-bold">Erreur</p>
      <p>{{ error }}</p>
    </div>

    <form @submit.prevent="handleSubmit" v-if="!success">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
          <input type="text" id="firstName" v-model="form.firstName" required class="w-full px-4 py-3 bg-gray-50 rounded-lg border-gray-200 focus:ring-secondary focus:border-secondary transition">
        </div>
        <div>
          <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Nom</label>
          <input type="text" id="lastName" v-model="form.lastName" required class="w-full px-4 py-3 bg-gray-50 rounded-lg border-gray-200 focus:ring-secondary focus:border-secondary transition">
        </div>
      </div>
      <div class="mb-6">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input type="email" id="email" v-model="form.email" required class="w-full px-4 py-3 bg-gray-50 rounded-lg border-gray-200 focus:ring-secondary focus:border-secondary transition">
      </div>
      <div class="mb-8">
        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea id="message" v-model="form.message" required rows="5" class="w-full px-4 py-3 bg-gray-50 rounded-lg border-gray-200 focus:ring-secondary focus:border-secondary transition"></textarea>
      </div>
      <div class="text-center">
        <button type="submit" :disabled="isLoading" class="bg-gradient-to-r from-primary to-primary/80 text-white font-bold py-4 px-10 rounded-full hover:from-primary/80 hover:to-primary/60 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
          <span v-if="isLoading" class="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
          <span v-else>Envoyer le Message</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
});

const isLoading = ref(false);
const error = ref(null);
const success = ref(false);

const handleSubmit = async () => {
  isLoading.value = true;
  error.value = null;
  success.value = false;

  try {
    const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(form.value)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Une erreur est survenue.');
    }

    success.value = true;
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    };

  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};
</script>
