import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStatsModalStore = defineStore('statsModal', () => {
  const isOpen = ref(false);
  const modalContent = ref(null); // e.g., 'playerStats', 'teamStats'
  const modalProps = ref({});     // e.g., { playerId: 123 } or { teamId: 456 }

  const openModal = (content, props) => {
    modalContent.value = content;
    modalProps.value = props;
    isOpen.value = true;
  };

  const closeModal = () => {
    isOpen.value = false;
    modalContent.value = null;
    modalProps.value = {};
  };

  return { isOpen, modalContent, modalProps, openModal, closeModal };
});