<template>
  <div>
      <h3 class="grey--text text--lighten-1">BEST SELLERS</h3>
      <v-row>
          <v-col v-for="(item, index) in items" :key="index">
             <product-card :items="item"></product-card>
          </v-col>
      </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCard from './ProductCard.vue'
export default {
  components: { ProductCard },
  name: 'ListAllProduct',
  computed:{
      ...mapGetters("product", ['getAllProducts']),
      ...mapGetters("cart", ['getCart']),
      items(){
          return this.getAllProducts;
      }
    },
    methods: {
        ...mapActions("product", ['setAllProducts']),
        ...mapActions("cart", ['setCart'])
    },
    async mounted(){
        await this.setAllProducts()
        await this.setCart()
    }
}
</script>

<style>

</style>