<template>
  <div>
    <div class="px-10 pt-10">
      <div class="grid grid-cols-1 md:grid-cols-5 pb-3">
        <div class="flex items-center justify-center col-span-2 md:items-start">
          <img class="object-cover" :src="`/products/${product.img}`" />
        </div>
        <div class="col-span-3">
          <h1 class="text-3xl font-semibold leading-normal text-gray-800">{{ product.name }}</h1>
          <star-rating
                  class="flex"
                  :rating="product.starrating"
                  :star-size="15"
                  :show-rating="false"
                  active-color="#daa520"
                  style="margin: 5px 0"
          ></star-rating>
          <h4 class="my-2 text-xl font-medium text-indigo-600">{{ product.price | dollar }}</h4>
          <p class="mb-2 text-gray-900">{{ product.description }}</p>
          <p class="mb-2 text-gray-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto velit dolores repudiandae animi quidem, eveniet quod dolor facilis dicta eligendi ullam error. Assumenda in fugiat natus enim similique nam itaque.</p>
          <p class="flex mt-6 mb-4">
            <button class="w-12 text-xl text-white bg-black border-black" @click="quantity > 0 ? quantity-- : quantity = 0">-</button>
            <input class="w-16 px-2 py-3 mx-3 text-2xl text-center appearance-none" type="number" v-model="quantity" />
            <button class="w-12 text-xl text-white bg-black border-black" @click="quantity++">+</button>
          </p>
          <p>
            Available in additional colors:
            <strong>
              <span :style="`color: ${product.color}`">{{ product.color }}</span>
            </strong>
          </p>
          <p class="my-4">
            <button class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" @click="cartAdd">Add to Cart</button>
          </p>
        </div>
      </div>
      <hr />
      <div class="pt-6">
        <h2 class="text-lg font-normal">Reviews</h2>
        <!-- maybe an image of a person? -->
        <star-rating
                class="flex"
                :rating="product.starrating"
                active-color="#daa520"
                :star-size="15"
                :show-rating="false"
                style="margin: 5px 0"
        ></star-rating>
        <p class="mt-3 mb-1 text-sm font-normal text-gray-900">{{ product.review }}</p>
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto placeat consequatur voluptas sit mollitia ratione autem, atque sequi odio laborum, recusandae quia distinctio voluptatibus sint, quae aliquid possimus exercitationem.</p>
      </div>
    </div>
    <app-featured-products />
  </div>
</template>

<script>
import { mapState } from "vuex";
import StarRating from "vue-star-rating/src/star-rating.vue";
import AppFeaturedProducts from "~/components/AppFeaturedProducts.vue";

export default {
  components: {
    StarRating,
    AppFeaturedProducts
  },
  data() {
    return {
      id: this.$route.params.id,
      quantity: 1,
      tempcart: [] // this object should be the same as the json store object, with an additional param, quantity
    };
  },
  computed: {
    ...mapState(["storedata"]),
    product() {
      return this.storedata.find(el => el.id === this.id);
    }
  },
  methods: {
    cartAdd() {
      let item = this.product;
      item.quantity = this.quantity;
      this.tempcart.push(item);
      this.$store.commit("addToCart", {...item});
    }
  }
};
</script>

<style lang="css" scoped>
</style>