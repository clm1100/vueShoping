<template>
  <div>
      <Header></Header>
      <h1>
          <router-view/>
      </h1>
      <h1>尾部组件</h1>
  </div>
</template>

<script>
import  Header  from "./Header.vue";
export default {
    components:{
        Header
    }
}
</script>

<style scoped>

</style>
