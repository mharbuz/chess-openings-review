<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import FenBoard from "../components/FenBoard.vue";
import { useOpeningsStore } from "@/stores/openings";
const openingsStore = useOpeningsStore();
openingsStore.fetchOpenings();
</script>

<template>
  <v-list dense>
    <v-list-item v-for="(item, i) in openingsStore.families" :key="i">
      <!--<v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>-->
      <v-list-tile-content>
        <p>{{ item.name }}</p>
        <FenBoard :fen="item.fen" />
      </v-list-tile-content>
    </v-list-item>
  </v-list>
  <TheWelcome />
</template>
