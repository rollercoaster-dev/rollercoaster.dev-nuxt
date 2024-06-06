<script setup lang="ts">
import { defineProps, onMounted } from 'vue'
import type {Link} from "@/types/strapi.types";

const props = defineProps({
  items: Array as () => Link[]
})

</script>

<template>
  <nav class="ml-auto flex gap-4 sm:gap-6">
    <template v-for="(item, index) in props.items" :key="index">
      <NuxtLink class="text-sm font-medium hover:text-neon-500 transition-colors" :to="item.url">{{ item.label }}
      </NuxtLink>
    </template>
  </nav>
</template>
