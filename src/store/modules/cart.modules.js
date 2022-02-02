const state = {
   cart: []
}

const getters = {
    getCart(){ return state.cart; }
}

const mutations = {
    SET_CART(state) {
        if(localStorage.getItem('orderCart')){
            state.cart = JSON.parse(localStorage.getItem('orderCart'))
        }
    },
    ADD_TO_CART(state, payload){
        if(!state.cart.length){
            state.cart.push(payload)
        } 
        else {
            let exist = false;
            state.cart.forEach(element => {
                if(element.id === payload.id){
                    element.quantity += 1;
                    exist = true;
                }
            });
            if(!exist){
                state.cart.push(payload)
            }
        }
        localStorage.setItem('orderCart', JSON.stringify(state.cart))
    },
    REMOVE_ITEM(state, payload) {
        state.cart.forEach((element, index) => {
            if(element.id === payload) {
                state.cart.splice(index, 1);
            }
        })
        localStorage.setItem('orderCart', JSON.stringify(state.cart))
    },
    ADD_QUANTITY(state, payload){
        state.cart.forEach(element => {
            if(element.id === payload){
                element.quantity += 1;
            }
        });
        localStorage.setItem('orderCart', JSON.stringify(state.cart))
    },
    DECREASE_QUANTITY(state, payload) {
        state.cart.forEach((element, index) => {
            if(element.quantity > 1 && element.id === payload){
                element.quantity -= 1;
            } else {
                state.cart.splice(index, 1);
            }
        });
        localStorage.setItem('orderCart', JSON.stringify(state.cart))
    }
}
const actions = {
    setCart({commit}) {
        commit('SET_CART')
    },
    addToCart({commit}, payload){
        commit('ADD_TO_CART', payload)
    },
    removeItem({commit}, payload){
        commit('REMOVE_ITEM', payload)
    },
    addQuantity({commit}, payload) {
        commit('ADD_QUANTITY', payload)
    },
    decreaseQuantity({commit}, payload) {
        commit('DECREASE_QUANTITY', payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}