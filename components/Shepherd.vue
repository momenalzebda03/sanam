<template>
    <section class="mt-5 pt-5 containerNavbar">
        <div class="sectionShepherd position-relative divCard">
            <v-container>
                <v-row class="text-center text-md-end align-center text-white py-5 flex-column-reverse flex-md-row">
                    <v-col md="8">
                        <div class="d-flex flex-column gapIcon">
                            <h2 class="tagSize28">نفتخر بشراكتنا الاستراتيجية مع نادي الإبل السعودي بقيادة الشيخ فهد ابن
                                حثلين
                            </h2>
                            <p>لننطلق بمجال الإبل في المملكة العربية السعودية نحو آفاق جديدة من الرعاية والتميز.</p>
                            <p>في سنام، نؤمن بأن الابتكار واستخدام التقنية هما المفتاحان لتحقيق تطور متسارع في صناعة الإبل.
                                ومن هنا نقدم حلولًا مبتكرة وتطبيقات تقنية متقدمة تعزز بشكل فعّال رعاية الإبل وتحقق أعلى
                                مستويات النجاح في جوانب التربية والصحة وإدارة الإبل.</p>
                            <component-shepherd :indexNumber="indexNumber" />
                        </div>
                    </v-col>
                    <v-col>
                        <img src="~/assets/images&icons/imagesOurPartners/layer.png" alt="">
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>

<script setup>
const indexNumber = ref(1);
</script>