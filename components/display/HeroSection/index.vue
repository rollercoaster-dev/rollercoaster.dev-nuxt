<script setup lang="ts">
import type { HeroSectionProps } from "@/components/display/HeroSection/HeroSection.types";
import {AspectRatio} from "@/components/ui/aspect-ratio";

defineProps<HeroSectionProps>();
</script>

<template>

  <section class="container space-y-2 my-12 flex flex-col justify-center items-center" >
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
      {{ headline }}
    </h1>
    <ContentStrapiBlocks :blocks="body" />
    <div class="w-3/4 max-[640px]:w-full">
    <AspectRatio :ratio="16 / 9" class="bg-muted mx-auto">
      <img
          :src="media.url"
          :alt="media.alt"
          class="rounded-md object-cover w-full h-full"
      >
    </AspectRatio>
    </div>
  </section>
</template>

<style scoped></style>
