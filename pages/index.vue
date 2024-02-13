<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  {{ $t("home") }}

  <ul>
    <li>
      <nuxt-link
        :to="
          localePath({
            name: 'slug',
            params: { slug: 'test' },
          })
        "
        >{{ $t("test") }}</nuxt-link
      >
    </li>
  </ul>
</template>
