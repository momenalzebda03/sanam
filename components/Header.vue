<template>
    <header class="position-fixed w-100">
        <v-row class="py-4 py-md-2 containerNavbar d-flex justify-space-between align-center">
            <v-btn @click="toggleMobileMenu" class="d-md-none bg-transparent text-h6">
                <v-icon v-if="mobileMenuOpen">mdi-close</v-icon>
                <v-icon v-else class="text-white">mdi-menu</v-icon>
            </v-btn>
            <v-col>
                <v-list class="d-flex bg-transparent overflow-hidden">
                    <v-list-item class="px-0">
                        <router-link to="/">
                            <img src="~/assets/images&icons/imagesNavbar/luggage.svg" alt="" v-if="mobileMenuOpen">
                            <img src="~/assets/images&icons/imagesNavbar/massgeMobile.svg" alt="" v-else>
                        </router-link>
                    </v-list-item>
                    <v-list-item class="px-5">
                        <router-link to="/">
                            <img src="~/assets/images&icons/imagesNavbar/search.svg" alt="" v-if="mobileMenuOpen">
                            <img src="~/assets/images&icons/imagesNavbar/searchMobile.svg" alt="" v-else>
                        </router-link>
                    </v-list-item>
                    <v-list-item class="px-0">
                        <router-link to="/">
                            <img src="~/assets/images&icons/imagesNavbar/users.svg" alt="" class="d-none d-md-block">
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-col>
            <ul class="d-flex flex-column-reverse flex-md-row gapIcon listResponse px-5 px-md-0" v-if="mobileMenuOpen">
                <li class="rounded-lg" v-for="(listNavbar, index) in listNavbars" :key="listNavbar">
                    <router-link to="/" :class="{ 'active': listNavbar.activeComponent }" @click="toggleActiveState(index)"
                        class="py-3 px-4 rounded-lg d-flex align-center flexColorNavbar justify-space-between text-decoration-none text-black font-weight-bold">
                        <div class="text-right">
                            <i class="fas fa-plus iconTop tagTransition me-3"></i>
                        </div>
                        <span>{{ listNavbar.titleNavbar }}</span>
                    </router-link>
                    <div v-if="listNavbar.activeComponent">
                        <component-navbar :indexNumber="index" />
                    </div>
                </li>
            </ul>
            <v-col class="d-flex justify-end">
                <div class="text-end">
                    <router-link to="/">
                        <img src="~/assets/images&icons/imagesNavbar/logo.png" alt="" v-if="mobileMenuOpen">
                        <img src="~/assets/images&icons/imagesNavbar/logoMobile.svg" alt="" v-else>
                    </router-link>
                </div>
            </v-col>
        </v-row>
    </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);
const listNavbars = ref([
    { titleNavbar: "من سنام", path: '/', activeComponent: false },
    { titleNavbar: "خدمات الإبل", path: '/', activeComponent: false },
    { titleNavbar: "لوازم الإبل", path: '/', activeComponent: false },
    { titleNavbar: "عالم الإبل", path: '/', activeComponent: false }
])

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

const toggleActiveState = (index) => {
    listNavbars.value.forEach((item, idx) => {
        item.activeComponent = idx === index;
    });
};

const checkScreenWidth = () => {
    listNavbars.activeComponent = false;
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