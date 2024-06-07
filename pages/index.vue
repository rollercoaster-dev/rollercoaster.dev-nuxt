<script setup lang="ts">
import Robot from "@/assets/images/uh-oh-robo.png"

const router = useRouter();
const strapiData = ref()
const isLoading = ref(true);
const error = ref();

onMounted(async () => {
  try {
    const {data} = await useFetch(`/strapi/pages`);
    strapiData.value = data.value
    console.log(strapiData.value)
    if (strapiData.value) {
      router.replace({path: '/home'});
    }
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div v-if="isLoading" class="flex justify-center items-center flex-grow">
    <BaseSpinner></BaseSpinner>
  </div>
  <div v-else-if="error">{{ error }}</div>
  <DisplayHeroSection v-else-if="!strapiData" headline="rollercoaster.dev"
                      body="We're having technical issues. Please come back later."
                      :media="{url:Robot, alt:'Robot has no clue what\'s going on'}"></DisplayHeroSection>

</template>