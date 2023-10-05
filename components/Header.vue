<template>
    <header class="position-fixed w-100">
        <v-row class="py-4 py-md-1 containerNavbar d-flex justify-space-between align-center">
            <v-btn @click="toggleMobileMenu" class="d-md-none bg-transparent">
                <v-icon v-if="mobileMenuOpen">mdi-close</v-icon>
                <v-icon v-else>mdi-menu</v-icon>
            </v-btn>
            <v-col>
                <v-list class="d-flex mt-md-3 bg-transparent">
                    <v-list-item class="px-0">
                        <router-link to="/">
                            <img src="~/assets/images&icons/imagesNavbar/luggage.svg" alt="">
                        </router-link>
                    </v-list-item>
                    <v-list-item class="px-5">
                        <router-link to="/">
                            <img src="~/assets/images&icons/imagesNavbar/search.svg" alt="">
                        </router-link>
                    </v-list-item>
                    <v-list-item class="d-none d-md-block px-0">
                        <router-link to="/">
                            <img src="~/assets/images&icons/imagesNavbar/users.svg" alt="">
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-col>
            <ul class="d-flex flex-column-reverse flex-md-row gapIcon bg-transparent listResponse">
                <li class="rounded-lg" v-if="mobileMenuOpen">
                    <router-link to="/" :class="{ 'active': activeComponent === 0 }" @click="toggleActiveState(0)"
                        class="py-3 px-4 rounded-lg d-flex align-center flexColorNavbar justify-space-between text-decoration-none text-black font-weight-bold">
                        <div class="text-right">
                            <i class="fas fa-plus iconTop me-3"></i>
                        </div>
                        <span>من سنام</span>
                    </router-link>
                    <div class="divRelative">
                        <div class="position-absolute w-100 bg-white py-5 divButtonAll" v-if="activeComponent === 0">
                            <div class="containerNavbar">
                                <v-row>
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
                                                                <img src="~/assets/images&icons/imagesNavbar/news.svg"
                                                                    alt="" class="colorImage">
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
                                                                <img src="~/assets/images&icons/imagesNavbar/gameil.svg"
                                                                    alt="" class="colorImage">
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
                                                                <img src="~/assets/images&icons/imagesNavbar/usersCom.svg"
                                                                    alt="" class="colorImage">
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
                </li>
                <li class="rounded-lg" v-if="mobileMenuOpen">
                    <router-link to="/" :class="{ 'active': activeComponent === 1 }" @click="toggleActiveState(1)"
                        class="py-3 px-4 rounded-lg d-flex align-center flexColorNavbar justify-space-between text-decoration-none text-black font-weight-bold">
                        <div class="text-right">
                            <i class="fas fa-plus iconTop me-3"></i>
                        </div>
                        <span>خدمات الإبل</span>
                    </router-link>
                    <div class="divRelative">
                        <div class="position-absolute w-100 bg-white py-5 divButtonAll" v-if="activeComponent === 1">
                            <div class="containerNavbar position-relative">
                                <v-row>
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
                                        <component-navbar-right :indexNumberOne="indexNumberOne" />
                                        <!-- <component-navbar-right v-if="indexNumberOne == 1" /> -->
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="rounded-lg" v-if="mobileMenuOpen">
                    <router-link to="/" :class="{ 'active': activeComponent === 2 }" @click="toggleActiveState(2)"
                        class="py-3 px-4 rounded-lg d-flex align-center flexColorNavbar justify-space-between text-decoration-none text-black font-weight-bold">
                        <div class="text-right">
                            <i class="fas fa-plus iconTop me-3"></i>
                        </div>
                        <span>لوازم الإبل</span>
                    </router-link>
                    <div class="divRelative">
                        <div class="position-absolute w-100 bg-white py-5 divButtonAll" v-if="activeComponent === 2">
                            <div class="containerNavbar position-relative">
                                <v-row>
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
                                                            <img src="~/assets/images&icons/imagesNavbar/iconArrawLeft.svg"
                                                                alt="">
                                                            <p class="colorText">تصفح جميع المنتجات</p>
                                                        </div>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <component-navbar-right :indexNumberTow="indexNumberTow" />
                                        <!-- <component-navbar-right v-if="indexNumberOne == 2" /> -->
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="rounded-lg" v-if="mobileMenuOpen">
                    <router-link to="/" :class="{ 'active': activeComponent === 3 }" @click="toggleActiveState(3)"
                        class="py-3 px-4 mt-5 mt-md-0 rounded-lg d-flex align-center flexColorNavbar justify-end text-decoration-none text-black font-weight-bold">
                        <span>عالم الإبل</span>
                    </router-link>
                </li>
            </ul>
            <v-col>
                <div class="text-end">
                    <router-link to="/">
                        <img src="~/assets/images&icons/imagesNavbar/logo.png" alt="">
                    </router-link>
                </div>
            </v-col>
        </v-row>
    </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);
const activeComponent = ref(null);
const indexNumberOne = ref(1);
const indexNumberTow = ref(2);

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

const toggleActiveState = (index) => {
    if (activeComponent.value === index) {
        activeComponent.value = null;
    } else {
        activeComponent.value = index;
    }
};

const checkScreenWidth = () => {
    activeComponent.value = false;
    mobileMenuOpen.value = window.innerWidth >= 990;
};

onMounted(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    document.addEventListener("click", toggleActiveState, {
        capture: true
    });
});
</script>