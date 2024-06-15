<script setup lang="ts">
import { defineProps } from 'vue'
import type {Link} from "@/types/strapi.types";

export type FooterProps = {
  copyrightText: String;
  links?: Link[];
}

defineProps<FooterProps>()
</script>
<template>
  <footer
      class="w-full py-6 px-4 md:px-6 border-t border-primary flex flex-col-reverse md:flex-row items-center gap-5 md:justify-between">
    <p class="text-xs text-gray-400 my-auto">
      {{ copyrightText }}
    </p>
    <nav class="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
      <template v-if="links">
      <NuxtLink
          v-for="(link, index) in links"
          :key="index"
          :to="link.url"
          class="text-xs hover:text-neon-500 transition-colors">
        {{ link.label }}
      </NuxtLink>
      </template>
    </nav>
  </footer>
</template>
<style scoped>
/* Additional styles if needed */
</style>
