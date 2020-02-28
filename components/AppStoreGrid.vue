<template>
  <div>
    <div class="grid grid-cols-1">
      <aside class="flex flex-col md:flex-row justify-center block md:w-3/4 h-full mx-auto my-4">
        <div class="">
          <h3 class="text-lg text-gray-700 font-medium">Special Sale</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero iusto nemo laboriosam perferendis voluptas ullam officiis, quibusdam quas quam eveniet est fugit delectus corporis incidunt nam esse suscipit itaque?</p>
        </div>
        <div class="md:ml-4 my-6 lg:my-0">
          <h3 class="text-center text-gray-700 text-xl">Filter by Price:</h3>
          <p class="text-left text-gray-800 mt-1">
            Max Price
            <strong>${{ pricerange }}</strong>
          </p>
          <input
                  class="slider"
                  id="pricerange"
                  type="range"
                  v-model="pricerange"
                  :min="min"
                  :max="max"
                  step="0.1"
          />
          <div class="block mt-0">
            <span class="min">${{ min }}</span>
            <span class="inline-block float-right">${{ max }}</span>
          </div>
        </div>
      </aside>
    </div>
    <transition-group name="items" tag="section" class="grid grid-cols-1 p-0 sm:grid-cols-2 md:grid-cols-3">
      <div v-for="item in filteredprice" :key="item.id" class="flex flex-col items-center justify-center my-5">
        <div class="flex items-center content-center img-contain">
          <NuxtLink :to="`product/${item.id}`">
            <img class="w-full" :src="`/products/${item.img}`" />
          </NuxtLink>
        </div>
        <star-rating
          :rating="item.starrating"
          active-color="#000"
          :star-size="15"
          :show-rating="false"
          style="margin: 5px 0"
        ></star-rating>
        <h3>{{ item.name }}</h3>
        <h4 class="my-1 text-lg font-normal text-indigo-700">{{ item.price | dollar }}</h4>
        <NuxtLink :to="`product/${item.id}`">
          <button class="px-4 py-2 bg-white border border-gray-400 rounded-lg hover:text-white hover:bg-indigo-600 focus:outline-none">View Item ></button>
        </NuxtLink>
      </div>
    </transition-group>
  </div>
</template>

<script>
import StarRating from "vue-star-rating/src/star-rating.vue";

export default {
  props: {
    data: {
      required: true
    }
  },
  data() {
    return {
      min: 0,
      max: 200,
      pricerange: 200
    };
  },
  computed: {
    filteredprice() {
      return this.data.filter(el => el.price < this.pricerange);
    }
  },
  components: {
    StarRating
  }
};
</script>

<style lang="css" scoped>
.storegrid {
  width: 95%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0;
}
.img-contain {
  max-height: 190px;
}

</style>