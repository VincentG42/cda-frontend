<template>
  <div class="space-y-4">
    <div v-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-lg">
      <p class="font-bold">Erreur:</p>
      <p>{{ error }}</p>
    </div>

    <!-- Step 1: Upload JSON File -->
    <div v-if="!recapData">
      <label for="recapFile" class="block text-sm font-medium text-gray-700 mb-2">Fichier de récapitulatif de match (JSON)</label>
      <input type="file" id="recapFile" @change="handleFileChange" accept=".json" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
      <button @click="prepareImport" :disabled="!selectedFile || isLoading" class="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
        <span v-if="isLoading">Préparation...</span>
        <span v-else>Préparer l'import</span>
      </button>
    </div>

    <!-- Step 2: Review and Map Players -->
    <div v-else>
      <h3 class="text-lg font-semibold text-gray-800 mb-2">Récapitulatif du Match</h3>
      <p class="text-sm text-gray-600 mb-4">Vérifiez les joueurs et associez les licenciés non reconnus.</p>

      <div class="bg-gray-50 p-4 rounded-lg mb-4">
        <p><strong>Match ID:</strong> {{ recapData.matchId }}</p>
        <p><strong>Équipe:</strong> {{ recapData.teamName }}</p>
        <p><strong>Adversaire:</strong> {{ recapData.opponentName }}</p>
        <p><strong>Score:</strong> {{ recapData.score.team }} - {{ recapData.score.opponent }}</p>
      </div>

      <h4 class="font-medium text-gray-700 mb-2">Joueurs du fichier JSON:</h4>
      <ul class="space-y-2 mb-4">
        <li v-for="player in recapData.players" :key="player.id" class="flex items-center justify-between bg-white p-3 rounded-md shadow-sm border border-gray-200">
          <span>{{ player.firstname }} {{ player.lastname }} (Licence: {{ player.id }})</span>
          <span v-if="matchedPlayers.some(mp => mp.id === player.id)" class="text-green-600 text-sm">Associé</span>
          <span v-else class="text-red-600 text-sm">Non associé</span>
        </li>
      </ul>

      <h4 class="font-medium text-gray-700 mb-2">Joueurs non associés:</h4>
      <div v-if="unmatchedPlayers.length > 0" class="space-y-3 mb-4">
        <div v-for="(player, index) in unmatchedPlayers" :key="player.id" class="bg-yellow-50 p-3 rounded-md border border-yellow-200">
          <p class="font-medium text-yellow-800">{{ player.firstname }} {{ player.lastname }} (Licence: {{ player.id }})</p>
          <div class="mt-2">
            <label :for="`map-player-${index}`" class="block text-xs font-medium text-yellow-700 mb-1">Associer à un licencié existant:</label>
            <select :id="`map-player-${index}`" v-model="playerMappings[player.id]" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm">
              <option value="">Ne pas associer</option>
              <option v-for="officialPlayer in officialPlayers" :key="officialPlayer.id" :value="officialPlayer.id">
                {{ officialPlayer.firstname }} {{ officialPlayer.lastname }} ({{ officialPlayer.licence_number }})
              </option>
            </select>
          </div>
        </div>
      </div>
      <p v-else class="text-gray-600">Tous les joueurs ont été associés ou il n'y a pas de joueurs non associés.</p>

      <button @click="importData" :disabled="isLoading" class="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
        <span v-if="isLoading">Importation...</span>
        <span v-else>Importer les données</span>
      </button>
      <button @click="resetImporter" :disabled="isLoading" class="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
        Annuler
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useApi } from '../../composables/useApi';

const props = defineProps({
  match: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['import-success']);
const { fetchApi } = useApi();

const selectedFile = ref(null);
const isLoading = ref(false);
const error = ref(null);

const recapData = ref(null);
const matchedPlayers = ref([]);
const unmatchedPlayers = ref([]);
const officialPlayers = ref([]);
const playerMappings = ref({}); // { json_player_id: db_user_id }

const handleFileChange = (event) => {
  selectedFile.value = event.target.files[0];
  error.value = null;
  console.log('Selected file:', selectedFile.value); // Debug log
};

const prepareImport = async () => {
  if (!selectedFile.value) {
    error.value = "Veuillez sélectionner un fichier JSON.";
    return;
  }

  isLoading.value = true;
  error.value = null;

  try {
    const formData = new FormData();
    formData.append('recapFile', selectedFile.value);

    console.log('Sending FormData:', formData); // Debug log
    console.log('API Endpoint:', `matches/${props.match.id}/recap/prepare`); // Debug log

    const response = await fetchApi(`matches/${props.match.id}/recap/prepare`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log('API Response for prepare:', response); // Debug log

    recapData.value = response.recap_data;
    matchedPlayers.value = response.matched;
    unmatchedPlayers.value = response.unmatched;
    officialPlayers.value = response.official_players;

    // Initialize playerMappings for unmatched players
    playerMappings.value = {};
    unmatchedPlayers.value.forEach(player => {
      playerMappings.value[player.id] = ''; // Default to no mapping
    });

  } catch (e) {
    error.value = e.message;
    recapData.value = null;
    console.error('Error during prepareImport:', e); // Debug log
  } finally {
    isLoading.value = false;
  }
};

const importData = async () => {
  isLoading.value = true;
  error.value = null;

  if (!selectedFile.value) {
    error.value = "Le fichier de récapitulatif original n'a pas été trouvé.";
    isLoading.value = false;
    return;
  }

  try {
    // Create mappings for players that were manually selected in the UI
    const manualMappings = Object.keys(playerMappings.value)
      .filter(jsonId => playerMappings.value[jsonId] !== '')
      .map(jsonId => ({
        json_player_id: jsonId,
        db_user_id: playerMappings.value[jsonId]
      }));

    // Create mappings for players that were automatically matched by the backend.
    const automaticMappings = matchedPlayers.value.map(matchedPlayer => {
      // Find the full player details from the official list using the license number.
      const officialPlayer = officialPlayers.value.find(op => op.licence_number === matchedPlayer.id);
      
      // The `officialPlayer` object contains the database user ID under the `id` property.
      return {
        json_player_id: matchedPlayer.id,
        db_user_id: officialPlayer ? officialPlayer.id : null
      };
    }).filter(mapping => mapping.db_user_id != null); // Ensure we don't send null IDs

    // Combine both sets of mappings to create a complete list for the backend.
    const finalMappings = [...automaticMappings, ...manualMappings];

    const fileContent = await selectedFile.value.text();
    const recapDataObject = JSON.parse(fileContent);

    await fetchApi(`matches/${props.match.id}/recap/import`, {
      method: 'POST',
      body: JSON.stringify({
        recapData: recapDataObject,
        mappings: finalMappings
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    emit('import-success');
  } catch (e) {
    error.value = e.message;
    console.error('Error during importData:', e);
  } finally {
    isLoading.value = false;
  }
};

const resetImporter = () => {
  selectedFile.value = null;
  recapData.value = null;
  matchedPlayers.value = [];
  unmatchedPlayers.value = [];
  officialPlayers.value = [];
  playerMappings.value = {};
  error.value = null;
  isLoading.value = false;
};
</script>