<template>
 


<div>
     <form @submit.prevent="login">
        <mt-field 
      label="用户名" 
      placeholder="请输入用户名" 
      v-model="obj.username" >
      </mt-field>
      <mt-field 
      label="密码" 
      placeholder="请输入密码" 
      type="password" 
      v-model="obj.password">
      </mt-field>
      <mt-button size="large" type="primary" >primary</mt-button>
     </form>
    </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
  data() {
    return {
      obj:{
        username:'clm11',
        password:'123456'
      }
    };
  },
  methods: {
    login() {
      let url = "/api/login/token";
      console.log(this.obj);
      this.axios
        .post(url, this.obj)
        .then(data => {
          console.log(data);
          console.log(data.data);
          this.loginxiugai(data.data);
          this.$router.push('/')
        });
    },
    ...mapActions(['loginxiugai'])
  }
};
</script>

<style scoped>

</style>
