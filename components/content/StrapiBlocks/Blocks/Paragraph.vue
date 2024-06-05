<template>
  <p>
    <slot />
  </p>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import { type ParagraphBlockNode } from "../types/blocks";

defineProps<{
  block: ParagraphBlockNode;
}>();
</script>
<style lang="scss" scoped>

</style>