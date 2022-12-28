<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-app>
    <v-navigation-drawer>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </v-navigation-drawer>

    <v-app-bar title="Chess openings review by Genius"></v-app-bar>

    <v-main><RouterView /></v-main>
  </v-app>
</template>
