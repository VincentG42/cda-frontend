<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Gestion des Matchs</h1>
        <p class="text-gray-600">Planifier les matchs et saisir les résultats</p>
      </div>
      <button @click="openCreateModal" class="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
        <span>Nouveau Match</span>
      </button>
    </div>

    <div v-if="matchesStore.isLoading" class="text-center py-8">
      <p class="text-gray-500">Chargement des matchs...</p>
    </div>
    <div v-else-if="matchesStore.error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
      <p class="font-bold">Erreur:</p>
      <p>{{ matchesStore.error }}</p>
    </div>
    <div v-else class="space-y-6">
      <!-- Month Tabs -->
      <div class="flex overflow-x-auto pb-2 border-b border-gray-200 space-x-2">
        <button
          v-for="month in availableMonths"
          :key="month.key"
          @click="selectedMonthKey = month.key"
          class="px-4 py-2 whitespace-nowrap text-sm font-medium rounded-t-lg transition-colors duration-200"
          :class="selectedMonthKey === month.key ? 'bg-green-50 text-green-700 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'"
        >
          {{ month.label }}
        </button>
      </div>

      <!-- Weekend Accordions -->
      <div v-if="selectedMonthMatches.length > 0" class="space-y-4">
        <div v-for="weekend in weekendsInSelectedMonth" :key="weekend.label" class="border border-gray-200 rounded-lg overflow-hidden">
          <button
            @click="toggleWeekend(weekend.label)"
            class="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
          >
            <h3 class="text-base font-semibold text-gray-900">{{ weekend.label }}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-500 transition-transform duration-200"
              :class="{'transform rotate-180': !weekend.isCollapsed}"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <div v-show="!weekend.isCollapsed" class="bg-white divide-y divide-gray-100">
            <div v-for="match in weekend.matches" :key="match.id" class="p-4 hover:bg-gray-50 transition-colors duration-150">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <!-- Match Info -->
                <div class="flex items-center space-x-4">
                  <div class="flex flex-col items-center w-16 text-center">
                    <span class="text-xs font-bold text-gray-500 uppercase">{{ new Date(match.happens_at).toLocaleDateString('fr-FR', { weekday: 'short' }) }}</span>
                    <span class="text-lg font-bold text-gray-900">{{ new Date(match.happens_at).getDate() }}</span>
                    <span class="text-xs text-gray-500">{{ new Date(match.happens_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) }}</span>
                  </div>
                  
                  <div class="flex-1">
                    <div class="flex items-center space-x-3">
                      <span class="font-medium text-gray-900" :class="{'font-bold': match.is_at_home}">{{ match.home_team.name }}</span>
                      <span class="text-sm text-gray-400">vs</span>
                      <span class="font-medium text-gray-900" :class="{'font-bold': !match.is_at_home}">{{ match.away_team.name }}</span>
                    </div>
                    <div class="flex items-center space-x-2 mt-1">
                       <span v-if="match.is_at_home" class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        Domicile
                      </span>
                      <span v-else class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                        Extérieur
                      </span>
                      <span class="text-xs text-gray-500 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        {{ match.location || 'N/A' }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Score & Actions -->
                <div class="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0">
                  <div v-if="match.team_score != null" class="text-center px-4">
                    <div class="font-bold text-lg whitespace-nowrap" :class="{
                      'text-green-700': match.is_victory,
                      'text-red-700': match.is_victory === false,
                      'text-gray-800': match.is_victory == null
                    }">
                      {{ match.team_score }} - {{ match.opponent_score }}
                    </div>
                    <div v-if="match.is_victory" class="text-xs font-semibold text-green-600">VICTOIRE</div>
                    <div v-else-if="match.is_victory === false" class="text-xs font-semibold text-red-600">DÉFAITE</div>
                  </div>

                  <div class="flex items-center space-x-2">
                    <button @click="openResultModal(match)" class="flex items-center space-x-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                      <span class="text-sm font-medium">Résultats</span>
                    </button>
                    <button @click="openEditModal(match)" class="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors" title="Modifier">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                    </button>
                    <button @click="confirmDeleteMatch(match)" class="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors" title="Supprimer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <p class="text-gray-500">Aucun match prévu pour ce mois.</p>
      </div>
    </div>
  </div>

  <Modal :show="showForm" :title="currentEditingMatch ? 'Modifier un Match' : 'Créer un nouveau Match'" @close="closeModal">
    <template #body>
      <MatchForm :initialData="currentEditingMatch" @submit="handleMatchFormSubmit" />
    </template>
  </Modal>

  <Modal :show="showDeleteConfirm" title="Confirmer la suppression" @close="cancelDelete">
    <template #body>
      <p class="mb-4">Êtes-vous sûr de vouloir supprimer le match <strong>{{ matchToDelete ? matchToDelete.home_team.name + ' vs ' + matchToDelete.away_team.name : '' }}</strong> ? Cette action est irréversible.</p>
      <p class="mb-2">Pour confirmer, veuillez taper "supprimer" dans le champ ci-dessous :</p>
      <input type="text" v-model="deleteConfirmationInput" class="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
    </template>
    <template #footer>
      <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mr-2" @click="cancelDelete">Annuler</button>
      <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700" :disabled="deleteConfirmationInput !== 'supprimer'" @click="executeDelete">Supprimer</button>
    </template>
  </Modal>

  <!-- Match Result Modal -->
  <MatchResultModal :show="showResultModal" :match="selectedMatch" @close="closeResultModal" />
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useApi } from '../../../composables/useApi';
import { useMatchesStore } from '../../../stores/matchesStore';
import Modal from '../../common/Modal.vue';
import MatchForm from '../forms/MatchForm.vue';
import MatchResultModal from '../MatchResultModal.vue';

const { fetchApi } = useApi();
const matchesStore = useMatchesStore();

const showForm = ref(false);
const currentEditingMatch = ref(null);
const showDeleteConfirm = ref(false);
const matchToDelete = ref(null);
const deleteConfirmationInput = ref('');

const showResultModal = ref(false);
const selectedMatch = ref(null);

const selectedMonthKey = ref(null);
const collapsedWeekends = ref(new Set());

// Helper to get the Friday of the week for a given date
const getFridayOfWeek = (date) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 5); // Adjust when day is Sunday
  const friday = new Date(d.setDate(diff));
  friday.setHours(0, 0, 0, 0);
  return friday;
};

const availableMonths = computed(() => {
  if (!matchesStore.matches) return [];
  
  const months = new Set();
  matchesStore.matches.forEach(match => {
    const d = new Date(match.happens_at);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    const label = d.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    // We store a stringified object to ensure uniqueness by key but keep label
    months.add(JSON.stringify({ key, label }));
  });

  return Array.from(months)
    .map(m => JSON.parse(m))
    .sort((a, b) => {
      const [yearA, monthA] = a.key.split('-').map(Number);
      const [yearB, monthB] = b.key.split('-').map(Number);
      return yearA !== yearB ? yearA - yearB : monthA - monthB;
    });
});

const selectedMonthMatches = computed(() => {
  if (!selectedMonthKey.value || !matchesStore.matches) return [];
  const [year, month] = selectedMonthKey.value.split('-').map(Number);
  return matchesStore.matches.filter(match => {
    const d = new Date(match.happens_at);
    return d.getFullYear() === year && d.getMonth() === month;
  });
});

const weekendsInSelectedMonth = computed(() => {
  const groups = {};
  
  selectedMonthMatches.value.forEach(match => {
    const friday = getFridayOfWeek(match.happens_at);
    const sunday = new Date(friday);
    sunday.setDate(friday.getDate() + 2);
    
    const key = friday.toISOString();
    if (!groups[key]) {
      groups[key] = {
        label: `Week-end du ${friday.toLocaleDateString('fr-FR', { day: 'numeric', month: 'numeric' })} au ${sunday.toLocaleDateString('fr-FR', { day: 'numeric', month: 'numeric' })}`,
        matches: [],
        isCollapsed: collapsedWeekends.value.has(key)
      };
    }
    groups[key].matches.push(match);
  });

  // Sort matches within groups by date/time
  Object.values(groups).forEach(group => {
    group.matches.sort((a, b) => new Date(a.happens_at) - new Date(b.happens_at));
  });

  // Return sorted groups
  return Object.entries(groups)
    .sort(([keyA], [keyB]) => new Date(keyA) - new Date(keyB))
    .map(([key, group]) => ({ ...group, key })); // Include key for toggling
});

const toggleWeekend = (label) => {
  // We need the key to toggle correctly, but the UI uses label. 
  // Let's find the group by label or change logic to use key in template.
  // The computed property returns objects with 'key'. 
  // Let's update the template to pass the key or the whole object.
  // Actually, let's just find it in the computed list.
  const group = weekendsInSelectedMonth.value.find(g => g.label === label);
  if (group) {
    if (collapsedWeekends.value.has(group.key)) {
      collapsedWeekends.value.delete(group.key);
    } else {
      collapsedWeekends.value.add(group.key);
    }
  }
};

// Set default selected month to current month or first available
watch(availableMonths, (months) => {
  if (months.length > 0 && !selectedMonthKey.value) {
    const now = new Date();
    const currentMonthKey = `${now.getFullYear()}-${now.getMonth()}`;
    const hasCurrent = months.find(m => m.key === currentMonthKey);
    selectedMonthKey.value = hasCurrent ? currentMonthKey : months[0].key;
  }
}, { immediate: true });

const fetchMatches = async () => {
  matchesStore.setLoading(true);
  matchesStore.setError(null);
  try {
    const response = await fetchApi('encounters?filter=all');
    matchesStore.setMatches(response.data);
  } catch (e) {
    matchesStore.setError(e.message);
  } finally {
    matchesStore.setLoading(false);
  }
};

const openCreateModal = () => {
  currentEditingMatch.value = null;
  showForm.value = true;
};

const openEditModal = (match) => {
  currentEditingMatch.value = { ...match };
  showForm.value = true;
};

const closeModal = () => {
  showForm.value = false;
  currentEditingMatch.value = null;
};

const openResultModal = (match) => {
  selectedMatch.value = match;
  showResultModal.value = true;
};

const closeResultModal = () => {
  showResultModal.value = false;
  selectedMatch.value = null;
  fetchMatches();
};

const handleMatchFormSubmit = async (formData) => {
  matchesStore.setLoading(true);
  matchesStore.setError(null);
  try {
    if (currentEditingMatch.value) {
      await fetchApi(`encounters/${currentEditingMatch.value.id}`, { method: 'PUT', body: JSON.stringify(formData) });
    } else {
      await fetchApi('encounters', { method: 'POST', body: JSON.stringify(formData) });
    }
    await fetchMatches();
    closeModal();
  } catch (e) {
    matchesStore.setError(e.message);
  } finally {
    matchesStore.setLoading(false);
  }
};

const confirmDeleteMatch = (match) => {
  matchToDelete.value = match;
  showDeleteConfirm.value = true;
  deleteConfirmationInput.value = '';
};

const cancelDelete = () => {
  showDeleteConfirm.value = false;
  matchToDelete.value = null;
  deleteConfirmationInput.value = '';
};

const executeDelete = async () => {
  if (!matchToDelete.value || deleteConfirmationInput.value !== 'supprimer') {
    return;
  }

  matchesStore.setLoading(true);
  matchesStore.setError(null);
  try {
    await fetchApi(`encounters/${matchToDelete.value.id}`, { method: 'DELETE' });
    await fetchMatches();
    cancelDelete();
  } catch (e) {
    matchesStore.setError(e.message);
  } finally {
    matchesStore.setLoading(false);
  }
};

onMounted(fetchMatches);
</script>