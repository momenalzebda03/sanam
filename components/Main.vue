<template>
    <main class="sectionMain d-flex align-center justify-center w-100">
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
            <div class="d-flex justify-center">
                <router-link to="/"
                    class="py-3 w-75 divButton rounded-pill position-relative overflow-hidden text-white text-decoration-none borderWhite">
                    <div class="ps-4 d-flex align-center position-relative">
                        <div class="bg-white imageButton rounded-circle d-flex justify-center align-center pe-1">
                            <img src="~/assets/images&icons/imagesAll/iconArrawLeft.svg" alt="">
                        </div>
                        <div class="text-center w-100 textButton me-5 me-md-0">
                            <span class="d-md-none text-h5 text-black">الفعاليات</span>
                            <span class="d-none d-md-block text-h5">تصفح لوازم الإبل</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </main>
    <div class="containerNavbar position-absolute divMainBottom w-100">
        <v-row class="align-end">
            <v-col>
                <div class="d-flex align-center gapIcon text-white font-weight-bold divMouse" @click="scrollToElement">
                    <div class="px-5 pt-4 pb-3 borderWhite w-0 d-flex justify-center align-center text-white rounded-pill">
                        <div class="mt-3">
                            <img src="~/assets/images&icons/images&viedoMain/iconArrawoBottom.svg" alt=""
                                class="imageAnimation">
                        </div>
                    </div>
                    <span>تابع للاسفل</span>
                </div>
            </v-col>
            <v-col>
                <v-container class="d-flex justify-end py-0 px-0">
                    <div class="text-center text-white py-2 divNews font-weight-bold">
                        <h2 class="text-h5">اخر الأخبار</h2>
                    </div>
                </v-container>
                <v-container class="bg-white d-flex divBoxNews gap25 justify-end">
                    <div class="d-flex gap25">
                        <div class="text-end d-flex justify-end flex-column">
                            <span class="textCard textCardMain">١٢ مشروع ريادي في المملكة يستهدف هواة وملاك الإبل في مجال
                                ا.....</span>
                            <span class="text-h6 font-weight-bold activeTitle"><i class="fas fa-plus"></i> متابعة
                                المزيد</span>
                        </div>
                        <div>
                            <img src="~/assets/images&icons/images&viedoMain/imageNews3.png" alt="" class="rounded-lg">
                        </div>
                    </div>
                    <div class="d-flex gap25">
                        <div class="text-end d-flex justify-end flex-column">
                            <span class="textCard textCardMain">برعاية سمو الأمير محمد بن سلمان يتم إفتتاح أول مستشفى مختص
                                بالـ ..... </span>
                            <span class="text-h6 font-weight-bold activeTitle"><i class="fas fa-plus"></i> متابعة
                                المزيد</span>
                        </div>
                        <div>
                            <img src="~/assets/images&icons/images&viedoMain/imageNews2.png" alt="" class="rounded-lg">
                        </div>
                    </div>
                    <div class="d-flex gap25">
                        <div class="text-end d-flex justify-end flex-column">
                            <span class="textCard textCardMain">مزاين الإبل تبداً في العاشر من شهر أيلول تحت إشراف صاحب السـ
                                ..... </span>
                            <span class="text-h6 font-weight-bold activeTitle"><i class="fas fa-plus"></i> متابعة
                                المزيد</span>
                        </div>
                        <div>
                            <img src="~/assets/images&icons/images&viedoMain/imageNews1.png" alt="" class="rounded-lg">
                        </div>
                    </div>
                </v-container>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
function scrollToElement() {
    const scrollPosition = 640;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
    });
}
</script>