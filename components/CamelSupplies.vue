<template>
    <section class="position-relative sectionWorldOfCamels">
        <div class="containerNavbar">
            <div class="d-flex flex-column gap10 text-center">
                <h2 class="text-h4">لـــوازم الإبـــل</h2>
                <h2 class="textNavbar">عالمًا من الراحة والتميز لشريكك الثمين</h2>
                <p class="mt-5 pt-2">ندرك أن للإبل احتياجات عديدة ومستلزمات لا غنى عنها. ومن هنا نسعى جاهدين لتلبية تلك
                    الاحتياجات بأفضل جودة وأعلى معايير. ونوفر مجموعة واسعة من لوازم الإبل بدءًا من الأعلاف المغذية وصولاً
                    إلى المعدات والأدوات الضرورية لرعايتها بأسعار مناسبة ومنافسة لتحقيق أفضل قيمة ممكنة لمالكي الإبل.</p>
            </div>
        </div>
    </section>
    <swiper :slidesPerView="6" :spaceBetween="30" :centeredSlides="true" :pagination="{ clickable: true, }"
        class="mySwiper mt-5 pt-5">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>
