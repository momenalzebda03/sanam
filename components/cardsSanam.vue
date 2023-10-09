<template>
    <section class="mt-5 pt-2 text-center position-relative sectionCardsSanam">
        <div class="containerNavbar">
            <div class="d-flex flex-column gap10">
                <div>
                    <img src="~/assets/images&icons/imagesAboutUs/imageSanam.png" alt="">
                </div>
                <h2 class="text-h4"><span class="activeTitle">سنــام</span> منصة شاملة متخصصة في رعاية الإبل</h2>
                <p>سـنام منصة شاملة متخصصة في رعاية الإبل نوفِّر خدمات ومنتجات متميزة لتلبية احتياجات عملائنا، ونقدِّم
                    معلومات شاملة ومفيدة لتعزيز الوعي بالإبل ومواكبة الأحداث والفعاليات المتعلقة بها. يتميز مشروعنا بتركيزنا
                    على دمج التراث العربي المرتبط بالإبل بالتقنيات الحديثة، لتحقيق التوازن بين الحفاظ على التراث وتطوير مجال
                    رعاية الإبل بشكل مستدام ومبتكر.</p>
            </div>
            <v-row class="mt-5 pt-5">
                <v-col cols="12" md="4" class="position-relative">
                    <div class="divCard px-5 py-5 d-flex flex-column align-center gap10 h-100">
                        <img src="~/assets/images&icons/imagesAboutUs/iconAboutUs1.svg" alt=""
                            class="position-absolute imageBackgroundCards">
                        <div class="divCardImage tagTransition rounded-circle d-flex justify-center align-center">
                            <img src="~/assets/images&icons/imagesAboutUs/iconAboutUs1.svg" alt="">
                        </div>
                        <div class="d-flex flex-column gap10 divHoverTop tagTransition position-relative">
                            <h2>الأهداف</h2>
                            <p class="textCard sizeText14">نتجاوز الحدود التقليدية ونجسد الروح الإبداعية في مجال رعاية
                                الإبل. نسعى جاهدين لتعزيز التراث العربي ونشر الوعي بأهمية الإبل من خلال منصة شاملة ومتقدمة
                                تلبي جميع احتياجات الإبل وتضمن رفاهيتها وصحتها.</p>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="4" class="position-relative">
                    <div class="divCard px-5 py-5 d-flex flex-column align-center gap10 h-100">
                        <img src="~/assets/images&icons/imagesAboutUs/iconAboutUs2.svg" alt=""
                            class="position-absolute imageBackgroundCards">
                        <div class="divCardImage tagTransition rounded-circle d-flex justify-center align-center">
                            <img src="~/assets/images&icons/imagesAboutUs/iconAboutUs2.svg" alt="">
                        </div>
                        <div class="d-flex flex-column gap10 divHoverTop tagTransition position-relative">
                            <h2>الرسالة</h2>
                            <p class="textCard sizeText14">إبداعنا يكمن في دمج التراث العربي العريق وروح الابتكار التقني.
                                حيث نهدف إلى إيصال رسالتنا الهامة بطرق مبتكرة وفعالة، وذلك بتعزيز الوعي بأهمية الإبل
                                ومساهمتها الحيوية في ثقافتنا واقتصادنا.</p>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="4" class="position-relative">
                    <div class="divCard px-5 py-5 d-flex flex-column align-center gap10 h-100">
                        <img src="~/assets/images&icons/imagesAboutUs/iconAboutUs3.svg" alt=""
                            class="position-absolute imageBackgroundCards">
                        <div class="divCardImage tagTransition rounded-circle d-flex justify-center align-center">
                            <img src="~/assets/images&icons/imagesAboutUs/iconAboutUs3.svg" alt="">
                        </div>
                        <div class="d-flex flex-column gap10 divHoverTop tagTransition position-relative">
                            <h2>الرؤية</h2>
                            <p class="textCard sizeText14">نطمح لأن نصبح روادًا في سوق الإبل، وذلك من خلال التركيز على
                                الابتكار والتفرد والتميز باستخدام أحدث التقنيات والأساليب لتحسين جودة الرعاية ورفع مستوى
                                الإنتاجية لجميع رعاة الإبل..</p>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <component-shepherd :indexNumber="indexNumber" />
        </div>
    </section>
</template>

<script setup>
const indexNumber = ref(0);
</script>