<template>
  <div class="flex flex-col flex-grow min-h-screen">
    <NavHeader :nav-items="navItems" />
    <main class="flex flex-col flex-grow">
      <NuxtPage />
    </main>
    <BaseFooter :copyright-text="copyrightText" :links="footerLinks" />
  </div>
</template>

<script setup lang="ts">
const navItems = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Projects', url: '/projects' },
  { title: 'Contact', url: '/contact' },
]
const footerLinks = [
  { title: 'Impressum', url: '/impressum' },
  { title: 'Privacy Policy', url: '/privacy' },
]
const currentYear = new Date().getFullYear();
const copyrightText = `© ${currentYear} rollercoaster.dev. All rights reserved.`;
</script>

<style scoped>
header {
  line-height: 1.5;
  max-width: 100vw;
}

nav>a {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    margin-left: auto;
    margin-right: auto;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
