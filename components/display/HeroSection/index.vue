<script setup lang="ts">
import type { HeroSectionProps } from "@/components/display/HeroSection/HeroSection.types";
import {AspectRatio} from "@/components/ui/aspect-ratio";

const props = defineProps<HeroSectionProps>();

const renderBlocks = computed<boolean>(()=>{
  return !(typeof props.body === "string")
})


</script>

<template>

  <section class="container space-y-2 my-12 flex flex-col justify-center items-center" >
    <h1 class="text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
      {{ headline }}
    </h1>
    <ContentStrapiBlocks v-if=" body && !(typeof body === 'string')" :blocks="body" />
    <p v-else-if="body" >{{body}}</p>
    <div v-else><slot/></div>
    <div class="w-3/4 max-[640px]:w-full">

    <AspectRatio v-if="media && media.url" :ratio="16 / 9" class="bg-muted mx-auto">
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
