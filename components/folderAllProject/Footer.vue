<template>
    <section class="sectionCenter containerNavbar mt-5 pt-5 position-absolute w-100">
        <div class="sectionFooterCenter rounded-xl text-white mt-5 py-5">
            <v-container>
                <v-row class="flex-column-reverse flex-md-row align-center">
                    <v-col cols="12" md="8">
                        <form>
                            <v-row class="flex-row-reverse">
                                <v-col cols="12" :md="loopInput.scrrenMd" v-for="loopInput in loopInputs"
                                    :key="loopInput.textLabel">
                                    <div class="position-relative">
                                        <input :type="loopInput.type" v-model="loopInput.inputlastName"
                                            class="w-100 rounded-pill bg-white py-5 px-5 text-end" required />
                                        <label class="formLabel position-absolute"
                                            :class="{ 'activeLabel': loopInput.hasText }"> {{ loopInput.textLabel }}
                                        </label>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="3">
                                    <input type="submit" class="activeSwiper w-100 py-5 rounded-pill inputSubmit"
                                        value="اشتراك">
                                </v-col>
                            </v-row>
                            <div class="d-flex me-3 mt-5 justify-center justify-md-end align-center gap10">
                                <label for="inputCheck" class="mt-1">أوافق على إستلام النشرة البريدية لمنصة سنام </label>
                                <input type="checkbox" id="inputCheck">
                            </div>
                        </form>
                    </v-col>
                    <v-col cols=" 12" md="4">
                        <div class="d-flex flex-column gap10 text-center text-md-end">
                            <h2>آخر الأخبار والتحديثات</h2>
                            <span>اشترك بالنشرة الإخبارية في سنام للحصول على أحدث الأخبار والتحديثات في عالم الإبل ومواعييد
                                المزاين أولا بأول.</span>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
    <!-- start footer -->
    <footer class="sectionFooter">
        <v-container>
            <v-row>
                <v-col cols="6" md="3" class="text-end" v-for="loopServices in loopServicess" :key="loopServices">
                    <h2 class="font-weight-bold activeTitle py-5 rounded-xl">{{ loopServices.title }}</h2>
                    <ul class="d-md-flex flex-column rowGap1 d-none align-end">
                        <router-link to="/" class="text-decoration-none text-black position-relative listLiFooter">
                            <li class="tagTransition">{{ loopServices.listOne }}</li>
                        </router-link>
                        <router-link to="/" class="text-decoration-none text-black position-relative listLiFooter">
                            <li class="tagTransition">{{ loopServices.listTow }}</li>
                        </router-link>
                        <router-link to="/" class="text-decoration-none text-black position-relative listLiFooter">
                            <li class="tagTransition">{{ loopServices.listThree }}</li>
                        </router-link>
                        <router-link to="/" class="text-decoration-none text-black position-relative listLiFooter">
                            <li class="tagTransition">{{ loopServices.listFour }}</li>
                        </router-link>
                    </ul>
                </v-col>
            </v-row>
        </v-container>
        <div class="containerNavbar">
            <hr class="my-5">
            <v-row class="flex-column flex-md-row align-center">
                <v-col class="d-md-none">
                    <ul class="justify-center justify-md-end d-flex gap25">
                        <li>
                            <router-link to="/" class="text-h6 text-decoration-none text-black">
                                الشروط والأحكام
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/" class="text-h6 text-decoration-none text-black">
                                الشروط والأحكام
                            </router-link>
                        </li>
                    </ul>
                </v-col>
                <v-col>
                    <ul class="d-flex justify-md-start justify-center gap25 mt-2">
                        <li class="d-flex flex-column overflow-hidden liHeight align-center"
                            v-for="iconFooter in iconFooters" :key="iconFooter">
                            <router-link to="/">
                                <img :src="iconFooter.iconOne" alt="" class="linkListFooter tagTransition">
                            </router-link>
                            <router-link to="/">
                                <img :src="iconFooter.iconHover" alt="" class="linkListFooter tagTransition">
                            </router-link>
                        </li>
                    </ul>
                </v-col>
                <v-col>
                    <div class="text-center">
                        <span class="text-h6">جميع الحقوق محفوظة © 2023</span>
                    </div>
                </v-col>
                <v-col class="d-none d-md-block">
                    <div class="justify-center justify-md-end d-flex gap25">
                        <router-link to="/" class="text-h6 text-decoration-none text-black linkFooter">
                            سياسات الخصوصية
                        </router-link>
                        <router-link to="/" class="text-h6 text-decoration-none text-black linkFooter">
                            الشروط والأحكام
                        </router-link>
                    </div>
                </v-col>
            </v-row>
        </div>
    </footer>
    <!-- end footer -->
</template>

<script setup>
const loopInputs = ref([
    { inputlastName: '', scrrenMd: 6, type: 'text', textLabel: 'الأسم الاول' },
    { inputlastName: '', scrrenMd: 6, type: 'text', textLabel: 'الأسم الاخير' },
    { inputlastName: '', scrrenMd: 9, type: 'email', textLabel: 'البريد الاكتروني' }
]);

loopInputs.value.forEach((input) => {
    input.hasText = computed(() => input.inputlastName.length > 0);
});

const loopServicess = ref([
    { title: 'خدمات الإبل', listOne: 'الخدمات الإستشارية', listTow: 'خدمات نقل الإبل', listThree: 'خدمات العناية والنظافة', listFour: 'خدمات طبية' },
    { title: 'لوازم الإبل', listOne: 'منتجات العناية والنظافة', listTow: 'منتجات غذاء الإبل', listThree: 'منتجات الرعاية الصحية', listFour: 'منتجات واكسسوارات الزينة' },
    { title: 'عالم الإبل', listOne: 'الإبل والتاريخ', listTow: 'الإبل والثقافة', listThree: 'الإبل والفنون', listFour: 'الإبل والاقتصاد' },
    { title: 'من سنام', listOne: 'قصتنا وأهدافنا', listTow: 'رؤيتنا وقيمتنا', listThree: 'تواصل معنا' }
])

const iconFooters = ref([
    { iconOne: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesFooter/iconFacebook.svg', iconHover: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesFooter/iconFacebookOrange.svg' },
    { iconOne: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesFooter/iconTwitter.svg', iconHover: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesFooter/iconTwitterOrange.svg' },
    { iconOne: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesFooter/iconinstagram.svg', iconHover: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesFooter/iconinstagramOrange.svg' },
    { iconOne: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesFooter/iconLinkid.svg', iconHover: 'http://localhost:3000/_nuxt/assets/images&icons/langingPage/imagesFooter/iconLinkedInOrange.svg' }
])
</script>