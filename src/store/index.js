import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import loginModel from './model/login'
vue.use(vuex)

const store = new vuex.Store({
    state:{
        products:[],
        cart:[]
    },
    mutations:{
        getcart(state,data){
            state.cart = data;
        },
        tocart(state,obj){

        },
        reducecart(state,obj){

        }
    },
    getters:{
        shuliang(state,getters){
            var sumResult = 0; 
            for (var i = 0; i < state.cart.length; i++) { 
            　　sumResult += parseInt(state.cart[i].count); 
            } 
            return sumResult; 
           
        },
        login(state,getters){
            return state.loginModel.login
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
            console.log(obj)
            // 获取购物车信息，触发mutations
            axios.get('/api/users/token/cart',{
                params:{
                    access_token:obj
                }
            }).then((data)=>{
                console.log(data.data);
                context.commit('getcart',data.data.info)
            })
        }
    },
    modules:{
        loginModel
    }
})

export default store;