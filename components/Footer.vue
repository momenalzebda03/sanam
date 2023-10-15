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
    <section class="sectionFooter">
        <v-container>
            <v-row>
                <v-col cols="6" md="3" class="text-end">
                    <h2 class="font-weight-bold activeTitle py-5 rounded-xl">خدمات الإبل</h2>
                    <ul class="d-md-flex flex-column rowGap1 d-none">
                        <li>الخدمات الإستشارية</li>
                        <li>خدمات نقل الإبل</li>
                        <li>خدمات العناية والنظافة</li>
                        <li>خدمات طبية</li>
                    </ul>
                </v-col>
                <v-col cols="6" md="3" class="text-end">
                    <h2 class="font-weight-bold activeTitle py-5 rounded-xl">لوازم الإبل</h2>
                    <ul class="d-md-flex flex-column rowGap1 d-none">
                        <li>منتجات العناية والنظافة </li>
                        <li>منتجات غذاء الإبل</li>
                        <li>منتجات الرعاية الصحية</li>
                        <li>منتجات واكسسوارات الزينة</li>
                    </ul>
                </v-col>
                <v-col cols="6" md="3" class="text-end">
                    <h2 class="font-weight-bold activeTitle py-5 rounded-xl">عالم الإبل</h2>
                    <ul class="d-md-flex flex-column rowGap1 d-none">
                        <li>الإبل والتاريخ</li>
                        <li>الإبل والثقافة</li>
                        <li>الإبل والفنون</li>
                        <li>الإبل والاقتصاد</li>
                    </ul>
                </v-col>
                <v-col cols="6" md="3" class="text-end">
                    <h2 class="font-weight-bold activeTitle py-5 rounded-xl">من سنام</h2>
                    <ul class="d-md-flex flex-column rowGap1 d-none">
                        <li>قصتنا وأهدافنا</li>
                        <li>رؤيتنا وقيمتنا</li>
                        <li>تواصل معنا</li>
                    </ul>
                </v-col>
            </v-row>
        </v-container>
        <div class="containerNavbar my-5">
            <hr>
            <v-row class="mt-3 align-center flex-column flex-md-row">
                <v-col class="d-md-none">
                    <div class="justify-center justify-md-end d-flex gap25">
                        <router-link to="/" class="text-h6 text-decoration-none text-black">
                            الشروط والأحكام
                        </router-link>
                        <router-link to="/" class="text-h6 text-decoration-none text-black">
                            الشروط والأحكام
                        </router-link>
                    </div>
                </v-col>
                <v-col>
                    <ul class="d-flex justify-md-start justify-center gap10">
                        <li>
                            <router-link to="/">
                                <img src="~/assets/images&icons/imagesFooter/iconFacebook.svg" alt="">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/">
                                <img src="~/assets/images&icons/imagesFooter/iconInsgrame.svg" alt="">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/">
                                <img src="~/assets/images&icons/imagesFooter/iconTwiiter.svg" alt="">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/">
                                <img src="~/assets/images&icons/imagesFooter/iconLinkin.svg" alt="">
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
                        <router-link to="/" class="text-h6 text-decoration-none text-black">
                            سياسات الخصوصية
                        </router-link>
                        <router-link to="/" class="text-h6 text-decoration-none text-black">
                            الشروط والأحكام
                        </router-link>
                    </div>
                </v-col>
            </v-row>
        </div>
    </section>
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
</script>