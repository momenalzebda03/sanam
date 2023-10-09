<template>
    <div class="d-flex justify-center mb-5 pb-5 mb-md-0 pb-md-0 px-3 px-md-0" v-if="props.indexNumber == 0">
        <router-link to="/"
            class="py-3 widthMobile w-75 divButton rounded-pill position-relative overflow-hidden text-white text-decoration-none borderWhite">
            <div class="ps-4 d-flex align-center position-relative">
                <div class="bg-white imageButton rounded-circle d-flex justify-center align-center pe-1">
                    <img src="~/assets/images&icons/imagesAll/iconArrawLeft.svg" alt="">
                </div>
                <div class="text-center w-100 textButton tagTransition me-5 me-md-0">
                    <span class="d-md-none text-h5 text-black">الفعاليات</span>
                    <span class="d-none d-md-block text-h5">تصفح لوازم الإبل</span>
                </div>
            </div>
        </router-link>
    </div>
    <div class="d-flex justify-center divWithdBlack" v-if="props.indexNumber == 1">
        <router-link to="/"
            class="mt-5 py-3 divButton divButtonBlack rounded-pill position-relative overflow-hidden text-black text-decoration-none borderBlack">
            <div class="ps-4 d-flex align-center position-relative">
                <div class="bg-black imageButton rounded-circle d-flex justify-center align-center pe-1">
                    <img src="~/assets/images&icons/imagesAll/iconArrawLeft.svg" alt="" class="imageWhite">
                </div>
                <div class="text-center w-100 textButton tagTransition me-5 me-md-0">
                    <span class="text-h5">تصفح لوازم الإبل</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup>
const props = defineProps({
    indexNumber: Number
});
</script>