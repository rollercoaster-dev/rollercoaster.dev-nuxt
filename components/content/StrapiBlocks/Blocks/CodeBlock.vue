<script setup lang="ts">
import type { CodeBlockNode, DefaultInlineNode, TextInlineNode } from "@/components/content/StrapiBlocks/types/blocks";
import { codeToHtml } from 'shiki'

export type CodeBlockProps = {
  block: CodeBlockNode
}
const props = defineProps<CodeBlockProps>()
const codeHtml = ref('');

onMounted(async () => {
  const codeBlocks = props.block.children as TextInlineNode[];
  const codePromises = codeBlocks.map(block => {
    return codeToHtml(block.text, {
      lang: 'typescript',
      theme: 'synthwave-84'
    });
  });
  const codeResults = await Promise.all(codePromises);
  codeHtml.value = codeResults.join('\n');
});
</script>

<template>
  <div v-html="codeHtml" class="code-block m-4"></div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.code-block {

  :deep() {
    pre {
      border-radius: 4px;
      border: 1px solid $gray-dark;
      padding: 1.5rem !important;
    }
  }
}
</style>