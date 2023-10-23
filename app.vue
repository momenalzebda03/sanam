<template>
  <ComponentHeader />
  <router-view />
  <ComponentFooter />
</template>

<script setup>
import ComponentHeader from '@/components/folderAllProject/Header.vue';
import ComponentFooter from '@/components/folderAllProject/Footer.vue';
</script>