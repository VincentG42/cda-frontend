import { useSSRContext, ref, computed, onMounted, watch, mergeProps } from 'vue';
import { u as useApi } from './useApi_BbvW2iJx.mjs';
import { B as BaseChart, S as StatCard } from './BaseChart_BB4G_eLv.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper_ceIx8-CJ.mjs';

const _sfc_main = {
  __name: 'TeamStatsDashboard',
  props: {
  teamId: {
    type: [Number, String],
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
const analysisStats = ref(null);
const shootingStats = ref(null);
const periodStats = ref(null);

const fetchTeamStats = async (id) => {
  if (!id) return;
  isLoading.value = true;
  error.value = null;
  stats.value = null;
  analysisStats.value = null;
  shootingStats.value = null;
  periodStats.value = null;

  try {
    // 1. Overview
    const overviewRes = await fetchApi(`teams/${id}/stats/overview`);
    stats.value = overviewRes;

    // 2. Analysis
    const analysisRes = await fetchApi(`teams/${id}/stats/analysis`);
    analysisStats.value = analysisRes;

    // 3. Shooting
    const shootingRes = await fetchApi(`teams/${id}/stats/shooting`);
    shootingStats.value = shootingRes;

    // 4. Periods
    const periodRes = await fetchApi(`teams/${id}/stats/periods`);
    periodStats.value = periodRes;

  } catch (e) {
    error.value = e.message || 'Erreur lors du chargement des statistiques.';
    console.error(e);
  } finally {
    isLoading.value = false;
  }
};

// Chart Data Generators
const winLossData = computed(() => {
  if (!stats.value) return { labels: [], datasets: [] };
  return {
    labels: ['Victoires', 'Défaites'],
    datasets: [
      {
        backgroundColor: ['#22C55E', '#EF4444'],
        data: [stats.value.wins, stats.value.losses]
      }
    ]
  };
});

const analysisData = computed(() => {
  if (!analysisStats.value) return { labels: [], datasets: [] };
  return {
    labels: ['En gagnant', 'En perdant'],
    datasets: [
      {
        label: 'Moyenne Pts Encaissés',
        backgroundColor: ['#22C55E', '#EF4444'],
        data: [analysisStats.value.in_wins, analysisStats.value.in_losses]
      }
    ]
  };
});

const periodBarData = computed(() => {
  if (!periodStats.value) return { labels: [], datasets: [] };
  const periods = periodStats.value.per_period;
  return {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Équipe',
        backgroundColor: '#3B82F6',
        data: [periods[1].team, periods[2].team, periods[3].team, periods[4].team]
      },
      {
        label: 'Adversaire',
        backgroundColor: '#F97316',
        data: [periods[1].opponent, periods[2].opponent, periods[3].opponent, periods[4].opponent]
      }
    ]
  };
});

const evolutionLineData = computed(() => {
  if (!periodStats.value) return { labels: [], datasets: [] };
  const evolution = periodStats.value.evolution;
  return {
    labels: ['Début', 'Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Équipe',
        borderColor: '#3B82F6',
        backgroundColor: '#3B82F6',
        data: [0, evolution[0].team_score, evolution[1].team_score, evolution[2].team_score, evolution[3].team_score],
        fill: false,
        tension: 0.1
      },
      {
        label: 'Adversaire',
        borderColor: '#F97316',
        backgroundColor: '#F97316',
        data: [0, evolution[0].opponent_score, evolution[1].opponent_score, evolution[2].opponent_score, evolution[3].opponent_score],
        fill: false,
        tension: 0.1
      }
    ]
  };
});

const getDoughnutData = (percentage, color) => {
  return {
    labels: ['Réussis', 'Manqués'],
    datasets: [
      {
        backgroundColor: [color, '#E5E7EB'],
        data: [percentage, 100 - percentage],
        borderWidth: 0
      }
    ]
  };
};

// Options
const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: { beginAtZero: true }
  },
  plugins: {
    legend: { display: true, position: 'bottom' }
  }
};

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: { beginAtZero: true }
  },
  plugins: {
    legend: { display: true, position: 'bottom' }
  }
};

const percentageChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '75%',
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false }
  }
};

onMounted(() => {
  fetchTeamStats(props.teamId);
});

watch(() => props.teamId, (newId) => {
  fetchTeamStats(newId);
});

const __returned__ = { props, fetchApi, isLoading, error, stats, analysisStats, shootingStats, periodStats, fetchTeamStats, winLossData, analysisData, periodBarData, evolutionLineData, getDoughnutData, pieChartOptions, barChartOptions, lineChartOptions, percentageChartOptions, ref, onMounted, watch, computed, get useApi() { return useApi }, StatCard, BaseChart };
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
    _push(`<div class="space-y-6"><div class="flex justify-between items-center"><h2 class="text-2xl font-bold text-gray-900">Vue d&#39;ensemble de l&#39;Équipe</h2><span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">${ssrInterpolate($setup.stats.matchesPlayed)} Matchs Joués </span></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">`);
    _push(ssrRenderComponent($setup["StatCard"], {
      label: "Victoires",
      value: $setup.stats.wins,
      "icon-bg-color": "bg-green-100",
      "icon-color": "text-green-600"
    }, null, _parent));
    _push(ssrRenderComponent($setup["StatCard"], {
      label: "Défaites",
      value: $setup.stats.losses,
      "icon-bg-color": "bg-red-100",
      "icon-color": "text-red-600"
    }, null, _parent));
    _push(ssrRenderComponent($setup["StatCard"], {
      label: "Pts Marqués (Moy)",
      value: $setup.stats.avgPointsFor,
      "icon-bg-color": "bg-blue-100",
      "icon-color": "text-blue-600"
    }, null, _parent));
    _push(ssrRenderComponent($setup["StatCard"], {
      label: "Pts Encaissés (Moy)",
      value: $setup.stats.avgPointsAgainst,
      "icon-bg-color": "bg-orange-100",
      "icon-color": "text-orange-600"
    }, null, _parent));
    _push(`</div>`);
    if ($setup.shootingStats) {
      _push(`<div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100"><h3 class="text-lg font-bold text-gray-900 mb-4">Efficacité aux Tirs (Équipe)</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="text-center"><div class="relative w-32 h-32 mx-auto">`);
      _push(ssrRenderComponent($setup["BaseChart"], {
        type: "doughnut",
        data: $setup.getDoughnutData($setup.shootingStats.fg_percentage, '#3B82F6'),
        options: $setup.percentageChartOptions
      }, null, _parent));
      _push(`<div class="absolute inset-0 flex items-center justify-center flex-col"><span class="text-2xl font-bold text-gray-900">${
        ssrInterpolate($setup.shootingStats.fg_percentage)
      }%</span><span class="text-xs text-gray-500">FG</span></div></div><p class="mt-2 text-sm text-gray-600">${
        ssrInterpolate($setup.shootingStats.details.fgm)
      } / ${
        ssrInterpolate($setup.shootingStats.details.fga)
      }</p></div><div class="text-center"><div class="relative w-32 h-32 mx-auto">`);
      _push(ssrRenderComponent($setup["BaseChart"], {
        type: "doughnut",
        data: $setup.getDoughnutData($setup.shootingStats.three_pt_percentage, '#22C55E'),
        options: $setup.percentageChartOptions
      }, null, _parent));
      _push(`<div class="absolute inset-0 flex items-center justify-center flex-col"><span class="text-2xl font-bold text-gray-900">${
        ssrInterpolate($setup.shootingStats.three_pt_percentage)
      }%</span><span class="text-xs text-gray-500">3PT</span></div></div><p class="mt-2 text-sm text-gray-600">${
        ssrInterpolate($setup.shootingStats.details['3pm'])
      } / ${
        ssrInterpolate($setup.shootingStats.details['3pa'])
      }</p></div><div class="text-center"><div class="relative w-32 h-32 mx-auto">`);
      _push(ssrRenderComponent($setup["BaseChart"], {
        type: "doughnut",
        data: $setup.getDoughnutData($setup.shootingStats.ft_percentage, '#F97316'),
        options: $setup.percentageChartOptions
      }, null, _parent));
      _push(`<div class="absolute inset-0 flex items-center justify-center flex-col"><span class="text-2xl font-bold text-gray-900">${
        ssrInterpolate($setup.shootingStats.ft_percentage)
      }%</span><span class="text-xs text-gray-500">1PT (LF)</span></div></div><p class="mt-2 text-sm text-gray-600">${
        ssrInterpolate($setup.shootingStats.details.ftm)
      } / ${
        ssrInterpolate($setup.shootingStats.details.fta)
      }</p></div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100"><h3 class="text-lg font-bold text-gray-900 mb-4">Ratio Victoires / Défaites</h3><div class="h-64">`);
    _push(ssrRenderComponent($setup["BaseChart"], {
      type: "pie",
      data: $setup.winLossData,
      options: $setup.pieChartOptions
    }, null, _parent));
    _push(`</div></div><div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100"><h3 class="text-lg font-bold text-gray-900 mb-4">Points Encaissés : Victoires vs Défaites</h3><div class="h-64">`);
    if ($setup.analysisStats) {
      _push(ssrRenderComponent($setup["BaseChart"], {
        type: "bar",
        data: $setup.analysisData,
        options: $setup.barChartOptions
      }, null, _parent));
    } else {
      _push(`<div class="h-full flex items-center justify-center text-gray-400"> Chargement de l&#39;analyse... </div>`);
    }
    _push(`</div></div></div>`);
    if ($setup.periodStats) {
      _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100"><h3 class="text-lg font-bold text-gray-900 mb-4">Moyenne de Points par Quart-Temps</h3><div class="h-64">`);
      _push(ssrRenderComponent($setup["BaseChart"], {
        type: "bar",
        data: $setup.periodBarData,
        options: $setup.barChartOptions
      }, null, _parent));
      _push(`</div></div><div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100"><h3 class="text-lg font-bold text-gray-900 mb-4">Évolution du Score (Moyenne)</h3><div class="h-64">`);
      _push(ssrRenderComponent($setup["BaseChart"], {
        type: "line",
        data: $setup.evolutionLineData,
        options: $setup.lineChartOptions
      }, null, _parent));
      _push(`</div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<div class="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200"><p class="text-gray-500">Aucune statistique disponible pour cette équipe.</p></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/stats/TeamStatsDashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const TeamStatsDashboard = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { TeamStatsDashboard as T };
