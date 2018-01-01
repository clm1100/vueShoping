<template>
  <div>
        
        <div v-if="login">
          <span>{{login}}</span>
        </div>
        <div v-else>
          <span>登陆||注册</span>
        <span>账号</span>
        </div>
  </div>
</template>

<script>
import { mapState,mapActions ,mapGetters} from "vuex";
export default {
      computed:{
    ...mapGetters(['login'])
  },

}
</script>

<style scoped>

</style>