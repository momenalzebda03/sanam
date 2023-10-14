<template>
    <section class="sectionFarms divWithdBlack containerNavbar overflow-hidden">
        <v-row class="position-relative flex-column-reverse flex-md-row">
            <v-col md="6">
                <div class="d-flex flex-column flex-md-row overflow-hidden">
                    <div class="slider">
                        <div class="slide-track flex-row flex-md-column">
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanLeft/mazayn1.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanLeft/mazayn2.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanLeft/mazayn3.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanLeft/mazayn4.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanLeft/mazayn5.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanLeft/mazayn6.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanLeft/mazayn7.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanLeft/mazayn1.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanLeft/mazayn2.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanLeft/mazayn3.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanLeft/mazayn4.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanLeft/mazayn5.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanLeft/mazayn6.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanLeft/mazayn7.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="slider slider1">
                        <div class="slide-track flex-row flex-md-column">
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanRight/mazayn1.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanRight/mazayn2.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanRight/mazayn3.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanRight/mazayn4.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanRight/mazayn5.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanRight/mazayn6.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanRight/mazayn7.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanRight/mazayn1.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanRight/mazayn2.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanRight/mazayn3.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanRight/mazayn4.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanRight/mazayn5.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanRight/mazayn6.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="~/assets/images&icons/imagesMazayen/mazanRight/mazayn7.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col md="6">
                <div class="imageBackgroundFrams text-end mt-5 pt-5">
                    <img src="~/assets/images&icons/imagesMazayen/imageMazaynGamelMain.png" class="widthMobile">
                </div>
                <div class="text-white text-end divMaintFarms me-5 d-flex flex-column gap10">
                    <h2>مـزايـن الإبـل | تجلُّ الفخامة والتراث</h2>
                    <h3>تنافس الإبل الأصيلة في مسابقات مثيرة لتتوِّج بالجمال والتميُّز.</h3>
                    <p>فعالية تراثية تبرز سحر الإبل وأهميتها الثقافية، تتنافس فيها الإبل الأصيلة لنيل لقب الأجمل بناءً
                        على مقاييس معينة. حيث تعتبر هذه الفعالية ملتقى اجتماعي وثقافي يجمع عشاق الإبل والمهتمين بها
                        لمشاركة الخبرات والمعرفة .</p>
                    <component-button :indexNumber="indexNumber" />
                </div>
            </v-col>
        </v-row>
    </section>
</template>

<script setup>
const indexNumber = ref(2);
</script>