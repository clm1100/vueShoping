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
     <h5>总价：{{shuliang }}</h5>

  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      products: []
    };
  },
  created() {
      let access_token = this.$sstore.get("Token")
    this.axios.get("/api/product/list").then(data => {
      this.products = data.data.info;
    });
    this.getcart(access_token);
  },
  methods: {
    toCart(id) {
      console.log(id);
      this.axios
        .post("/api/product/token/tocart", { productid: id ,access_token:this.$sstore.get("Token")})
        .then(data => {
          // console.log(data);
          if (data.data.code == 200) {
            this.getcart(this.$sstore.get("Token"));
          }
        });
    },
    ...mapActions(["getcart"])
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["shuliang"])
  }
};
</script>

<style scoped>

</style>
