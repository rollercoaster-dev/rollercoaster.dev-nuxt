<template>
  <span :style="textStyles">{{ block.text }}</span>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { defineProps } from "vue";

import { type TextInlineNode } from "../types/blocks";

const props = defineProps<{
  block: TextInlineNode;
}>();

const textStyles = computed(() => ({
  fontWeight: props.block.bold ? "600" : "normal",
  fontStyle: props.block.italic ? "italic" : "normal",
  textDecoration: `${props.block.underline ? "underline" : ""} ${props.block.strikethrough ? "line-through" : ""}`,
  fontFamily: props.block.code ? "monospace" : "",
}));
</script>
