<template>
  <div>
        
        <div v-if="login">
          <Button type="text">Text</Button>
          <h2>{{user.username}}</h2>
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
    ...mapGetters(['login','user'])
  },

}
</script>

<style scoped>

</style>