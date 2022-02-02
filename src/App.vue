<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="pl-4 d-flex align-center">
        <h2 class="shrink d-none d-md-flex">Order Spark</h2>
        <h2 class="d-flex d-md-none">OS</h2>
      </div>
      <v-spacer></v-spacer>
        <v-icon class="pr-4" @click="openDetailModal">mdi-cart</v-icon> 
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
    <ProductDetailModal ref="OpenDetail"/>
  </v-app>
</template>
<script>
import ProductDetailModal from './components/ProductDetailModal.vue'

export default {
  data() {
    return{
      initialProducts : [
        {
          id: 1,
          name: "Product One",
          currentPrice: "999.00",
          previousPrice: "1999.00",
          images: [
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            },
          ]
        },
        {
          id: 2,
          name: "Product Two",
          currentPrice: "1999.00",
          previousPrice: "2499.00",
          images: [
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            },
          ]
        },
        {
          id: 3,
          name: "Product Three",
          currentPrice: "799.00",
          previousPrice: "",
          images: [
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            },
          ]
        },
        {
          id: 4,
          name: "Product Four",
          currentPrice: "4999.00",
          previousPrice: "11999.00",
          images: [
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            },
          ]
        },
        {
          id: 5,
          name: "Product Five",
          currentPrice: "199.00",
          previousPrice: "",
          images: [
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            },
          ]
        },
        {
          id: 6,
          name: "Product Six",
          currentPrice: "799.00",
          previousPrice: "999.00",
          images: [
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            },
          ]
        },
      ]
    }
  },
  components:{
      ProductDetailModal
  },
  mounted(){
      localStorage.setItem('allProducts', JSON.stringify(this.initialProducts))
  },
  methods:{
    openDetailModal() {
        this.$refs.OpenDetail.openDialog();
    }
  }
}
</script>

<style lang="scss">
  body {
    box-sizing: content-box !important;
  }
</style>
