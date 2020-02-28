<template>
  <div>
    <section v-if="cartCount > 0">
      <table>
        <tr>
          <th class="px-6 py-3 border-b border-gray-200 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Product</th>
          <th class="px-6 py-3 border-b border-gray-200 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Price</th>
          <th class="px-6 py-3 border-b border-gray-200 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
          <th class="px-6 py-3 border-b border-gray-200 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Total</th>
        </tr>
        <tr v-for="item in cart" :key="item.id">
          <td>
            <img :src="`/products/${item.img}`" :alt="item.name" class="productimg" />
            <h3 class="productname">{{ item.name }}</h3>
          </td>
          <td>
            <h4 class="price">{{ item.price | dollar }}</h4>
          </td>
          <td>
            <strong>{{ item.quantity }}</strong>
          </td>
          <td>{{ item.quantity * item.price | dollar }}</td>
        </tr>
      </table>

      <section class="payment">
        <app-card />
        <div class="total">
          <div class="caption">
            <p>
              <strong>Subtotal:</strong>
            </p>
            <p>Shipping:</p>
            <p class="golden bg-indigo-100 text-indigo-700">Total:</p>
          </div>
          <div class="num">
            <p>
              <strong>{{ cartTotal | dollar }}</strong>
            </p>
            <p>Free Shipping</p>
            <p class="golden bg-indigo-100 text-indigo-700">{{ cartTotal | dollar }}</p>
          </div>
        </div>
      </section>
    </section>

    <section v-else class="text-center">
      <p class="mb-3 text-gray-700">Your cart is empty, fill it up!</p>
      <button class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
        <nuxt-link exact to="/">Back Home</nuxt-link>
      </button>
    </section>
  </div>
</template>

<script>
import AppCard from "~/components/AppCard.vue";
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    AppCard
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartCount", "cartTotal"])
  }
};
</script>

<style lang="css" scoped>
.productimg {
  float: left;
  margin-right: 15px;
  width: 100px;
}

.total {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 100px;
}

table {
  width: 100%;
  margin-top: 20px;
}

tr {
  text-align: center;
}

th {
  padding: 10px 0;
}

td,
th {
  border-bottom: 1px solid #ccc;
}

.golden {
  font-weight: bold;
  padding: 10px;
}

.productname {
  padding-top: 36px;
  text-align: left;
}

h1 {
  margin-top: 40px;
}

.num {
  text-align: right;
}

button a {
  color: white;
  transition: 0.3s all ease;
}

@media screen and (min-width: 700px) {
  .payment {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 100px;
  }

  .total {
    width: 90%;
  }
}

@media screen and (max-width: 699px) {
  .payment {
    width: 94%;
    margin-left: 2%;
  }
}
</style>