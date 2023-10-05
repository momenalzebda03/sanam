<template>
    <h1>{{ props.indexNumberOne }}</h1>
    <h1>{{ props.indexNumberTow }}</h1>
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
    <!-- <h1>{{ props.indexNumberOne }}</h1> -->
</template>

<script setup>
const props = defineProps({
    indexNumberOne: Number,
    indexNumberTow: Number
});
</script>