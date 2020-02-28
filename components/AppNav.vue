<template>
  <header class="container px-4 mx-auto flex justify-center flex-col items-center px-10 pt-10 pb-0">
    <h1 class="leading-normal font-semibold text-3xl text-indigo-600">Skyline Ivy</h1>
    <nav class="flex mt-8 justify-center items-enter py-2 px-0 border-t border-b">
      <ul class="pl-0">
        <li class="inline uppercase border-l border-r px-5 py-0 relative">
          <nuxt-link class="text-black hover:text-indigo-600" exact to="/">Home</nuxt-link>
        </li>
        <li class="inline uppercase border-l border-r px-5 py-0 relative">
          <nuxt-link class="text-black hover:text-indigo-600" to="/all">All</nuxt-link>
        </li>
        <li class="inline uppercase border-l border-r px-5 py-0 relative">
          <nuxt-link class="text-black hover:text-indigo-600" to="/women">Women</nuxt-link>
        </li>
        <li class="inline uppercase border-l border-r px-5 py-0 relative">
          <nuxt-link class="text-black hover:text-indigo-600" to="/men">Men</nuxt-link>
        </li>
        <li class="inline uppercase border-l border-r px-5 py-0 relative">
          <div class="absolute rounded-full bg-indigo-600 text-white h-6 w-6 text-center font-bold carttotal" v-if="cartCount > 0">{{ cartCount }}</div>
          <nuxt-link class="text-black hover:text-indigo-600" to="/cart">Cart</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartCount"])
  }
};
</script>

<style lang="css" scoped>
nav {
  width: 80vw;
}
.carttotal {
  font-size: 12px;
  padding: 3px;
  top: -18px;
  right: -5px;
}

</style>