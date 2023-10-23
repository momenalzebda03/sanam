<template>
    <section class="mt-5 pt-2 text-center position-relative sectionCardsSanam">
        <div class="containerNavbar">
            <component-text-box :propsTextBox="propsTextBox" />
            <v-row class="mt-5 pt-5">
                <v-col cols="12" md="4" class="position-relative" v-for="forLoopCardsSanam in forLoopCardsSanams"
                    :key="forLoopCardsSanam">
                    <div class="divCard px-5 py-5 d-flex flex-column align-center gap10 h-100">
                        <img :src="forLoopCardsSanam.image" alt="" class="position-absolute imageBackgroundCards">
                        <div class="divCardImage tagTransition rounded-circle d-flex justify-center align-center">
                            <img :src="forLoopCardsSanam.image" alt="">
                        </div>
                        <div class="d-flex flex-column gap10 divHoverTop tagTransition position-relative">
                            <h2>{{ forLoopCardsSanam.title }}</h2>
                            <p class="textCard sizeText14">{{ forLoopCardsSanam.text }}</p>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <component-shepherd :indexNumber="indexNumber" />
        </div>
    </section>
</template>

<script setup>
import ComponentShepherd from '@/components/folderLadbingPage/ComponentShepherd.vue';
const indexNumber = ref(0);
const propsTextBox = ref(0);

const forLoopCardsSanams = ref([
    { image: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesAboutUs/iconAboutUs1.svg', title: 'الأهداف', text: 'نتجاوز الحدود التقليدية ونجسد الروح الإبداعية في مجال رعاية الإبل. نسعى جاهدين لتعزيز التراث العربي ونشر الوعي بأهمية الإبل من خلال منصة شاملة ومتقدمة تلبي جميع احتياجات الإبل وتضمن رفاهيتها وصحتها.' },
    { image: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesAboutUs/iconAboutUs2.svg', title: 'الرسالة', text: 'إبداعنا يكمن في دمج التراث العربي العريق وروح الابتكار التقني. حيث نهدف إلى إيصال رسالتنا الهامة بطرق مبتكرة وفعالة، وذلك بتعزيز الوعي بأهمية الإبل ومساهمتها الحيوية في ثقافتنا واقتصادنا.' },
    {
        image: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesAboutUs/iconAboutUs3.svg', title: 'الرؤية', text: 'نطمح لأن نصبح روادًا في سوق الإبل، وذلك من خلال التركيز على الابتكار والتفرد والتميز باستخدام أحدث التقنيات والأساليب لتحسين جودة الرعاية ورفع مستوى الإنتاجية لجميع رعاة الإبل..'
    }
])
</script>