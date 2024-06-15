<script setup lang="ts">
import {useStrapiGraphql} from "@/composables/useStrapiGraphql";
const router = useRouter();
const {getPageLinks} = useStrapiGraphql()
const {main, footer} = await getPageLinks(["main", "footer"])
const navItems = main;
const footerLinks = footer;

const currentYear = new Date().getFullYear();
const copyrightText = `© ${currentYear} rollercoaster.dev. All rights reserved.`;

onMounted(()=>{
  if (!main) {
    router.replace({path: '/'});
  }
})
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
