<template>
  <template v-for="(component) in components" :key="component.id">
    {{component.type}}
    <component :is="component.component" v-bind="component.props" />
  </template>
</template>

<script setup lang="ts">
import {useStrapiQueries} from "@/composables/useStrapiQueries"
import {useStrapiGraphql} from "@/composables/useStrapiGraphql";

const title = 'rollercoaster.dev'
const description = 'Exploring the intersection of technology, art and learning.'

const {getPage, getCleanComponents} = useStrapiGraphql()
const home = await getPage("home")
const components = computed(()=> {
  return getCleanComponents(home)
})

</script>

<style scoped></style>