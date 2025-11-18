import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTeamStatsModalStore = defineStore('teamStatsModal', () => {
  const isOpen = ref(false);
  const teamId = ref(null);

  const openModal = (id) => {
    teamId.value = id;
    isOpen.value = true;
  };

  const closeModal = () => {
    isOpen.value = false;
    teamId.value = null;
  };

  return { isOpen, teamId, openModal, closeModal };
});
