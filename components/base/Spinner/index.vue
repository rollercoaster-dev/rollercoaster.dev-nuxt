<script setup lang="ts">
import { computed, ref } from 'vue';

const props = withDefaults(
    defineProps<{
      className?: string;
    }>(),
    {
      className: '',
    }
);

const spinnerRef = ref<HTMLDivElement | null>(null);

const spinnerClasses = computed(() => [
  'w-16',
  'h-16',
  'border-4',
  'border-t-4',
  'border-gray-200',
  'border-t-gray-600',
  'rounded-full',
  'animate-spin',
  props.className,
]);
</script>
<template>
  <div ref="spinnerRef" :class="spinnerClasses"></div>
</template>
<style scoped>
/* Tailwind CSS classes will handle the styling */
</style>