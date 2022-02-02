
<template>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Cafe Badilico</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Continue
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container class="grey lighten-5">
        <v-row no-gutters class="mt-10">
        <v-col
            cols="12"
            sm="8"
            md="8"
        >
            <div v-if="!allItems.length">
              You have no items added to the cart
            </div>
            <div class="d-flex outlined flex-no-wrap mx-4 mb-4" v-for="(item, index) in allItems" :key="index">
                <v-avatar
                class="ma-3"
                size="150"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
              <div>
                <v-card-title
                  class="text-h5"
                >{{item.name}} </v-card-title>

                <v-card-subtitle class="mt-3">Price: $ {{item.price}}</v-card-subtitle>

                <v-card-actions class="ml-2">
                  <v-icon class="pr-4" @click="decreaseQuantity(item.id)">mdi-minus-circle-outline</v-icon> 
                  {{item.quantity}}
                  <v-icon class="pl-4" @click="addQuantity(item.id)">mdi-plus-circle-outline</v-icon> 
                </v-card-actions>
              </div>
              <v-spacer></v-spacer>
              <v-icon large
      color="red darken-2" @click="removeItem(item.id)">mdi-delete</v-icon>
            </div>
        </v-col>
        <v-col
            cols="12"
            sm="4"
            md="4"
        >
            <v-card
            class="pa-2"
            outlined
            tile
            >
            <v-card-title class="text-h5" >Review Order</v-card-title>
            <div class="mb-2">
              <v-card-subtitle class="d-flex justify-space-between"><span>Price:</span> <span>{{totalAmount}}</span></v-card-subtitle>
            </div>
            <div class="mb-2">
              <v-card-subtitle class="d-flex justify-space-between"><span>Tax:</span> <span>0</span></v-card-subtitle>
            </div>
            <v-divider></v-divider>
            <div class="mb-2">
              <v-card-subtitle class="d-flex justify-space-between"><span>Total:</span> <span>$ {{totalAmount}}</span></v-card-subtitle>
            </div>
             <v-divider></v-divider>
            <div class="text-center my-3">
              <v-btn
                outlined
                color="primary"
                >
                CONTINUE TO PAYMENT
                </v-btn>
            </div>
            
            </v-card>
        </v-col>
        </v-row>
    </v-container>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'ProductDetailModal',
    data () {
      return {
        dialog: false,
        items: [],
      }
    },
    computed:{
      ...mapGetters("product", ['getAllProducts']),
      ...mapGetters("cart", ['getCart']),
      allItems(){
          let items = [];
          this.getCart.forEach(element => {
            this.getAllProducts.forEach(el => {
              if(el.id === element.id) {
                let obj = {
                  id: el.id,
                  src : el.images[0].src,
                  name: el.name,
                  price: el.currentPrice,
                  quantity: element.quantity
                }
                items.push(obj)
              }
            })
          });
          return items;
      },
      totalAmount(){
        let total = 0;
        let tax = 0;
        this.allItems.forEach(element =>{
           total += element.quantity*element.price;
        })
        total = total + tax;
        return total;
      }
    }, 
    methods:{
      ...mapActions("cart", ['addQuantity','decreaseQuantity','removeItem']),
        openDialog() {
            this.dialog = true;
        }
    }
  }
</script>

<style>
/* .DetailDialogStyle{
    width: 70%;
    margin: 1% auto;
} */

</style>