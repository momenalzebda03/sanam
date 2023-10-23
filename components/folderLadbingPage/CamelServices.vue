<template>
    <section class="containerNavbar mt-5 pt-5">
        <component-text-box :propsTextBox="propsTextBox" />
        <v-row class="mt-5">
            <div v-for="colImageLoop in colImageLoops" :key="colImageLoop">
                <v-col cols="12" class="d-flex flex-column gapRow" :md="colImageLoop.md">
                    <div class="position-relative divImageBlack text-white d-flex justify-center overflow-hidden">
                        <img :src="colImageLoop.image1" alt="" class="rounded-lg tagTransition w-100">
                        <div class="d-flex px-5 w-100 position-absolute tagTransition spanTextServices">
                            <router-link to="/" class="position-relative text-white">
                                <i
                                    class="fas fa-mouse-pointer tagTransition d-flex justify-center align-center iconServices rounded-circle iconSize position-absolute"></i>
                            </router-link>
                            <div class="d-flex justify-center w-100">
                                <h2>{{ colImageLoop.title1 }}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="position-relative divImageBlack text-white d-flex justify-center overflow-hidden">
                        <img :src="colImageLoop.image2" alt="" class="rounded-lg tagTransition w-100">
                        <div class="d-flex px-5 w-100 position-absolute tagTransition spanTextServices">
                            <router-link to="/" class="position-relative text-white">
                                <i
                                    class="fas fa-mouse-pointer tagTransition d-flex justify-center align-center iconServices rounded-circle iconSize position-absolute"></i>
                            </router-link>
                            <div class="d-flex justify-center w-100">
                                <h2>{{ colImageLoop.title2 }}</h2>
                            </div>
                        </div>
                    </div>
                </v-col>
            </div>
        </v-row>
    </section>
    <component-button :indexNumber="indexNumber" />
</template>

<script setup>
import ComponentTextBox from '@/components/folderLadbingPage/ComponentTextBox.vue';
import ComponentButton from '@/components/folderLadbingPage/ComponentButton.vue';
const propsTextBox = ref(3);
const indexNumber = ref(3);

const colImageLoops = ref([
    { mdRespons: 4, image1: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesServices/imageServices4.png', title1: 'ترقيم الإبل', image2: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesServices/imageServices5.png', title2: 'ملاج الإبل' },
    { mdRespons: 4, image1: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesServices/imageServices2.png', title1: 'حلاقة الوبر', image2: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesServices/imageServices3.png', title2: 'تنظيف الوبر' },
    { mdRespons: 6, image1: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesServices/imageServices1.png', title1: 'نقل الإبل' }
])
</script>