<template>
    <section class="position-relative sectionWorldOfCamels">
        <component-text-box :propsTextBox="propsTextBox" />
        <swiper class="topSwiperMobile overflow-hidden py-3 d-md-none" :centeredSlides="true">
            <swiper-slide>
                <div class="position-relative imageColor imageColor1 text-white">
                    <img src="~/assets/images&icons/imagesWord/imageWorld1.png" alt="" class="swiperImage">
                    <div class="position-absolute textBottom textBottom1 text-center">
                        <div class="hoverImage tagTransition d-flex justify-space-between position-absolute align-end">
                            <router-link to="/"
                                class="rounded-circle borderWhite divCircle d-flex justify-center align-center text-white text-decoration-none">
                                <i class="fas fa-mouse-pointer iconSize"></i>
                            </router-link>
                            <div class="text-end">
                                <h2 class="titleCardText">رمز للتكيف</h2>
                                <h3 class="textCardText">جسد متفرد بقدرات هائلة</h3>
                                <div class="mt-4">
                                    <router-link to="/" class="bg-white px-5 py-2 rounded-pill text-decoration-none">
                                        8 دقائق قراءة
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="position-relative imageColor imageColor1 text-white">
                    <img src="~/assets/images&icons/imagesWord/imageWorld2.png" alt="" class="swiperImage">
                    <div class="position-absolute textBottom textBottom1 text-center">
                        <div class="hoverImage tagTransition d-flex justify-space-between position-absolute align-end">
                            <router-link to="/"
                                class="rounded-circle borderWhite divCircle d-flex justify-center align-center text-white text-decoration-none">
                                <i class="fas fa-mouse-pointer iconSize"></i>
                            </router-link>
                            <div class="text-end">
                                <h2 class="titleCardText">رمز للتكيف</h2>
                                <h3 class="textCardText">جسد متفرد بقدرات هائلة</h3>
                                <div class="mt-4">
                                    <router-link to="/" class="bg-white px-5 py-2 rounded-pill text-decoration-none">
                                        8 دقائق قراءة
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="position-relative imageColor imageColor1 text-white">
                    <img src="~/assets/images&icons/imagesWord/imageWorld3.png" alt="" class="swiperImage">
                    <div class="position-absolute textBottom textBottom1 text-center">
                        <div class="hoverImage tagTransition d-flex justify-space-between position-absolute align-end">
                            <router-link to="/"
                                class="rounded-circle borderWhite divCircle d-flex justify-center align-center text-white text-decoration-none">
                                <i class="fas fa-mouse-pointer iconSize"></i>
                            </router-link>
                            <div class="text-end">
                                <h2 class="titleCardText">رمز للتكيف</h2>
                                <h3 class="textCardText">جسد متفرد بقدرات هائلة</h3>
                                <div class="mt-4">
                                    <router-link to="/" class="bg-white px-5 py-2 rounded-pill text-decoration-none">
                                        8 دقائق قراءة
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="position-relative imageColor imageColor1 text-white">
                    <img src="~/assets/images&icons/imagesWord/imageWorld1.png" alt="" class="swiperImage">
                    <div class="position-absolute textBottom textBottom1 text-center">
                        <div class="hoverImage tagTransition d-flex justify-space-between position-absolute align-end">
                            <router-link to="/"
                                class="rounded-circle borderWhite divCircle d-flex justify-center align-center text-white text-decoration-none">
                                <i class="fas fa-mouse-pointer iconSize"></i>
                            </router-link>
                            <div class="text-end">
                                <h2 class="titleCardText">رمز للتكيف</h2>
                                <h3 class="textCardText">جسد متفرد بقدرات هائلة</h3>
                                <div class="mt-4">
                                    <router-link to="/" class="bg-white px-5 py-2 rounded-pill text-decoration-none">
                                        8 دقائق قراءة
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="position-relative imageColor imageColor1 text-white">
                    <img src="~/assets/images&icons/imagesWord/imageWorld2.png" alt="" class="swiperImage">
                    <div class="position-absolute textBottom textBottom1 text-center">
                        <div class="hoverImage tagTransition d-flex justify-space-between position-absolute align-end">
                            <router-link to="/"
                                class="rounded-circle borderWhite divCircle d-flex justify-center align-center text-white text-decoration-none">
                                <i class="fas fa-mouse-pointer iconSize"></i>
                            </router-link>
                            <div class="text-end">
                                <h2 class="titleCardText">رمز للتكيف</h2>
                                <h3 class="textCardText">جسد متفرد بقدرات هائلة</h3>
                                <div class="mt-4">
                                    <router-link to="/" class="bg-white px-5 py-2 rounded-pill text-decoration-none">
                                        8 دقائق قراءة
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <swiper :slidesPerView="4" :spaceBetween="190" class="overflow-visible d-none d-md-block swiperCamels"
            :centeredSlides="true">
            <swiper-slide>
                <div class="position-relative imageColor imageColor1 text-white">
                    <img src="~/assets/images&icons/imagesWord/imageWorld1.png" alt="" class="swiperImage">
                    <div class="position-absolute textBottom textBottom1 text-center">
                        <div class="opacity0 tagTransition">
                            <h2 class="text-h5">رمز للتكيف</h2>
                            <h3 class="text-h6">جسد متفرد بقدرات هائلة</h3>
                        </div>
                        <div class="hoverImage tagTransition d-none justify-space-between position-absolute">
                            <router-link to="/"
                                class="rounded-circle borderWhite divCircle d-flex justify-center align-center text-white text-decoration-none">
                                <i class="fas fa-mouse-pointer iconSize"></i>
                            </router-link>
                            <div class="text-end">
                                <h2 class="text-h5">رمز للتكيف</h2>
                                <h3>جسد متفرد بقدرات هائلة</h3>
                                <div class="mt-4">
                                    <router-link to="/" class="bg-white px-3 py-3 rounded-pill text-decoration-none">
                                        8 دقائق قراءة
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="position-relative imageColor imageColor1 text-white">
                    <img src="~/assets/images&icons/imagesWord/imageWorld2.png" alt="" class="swiperImage">
                    <div class="position-absolute textBottom textBottom1 text-center">
                        <div class="opacity0 tagTransition">
                            <h2 class="text-h5">رحلة عبر الزمن</h2>
                            <h3 class="text-h6">الإبل في الثقافة والتاريخ</h3>
                        </div>
                        <div class="hoverImage tagTransition d-none justify-space-between position-absolute">
                            <router-link to="/"
                                class="rounded-circle borderWhite divCircle d-flex justify-center align-center text-white text-decoration-none">
                                <i class="fas fa-mouse-pointer iconSize"></i>
                            </router-link>
                            <div class="text-end">
                                <h2 class="text-h5">رحلة عبر الزمن</h2>
                                <h3>الإبل في الثقافة والتاريخ</h3>
                                <div class="mt-4">
                                    <router-link to="/" class="bg-white px-3 py-3 rounded-pill text-decoration-none">
                                        8 دقائق قراءة
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="position-relative imageColor imageColor1 text-white">
                    <img src="~/assets/images&icons/imagesWord/imageWorld3.png" alt="" class="swiperImage">
                    <div class="position-absolute textBottom textBottom1 text-center">
                        <div class="opacity0 tagTransition">
                            <h2 class="text-h5">نهضة حضارية</h2>
                            <h3 class="text-h6">دور الإبل في الاقتصاد</h3>
                        </div>
                        <div class="hoverImage tagTransition d-none justify-space-between position-absolute">
                            <router-link to="/"
                                class="rounded-circle borderWhite divCircle d-flex justify-center align-center text-white text-decoration-none">
                                <i class="fas fa-mouse-pointer iconSize"></i>
                            </router-link>
                            <div class="text-end">
                                <h2 class="text-h5">نهضة حضارية</h2>
                                <h3>دور الإبل في الاقتصاد</h3>
                                <div class="mt-4">
                                    <router-link to="/" class="bg-white px-3 py-3 rounded-pill text-decoration-none">
                                        8 دقائق قراءة
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="position-relative imageColor imageColor1 text-white">
                    <img src="~/assets/images&icons/imagesWord/imageWorld1.png" alt="" class="swiperImage">
                    <div class="position-absolute textBottom textBottom1 text-center">
                        <div class="opacity0 tagTransition">
                            <h2 class="text-h5">رمز للتكيف</h2>
                            <h3 class="text-h6">جسد متفرد بقدرات هائلة</h3>
                        </div>
                        <div class="hoverImage tagTransition d-none justify-space-between position-absolute">
                            <router-link to="/"
                                class="rounded-circle borderWhite divCircle d-flex justify-center align-center text-white text-decoration-none">
                                <i class="fas fa-mouse-pointer iconSize"></i>
                            </router-link>
                            <div class="text-end">
                                <h2 class="text-h5">رمز للتكيف</h2>
                                <h3>جسد متفرد بقدرات هائلة</h3>
                                <div class="mt-4">
                                    <router-link to="/" class="bg-white px-3 py-3 rounded-pill text-decoration-none">
                                        8 دقائق قراءة
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="position-relative imageColor imageColor1 text-white">
                    <img src="~/assets/images&icons/imagesWord/imageWorld2.png" alt="" class="swiperImage">
                    <div class="position-absolute textBottom textBottom1 text-center">
                        <div class="opacity0 tagTransition">
                            <h2 class="text-h5">رحلة عبر الزمن</h2>
                            <h3 class="text-h6">الإبل في الثقافة والتاريخ</h3>
                        </div>
                        <div class="hoverImage tagTransition d-none justify-space-between position-absolute">
                            <router-link to="/"
                                class="rounded-circle borderWhite divCircle d-flex justify-center align-center text-white text-decoration-none">
                                <i class="fas fa-mouse-pointer iconSize"></i>
                            </router-link>
                            <div class="text-end">
                                <h2 class="text-h5">رحلة عبر الزمن</h2>
                                <h3>الإبل في الثقافة والتاريخ</h3>
                                <div class="mt-4">
                                    <router-link to="/" class="bg-white px-3 py-3 rounded-pill text-decoration-none">
                                        8 دقائق قراءة
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <component-button :indexNumber="indexNumber" />
    </section>
</template>

<script setup>
const indexNumber = ref(1);
const propsTextBox = ref(0);
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