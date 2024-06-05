<script setup lang="ts">
import type {ListBlockNode} from "@/components/content/StrapiBlocks/types/blocks";

export type ListProps = {
  block: ListBlockNode
}
defineProps<ListProps>()
</script>
<template>
  <template v-if="block.format === 'ordered'">
  <ol class="list-decimal ml-4"><slot/></ol>
  </template>
  <template v-else>
    <ul class="list-disc ml-4"><slot/></ul>
  </template>
</template>

<style scoped>

</style>