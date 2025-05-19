<script setup>
defineProps({
  skills: String,
  source: String,
  precent: String,
  color: String,
});
</script>

<template>
  <div class="pb-5">
    <div class="flex justify-between items-center">
      <p class="">{{ skills }}</p>
      <img :src="source" class="h-14" alt="">
    </div>
    <n-progress
        type="line"
        :percentage="Number(precent)"
        indicator-placement="inside"
        :color="color"
    />
  </div>
</template>

<style scoped>
</style>