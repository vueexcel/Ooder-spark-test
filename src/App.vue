<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="pl-4 d-flex align-center">
        <h1 class="shrink mt-1 d-none d-md-flex">Order Spark</h1>
        <h2 class="d-flex d-md-none">OS</h2>
      </div>

      <v-spacer></v-spacer>

      
        <v-icon class="pr-4">mdi-cart</v-icon>
      
    </v-app-bar>

    <v-main>
      <v-container>
        <ListAllProduct/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ListAllProduct from './components/ListAllProduct';

export default {
  name: 'App',

  components: {
    ListAllProduct,
  },

  data: () => ({
    //
  }),
};
</script>
