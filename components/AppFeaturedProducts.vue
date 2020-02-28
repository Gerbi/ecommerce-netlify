<template>
  <section class="mt-16">
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-center text-lg leading-5">
        <span class="px-2 bg-white text-gray-600">Featured Products</span>
      </div>
    </div>
    <div class="grid mt-10 grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full mt-5 mb-16 px-10 lg:px-24">
      <div class="flex flex-col items-center justify-center border text-center rounded-lg pt-2 pb-4 hover:shadow-xl" v-for="product in featuredProducts" :key="product.id">
        <img :src="`/products/${product.img}`" />
        <h3 class="text-gray-800">{{ product.name }}</h3>
        <h4 class="text-indigo-600 text-lg font-medium my-3">{{ product.price | dollar }}</h4>
        <NuxtLink class="inline-flex rounded-md shadow" :to="`/product/${product.id}`">
          <button class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">View Item ></button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    featuredProducts() {
      return this.$store.getters.featuredProducts;
    }
  }
};
</script>

<style lang="css" scoped>
</style>
