<template>
  <template v-for="(component) in components" :key="component.id">
    <component :is="component.component" v-bind="component.props" />
  </template>
</template>

<script setup lang="ts">
import {useStrapiGraphql} from "@/composables/useStrapiGraphql";
const router = useRouter()

router.getRoutes()

const title = 'rollercoaster.dev'
const description = ''

const {getPage, getCleanComponents} = useStrapiGraphql()
const home = await getPage("home")
const components = computed(()=> {
  return getCleanComponents(home)
})

</script>

<style scoped></style>