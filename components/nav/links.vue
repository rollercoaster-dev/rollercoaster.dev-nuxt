<script setup lang="ts">
import { defineProps, onMounted } from 'vue'
// import { NuxtLink } from '#app'

export type NavLinkItem = {
  title: string;
  url: string;
}

// Correctly define props
const props = defineProps({
  items: Array as () => NavLinkItem[]
})

</script>

<template>
  <nav class="ml-auto flex gap-4 sm:gap-6">
    <template v-for="(item, index) in props.items" :key="index">
      <NuxtLink class="text-sm font-medium hover:text-neon-500 transition-colors" :to="item.url">{{ item.title }}
      </NuxtLink>
    </template>
  </nav>
</template>
