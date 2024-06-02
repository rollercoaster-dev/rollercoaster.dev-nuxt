<script setup lang="ts">
import type { TextSectionProps } from './TextSection.types';

const props = withDefaults(defineProps<TextSectionProps>(), {
  headline: "",
  hLevel: 2,
  body: ()=>([])
});

const headlineLevel = computed(()=>(`h${props.hLevel}`))
</script>

<template>
  <section>
    <component :is="headlineLevel">
      {{headline}}
    </component>
    <div class="body">
      <ContentStrapiBlocks :blocks="body" />/
    </div>
  </section>

</template>

<style scoped>

</style>