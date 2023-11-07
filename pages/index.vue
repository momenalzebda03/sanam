<template>
    <component v-for="dynamicComponent in dynamicComponents" :key="dynamicComponent" :is="dynamicComponent" />
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

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

onMounted(() => {
    return {
        modules: [Pagination],
    };
})
</script>