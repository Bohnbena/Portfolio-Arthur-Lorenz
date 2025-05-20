<script setup>
import icon from './assets/menu.png'
import {ref} from "vue";
const menuOpen = ref(true);
</script>

<template>
  <div class="min-h-screen grid grid-cols-12 auto-rows-[100px]">
    <button @click="menuOpen = !menuOpen" class="fixed justify-center left-5 top-5 cursor-pointer">
      <img :src="icon" alt="icon" class="w-6 h-6"/>
    </button>
    <transition name="slide">
      <div class="row-start-4" v-show="menuOpen">
        <div class="fixed w-28 text-6xl pl-2 font-main sm:w-44">
          <n-anchor
              affix
              listen-to=".document-scroll-container"
              :trigger-top="0"
              :top="0"
              style="z-index: 1"
              :bound="200"
          >
            <n-anchor-link title="Start" href="#start">
              <n-anchor-link title="Wer bin ich?" href="#wer"/>
              <n-anchor-link title="Fähigkeiten" href="#fahigkeiten"/>
              <n-anchor-link title="Lebenslauf" href="#erfahrung"/>
              <n-anchor-link title="Zukunft" href="#zukunft"/>
            </n-anchor-link>
            <n-anchor-link title="Kontakt" href="#kontakt"/>
          </n-anchor>
        </div>
      </div>
    </transition>
    <div class="row-start-1 row-end-47 sm:row-end-40 md:row-end-45 lg:row-end-38">
    </div>
    <router-view/>
  </div>
</template>

<style scoped>

.n-anchor-link {
  font-size: 12px;
  padding: 3px 3px;
}

@media (min-width: 768px) {
  .n-anchor-link {
    font-size: 16px;
    padding: 5px 10px;
  }
}

/* In deiner CSS oder <style> Sektion */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0%);
  opacity: 1;
}

.slide-leave-from {
  transform: translateX(0%);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
