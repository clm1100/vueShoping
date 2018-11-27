<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
    <router-view/>
    <mt-navbar v-model="selected" :fixed="false">
      <mt-tab-item id="1">页面1</mt-tab-item>
      <mt-tab-item id="2">页面2</mt-tab-item>
      <mt-tab-item id="3">页面3</mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      selected:"1"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100vh;
}
</style>
