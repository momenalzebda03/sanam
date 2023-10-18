<template>
    <div>
        <component v-for="dynamicComponent in dynamicComponents" :key="dynamicComponent" :is="dynamicComponent" />
    </div>
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
    defineAsyncComponent(() => import(`@/components/${componentName}.vue`))
);
</script>