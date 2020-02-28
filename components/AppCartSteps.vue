<template>
  <section class="grid my-5 mx-auto text-center grid-cols-3">
    <div class="shopping flex flex-col items-center">
      <h2 class="text-2xl pt-5 border border-gray-500 rounded-full h-20 w-20 text-gray-800" :class="{ active: cartUIStatus === 'idle' && cartCount === 0 }">01</h2>
      <h4 class="mt-5 text-gray-800 text-xl font-medium">Shopping Cart</h4>
    </div>
    <div class="checkout flex flex-col items-center">
      <h2 class="text-2xl pt-5 border border-gray-500 rounded-full h-20 w-20 text-gray-800" :class="{ active: cartUIStatus === 'idle' && cartCount > 0 }">02</h2>
      <h4 class="mt-5 text-gray-800 text-xl font-medium">Check out</h4>
    </div>
    <div class="order flex flex-col items-center">
      <h2 class="text-2xl pt-5 border border-gray-500 rounded-full h-20 w-20 text-gray-800" :class="{ active: cartUIStatus === 'success' }">03</h2>
      <h4 class="mt-5 text-gray-800 text-xl font-medium">Order Complete</h4>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["cartUIStatus"]),
    ...mapGetters(["cartCount"])
  }
};
</script>

<style lang="css" scoped>
section {
  grid-template-rows: 1fr;
  grid-column-gap: 100px;
  grid-row-gap: 0px;
  width: 80%;
}

h2 {
  &.active {
    background: #5850ec;
    border: 1px solid #5850ec;
    color: white;
  }
}

</style>