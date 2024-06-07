<script setup>
const props = defineProps({
  pageName: String,
})

const {getPage, getCleanComponents} = useStrapiGraphql();
const page = await getPage(props.pageName);
const components = computed(() => getCleanComponents(page));
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