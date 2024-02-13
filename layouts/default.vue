<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
</script>
<template>
  <ul style="background-color: lightcyan">
    <li>
      <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    </li>
    <li>
      <NuxtLink :to="switchLocalePath('ja')">日本語</NuxtLink>
    </li>
  </ul>
  <slot />
</template>
