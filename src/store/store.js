import Vue from "vue";
import Vuex from 'vuex'

import product from './modules/product.modules'
import cart from './modules/cart.modules'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        product,
        cart
    }
})