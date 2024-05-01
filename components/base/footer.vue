<template>
  <footer
          class="w-full py-6 px-4 md:px-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between">
    <p class="text-xs text-gray-400">
      {{ copyrightText }}
    </p>
    <nav class="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
      <NuxtLink
                v-for="(link, index) in links"
                :key="index"
                :to="link.url"
                class="text-xs hover:text-neon-500 transition-colors">
        {{ link.title }}
      </NuxtLink>
    </nav>
  </footer>
</template>

<script setup>
import { defineProps } from 'vue'

// Define the props the Footer component expects
const props = defineProps({
  copyrightText: String,
  links: Array
})
</script>

<style scoped>
/* Additional styles if needed */
</style>
