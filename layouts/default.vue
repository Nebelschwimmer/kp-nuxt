<template>
  <v-layout class="bg-gradient">
    <AppHeader />
    <v-main style="min-height: 100vh">
      <div class="mt-2"><slot /></div>
    </v-main>
    <BottomNav />
  </v-layout>
</template>

<script lang="ts" setup>
import AppHeader from "~/components/Navigation/AppHeader.vue";
import BottomNav from "~/components/Navigation/BottomNav.vue";
</script>
