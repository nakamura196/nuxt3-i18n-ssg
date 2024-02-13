<script setup lang="ts">
const { locale } = useI18n();
const slug = useRoute().params.slug;
const path = `${locale.value}/${slug}`;

// This will be reactive when you change title/description above
useHead({
  htmlAttrs: {
    lang: locale,
  },
});
</script>
<template>
  <ContentDoc :path="path" />

  <BackToTop />
</template>
