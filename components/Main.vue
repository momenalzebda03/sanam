<template>
    <main class="sectionMain w-100 d-flex align-end">
        <div class="d-flex align-center justify-center position-absolute w-100 sectionVedioAndImage">
            <video autoplay muted loop class="position-absolute w-100 h-100 d-none d-md-block">
                <source src="~/assets/images&icons/images&viedoMain/video.mp4">
            </video>
            <img src="~/assets/images&icons/images&viedoMain/imageMobile.png" alt=""
                class="position-absolute w-100 h-100 imageMainMobile d-md-none">
            <div class="text-white d-flex flex-column gap25">
                <div class="text-center">
                    <h2 class="text-h1">الإبل</h2>
                    <h3 class="sizeMain text-h2">عِزٌ لأهْلِها والعَزيزُ يُعَز</h3>
                </div>
                <component-button :indexNumber="indexNumber" />
            </div>
        </div>
        <div class="containerNavbar w-100 pb-5 pb-sm-1 mb-lg-5 position-relative overflow-hidden">
            <v-row class="align-end flex-column-reverse flex-md-row">
                <v-col md="5" lg="2">
                    <div class="d-flex align-center gapIcon text-white font-weight-bold divMouse w-0 widthMobile justify-center justify-md-start"
                        @click="scrollToElement">
                        <div
                            class="px-5 pt-4 pb-3 borderWhite w-0 d-flex justify-center align-center text-white rounded-pill">
                            <div class="mt-3">
                                <img src="~/assets/images&icons/images&viedoMain/iconArrawoBottom.svg" alt=""
                                    class="imageAnimation">
                            </div>
                        </div>
                        <span class="text-no-wrap">تابع للاسفل</span>
                    </div>
                </v-col>
                <v-col class="px-0">
                    <div class="d-flex justify-center justify-md-end py-0 px-0">
                        <div class="text-center text-white py-2 divNews font-weight-bold">
                            <h2 class="text-h5">اخر الأخبار</h2>
                        </div>
                    </div>
                    <div class="d-md-none divCarousel">
                        <swiper :pagination="true" :modules="modules" class="topSwiperMobile overflow-visible">
                            <swiper-slide class="overflow-hidden">
                                <router-link to="/"
                                    class="d-flex gap25 text-decoration-none hoverCard position-relative px-5 py-2 align-center bg-white mx-3 rounded-lg justify-end">
                                    <div class="text-end d-flex justify-end flex-column position-relative">
                                        <span class="textCard">١٢ مشروع ريادي في المملكة يستهدف هواة وملاك الإبل في مجال
                                            ا.....</span>
                                        <div class="text-end">
                                            <span class="text-h6 font-weight-bold activeTitle hoverPlus w-75"><i
                                                    class="fas fa-plus iconPlus"></i> متابعة المزيد</span>
                                        </div>
                                    </div>
                                    <div class="position-relative">
                                        <img src="~/assets/images&icons/images&viedoMain/imageNews3.png" alt=""
                                            class="rounded-lg imageMobile300">
                                    </div>
                                </router-link>
                            </swiper-slide>
                            <swiper-slide class="overflow-hidden">
                                <router-link to="/"
                                    class="d-flex gap25 text-decoration-none hoverCard position-relative px-5 py-2 align-center bg-white mx-3 rounded-lg justify-end">
                                    <div class="text-end d-flex justify-end flex-column position-relative">
                                        <span class="textCard">مزاين الإبل تبداً في العاشر من شهر أيلول تحت إشراف صاحب السـ
                                            ..... </span>
                                        <div class="text-end">
                                            <span class="text-h6 font-weight-bold activeTitle hoverPlus w-75"><i
                                                    class="fas fa-plus iconPlus"></i> متابعة المزيد</span>
                                        </div>
                                    </div>
                                    <div class="position-relative">
                                        <img src="~/assets/images&icons/images&viedoMain/imageNews1.png" alt=""
                                            class="rounded-lg imageMobile300">
                                    </div>
                                </router-link>
                            </swiper-slide>
                            <swiper-slide class="overflow-hidden">
                                <router-link to="/"
                                    class="d-flex gap25 text-decoration-none hoverCard position-relative px-5 py-2 align-center bg-white mx-3 rounded-lg justify-end">
                                    <div class="text-end d-flex justify-end flex-column position-relative">
                                        <span class="textCard">برعاية سمو الأمير محمد بن سلمان يتم إفتتاح أول مستشفى مختص
                                            بالـ ..... </span>
                                        <div class="text-end">
                                            <span class="text-h6 font-weight-bold activeTitle hoverPlus w-75"><i
                                                    class="fas fa-plus iconPlus"></i> متابعة المزيد</span>
                                        </div>
                                    </div>
                                    <div class="position-relative">
                                        <img src="~/assets/images&icons/images&viedoMain/imageNews2.png" alt=""
                                            class="rounded-lg imageMobile300">
                                    </div>
                                </router-link>
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div class="bg-white d-md-flex divBoxNews gapIcon justify-end px-5 py-5 d-none">
                        <router-link to="/"
                            class="d-flex gap25 text-decoration-none hoverCard position-relative justify-end align-center">
                            <div class="text-end d-flex justify-end flex-column position-relative w-50">
                                <span class="textCard">١٢ مشروع ريادي في المملكة يستهدف هواة وملاك الإبل في
                                    مجال ا.....</span>
                                <div class="text-end">
                                    <span class="text-h6 font-weight-bold activeTitle hoverPlus w-75"><i
                                            class="fas fa-plus iconPlus"></i> متابعة المزيد</span>
                                </div>
                            </div>
                            <div class="position-relative">
                                <img src="~/assets/images&icons/images&viedoMain/imageNews3.png" alt="" class="rounded-lg">
                            </div>
                        </router-link>
                        <router-link to="/"
                            class="d-flex gap25 text-decoration-none hoverCard position-relative justify-end align-center">
                            <div class="text-end d-flex justify-end flex-column position-relative w-50">
                                <span class="textCard">برعاية سمو الأمير محمد بن سلمان يتم إفتتاح أول مستشفى مختص بالـ .....
                                </span>
                                <div class="text-end">
                                    <span class="text-h6 font-weight-bold activeTitle hoverPlus w-75"><i
                                            class="fas fa-plus iconPlus"></i> متابعة المزيد</span>
                                </div>
                            </div>
                            <div class="position-relative">
                                <img src="~/assets/images&icons/images&viedoMain/imageNews2.png" alt="" class="rounded-lg">
                            </div>
                        </router-link>
                        <router-link to="/"
                            class="d-flex gap25 text-decoration-none hoverCard position-relative justify-end align-center">
                            <div class="text-end d-flex justify-end flex-column position-relative w-50">
                                <span class="textCard">مزاين الإبل تبداً في العاشر من شهر أيلول تحت إشراف صاحب
                                    السـ ..... </span>
                                <div class="text-end">
                                    <span class="text-h6 font-weight-bold activeTitle hoverPlus w-75"><i
                                            class="fas fa-plus iconPlus"></i> متابعة المزيد</span>
                                </div>
                            </div>
                            <div class="position-relative">
                                <img src="~/assets/images&icons/images&viedoMain/imageNews1.png" alt="" class="rounded-lg">
                            </div>
                        </router-link>
                    </div>
                </v-col>
            </v-row>
        </div>
    </main>
</template>

<script setup>
const indexNumber = ref(0);
function scrollToElement() {
    const scrollPosition = 660;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
    });
}
</script>

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
