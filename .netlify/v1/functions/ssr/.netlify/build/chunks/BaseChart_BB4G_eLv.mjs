import { useSSRContext, mergeProps, createVNode, resolveDynamicComponent, computed } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper_ceIx8-CJ.mjs';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Pie, Doughnut, Bar } from 'vue-chartjs';

const _sfc_main$1 = {
  __name: 'StatCard',
  props: {
  label: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  subtext: {
    type: String,
    default: ''
  },
  icon: {
    type: Object,
    default: null
  },
  iconBgColor: {
    type: String,
    default: 'bg-blue-50'
  },
  iconColor: {
    type: String,
    default: 'text-blue-600'
  }
},
  setup(__props, { expose: __expose }) {
  __expose();



const __returned__ = {  };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    ssrRenderAttrs(mergeProps({ class: "bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between" }, _attrs))
  }><div><p class="text-sm text-gray-500 font-medium">${
    ssrInterpolate($props.label)
  }</p><p class="text-2xl font-bold text-gray-900 mt-1">${
    ssrInterpolate($props.value)
  }</p>`);
  if ($props.subtext) {
    _push(`<p class="text-xs text-gray-400 mt-1">${ssrInterpolate($props.subtext)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.icon) {
    _push(`<div class="${ssrRenderClass(`p-3 rounded-full ${$props.iconBgColor}`)}">`);
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent($props.icon), {
      class: `w-6 h-6 ${$props.iconColor}`
    }, null), _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/stats/kpi/StatCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const StatCard = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

const _sfc_main = {
  __name: 'BaseChart',
  props: {
  type: {
    type: String,
    required: true,
    validator: (value) => ['line', 'bar', 'doughnut', 'pie'].includes(value)
  },
  data: {
    type: Object,
    required: true
  },
  options: {
    type: Object,
    default: () => ({})
  }
},
  setup(__props, { expose: __expose }) {
  __expose();

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const props = __props;

const chartComponent = computed(() => {
  switch (props.type) {
    case 'line': return Line;
    case 'bar': return Bar;
    case 'doughnut': return Doughnut;
    case 'pie': return Pie;
    default: return Line;
  }
});

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

const chartOptions = computed(() => ({
  ...defaultOptions,
  ...props.options
}));

const chartData = computed(() => props.data);

const __returned__ = { props, chartComponent, defaultOptions, chartOptions, chartData, computed, get ChartJS() { return Chart }, get CategoryScale() { return CategoryScale }, get LinearScale() { return LinearScale }, get PointElement() { return PointElement }, get LineElement() { return LineElement }, get BarElement() { return BarElement }, get Title() { return Title }, get Tooltip() { return Tooltip }, get Legend() { return Legend }, get ArcElement() { return ArcElement }, get Line() { return Line }, get Bar() { return Bar }, get Doughnut() { return Doughnut }, get Pie() { return Pie } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full h-64" }, _attrs))}>`);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent($setup.chartComponent), {
    data: $setup.chartData,
    options: $setup.chartOptions
  }, null), _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/stats/charts/BaseChart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const BaseChart = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { BaseChart as B, StatCard as S };
