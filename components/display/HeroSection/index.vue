<script setup lang="ts">
import type {HeroSectionProps} from "@/components/display/HeroSection/HeroSection.types";

defineProps<HeroSectionProps>();
</script>

<template>
  <div class="space-y-2">
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
      {{ title }}
    </h1>
    <ContentStrapiBlocks :blocks="body" />
    <AspectRatio :ratio="16 / 9" class="bg-muted mx-auto">
      <img
          :src="media.url"
          :alt="media.alt"
          class="rounded-md object-cover w-full h-full"
      >
    </AspectRatio>
  </div>
</template>

<style scoped></style>
