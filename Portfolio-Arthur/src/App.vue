<script setup>
  import icon from './assets/menu.png'
  import { ref } from "vue";

  const menuOpen = ref(true);
</script>

<template>
  <div class="min-h-screen grid grid-cols-12 auto-rows-[100px]">

        <button @click="menuOpen = !menuOpen" class="fixed justify-center left-5 top-5 cursor-pointer">
          <img :src="icon" alt="icon" class="w-6 h-6" />
        </button>

    <transition name="slide">
    <div class="row-start-4" v-show="menuOpen">
      <div class="fixed w-44 text-6xl pl-2 font-main ">
        <n-anchor
            affix
            listen-to=".document-scroll-container"
            :trigger-top="24"
            :top="88"
            style="z-index: 1"
            :bound="24"
        >
            <n-anchor-link title="Start" href="#Demos">
            <n-anchor-link title="Wer bin ich?" href="#basic.vue" />
            <n-anchor-link title="Fähigkeiten" href="#ignore-gap.vue" />
            <n-anchor-link title="Erfahrungen" href="#affix.vue" />
            <n-anchor-link title="Zukunft" href="#scrollto.vue" />
            </n-anchor-link><n-anchor-link title="Kontakt" href="#API" />
        </n-anchor>
      </div>
    </div>
    </transition>

    <div class="row-start-1 row-end-20">
      <section id="Demos">
        <h2></h2>
      </section>
    </div>
    <router-view />
  </div>
</template>

<style scoped>

.n-anchor-link {
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
