<template>
    <header class="position-fixed w-100">
        <v-row class="py-4 py-md-1 containerNavbar d-flex justify-space-between align-center">
            <v-btn @click="toggleMobileMenu" class="d-md-none bg-transparent">
                <v-icon v-if="mobileMenuOpen">mdi-close</v-icon>
                <v-icon v-else>mdi-menu</v-icon>
            </v-btn>
            <v-col>
                <v-list class="d-flex mt-md-3 bg-transparent">
                    <v-list-item>
                        <router-link to="/">
                            <img src="~/assets/images&icons/imagesNavbar/luggage.svg" alt="">
                        </router-link>
                    </v-list-item>
                    <v-list-item class="px-3">
                        <router-link to="/">
                            <img src="~/assets/images&icons/imagesNavbar/search.svg" alt="">
                        </router-link>
                    </v-list-item>
                    <v-list-item class="d-none d-md-block">
                        <router-link to="/">
                            <img src="~/assets/images&icons/imagesNavbar/users.svg" alt="">
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-col>
            <!-- d-flex justify-end -->
            <v-list class="d-flex flex-column-reverse flex-md-row gapIcon bg-transparent listResponse"
                v-if="mobileMenuOpen">
                <v-list-item v-for="(objectNavbar, index) in objectNavbars" :key="index" class="rounded-lg py-4">
                    <div>
                        <router-link :to="objectNavbar.path" :class="{ 'active': objectNavbar.BoolenActive }"
                            class="d-flex align-center flexColorNavbar justify-space-between text-decoration-none text-black font-weight-bold"
                            @click="toggleActiveState(index)">
                            <div style="text-align: right;" class="text-right">
                                <i class="fas fa-plus iconTop me-3"></i>
                            </div>
                            <span>{{ objectNavbar.titleNavbar }}</span>
                        </router-link>
                    </div>
                </v-list-item>
            </v-list>
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

const objectNavbars = ref([
    { titleNavbar: 'من سنام', path: '/', BoolenActive: true },
    { titleNavbar: 'خدمات الإبل', path: '/', BoolenActive: false },
    { titleNavbar: 'لوازم الإبل', path: '/', BoolenActive: false },
    { titleNavbar: 'عالم الإبل', path: '/', BoolenActive: false },
]);

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

const toggleActiveState = (index) => {
    objectNavbars.value.forEach((item, idx) => {
        item.BoolenActive = idx === index;
    });
};

const checkScreenWidth = () => {
    mobileMenuOpen.value = window.innerWidth >= 768;
};

onMounted(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
});
</script>