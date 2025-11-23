import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTeamStatsModalStore = defineStore('teamStatsModal', () => {
    const isOpen = ref(false);
    const teamId = ref<number | null>(null);

    const openModal = (id: number) => {
        teamId.value = id;
        isOpen.value = true;
    };

    const closeModal = () => {
        isOpen.value = false;
        teamId.value = null;
    };

    return { isOpen, teamId, openModal, closeModal };
});
