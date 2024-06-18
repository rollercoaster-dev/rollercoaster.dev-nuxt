<script setup lang="ts">


defineOgImageComponent('Frame')
useSeoMeta({
  title: "rollercoaster.dev",
  ogTitle: "rollercoaster.dev",
  description: "Coming soon!",
  ogDescription: "Coming soon!",
})

const {getPageLinks} = useStrapiGraphql()
const {main: navItems, footer: footerLinks} = await getPageLinks(["main", "footer"])

const currentYear = new Date().getFullYear();
const copyrightText = `© ${currentYear} rollercoaster.dev. All rights reserved.`;

</script>
<template>
  <div class="flex flex-col flex-grow min-h-screen">
    <NavHeader :nav-items="navItems"/>
    <main class="flex flex-col flex-grow">
      <NuxtPage/>
    </main>
    <NavFooter :copyright-text="copyrightText" :links="footerLinks"/>
  </div>
</template>
<style scoped></style>
