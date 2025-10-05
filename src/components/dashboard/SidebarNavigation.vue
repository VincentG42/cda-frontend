<template>
  <nav class="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col">
    <div class="p-4">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Navigation</h2>
      
      <ul class="space-y-2">
        <li v-for="item in navigationItems" :key="item.id">
          <button @click="$emit('section-change', item.id)" :class="[
            'w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200',
            activeSection === item.id ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
          ]">
            <component :is="item.icon" :class="[activeSection === item.id ? 'text-blue-600' : 'text-gray-500']" />
            <div class="flex-1">
              <p :class="['text-sm font-medium', activeSection === item.id ? 'text-blue-700' : 'text-gray-900']">
                {{ item.label }}
              </p>
              <p :class="['text-xs', activeSection === item.id ? 'text-blue-600' : 'text-gray-500']">
                {{ item.description }}
              </p>
            </div>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { h } from 'vue';

const BarChart3 = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M3 3v18h18' }), h('path', { d: 'M18 17V9' }), h('path', { d: 'M13 17V5' }), h('path', { d: 'M8 17v-3' })]);
const Shield = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })]);
const Calendar = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('rect', { width: '18', height: '18', x: '3', y: '4', rx: '2', ry: '2' }), h('line', { x1: '16', x2: '16', y1: '2', y2: '6' }), h('line', { x1: '8', x2: '8', y1: '2', y2: '6' }), h('line', { x1: '3', x2: '21', y1: '10', y2: '10' })]);
const Megaphone = (props) => h('svg', { ...props, xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [h('path', { d: 'm3 11 18-5v12L3 14v-3z' }), h('path', { d: 'M11.6 16.8a3 3 0 1 1-5.8-1.6' })]);

defineProps({
  activeSection: String
});
defineEmits(['section-change']);

const navigationItems = [
  { id: 'dashboard', label: 'Mon Tableau de Bord', icon: BarChart3, description: 'Vue d\'ensemble' },
  { id: 'team', label: 'Mon Équipe', icon: Shield, description: 'Infos et joueurs' },
  { id: 'matches', label: 'Mes Matchs', icon: Calendar, description: 'Calendrier et résultats' },
  { id: 'events', label: 'Événements du Club', icon: Megaphone, description: 'Actualités' }
];
</script>
