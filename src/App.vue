<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <hello-world v-model:msg="title" /> -->

  <div class="app">
    <div class="menu-list">
      <router-link to="/component/button" class="menu-item">按钮</router-link>
      <router-link to="/component/icon" class="menu-item">图标</router-link>
    </div>
    <router-view class="router-view" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title: 'Hello Vue 3.0 + Vite'
    }
  },
  mounted() {
    // const files = require.context('./doc', false, /.json$/).keys()
    // console.log(files)
  }
}
</script>

<style>
.app {
  height: 100%;
  display: flex;
}
.menu-list {
  width: 200px;
  min-width: 150px;
  height: 100%;
  background: #fff;
  padding: 25px 0;
  color: #666;
  box-sizing: border-box;
}
.menu-item {
  height: 50px;
  padding: 0 20px;
  display: block;
  line-height: 50px;
  text-decoration: none;
  color: #666;
  cursor: pointer;
}
.menu-item:hover,
.router-link-active {
  color: blue;
}
.router-view {
  flex: 1;
  min-width: 500px;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>
