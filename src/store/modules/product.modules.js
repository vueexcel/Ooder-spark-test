const state = {
  allProducts: []
}

const getters = {
    getAllProducts(){ return state.allProducts; }
}

const mutations = {
    SET_ALL_PRODUCTS(state, payload){
        state.allProducts = JSON.parse(JSON.stringify(payload));
    }
}

const actions = {
    setAllProducts({ commit }) {
      if(localStorage.getItem('allProducts')){
          commit('SET_ALL_PRODUCTS', JSON.parse(localStorage.getItem('allProducts')));
      }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}