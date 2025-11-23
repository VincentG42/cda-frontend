<template>
  <div class="relative w-full h-64">
    <component :is="chartComponent" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Bar, Doughnut, Pie } from 'vue-chartjs';

ChartJS.register(
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

const props = defineProps({
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
});

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
</script>
