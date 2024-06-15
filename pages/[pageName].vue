<script setup lang="ts">

const route = useRoute()

const pageName = computed(() => !route.params.pageName ? route.params.pageName : "home" )

</script>
<template>
 <DisplayStrapiPage :pageName="pageName" />
</template>

<style scoped></style>