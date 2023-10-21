<template>
    <component v-for="dynamicComponent in dynamicComponents" :key="dynamicComponent" :is="dynamicComponent" />
</template>

<script setup>
const dynamicComponents = [
    'Header',
    'Main',
    'CardsSanam',
    'ImageCards',
    'WorldOfCamels',
    'Shepherd',
    'CamelSupplies',
    'Camelfarms',
    'CamelServices',
    'Footer'
].map((componentName) =>
    defineAsyncComponent(() => import(`@/components/folderLadbingPage/${componentName}.vue`))
);
</script>