<template>
   <Row>
        <i-col span="8">&nbsp;</i-col>
        <i-col span="8">
          <form action="" @submit.prevent="login">
            <i-input v-model="obj.username"  style="width: 300px">
            </i-input>
            <i-input v-model="obj.password"  style="width: 300px">
            </i-input>
            <div></div>
          <i-button type="success" htmlType='submit' >确认提交</i-button>
          </form>
        </i-col>
        <i-col span="8">
        </i-col>
    </Row>
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
