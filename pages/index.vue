<template>
    <ComponentHeader />
    <component v-for="dynamicComponent in dynamicComponents" :key="dynamicComponent" :is="dynamicComponent" />
    <ComponentFooter />
</template>

<script setup>
import ComponentHeader from '@/components/folderAllProject/Header.vue';
import ComponentFooter from '@/components/folderAllProject/Footer.vue';
const dynamicComponents = [
    'Main',
    'CardsSanam',
    'ImageCards',
    'WorldOfCamels',
    'Shepherd',
    'CamelSupplies',
    'Camelfarms',
    'CamelServices',
].map((componentName) =>
    defineAsyncComponent(() => import(`@/components/folderLadbingPage/${componentName}.vue`))
);
</script>