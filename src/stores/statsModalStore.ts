import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStatsModalStore = defineStore('statsModal', () => {
    const isOpen = ref(false);
    const playerId = ref<number | null>(null);

    const openModal = (id: number) => {
        playerId.value = id;
        isOpen.value = true;
    };

    const closeModal = () => {
        isOpen.value = false;
        playerId.value = null;
    };

    return { isOpen, playerId, openModal, closeModal };
});
