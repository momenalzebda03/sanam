<template>
    <div class="divRelative" v-if="props.indexNumber == 0">
        <div class="position-absolute w-100 bg-white divButtonAll">
            <div class="containerNavbar">
                <v-row class="align-center">
                    <v-col class="d-none d-md-block">
                        <div class="divNavbarCamel text-center text-white font-weight-bold overflow-hidden">
                            <h2 class="text-h3">منصة واحدة<br>تجمع بين كل يخص عالم الإبل</h2>
                            <div class="d-flex align-center flexRow">
                                <div class="text-start divBottomGamel position-relative">
                                    <img src="~/assets/images&icons/imagesNavbar/camel1.png" alt="">
                                </div>
                                <div class="text-center w-50 d-flex flex-column divTextTow">
                                    <p class="colorText">نتجاوز الحدود التقليدية ونجسد الروح الإبداعية في
                                        مجال رعاية الإبل.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col>
                        <v-row class="text-end" tag="ul">
                            <v-col cols="12" md="6" tag="li">
                                <div class="colorNavbarDiv">
                                    <router-link to="/" class="text-decoration-none">
                                        <v-row class="align-center">
                                            <v-col class="colNews">
                                                <p class="font-weight-bold text-h5">الأخبار</p>
                                            </v-col>
                                            <v-col class="d-none d-md-block">
                                                <img src="~/assets/images&icons/imagesNavbar/news.svg" alt=""
                                                    class="colorImage">
                                            </v-col>
                                        </v-row>
                                    </router-link>
                                </div>
                            </v-col>
                            <v-col cols="12" md="6" tag="li">
                                <div class="colorNavbarDiv">
                                    <router-link to="/" class="text-decoration-none">
                                        <v-row class="align-center">
                                            <v-col class="colNews">
                                                <p class="font-weight-bold text-h5">من نحن</p>
                                            </v-col>
                                            <v-col class="d-none d-md-block">
                                                <img src="~/assets/images&icons/imagesNavbar/gameil.svg" alt=""
                                                    class="colorImage">
                                            </v-col>
                                        </v-row>
                                    </router-link>
                                </div>
                            </v-col>
                            <v-col cols="12" md="6" tag="li">
                                <div class="colorNavbarDiv">
                                    <router-link to="/" class="text-decoration-none">
                                        <v-row class="align-center">
                                            <v-col class="colNews">
                                                <p class="font-weight-bold text-h5">تواصل معنا</p>
                                            </v-col>
                                            <v-col class="d-none d-md-block">
                                                <img src="~/assets/images&icons/imagesNavbar/usersCom.svg" alt=""
                                                    class="colorImage">
                                            </v-col>
                                        </v-row>
                                    </router-link>
                                </div>
                            </v-col>
                            <v-col cols="12" md="6" tag="li">
                                <div class="colorNavbarDiv">
                                    <router-link to="/" class="text-decoration-none">
                                        <v-row class="align-center">
                                            <v-col class="colNews">
                                                <p class="font-weight-bold text-h5">شركاء سنام</p>
                                            </v-col>
                                            <v-col class="d-none d-md-block">
                                                <img src="~/assets/images&icons/imagesNavbar/ok.svg" alt=""
                                                    class="colorImage">
                                            </v-col>
                                        </v-row>
                                    </router-link>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
    <div class="divRelative" v-if="props.indexNumber == 1">
        <div class="position-absolute w-100 bg-white divButtonAll">
            <div class="containerNavbar position-relative">
                <v-row class="align-center">
                    <v-col class="d-none d-md-block">
                        <div class="divNavbarCamel text-center text-white font-weight-bold overflow-hidden">
                            <div class="d-flex align-center flexRow pe-5">
                                <div class="text-start divBottomGamel position-relative">
                                    <img src="~/assets/images&icons/imagesNavbar/camel2.png" alt="">
                                </div>
                                <div class="text-end d-flex flex-column divTextTow pe-5">
                                    <h2 class="text-h3">أمهر مقدمين الخدمات<br> في العالم</h2>
                                    <p class="colorText">نفتخر بشراكاتنا مع أفضل مقدمين الخدمات في المملكة
                                        وفي العالم
                                    </p>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col>
                        <v-row class="text-end rowChild">
                            <v-col cols="12" md="6" class="colChild">
                                <div class="d-flex flex-column gapTextColumn gap25 px-md-4" tag="ul">
                                    <div class="hoverTitle" tag="li">
                                        <router-link to="/" class="text-decoration-none text-black">
                                            <h3>خدمات طبية</h3>
                                            <p class="d-none d-md-block">شراكات إستراتيجية مع أمهر الأطباء
                                                أحدث والعيادات</p>
                                        </router-link>
                                    </div>
                                    <div class="hoverTitle" tag="li">
                                        <router-link to="/" class="text-decoration-none text-black">
                                            <h3>خدمات حلب الناقة</h3>
                                            <p class="d-none d-md-block">نتبع جميع إجراءات الوقاية وبأحدث
                                                المعدات</p>
                                        </router-link>
                                    </div>
                                    <div class="hoverTitle" tag="li">
                                        <router-link to="/" class="text-decoration-none text-black">
                                            <h3 class="activeTitle">تصفح جميع الخدمات</h3>
                                            <p class="d-none d-md-block">مكان واحد يجمع لك جميع خدمات الإبل
                                                مع أمهر مقدمين الخدمات في العالم</p>
                                        </router-link>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" md="6" class="colChild">
                                <div class="d-flex flex-column gapTextColumn gap25 px-md-4" tag="ul">
                                    <div class="hoverTitle" tag="li">
                                        <router-link to="/" class="text-decoration-none text-black">
                                            <h3>الخدمات الإستشارية</h3>
                                            <p class="d-none d-md-block">خبرائنا جاهزون ومستعدون لجميع
                                                أستشاراتكم</p>
                                        </router-link>
                                    </div>
                                    <div class="hoverTitle" tag="li">
                                        <router-link to="/" class="text-decoration-none text-black">
                                            <h3>خدمات نقل الإبل</h3>
                                            <p class="d-none d-md-block">نقوم بإتباع جميع اجرائات السلامة
                                                والوقاية</p>
                                        </router-link>
                                    </div>
                                    <div class="hoverTitle" tag="li">
                                        <router-link to="/" class="text-decoration-none text-black">
                                            <h3>خبرات العناية والنظافة</h3>
                                            <p class="d-none d-md-block">بالتعاون مع أفضل مقدمين الخدمات في
                                                المملكة</p>
                                        </router-link>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
    <div class="divRelative" v-if="props.indexNumber == 2">
        <div class="position-absolute w-100 bg-white divButtonAll">
            <div class="containerNavbar position-relative">
                <v-row class="align-center">
                    <v-col class="d-none d-md-block">
                        <div class="divNavbarCamel text-center text-white font-weight-bold overflow-hidden">
                            <div class="d-flex align-center flexRow px-5 py-5">
                                <div class="text-start">
                                    <img src="~/assets/images&icons/imagesNavbar/camel3.png" alt="">
                                </div>
                                <div class="text-end d-flex flex-column">
                                    <h2 class="text-h3 font-weight-bold">خصومات تصل لـ ٢٠٪</h2>
                                    <p class="colorText">على جميع المنتجات عند شرائك لأول مرة</p>
                                    <router-link to="/" class="text-decoration-none">
                                        <div class="d-flex justify-end gapIcon mt-4">
                                            <img src="~/assets/images&icons/imagesNavbar/iconArrawLeft.svg" alt="">
                                            <p class="colorText">تصفح جميع المنتجات</p>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col>
                        <v-row class="text-end rowChild">
                            <v-col cols="12" md="6" class="colChild">
                                <div class="d-flex flex-column gap25 px-md-4" tag="ul">
                                    <div class="hoverTitle" tag="li">
                                        <router-link to="/" class="text-decoration-none text-black">
                                            <h3>منتجات اكسسوارات الزينة</h3>
                                            <p class="d-none d-md-block">خبرائنا جاهزون ومستعدون لجميع
                                                استشاراتكم</p>
                                        </router-link>
                                    </div>
                                    <div class="hoverTitle mt-md-5" tag="li">
                                        <router-link to="/" class="text-decoration-none text-black">
                                            <h3 class="activeTitle">تصفح كل المنتجات</h3>
                                        </router-link>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" md="6" class="colChild">
                                <div class="d-flex flex-column gap25 px-md-4" tag="ul">
                                    <div class="hoverTitle" tag="li">
                                        <router-link to="/" class="text-decoration-none text-black">
                                            <h3>منتجات العناية والنظافة</h3>
                                            <p class="d-none d-md-block">خبرائنا جاهزون ومستعدون لجميع
                                                استشاراتكم</p>
                                        </router-link>
                                    </div>
                                    <div class="hoverTitle" tag="li">
                                        <router-link to="/" class="text-decoration-none text-black">
                                            <h3>منتجات الرعاية الصحية</h3>
                                            <p class="d-none d-md-block">خبرائنا جاهزون ومستعدون لجميع
                                                استشاراتكم</p>
                                        </router-link>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    indexNumber: Number
});
</script>