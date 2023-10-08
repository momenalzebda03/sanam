<template>
    <section class="text-center position-relative sectionWorldOfCamels">
        <div class="containerNavbar">
            <div class="d-flex flex-column gap10">
                <h2 class="text-h4">عالم الإبل</h2>
                <h2 class="textNavbar">في قلب الصحراء، تتألق جوهرة الصمود والقوة في العالم العربي</h2>
                <p class="mt-5 pt-4">الإبل تحمل في ثناياها روح التراث العربي العريق وتاريخه المجيد. تعزز الاقتصاد وترسخ
                    الثقافة والهوية العربية، وتعكس قيم الكرامة والضيافة التي تتجذر في تقاليدنا الأصيلة. حفظ تراث الإبل يعد
                    اهتمامًا بحفظ أصالة العرب وتراثهم العريق. فتلك الجوهرة الثمينة تستحق أن الاهتمام والعناية لتستمر في
                    تجسيد معانيها العميقة وروعتها في قلوبنا.</p>
            </div>
        </div>
        <swiper class="mySwiper mySwiper1" :slidesPerView="4" :spaceBetween="30" :centeredSlides="true"
            :pagination="{ clickable: true, }">
            <swiper-slide>
                <img src="~/assets/images&icons/imagesWord/imageWord1.png" alt="" class="w-100">
            </swiper-slide>
            <swiper-slide>
                <img src="~/assets/images&icons/imagesWord/imageWord1.png" alt="" class="w-100">
            </swiper-slide>
            <swiper-slide>
                <img src="~/assets/images&icons/imagesWord/imageWord1.png" alt="" class="w-100">
            </swiper-slide>
            <swiper-slide>
                <img src="~/assets/images&icons/imagesWord/imageWord1.png" alt="" class="w-100">
            </swiper-slide>
            <swiper-slide>
                <img src="~/assets/images&icons/imagesWord/imageWord1.png" alt="" class="w-100">
            </swiper-slide>
        </swiper>
    </section>
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
