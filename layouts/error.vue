<script setup lang="ts">
import {useStrapiGraphql} from "@/composables/useStrapiGraphql";

const {getPageLinks} = useStrapiGraphql()
const {main} = await getPageLinks(["main", "footer"])



</script>
<template>
  <div class="flex flex-col flex-grow min-h-screen">
    <main class="flex flex-col flex-grow">
      <slot />
    </main>
  </div>
</template>
<style scoped></style>
