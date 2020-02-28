<template>
  <div class="mx-auto my-20">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div class="border flex flex-col p-8 justify-center text-center" v-for="(box, i) in boxes" :key="box.heading">
          <img class="h-24 w-24 fill-current  my-6 self-center" :src="box.icon" alt="service icon" />
          <h4 class="uppercase text-xl">{{ box.heading }}</h4>
          <p class="text-gray-600 my-2 text-lg">{{ box.details }}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      boxes: [
        {
          icon: "/icon-package.svg",
          heading: "Free Shipping Globally",
          details: "Delivery in 4 Days"
        },
        {
          icon: "/icon-cal.svg",
          heading: "24/7 Customer Service",
          details: "Call us any time"
        },
        {
          icon: "/icon-service.svg",
          heading: "Easy Online Returns",
          details: "Send Within 30 Days"
        }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
</style>