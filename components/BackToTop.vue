<script setup lang="ts">
const localePath = useLocalePath();
</script>
<template>
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
