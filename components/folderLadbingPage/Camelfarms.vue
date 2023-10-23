<template>
    <section class="sectionFarms divWithdBlack containerNavbar overflow-hidden">
        <v-row class="position-relative flex-column-reverse flex-md-row">
            <v-col md="6">
                <div class="d-flex flex-column flex-md-row overflow-hidden">
                    <div class="slider">
                        <div class="slide-track flex-row flex-md-column">
                            <div class="slide" v-for="imageLoopOne in imageLoopOnes" :key="imageLoopOne">
                                <img :src="imageLoopOne.imageSlide" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="slider slider1">
                        <div class="slide-track flex-row flex-md-column">
                            <div class="slide" v-for="imageLoopTow in imageLoopTows" :key="imageLoopTow">
                                <img :src="imageLoopTow.imageSlide" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col md="6">
                <div class="imageBackgroundFrams text-end mt-5 pt-5">
                    <img src="~/assets/images&icons/langingPage/imagesMazayen/imageMazaynGamelMain.png" class="widthMobile">
                </div>
                <div class="text-white text-end divMaintFarms me-5 d-flex flex-column gap10">
                    <h2>مـزايـن الإبـل | تجلُّ الفخامة والتراث</h2>
                    <h3>تنافس الإبل الأصيلة في مسابقات مثيرة لتتوِّج بالجمال والتميُّز.</h3>
                    <p>فعالية تراثية تبرز سحر الإبل وأهميتها الثقافية، تتنافس فيها الإبل الأصيلة لنيل لقب الأجمل بناءً
                        على مقاييس معينة. حيث تعتبر هذه الفعالية ملتقى اجتماعي وثقافي يجمع عشاق الإبل والمهتمين بها
                        لمشاركة الخبرات والمعرفة .</p>
                    <component-button :indexNumber="indexNumber" />
                </div>
            </v-col>
        </v-row>
    </section>
</template>

<script setup>
import ComponentButton from '@/components/folderLadbingPage/ComponentButton.vue';
const indexNumber = ref(2);
const imageLoopOnes = ref([
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanLeft/mazayn1.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanLeft/mazayn2.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanLeft/mazayn3.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanLeft/mazayn4.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanLeft/mazayn5.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanLeft/mazayn6.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanLeft/mazayn7.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanLeft/mazayn1.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanLeft/mazayn2.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanLeft/mazayn3.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanLeft/mazayn4.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanLeft/mazayn5.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanLeft/mazayn6.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanLeft/mazayn7.png' }
])

const imageLoopTows = ref([
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanRight/mazayn1.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanRight/mazayn2.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanRight/mazayn3.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanRight/mazayn4.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanRight/mazayn5.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanRight/mazayn6.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanRight/mazayn7.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanRight/mazayn1.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanRight/mazayn2.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanRight/mazayn3.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanRight/mazayn4.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanRight/mazayn5.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanRight/mazayn6.png' },
    { imageSlide: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesMazayen/mazanRight/mazayn7.png' }
])
</script>