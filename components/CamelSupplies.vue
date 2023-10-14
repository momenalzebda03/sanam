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
            <v-col v-for="(postCard, index) in postCards" :key="index" cols="12" md="6" lg="3"
                :data-card="postCard.dataFilter" :class="{ 'd-none': postCard.isFiltered }">
                <router-link to="/" class="position-relative text-decoration-none hoverBoxRouter">
                    <div class="position-absolute divHeart rounded-circle hoverText" @click="functionHeartAnimation(index)"
                        :class="{ 'divHeartAnimation': postCard.isAnimating }">
                        <i class="fas fa-heart imageHeart activeTitle d-none"></i>
                        <i class="far fa-heart imageHeart activeTitle"></i>
                    </div>
                    <div class="border d-flex justify-center align-center text-black divCardSupplies position-relative">
                        <img :src="postCard.imageProduct" alt="" class="imageHeadband tagTransition">
                        <div class="divHoverSupplies d-flex justify-center flex-column gap10">
                            <div class="divSuppliesBox text-center tagTransition">
                                <img src="~/assets/images&icons/imagesSupplies/arrows.png" alt="">
                                <h2 class="activeTitle">أنقر</h2>
                                <span class="font-weight-bold">لعرض تفاصيل المنتج</span>
                            </div>
                        </div>
                    </div>
                </router-link>
                <div class="border d-flex justify-space-between align-center py-4 px-4 bg-white divShadowSupplies">
                    <div class="py-4 px-3 divMoney rounded-lg h-0 d-flex align-center">
                        <span class="sizeText14">{{ postCard.moneySpan }}</span>
                    </div>
                    <div class="d-flex flex-column text-end">
                        <span>{{ postCard.product }}</span>
                        <span class="textSuppliesBox">{{ postCard.textproduct }}</span>
                    </div>
                </div>
            </v-col>
        </v-row>
        <component-button :indexNumber="indexNumber" />
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
const indexNumber = ref(1);
const slidesPerView = ref(6);
const propsTextBox = ref(1);
const listSwipers = ref([
    { slideSwiper: 'أدوات تنظيف', id: 'CamelHeadband', bollenSwpier: false },
    { slideSwiper: 'أدوية الإبل', id: 'FadamaShabak', bollenSwpier: false },
    { slideSwiper: 'أدوات ربط الإبل', id: 'Ceuta7Metres', bollenSwpier: false },
    { slideSwiper: 'أدوات الحلاقة', id: 'CamelNecklace', bollenSwpier: false },
    { slideSwiper: 'أدوات الترقيم', id: 'CamelHalter', bollenSwpier: false },
    { slideSwiper: 'اكسسوارات الزينة', id: 'Speech', bollenSwpier: false },
    { slideSwiper: 'كل المنتجات', id: 'all', bollenSwpier: true },
])

const postCards = ref([
    { moneySpan: 'ريال 25.50', dataFilter: 'CamelHeadband', imageProduct: 'http://localhost:3000/_nuxt/assets/images&icons/imagesSupplies/imageHeadband.png', product: 'عقال الإبل', textproduct: 'يوضع العقال على الإبل مـ ...', isAnimating: false },
    { moneySpan: 'ريال 59.00', dataFilter: 'FadamaShabak', imageProduct: 'http://localhost:3000/_nuxt/assets/images&icons/imagesSupplies/Network.png', product: 'فدامة شبك', textproduct: 'توضع الفدامة على فم ا ...', isAnimating: false },
    { moneySpan: 'ريال 43.00', dataFilter: 'Ceuta7Metres', imageProduct: 'http://localhost:3000/_nuxt/assets/images&icons/imagesSupplies/Ceuta.png', product: 'سبتة ٧ متر', textproduct: 'تستخدم السبتة في رب....', isAnimating: false },
    { moneySpan: 'ريال 63.00', dataFilter: 'CamelNecklace', imageProduct: 'http://localhost:3000/_nuxt/assets/images&icons/imagesSupplies/contract.png', product: 'عقد الإبل', textproduct: 'يستخدم في تزيين الإبل  ...', isAnimating: false },
    { moneySpan: 'ريال 43.00', dataFilter: 'Ceuta7Metres', imageProduct: 'http://localhost:3000/_nuxt/assets/images&icons/imagesSupplies/Ceuta.png', product: 'سبتة ٧ متر', textproduct: 'تستخدم السبتة في رب....', isAnimating: false },
    { moneySpan: 'ريال 59.00', dataFilter: 'CamelHalter', imageProduct: 'http://localhost:3000/_nuxt/assets/images&icons/imagesSupplies/halter.png', product: 'رسن الإبل', textproduct: 'يوضع على الرأس ويستخدمـ...', isAnimating: false },
    { moneySpan: 'ريال 43.00', dataFilter: 'Speech', imageProduct: 'http://localhost:3000/_nuxt/assets/images&icons/imagesSupplies/Speech.png', product: 'خطام ', textproduct: 'يوضع الخطام على الإبل م...', isAnimating: false },
    { moneySpan: 'ريال 77.00', dataFilter: 'Poor', imageProduct: 'http://localhost:3000/_nuxt/assets/images&icons/imagesSupplies/Poor.png', product: 'فقاير', textproduct: 'يستخدم في تزيين الإبل ف ...', isAnimating: false }
])

const toggleFilter = (dataFilter) => {
    postCards.value.forEach((card) => {
        if (card.dataFilter === dataFilter) {
            card.isFiltered = true;
        } else {
            card.isFiltered = false;
        }
    });
};

const swiperClick = (index) => {
    const selectedSwiper = listSwipers.value[index];
    if (selectedSwiper) {
        toggleFilter(selectedSwiper.id);
    }
    postCards.value.forEach((card) => {
        if (card.dataFilter !== selectedSwiper.id) {
            card.isFiltered = false;
        }
    });
    listSwipers.value.forEach((item, idx) => {
        item.bollenSwpier = idx === index;
    });
};

const functionHeartAnimation = (index) => {
    postCards.value[index].isAnimating = !postCards.value[index].isAnimating;
};

onMounted(() => {
    window.innerWidth <= 990 ? slidesPerView.value = 2 : '';
});
</script>