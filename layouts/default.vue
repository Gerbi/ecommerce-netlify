<template>
  <div class="ms overflow-x-hidden bg-white">
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
