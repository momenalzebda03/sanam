<template>
    <section class="containerNavbar mt-5 pt-5">
        <div class="sectionFooterCenter rounded-xl text-white mt-5 py-5">
            <v-container>
                <v-row class="flex-column-reverse flex-md-row align-center">
                    <v-col cols="12" md="8">
                        <form>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <div class="form__group field position-relative">
                                        <input type="text" ref="lastNameInput"
                                            class="w-100 form__field rounded-pill bg-white py-5 px-5 text-end" required />
                                        <label class="form__label position-absolute"
                                            @click="focusInput($refs.lastNameInput)"> الاسم الاخير </label>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <div class="form__group field position-relative">
                                        <input type="text" ref="firstNameInput"
                                            class="w-100 form__field rounded-pill bg-white py-5 px-5 text-end" required />
                                        <label class="form__label position-absolute"
                                            @click="focusInput($refs.firstNameInput)"> الاسم الأول </label>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="3">
                                    <input type="submit" class="activeSwiper w-100 py-5 rounded-pill inputSubmit"
                                        value="اشتراك" />
                                </v-col>
                                <v-col cols="12" md="9">
                                    <div class="form__group field position-relative">
                                        <input type="email" ref="lastEmailInput"
                                            class="w-100 form__field rounded-pill bg-white py-5 px-5 text-end" required />
                                        <label class="form__label position-absolute"
                                            @click="focusInput($refs.lastEmailInput)">البريد الألكتروني</label>
                                    </div>
                                </v-col>
                            </v-row>
                        </form>
                    </v-col>
                    <v-col cols="12" md="4">
                        <div class="d-flex flex-column gap10 text-center text-md-end">
                            <h2>آخر الأخبار والتحديثات</h2>
                            <span>اشترك بالنشرة الإخبارية في سنام للحصول على أحدث الأخبار والتحديثات في عالم الإبل ومواعييد
                                المزاين أولا بأول.</span>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>

<script setup>
const focusInput = (inputRef) => {
    inputRef.focus();
    console.log("Input value:", lastNameInput); // Access and log the input's value
}
</script>