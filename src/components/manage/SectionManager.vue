<template>
  <div>
    <component :is="currentSectionComponent" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import UserManagement from './management/UserManagement.vue';
import TeamManagement from './management/TeamManagement.vue';
import MatchManagement from './management/MatchManagement.vue';
import EventManagement from './management/EventManagement.vue';
import CategoryManagement from './management/CategoryManagement.vue';
import SeasonManagement from './management/SeasonManagement.vue';

const props = defineProps({
  section: String
});

const sectionComponents = {
  users: UserManagement,
  teams: TeamManagement,
  matches: MatchManagement,
  events: EventManagement,
  categories: CategoryManagement,
  seasons: SeasonManagement
};

const currentSectionComponent = computed(() => sectionComponents[props.section] || null);
</script>
