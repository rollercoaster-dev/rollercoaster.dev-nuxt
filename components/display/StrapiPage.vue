<script setup>
const props = defineProps({
  pageName: String,
})

const {getPage, getCleanComponents} = useStrapiGraphql();
const page = await getPage(props.pageName);
const components = computed(() => getCleanComponents(page));
// const title = ()=>`rollercoaster.dev ${ page.title ? `| ${page.title}` : ""  }`;
//
// defineOgImageComponent('Frame')
//   useSeoMeta({
//     title: title(),
//     ogTitle: title(),
//     description: page.description,
//     ogDescription: page.description,
//   })

</script>
<template>
  <div>
    <template v-if="components">
      <component
          v-for="(component, index) in components"
          :key="index"
          :is="component.component"
          v-bind="component.props"
      />
    </template>

  </div>
</template>