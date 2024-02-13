<script setup>
const { locale } = useI18n();
const slug = useRoute().params.slug;
const path = `${locale.value}/${slug}`;
const { data } = await useAsyncData(path, () =>
  queryContent(`/${path}`).findOne()
);
</script>
<template>
  <ContentRenderer :value="data" />

  <ul>
    <li>
      <nuxt-link
        :to="
          localePath({
            name: 'index',
          })
        "
        >{{ $t("home") }}</nuxt-link
      >
    </li>
  </ul>
</template>
