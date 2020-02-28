<template>
  <div class="ms overflow-x-hidden bg-white">
    <div class="fixed top-0 left-0 z-50 px-2 font-mono text-white bg-indigo-500 shadow-md">
      <span class="sm:hidden">df</span>
      <span class="hidden sm:inline md:hidden">sm</span>
      <span class="hidden md:inline lg:hidden">md</span>
      <span class="hidden lg:inline xl:hidden">lg</span>
      <span class="hidden xl:inline">xl</span>
    </div>
    <app-nav />
    <main class="container px-4 pt-4 mx-auto">
      <nuxt />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "~/components/AppFooter.vue";
import AppNav from "~/components/AppNav.vue";

export default {
  components: {
    AppFooter,
    AppNav
  }
};
</script>

<style scoped>
.ms {
  border: 10px solid #ccc;
  min-height: 100vh;
}
</style>
