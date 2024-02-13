<script setup lang="ts">
const localePath = useLocalePath();
</script>
<template>
  {{ $t("home") }}

  <img src="~/assets/img/nuxt_a.png" alt="assets" />

  <img src="/img/nuxt.png" alt="public" />

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
    <li>
      <nuxt-link
        :to="
          localePath({
            name: 'about',
          })
        "
      >
        {{ $t("about") }}
      </nuxt-link>
    </li>
  </ul>
</template>
