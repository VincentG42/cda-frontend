<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click.self="$emit('close')">
      <div class="modal-container bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 p-6 relative max-h-[90vh] overflow-y-auto" @click.stop>
        <button class="modal-close-button absolute top-3 right-3 text-gray-500 hover:text-gray-700" @click="$emit('close')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class="modal-header mb-4">
          <slot name="header">
            <h3 class="text-xl font-semibold text-gray-800">{{ title }}</h3>
          </slot>
        </div>
        <div class="modal-body mb-4">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer text-right">
          <slot name="footer">
            <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300" @click="$emit('close')">
              Fermer
            </button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Modal'
  }
});

const emits = defineEmits(['close']);
</script>

<style>
.modal-mask {
  transition: opacity 0.3s ease;
}

.modal-container {
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
