<script setup lang="ts">
const title = "rollercoaster.dev | sisyphus monkey";
const description = "we need your definitions for the upcoming exhibition _BLAH_ 18-20.10.24 from Goegeoux Mooney featuring rollercoaster.dev"
useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
})
import sisyphusMonkey from "@/assets/images/sisyphus-monkey.png"
</script>

<template>
  <div class="container flex flex-col justify-center h-full">
    <DisplayHeroSection
      headline="sisyphus monkey"
      :media="{
      url:sisyphusMonkey,
      alt:'A vast, surreal landscape filled with countless typewriters, each operated by a monkey. Among them, one monkey has written a masterpiece resembling Shakespeare\'s work. In the center, a modern, intricate machine tirelessly generates poems, reminiscent of Stanislaw Lem\'s imaginative stories. Overseeing this scene is a figure clearly depicting Sisyphus, endlessly pushing a giant boulder up a hill, symbolizing the futility and repetition. The background is an abstract blend of literary elements and mechanical parts, creating a fusion of classical and futuristic aesthetics., photo, analog style, photorealistic, 100mm lens'
      }"
      :CTA="{
      label: 'Add your definition!',
      url:'/sisyphus-monkey/dictionary'
      }"
    />
    <div class="w-full max-w-screen-md px-4 mx-auto my-4">
      <p>text about the exhibition</p>
      <p>text about the piece</p>
      <p>text about rollercoaster.dev's take on the piece</p>/
    </div>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="modal">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>

</style>