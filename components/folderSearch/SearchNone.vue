<template>
    <section class="sectionSearch">
        <div class="containerNavbar">
            <v-row class="align-center widthMobile">
                <v-col>
                    <router-link to="/" class="font-weight-bold text-h5 text-decoration-none activeTitle">
                        <span class="text-h6 font-weight-bold">العودة للرئيسية</span>
                    </router-link>
                </v-col>
                <v-col>
                    <div class="d-flex justify-end gapIcon">
                        <img src="~/assets/images&icons/imagesSearch/iconSearch.svg" alt="">
                        <span class="size30 font-weight-bold text-no-wrap">نتائج البحث</span>
                    </div>
                </v-col>
            </v-row>
            <div class="mt-5">
                <form action="" method="">
                    <div class="position-relative">
                        <input type="text" v-model="inputSearch"
                            class="w-100 inputSearch rounded-pill bg-white py-5 px-5 text-end" />
                        <div class="d-flex justify-space-between formLabel position-absolute">
                            <label class="" :class="{ 'activeLabel': hasText }">اكتب أي شيء هنا
                                للبحث عنه </label>
                            <span>welcome</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
const inputSearch = ref('');

const hasText = computed(() => inputSearch.value.length > 0);
</script>