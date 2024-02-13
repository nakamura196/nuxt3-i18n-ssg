<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n();
const slug = useRoute().params.slug;
const path = `${locale.value}/${slug}`;
</script>
<template>
  <ContentDoc :path="path" />

  <ul>
    <li>
      <nuxt-link
        :to="
          localePath({
            name: 'index',
          })
        "
      >
        {{ $t("home") }}
      </nuxt-link>
    </li>
  </ul>
</template>
