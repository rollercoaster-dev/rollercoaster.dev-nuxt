<template>
  <div class="flex flex-col flex-grow min-h-screen">
    <NavHeader :nav-items="navItems"/>
    <main class="flex flex-col flex-grow">
      <NuxtPage/>
    </main>
    <NavFooter :copyright-text="copyrightText" :links="footerLinks"/>
  </div>
</template>

<script setup lang="ts">
import {useStrapiGraphql} from "@/composables/useStrapiGraphql";

const {getPageLinks} = useStrapiGraphql()
const pageLinks = await getPageLinks()
const navItems = pageLinks.map(item => {
  if (item.url === "home") item.url = "/"
  return item
})
const footerLinks = [
  {title: 'Impressum', url: '/impressum'},
  {title: 'Privacy Policy', url: '/privacy'},
]
const currentYear = new Date().getFullYear();
const copyrightText = `© ${currentYear} rollercoaster.dev. All rights reserved.`;
</script>

<style scoped></style>
