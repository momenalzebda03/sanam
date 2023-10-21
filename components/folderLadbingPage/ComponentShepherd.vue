<template>
    <div class="mt-5 pt-3" v-if="props.indexNumber == 0">
        <div class="w-100 d-flex justify-center">
            <div class="d-flex align-center overflow-hidden flex-column divTextHeight">
                <router-link to="/"
                    class="d-flex gap25 align-center justify-center activeTitle text-decoration-none hoverText">
                    <i class="fas fa-chevron-left"></i>
                    <span class="text-h5 font-weight-bold text-no-wrap">المزيد حول سنام</span>
                </router-link>
                <router-link to="/" class="d-flex gap25 align-center justify-center activeTitle text-decoration-none">
                    <i class="fas fa-chevron-left"></i>
                    <span class="text-h5 font-weight-bold text-no-wrap">المزيد حول سنام</span>
                </router-link>
            </div>
        </div>
    </div>
    <div class="w-100 d-flex justify-center justify-md-end" v-if="props.indexNumber == 1">
        <div class="d-flex align-center overflow-hidden flex-column divTextHeight">
            <router-link to="/" class="d-flex gap25 align-center justify-center text-decoration-none hoverText text-white">
                <i class="fas fa-chevron-left"></i>
                <span class="text-h5 font-weight-bold text-no-wrap">نادي الإبل السعودي</span>
            </router-link>
            <router-link to="/" class="d-flex gap25 align-center justify-center text-decoration-none text-white">
                <i class="fas fa-chevron-left"></i>
                <span class="text-h5 font-weight-bold text-no-wrap">نادي الإبل السعودي</span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    indexNumber: Number
});
</script>