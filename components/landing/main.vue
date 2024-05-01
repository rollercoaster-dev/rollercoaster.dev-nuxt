<template>
  <section class="w-full py-12 md:py-24 lg:py-32">
    <div class="container px-4 md:px-6">
      <div class="flex flex-col items-center space-y-4 text-center">
        <BaseHeroText :title="title" :description="description" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HeroTextProps } from '../base/HeroText.vue';

export type LandingMainProps = HeroTextProps
defineProps<LandingMainProps>()
</script>

<style scoped></style>