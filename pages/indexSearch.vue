<template>
    <component v-for="dynamicComponent in dynamicComponents" :key="dynamicComponent" :is="dynamicComponent" />
</template>

<script setup>
const dynamicComponents = [
    'SearchNone',
].map((componentName) =>
    defineAsyncComponent(() => import(`@/components/folderSearch/${componentName}.vue`))
);
</script>