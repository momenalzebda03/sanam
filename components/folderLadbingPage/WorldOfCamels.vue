<template>
    <section class="position-relative sectionWorldOfCamels">
        <component-text-box :propsTextBox="propsTextBox" />
        <!-- <swiper :slidesPerView="4" :spaceBetween="190" class="overflow-visible swiperCamels" :centeredSlides="true"
            :initialSlide="2">
            <swiper-slide v-for="wordLoop in wordLoops" :key="wordLoop">
                <div class="position-relative imageColor imageColor1 text-white">
                    <img :src="wordLoop.image" alt="" class="swiperImage">
                    <div class="position-absolute textBottom textBottom1 tagTransition text-center">
                        <div class="opacity0 tagTransition">
                            <h2 class="text-h5">{{ wordLoop.titleOne }}</h2>
                            <h3 class="text-h6">{{ wordLoop.titleTow }}</h3>
                        </div>
                        <div class="hoverImage tagTransition d-none justify-space-between position-absolute">
                            <router-link to="/"
                                class="rounded-circle borderWhite divCircle d-flex justify-center align-center text-white text-decoration-none">
                                <i class="fas fa-mouse-pointer iconSize"></i>
                            </router-link>
                            <div class="text-end">
                                <h2 class="text-h5">{{ wordLoop.titleOne }}</h2>
                                <h3>{{ wordLoop.titleTow }}</h3>
                                <div class="mt-4">
                                    <router-link to="/" class="bg-white px-3 py-3 rounded-pill text-decoration-none">
                                        {{ wordLoop.time }}
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper> -->
        <component-button :indexNumber="indexNumber" />
    </section>
</template>

<script setup>
import ComponentTextBox from '@/components/folderLadbingPage/ComponentTextBox.vue';
import ComponentButton from '@/components/folderLadbingPage/ComponentButton.vue';
const indexNumber = ref(1);
const propsTextBox = ref(1);

const wordLoops = ref([
    { image: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesWord/imageWorld1.png', titleOne: 'رمز للتكيف', titleTow: 'جسد متفرد بقدرات هائلة', time: '8 دقائق قراءة' },
    { image: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesWord/imageWorld2.png', titleOne: 'رحلة عبر الزمن', titleTow: 'الإبل في الثقافة والتاريخ', time: '8 دقائق قراءة' },
    { image: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesWord/imageWorld3.png', titleOne: 'نهضة حضارية', titleTow: 'دور الإبل في الاقتصاد', time: '8 دقائق قراءة' },
    { image: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesWord/imageWorld1.png', titleOne: 'رمز للتكيف', titleTow: 'جسد متفرد بقدرات هائلة', time: '8 دقائق قراءة' },
    { image: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesWord/imageWorld2.png', titleOne: 'رحلة عبر الزمن', titleTow: 'الإبل في الثقافة والتاريخ', time: '8 دقائق قراءة' }
])
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