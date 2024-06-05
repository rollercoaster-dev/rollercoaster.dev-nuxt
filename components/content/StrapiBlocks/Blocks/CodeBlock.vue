<script setup lang="ts">
import type {CodeBlockNode, DefaultInlineNode, TextInlineNode} from "@/components/content/StrapiBlocks/types/blocks";
import {codeToHtml} from 'shiki'

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
      theme: 'vitesse-dark'
    });
  });
  const codeResults = await Promise.all(codePromises);
  codeHtml.value = codeResults.join('\n');
});
</script>

<template>
    <div v-html="codeHtml"></div>
</template>

<style scoped>

</style>