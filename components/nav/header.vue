<template>
  <header class="flex items-center h-14 px-4 lg:px-6 border-b border-primary w-100">
    <NuxtLink to="/" class="flex items-center justify-center">
      <NavLogo class="h-6 w-6 " />
      <!-- <span class="sr-only">Artistic Coding</span> -->
    </NuxtLink>
    <NavLinks :items="navItems" />

  </header>
</template>

<script setup lang="ts">
import type { NavLinkItem } from './links.vue';

export type NavHeaderProps = {
  navItems: NavLinkItem[]
}
defineProps<NavHeaderProps>()

</script>
