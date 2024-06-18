<script setup lang="ts">

const route = useRoute()

const pageName = computed(() => route.params.pageName as string || "_landing" )

</script>
<template>
 <DisplayStrapiPage :pageName="pageName" />
</template>

<style scoped></style>