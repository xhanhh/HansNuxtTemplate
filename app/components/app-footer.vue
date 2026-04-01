<script setup lang="ts">

</script>

<template>
  <u-footer>
    <template #left>
      <div class="flex justify-center items-center space-x-1.5">
        <Icon name="i-lineicons-nuxt" />
        <p class="text-sm">左边的文字</p>
      </div>
    </template>

    <div class="flex justify-center items-center">
      <p class="text-sm">中间的文字</p>
    </div>

    <template #right>
      <div class="flex justify-center items-center space-x-1">
        <UButton
            icon="i-mdi-github"
            color="neutral"
            variant="ghost"
            to="https://github.com/xhanhh"
            target="_blank"
            aria-label="Github"
        />
        <p>右边的文字</p>
      </div>

    </template>

  </u-footer>
</template>

<style scoped lang="scss">

</style>