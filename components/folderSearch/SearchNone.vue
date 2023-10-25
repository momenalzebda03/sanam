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
                    <input type="text" class="border w-100 rounded-xl py-5 text-end px-5 font-weight-bold text-h6"
                        placeholder="اكتب أي شيء هنا للبحث عنه">
                </form>
            </div>
        </div>
    </section>
</template>