<script setup lang="ts">

const route = useRoute()

</script>
<template>
 <DisplayStrapiPage :pageName="route.params.pageName " />
</template>

<style scoped></style>