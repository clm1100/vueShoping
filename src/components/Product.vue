<template>
  <div>
     <ul>
         <li v-for="item in products" :key="item._id">
             <i>{{item.productname}}</i>
             <span>{{item.price}}</span>
             <span>3000</span>
              <i-button
              @click="toCart({id:item._id})"
              size='small' 
              type="success">
              加入购物车
              </i-button>
         </li>
     </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
        },
        ...mapActions(['getcart'])
    }
}
</script>

<style scoped>

</style>
