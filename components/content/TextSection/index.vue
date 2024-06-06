<script setup lang="ts">
import type { TextSectionProps } from './TextSection.types';

const props = withDefaults(defineProps<TextSectionProps>(), {
  headline: "",
  headlineLevel: 2,
  body: ()=>([])
});

const headlineLevel = computed(()=>(`h${props.headlineLevel || 1}`))
</script>

<template>
  <section class="container my-12 space-y-4">
  <div class="max-w-[800px] mx-auto">
    <component :is="headlineLevel" class="mb-4">
      {{headline}}
    </component>
    <div class="body">
      <ContentStrapiBlocks :blocks="body" />/
    </div>
  </div>
  </section>

</template>

<style scoped>

</style>