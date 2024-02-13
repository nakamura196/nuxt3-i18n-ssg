<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
</script>

<template>
  {{ $t("home") }}
  <ul>
    <li>
      <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    </li>
    <li>
      <NuxtLink :to="switchLocalePath('ja')">日本語</NuxtLink>
    </li>

    <nuxt-link
      :to="
        localePath({
          name: 'slug',
          params: { slug: 'test' },
        })
      "
      >About</nuxt-link
    >
  </ul>
</template>
