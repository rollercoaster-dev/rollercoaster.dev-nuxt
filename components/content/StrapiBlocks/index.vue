<script setup lang="ts">
import { defineProps } from "vue";

import ContentStrapiBlocks from "./index.vue";
import ImageBlock from "./Blocks/Image.vue";
import LinkBlock from "./Blocks/Link.vue";
import TextBlock from "./Blocks/Text.vue";
import CodeBlock from "./Blocks/CodeBlock.vue"
import type { BlocksRenderNode, BlocksValue } from "./types/blocks";

export type Props = {
  blocks: BlocksRenderNode[];
  withTargetBlank?: boolean;
};

const props = defineProps<Props>();

const componentForBlock = (block: BlocksRenderNode) => {
  console.log(block.type)
  switch (block.type) {
    case "paragraph":
      return "p";
    case "text":
      return TextBlock;
    case "quote":
      return "blockquote";
    case "heading":
      return `h${block.level}`;
    case "link":
      return LinkBlock;
    case "image":
      return ImageBlock;
    case "list":
      return block.format === "ordered" ? "ol" : "ul";
    case "list-item":
      return "li";
    default:
    case "code":
      return CodeBlock;
      return null;
  }
};
</script>
<template>
  <!-- @vue-ignore  it says i isn't used but it is -->
  <template v-for="(block, i) in props.blocks" :key="`block-${i}`">
    <component
               :is="componentForBlock(block)"
               :block="block"
               :target-blank="(withTargetBlank && block.type === 'link') || undefined">
      <template v-if="'children' in block && block.children.length">
        <ContentStrapiBlocks
                              v-if="'children' in block && block.children.length"
                              :with-target-blank="withTargetBlank"
                              :blocks="block.children as BlocksValue" />
      </template>
    </component>
  </template>
</template>