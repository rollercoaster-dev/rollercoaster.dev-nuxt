<script setup lang="ts">
import type { NuxtError } from '#app'
import robot from "assets/images/404.png";
definePageMeta({
  layout: 'error'
})
const error = useError();

const props = defineProps({
  error: Object as () => NuxtError
})

const headline = computed(()=>{
  if(props.error?.statusCode === 404) {
    return "404!"
  }
  return
})

const handleError = () => {
  clearError({
    redirect: '/',
  });
};
</script>

<template>
  <DisplayHeroSection :headline="`Oops! ${error?.statusCode}`" :media="{url:robot, alt:'These are not the pages you are looking for.'}">
    <template v-if="error?.statusCode === 404">
      <p>Sorry, that page doesn't exist.</p>
    </template>
    <template v-else>

      <p>
        <strong>{{ error?.message }}</strong>
      </p>
      <p>It looks like something broke.</p>
      <p>Sorry about that.</p>
    </template>
  </DisplayHeroSection>
      <div v-if="error" class="prose mx-auto w-fit">
        <p>
          Go back to
          <NuxtLink :to="'/'">home</NuxtLink>
        </p>
      </div>
</template>

<style scoped>

</style>

