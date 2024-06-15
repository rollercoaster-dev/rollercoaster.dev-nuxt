<script setup lang="ts">
import Robot from "@/assets/images/uh-oh-robo.png"

const router = useRouter();
const strapiData = ref()
const isLoading = ref(true);
const error = ref();


      router.replace({path: '/home'});

</script>

<template>
  <div v-if="isLoading" class="flex justify-center items-center flex-grow">
    <BaseSpinner></BaseSpinner>
  </div>
  <div v-else-if="error">{{ error }}</div>
  <DisplayHeroSection v-else-if="!strapiData"
    headline="rollercoaster.dev"
    body="Welcome to rollercoaster.dev"
  ></DisplayHeroSection>

</template>