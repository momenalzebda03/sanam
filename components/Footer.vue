<template>
    <section class="containerNavbar mt-5 pt-5">
        <div class="sectionFooterCenter rounded-xl text-white mt-5 py-5">
            <v-container>
                <v-row class="flex-column-reverse flex-md-row align-center">
                    <v-col cols="12" md="8">
                        <form>
                            <v-row class="flex-row-reverse">
                                <v-col cols="12" :md="loopInput.scrrenMd" v-for="loopInput in loopInputs"
                                    :key="loopInput.textLabel">
                                    <div class="position-relative">
                                        <input :type="loopInput.type" v-model="loopInput.inputlastName"
                                            class="w-100 rounded-pill bg-white py-5 px-5 text-end" required />
                                        <label class="formLabel position-absolute"
                                            :class="{ 'activeLabel': loopInput.hasText }"> {{ loopInput.textLabel }}
                                        </label>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <input type="submit" class="activeSwiper w-100 py-5 rounded-pill inputSubmit"
                                        value="اشتراك">
                                </v-col>
                            </v-row>
                            <div class="d-flex text-end me-5 mt-5">
                                <label>أوافق على إستلام النشرة البريدية لمنصة سنام </label>
                                <input type="checkbox">
                            </div>
                        </form>
                    </v-col>
                    <v-col cols=" 12" md="4">
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
const loopInputs = ref([
    { inputlastName: '', scrrenMd: 6, type: 'text', textLabel: 'الأسم الاول' },
    { inputlastName: '', scrrenMd: 6, type: 'text', textLabel: 'الأسم الاخير' },
    { inputlastName: '', scrrenMd: 8, type: 'email', textLabel: 'البريد الاكتروني' }
]);

loopInputs.value.forEach((input) => {
    input.hasText = computed(() => input.inputlastName.length > 0);
});
</script>