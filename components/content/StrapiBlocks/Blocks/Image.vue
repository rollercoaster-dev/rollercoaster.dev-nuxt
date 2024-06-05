<script setup lang="ts">
import { computed } from "vue";
import { defineProps } from "vue";
import type {ImageBlockNode} from "@/components/content/StrapiBlocks/types/blocks";



const props = defineProps<{
  block: ImageBlockNode;
}>();

const imageUrl = computed(() => props.block.image as unknown as string);
</script>
<template>
  <div>
    <img :src="imageUrl" :alt="block.children[0]?.text || 'Image'" />
  </div>
</template>
