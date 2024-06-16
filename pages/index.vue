<script setup lang="ts">
const router = useRouter();
router.replace({path: '/home'});

defineOgImageComponent('Frame')
useSeoMeta({
  title: "rollercoaster.dev",
  ogTitle: "rollercoaster.dev",
  description: "Coming soon!",
  ogDescription: "Coming soon!",
})

</script>

<template>
  <Head>
    <Title>rollercoaster.dev</Title>
  </Head>
  <DisplayHeroSection
    headline="rollercoaster.dev"
  ></DisplayHeroSection>
</template>