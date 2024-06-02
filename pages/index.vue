<template>
  <!--<LandingMain :title="title" :description="description" /> -->
  <template v-for="(component, i) in components">
   {{i}} {{component}}
  </template>
</template>

<script setup lang="ts">
import type {PageAttributes} from "@/types/strapi.types";
import {useStrapiQueries} from "@/composables/useStrapiQueries"
import {useStrapiGraphql} from "@/composables/useStrapiGraphql";

const {fetchStrapiData} = useStrapiQueries();

const title = 'rollercoaster.dev'
const description = 'Exploring the intersection of technology, art and learning.'

const {getPage} = useStrapiGraphql()
const home = await getPage("home")
const {components} = home
</script>

<style scoped></style>