<template>
    <div>
        <component v-for="dynamicComponent in dynamicComponents" :key="dynamicComponent" :is="dynamicComponent" />
    </div>
</template>
  
<script setup>
const dynamicComponents = ref([
    'Header',
    'Main',
    'cards-sanam',
    'ImageCards',
    'WorldOfCamels',
    'Shepherd',
    'camel-supplies',
    'camelfarms',
    'camel-services',
    'Footer'
]);

const componentRegistry = {};

for (const componentName of dynamicComponents.value) {
    componentRegistry[componentName] = require(`~/components/${componentName}.vue`).default;
}
</script>

<!-- <template>
        <Header />
        <Main />
        <cards-sanam />
        <ImageCards />
        <WorldOfCamels />
        <Shepherd />
        <camel-supplies />
        <camelfarms />
        <camel-services />
        <Footer />    
</template> -->