<script setup lang="ts">
export type HeroTextProps = {
  title: string;
  description: string;
}
defineProps<HeroTextProps>();
</script>

<template>
  <div class="space-y-2">
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
      {{ title }}
    </h1>
    <p class="mx-auto max-w-[700px] text-gray-400 md:text-xl lg:text-base/relaxed xl:text-xl/relaxed">
      {{ description }}
    </p>
  </div>
</template>

<style scoped></style>
