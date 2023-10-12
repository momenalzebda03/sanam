<template>
    <section class="position-relative sectionWorldOfCamels position-relative sectionSupplies">
        <component-text-box :propsTextBox="propsTextBox" />
        <swiper :slidesPerView="slidesPerView" :spaceBetween="20" :centeredSlides="true" class="mt-5 pt-5 swiperSupplies">
            <swiper-slide class="swiperText rounded-pill py-1 text-center activeTitle font-weight-bold hoverSwiper"
                v-for="(listSwiper, index) in listSwipers" :key="listSwiper"
                :class="{ 'activeSwiper': listSwiper.bollenSwpier }" @click="swiperClick(index)">
                <span>{{ listSwiper.slideSwiper }}</span>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
            slidesPerView,
        };
    },
};
</script>

<script setup>
const slidesPerView = ref(6);
const propsTextBox = ref(1);
const listSwipers = ref([
    { slideSwiper: "أدوات تنظيف", bollenSwpier: false },
    { slideSwiper: "أدوية الإبل", bollenSwpier: false },
    { slideSwiper: "أدوات ربط الإبل", bollenSwpier: false },
    { slideSwiper: "أدوات الحلاقة", bollenSwpier: false },
    { slideSwiper: "أدوات الترقيم", bollenSwpier: false },
    { slideSwiper: "اكسسوارات الزينة", bollenSwpier: false },
    { slideSwiper: "كل المنتجات", bollenSwpier: true },
])

const swiperClick = (index) => {
    listSwipers.value.forEach((item, idx) => {
        item.bollenSwpier = idx === index;
    });
};

onMounted(() => {
    window.innerWidth <= 990 ? slidesPerView.value = 2 : '';
});
</script>