import { useSSRContext, ref, computed, onMounted, watch, mergeProps } from 'vue';
import { u as useApi } from './useApi_BbvW2iJx.mjs';
import { B as BaseChart, S as StatCard } from './BaseChart_BB4G_eLv.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper_ceIx8-CJ.mjs';

const _sfc_main = {
  __name: 'PlayerStatsDashboard',
  props: {
  playerId: {
    type: Number,
    required: true
  }
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const { fetchApi } = useApi();
const isLoading = ref(false);
const error = ref(null);
const stats = ref(null);
const historicalPoints = ref([]);

const fetchPlayerStats = async (id) => {
  if (!id) return;
  isLoading.value = true;
  error.value = null;
  stats.value = null;
  historicalPoints.value = [];

  try {
    // 1. Fetch Averages
    const avgResponse = await fetchApi(`players/${id}/stats/averages`);
    stats.value = avgResponse;

    // 2. Fetch Historical Points (for the chart)
    const histResponse = await fetchApi(`players/${id}/stats/historical/points`);
    historicalPoints.value = histResponse;

  } catch (e) {
    error.value = e.message || 'Erreur lors du chargement des statistiques.';
    console.error(e);
  } finally {
    isLoading.value = false;
  }
};

const calculateEfficiency = (s) => {
  // Simple efficiency formula approximation: PTS + REB + AST + STL + BLK - Missed FG - Missed FT - TO
  // We don't have blocks or missed shots explicit counts in the DTO easily without calculation, 
  // so we'll do a simplified version: PTS + REB + AST + STL - TO
  if (!s) return 0;
  return (s.avgPoints + s.avgRebounds + s.avgAssists + s.avgSteals - s.avgTurnovers).toFixed(1);
};

// Chart Data Configuration
const historicalData = computed(() => {
  return {
    labels: historicalPoints.value.map(h => new Date(h.match_date).toLocaleDateString()),
    datasets: [
      {
        label: 'Points',
        backgroundColor: '#3B82F6',
        borderColor: '#3B82F6',
        data: historicalPoints.value.map(h => h.value),
        tension: 0.3,
        fill: true
      }
    ]
  };
});

const distributionData = computed(() => {
  if (!stats.value) return { labels: [], datasets: [] };
  return {
    labels: ['Points', 'Rebonds', 'Passes', 'Interceptions'],
    datasets: [
      {
        backgroundColor: ['#F97316', '#3B82F6', '#22C55E', '#A855F7'],
        data: [
          stats.value.avgPoints, 
          stats.value.avgRebounds, 
          stats.value.avgAssists, 
          stats.value.avgSteals
        ]
      }
    ]
  };
});

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }
  },
  scales: {
    y: { beginAtZero: true }
  }
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

onMounted(() => {
  fetchPlayerStats(props.playerId);
});

watch(() => props.playerId, (newId) => {
  fetchPlayerStats(newId);
});

const __returned__ = { props, fetchApi, isLoading, error, stats, historicalPoints, fetchPlayerStats, calculateEfficiency, historicalData, distributionData, lineChartOptions, doughnutOptions, ref, onMounted, watch, computed, get useApi() { return useApi }, StatCard, BaseChart };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
  if ($setup.isLoading) {
    _push(`<div class="flex justify-center items-center h-64"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>`);
  } else if ($setup.error) {
    _push(`<div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-md"><div class="flex"><div class="flex-shrink-0"><svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg></div><div class="ml-3"><p class="text-sm text-red-700">${ssrInterpolate($setup.error)}</p></div></div></div>`);
  } else if ($setup.stats) {
    _push(`<div class="space-y-6"><div class="flex justify-between items-center"><h2 class="text-2xl font-bold text-gray-900">Statistiques de la Saison</h2><span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">${ssrInterpolate($setup.stats.matchesPlayed)} Matchs Joués </span></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">`);
    _push(ssrRenderComponent($setup["StatCard"], {
      label: "Points / Match",
      value: $setup.stats.avgPoints,
      "icon-bg-color": "bg-orange-100",
      "icon-color": "text-orange-600"
    }, null, _parent));
    _push(ssrRenderComponent($setup["StatCard"], {
      label: "Rebonds / Match",
      value: $setup.stats.avgRebounds,
      "icon-bg-color": "bg-blue-100",
      "icon-color": "text-blue-600"
    }, null, _parent));
    _push(ssrRenderComponent($setup["StatCard"], {
      label: "Passes / Match",
      value: $setup.stats.avgAssists,
      "icon-bg-color": "bg-green-100",
      "icon-color": "text-green-600"
    }, null, _parent));
    _push(ssrRenderComponent($setup["StatCard"], {
      label: "Évaluation",
      value: $setup.calculateEfficiency($setup.stats),
      subtext: "Est. Efficiency",
      "icon-bg-color": "bg-purple-100",
      "icon-color": "text-purple-600"
    }, null, _parent));
    _push(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><h3 class="text-sm font-medium text-gray-500 mb-2">Tirs (FG)</h3><div class="flex items-end space-x-2"><span class="text-2xl font-bold text-gray-900">${
      ssrInterpolate($setup.stats.fgPercentage)
    }%</span></div><div class="w-full bg-gray-200 rounded-full h-2.5 mt-2"><div class="bg-blue-600 h-2.5 rounded-full" style="${
      ssrRenderStyle({ width: $setup.stats.fgPercentage + '%' })
    }"></div></div></div><div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><h3 class="text-sm font-medium text-gray-500 mb-2">3 Points</h3><div class="flex items-end space-x-2"><span class="text-2xl font-bold text-gray-900">${
      ssrInterpolate($setup.stats.threePtPercentage)
    }%</span></div><div class="w-full bg-gray-200 rounded-full h-2.5 mt-2"><div class="bg-green-500 h-2.5 rounded-full" style="${
      ssrRenderStyle({ width: $setup.stats.threePtPercentage + '%' })
    }"></div></div></div><div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><h3 class="text-sm font-medium text-gray-500 mb-2">Lancers Francs (1pt)</h3><div class="flex items-end space-x-2"><span class="text-2xl font-bold text-gray-900">${
      ssrInterpolate($setup.stats.ftPercentage)
    }%</span></div><div class="w-full bg-gray-200 rounded-full h-2.5 mt-2"><div class="bg-orange-500 h-2.5 rounded-full" style="${
      ssrRenderStyle({ width: $setup.stats.ftPercentage + '%' })
    }"></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100"><h3 class="text-lg font-bold text-gray-900 mb-4">Évolution des Performances</h3>`);
    if ($setup.historicalData.labels.length > 0) {
      _push(ssrRenderComponent($setup["BaseChart"], {
        type: "line",
        data: $setup.historicalData,
        options: $setup.lineChartOptions
      }, null, _parent));
    } else {
      _push(`<div class="h-64 flex items-center justify-center text-gray-400"> Pas assez de données </div>`);
    }
    _push(`</div><div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100"><h3 class="text-lg font-bold text-gray-900 mb-4">Répartition des Actions</h3>`);
    if ($setup.stats) {
      _push(ssrRenderComponent($setup["BaseChart"], {
        type: "doughnut",
        data: $setup.distributionData,
        options: $setup.doughnutOptions
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div>`);
  } else {
    _push(`<div class="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200"><p class="text-gray-500">Aucune statistique disponible pour ce joueur.</p></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/stats/PlayerStatsDashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const PlayerStatsDashboard = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { PlayerStatsDashboard as P };
