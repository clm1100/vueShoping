import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
vue.use(vuex)

const store = new vuex.Store({
    state:{
        products:[],
        cart:[]
    },
    mutations:{
        tocart(state,obj){

        },
        reducecart(state,obj){

        }
    },
    actions:{
        tocart(context,obj){
            // 异步添加到购物车,触发mutations同步UI
        },
        reducecart(context,obj){
            // 异步删除购物车数据,触发mutations同步UI
        },
        getcart(context,obj){
            // 获取购物车信息，触发mutations
            axios.get('')
        }
    }
})

export default store;