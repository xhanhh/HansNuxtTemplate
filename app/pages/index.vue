<script setup lang="ts">

import {useTitleMeta} from "~/composables/useSiteMeta";

useSeoMeta({
  title: useTitleMeta('首页'),
  ogTitle: useTitleMeta('首页'),
  description: '描述',
  ogDescription: '描述'
})

</script>

<template>
  <div>
    <p>首页</p>
  </div>
</template>

<style scoped lang="scss">

</style>