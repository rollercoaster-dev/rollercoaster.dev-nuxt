<script setup lang="ts">
import { type LinkInlineNode } from "../types/blocks";

export type Props = { block: LinkInlineNode; targetBlank?: boolean };
defineProps<Props>();
</script>
<template>
  <a
     :href="block.url"
     class="link-block"
     :target="targetBlank ? '_blank' : '_self'">
    <slot></slot>
  </a>
</template>

<style scoped></style>
