<template>
  <Form @submit="onSubmit" :validation-schema="validationSchema" :initial-values="initialValues" class="space-y-4">
    <div>
      <label for="firstname" class="block text-sm font-medium text-gray-700">Prénom</label>
      <Field name="firstname" type="text" id="firstname" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
      <ErrorMessage name="firstname" class="text-red-500 text-xs mt-1" />
    </div>
    <div>
      <label for="lastname" class="block text-sm font-medium text-gray-700">Nom</label>
      <Field name="lastname" type="text" id="lastname" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
      <ErrorMessage name="lastname" class="text-red-500 text-xs mt-1" />
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <Field name="email" type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
      <ErrorMessage name="email" class="text-red-500 text-xs mt-1" />
    </div>
    <div>
      <label for="licence_number" class="block text-sm font-medium text-gray-700">N° Licence</label>
      <Field name="licence_number" type="text" id="licence_number" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
      <ErrorMessage name="licence_number" class="text-red-500 text-xs mt-1" />
    </div>
    <div>
      <label for="user_type_id" class="block text-sm font-medium text-gray-700">Type d'utilisateur</label>
      <Field name="user_type_id" as="select" id="user_type_id" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
        <option value="">Sélectionner un type</option>
        <option value="1">Admin</option>
        <option value="2">Président</option>
        <option value="3">Staff</option>
        <option value="4">Coach</option>
        <option value="5">Licencié</option>
      </Field>
      <ErrorMessage name="user_type_id" class="text-red-500 text-xs mt-1" />
    </div>
    
    <!-- Password fields only for creation -->
    <div v-if="!initialData">
      <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
      <Field name="password" type="password" id="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
      <ErrorMessage name="password" class="text-red-500 text-xs mt-1" />
    </div>
    <div v-if="!initialData">
      <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirmer mot de passe</label>
      <Field name="password_confirmation" type="password" id="password_confirmation" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
      <ErrorMessage name="password_confirmation" class="text-red-500 text-xs mt-1" />
    </div>

    <div class="flex justify-end space-x-3 mt-6">
      <button type="button" @click="$emit('cancel')" class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Annuler</button>
      <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">{{ initialData ? 'Modifier' : 'Créer' }}</button>
    </div>
  </Form>
</template>

<script setup>
import { computed } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { userSchema } from '../../../schemas';

const props = defineProps({
  initialData: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['submit', 'cancel']);

const validationSchema = computed(() => {
  if (!props.initialData) {
    // Extend schema for creation to include password validation
    return toTypedSchema(userSchema.extend({
      password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
      password_confirmation: z.string()
    }).refine((data) => data.password === data.password_confirmation, {
      message: "Les mots de passe ne correspondent pas",
      path: ["password_confirmation"],
    }));
  }
  return toTypedSchema(userSchema);
});

const initialValues = computed(() => {
  if (props.initialData) {
    return {
      ...props.initialData,
      // Ensure IDs are numbers if they come as strings, though schema coercion handles submission,
      // for initial values it's good to match types.
      user_type_id: props.initialData.user_type_id, 
    };
  }
  return {
    firstname: '',
    lastname: '',
    email: '',
    licence_number: '',
    user_type_id: '',
    password: '',
    password_confirmation: '',
  };
});

const onSubmit = (values) => {
  // Clean up confirmation field before sending
  const { password_confirmation, ...submissionData } = values;
  emit('submit', submissionData);
};
</script>
