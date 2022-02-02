<template>
  <v-card
    class="mx-auto my-2"
    max-width="374"
  >
    <v-carousel height="250">
        <v-carousel-item
        v-for="(item,i) in items.images"
        :key="i"
        :src="item.src"
        reverse-transition="slide-x-reverse-transition"
        transition="slide-x-reverse-transition"
        ></v-carousel-item>
    </v-carousel>

    <v-card-title>{{items.name}}</v-card-title>

    <v-card-text>
        <span v-if="items.currentPrice" :class="items.previousPrice?'red--text text--lighten-1':''">${{items.currentPrice}}</span> 
        <span class="ml-2" v-if="items.previousPrice"><strike>${{items.previousPrice}}</strike></span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        depressed
        color="primary"
        class="px-6 mb-2"
        @click="AddToCart()"
      >
        ADD TO CART
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ProductCard',
  props:{
      items: Object
  },
  data () {
    return {
    }
  },
  methods:{
      ...mapActions("cart", ['addToCart']),
      AddToCart(){
         let payload = {
             id: this.items.id,
             quantity: 1
         }
         this.addToCart(payload);
      }
  }
    
}
</script>

<style>

</style>