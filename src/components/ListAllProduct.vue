<template>
  <div>
      <h3>BEST SELLERS</h3>
      <v-row>
          <v-col v-for="x in 12" :key="x">
             <product-card></product-card>
          </v-col>
      </v-row>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  components: { ProductCard },
  name: 'ListAllProduct',

}
</script>

<style>

</style>