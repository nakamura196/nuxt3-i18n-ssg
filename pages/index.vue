<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
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
  </ul>
</template>
