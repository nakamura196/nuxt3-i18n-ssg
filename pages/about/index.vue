<script setup lang="ts">
const { t, locale } = useI18n();
const title = t("about");
const description = ref("My App Description");

// This will be reactive when you change title/description above
useHead({
  title,
  htmlAttrs: {
    lang: locale,
  },
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>
<template>
  <h1>{{ $t("about") }}</h1>

  <BackToTop />
</template>
