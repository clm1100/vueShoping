<template>
  <div>
     <ul>
         <li v-for="item in products" :key="item._id">
             <i>{{item.productname}}</i>
             <span>{{item.price}}</span>
             <span>3000</span>
              <i-button
              @click="toCart(item._id)"
              size='small' 
              type="success">
              加入购物车
              </i-button>
         </li>
     </ul>
     <hr>
     <div>
         <h1 v-show="!cart.length">购物车中没有东西</h1>
         <ul>
             <li v-for="item in cart" :key='item._id'>
                 {{item._id}}
                 <i>{{item.count}}</i>
                 </li>
         </ul>
     </div>

  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    data(){
        return {
            products:[]
        }
    },
    created(){
        this.axios.get('/api/product/list').then((data)=>{
            // console.log(data.data.info)
            this.products = data.data.info
        })
        this.getcart()
    },
    methods:{
        toCart(id){
            console.log(id);
            this.axios.post('/api/product/tocart',{productid:id}).then((data)=>{
                // console.log(data);
                if(data.data.code==200){
                    this.getcart();
                }
            })
        },
        ...mapActions(['getcart'])
    },
    computed:{
        ...mapState(['cart'])
    }
}
</script>

<style scoped>

</style>
