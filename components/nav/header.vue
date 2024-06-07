<template>
  <header class="flex items-center h-14 px-4 lg:px-6 border-b border-primary">
    <NuxtLink to="/" class="flex items-center justify-center">
      <NavLogo class="h-6 w-6 " />
    </NuxtLink>
    <NavLinks v-if="navItems" :items="navItems" />

  </header>
</template>

<script setup lang="ts">
import type {Link} from "@/types/strapi.types";

export type NavHeaderProps = {
  navItems: Link[]
}
defineProps<NavHeaderProps>()

</script>
