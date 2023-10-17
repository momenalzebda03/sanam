<template>
    <section class="containerNavbar mt-5 pt-5">
        <component-text-box :propsTextBox="propsTextBox" />
        <v-row class="mt-5">
            <v-col cols="12" md="3" class="d-flex flex-column gapRow">
                <div class="position-relative divImageBlack text-white d-flex justify-center overflow-hidden">
                    <img src="~/assets/images&icons/imagesServices/imageServices4.png" alt=""
                        class="rounded-lg tagTransition w-100">
                    <div class="d-flex px-5 w-100 position-absolute tagTransition spanTextServices">
                        <router-link to="/" class="position-relative text-white">
                            <i
                                class="fas fa-mouse-pointer tagTransition d-flex justify-center align-center iconServices rounded-circle iconSize position-absolute"></i>
                        </router-link>
                        <div class="d-flex justify-center w-100">
                            <h2>ترقيم الإبل</h2>
                        </div>
                    </div>
                </div>
                <div class="position-relative divImageBlack text-white d-flex justify-center overflow-hidden">
                    <img src="~/assets/images&icons/imagesServices/imageServices5.png" alt=""
                        class="rounded-lg tagTransition w-100">
                    <div class="d-flex px-5 w-100 position-absolute tagTransition spanTextServices">
                        <router-link to="/" class="position-relative text-white">
                            <i
                                class="fas fa-mouse-pointer tagTransition d-flex justify-center align-center iconServices rounded-circle iconSize position-absolute"></i>
                        </router-link>
                        <div class="d-flex justify-center w-100">
                            <h2>ملاج الإبل</h2>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="3" class="d-flex flex-column gapRow">
                <div class="position-relative divImageBlack text-white d-flex justify-center overflow-hidden">
                    <img src="~/assets/images&icons/imagesServices/imageServices2.png" alt=""
                        class="rounded-lg tagTransition w-100">
                    <div class="d-flex px-5 w-100 position-absolute tagTransition spanTextServices">
                        <router-link to="/" class="position-relative text-white">
                            <i
                                class="fas fa-mouse-pointer tagTransition d-flex justify-center align-center iconServices rounded-circle iconSize position-absolute"></i>
                        </router-link>
                        <div class="d-flex justify-center w-100">
                            <h2>حلاقة الوبر</h2>
                        </div>
                    </div>
                </div>
                <div class="position-relative divImageBlack text-white d-flex justify-center overflow-hidden">
                    <img src="~/assets/images&icons/imagesServices/imageServices3.png" alt=""
                        class="rounded-lg tagTransition w-100">
                    <div class="d-flex px-5 w-100 position-absolute tagTransition spanTextServices">
                        <router-link to="/" class="position-relative text-white">
                            <i
                                class="fas fa-mouse-pointer tagTransition d-flex justify-center align-center iconServices rounded-circle iconSize position-absolute"></i>
                        </router-link>
                        <div class="d-flex justify-center w-100">
                            <h2>تنظيف الوبر</h2>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <div class="position-relative divImageBlack text-white d-flex justify-center overflow-hidden">
                    <img src="~/assets/images&icons/imagesServices/imageServices1.png" alt=""
                        class="rounded-lg tagTransition w-100">
                    <div class="d-flex px-5 w-100 position-absolute tagTransition spanTextServices">
                        <router-link to="/" class="position-relative text-white">
                            <i
                                class="fas fa-mouse-pointer tagTransition d-flex justify-center align-center iconServices rounded-circle iconSize position-absolute"></i>
                        </router-link>
                        <div class="d-flex justify-center w-100">
                            <h2>نقل الاإبل</h2>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </section>
    <component-button :indexNumber="indexNumber"/>
</template>

<script setup>
const propsTextBox = ref(3);
const indexNumber = ref(3);
</script>