<template>
    <section class="mt-5 pt-2 text-center position-relative">
        <div class="containerNavbar containerNavbarMobile">
            <v-row class="mt-5 pt-5 px-0">
                <v-col cols="12" md="4" v-for="forLoopImageCard in forLoopImageCards" :key="forLoopImageCard">
                    <div class="position-relative imageColor text-white overflow-hidden">
                        <img :src="forLoopImageCard.imageCard" alt="" class="w-100">
                        <div class="position-relative d-flex justify-center">
                            <div class="position-absolute textBottom tagTransition px-5 d-flex flex-column">
                                <h2>{{ forLoopImageCard.title }}</h2>
                                <div class="position-relative divTextImage tagTransition d-flex flex-column">
                                    <h3>{{ forLoopImageCard.text }}</h3>
                                    <div class="w-100 d-flex justify-center">
                                        <router-link to="/"
                                            class="d-flex justify-center align-center text-white text-decoration-none w-0">
                                            <i class="fas fa-chevron-left me-3 mt-1"></i>
                                            <span class="text-no-wrap">{{ forLoopImageCard.readMore }}</span>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </section>
</template>

<script setup>
const forLoopImageCards = ref([
    { imageCard: 'http://localhost:3000/_nuxt/assets/images&icons/componentImages/imageComponent3.png', title: 'خدمات الإبل', text: 'تعرف على مجموعة متنوعة من المنتجات والمعدات التي تلبي احتياجات الإبل وتساهـ ...', readMore: 'قراءة المزيد' },
    { imageCard: 'http://localhost:3000/_nuxt/assets/images&icons/componentImages/imageComponent2.png', title: 'لوازم الإبل', text: 'تصفح مجموعتنا الواسعة من لوازم الإبل كل ما تحتاجه لرعاية الإبل بأفضل جودة وأسـ...', readMore: 'قراءة المزيد' },
    { imageCard: 'http://localhost:3000/_nuxt/assets/images&icons/componentImages/imageComponent1.png', title: 'عالم الإبل', text: 'تعرّف على الإبل واكتشف تاريخها العريق وثقافتها وأهميتها وكيفية رعايتها وتدريبـ ...', readMore: 'قراءة المزيد' }
])
</script>