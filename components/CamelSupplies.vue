<template>
    <section class="sectionWorldOfCamels containerNavbar">
        <component-text-box :propsTextBox="propsTextBox" />
        <swiper :slidesPerView="slidesPerView" :spaceBetween="20" :centeredSlides="true" class="mt-5 pt-5 swiperSupplies">
            <swiper-slide class="swiperText rounded-pill py-1 text-center activeTitle font-weight-bold hoverSwiper"
                v-for="(listSwiper, index) in listSwipers" :key="listSwiper"
                :class="{ 'activeSwiper': listSwiper.bollenSwpier }" @click="swiperClick(index)">
                <span>{{ listSwiper.slideSwiper }}</span>
            </swiper-slide>
        </swiper>
        <v-row class="mt-5 pt-5 gapRow">
            <v-col cols="12" md="6" lg="3">
                <div class="rounded-lg">
                    <router-link to="/"
                        class="border d-flex justify-center align-center text-black divCardSupplies position-relative">
                        <img src="~/assets/images&icons/imagesSupplies/imageHeadband.png" alt="" class="imageHeadband">
                        <div class="divHoverSupplies d-flex justify-center flex-column gap10">
                            <div class="divSuppliesBox text-center">
                                <img src="~/assets/images&icons/imagesSupplies/arrows.png" alt="">
                                <h2 class="activeTitle">أنقر</h2>
                                <span class="font-weight-bold">لعرض تفاصيل المنتج</span>
                            </div>
                        </div>
                    </router-link>
                    <div class="border d-flex justify-space-between align-center py-4 px-4 bg-white divShadowSupplies">
                        <div class="py-4 px-3 divMoney rounded-lg h-0 d-flex align-center">
                            <span class="sizeText14">ريال 25.50</span>
                        </div>
                        <div class="d-flex flex-column text-end">
                            <span>عقال الإبل</span>
                            <span class="textSuppliesBox">يوضع العقال على الإبل مـ ...</span>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <p>welcome</p>
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <p>welcome</p>
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <p>welcome</p>
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <p>welcome</p>
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <p>welcome</p>
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <p>welcome</p>
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <p>welcome</p>
            </v-col>
        </v-row>
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