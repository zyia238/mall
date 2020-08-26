import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
        addCart(state,payLoad){
            //payLoad为传过来的goods
            let oldProduct = state.cartList.find(item => item.iid == payLoad.iid)

            if(oldProduct){
                oldProduct.count++
            }else{
                payLoad.count = 1;
                state.cartList.push(payLoad)
            }

            

            
        }
    }
})

export default store