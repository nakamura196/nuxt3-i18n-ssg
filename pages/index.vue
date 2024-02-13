<script setup lang="ts">
const localePath = useLocalePath();
</script>
<template>
  {{ $t("home") }}

  <img src="/img/nuxt.png" alt="Discover Nuxt 3" />

  <ul>
    <li>
      <nuxt-link
        :to="
          localePath({
            name: 'slug',
            params: { slug: 'test' },
          })
        "
      >
        {{ $t("test") }}
      </nuxt-link>
    </li>
  </ul>
</template>
