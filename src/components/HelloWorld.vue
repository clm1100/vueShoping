<template>
  <h2>hhh</h2>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    console.log(66666666666);
    let url ='/api/login'
    this.axios.post(url,{username:'clm1457',password:'123456'}).then((data)=>{
      console.log(data)
    })
  }
}
</script>

<style scoped>

</style>
