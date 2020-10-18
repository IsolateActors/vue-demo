<template>
  <div id="app">
    <router-view name="nav" />
    <router-view name="aside" />

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/me">个人中心</router-link> |
      <router-link to="/news/xxx">新闻页</router-link> |
      <router-link to="/bignews/xxx">大新闻页</router-link> |
      <router-link to="/weather/广州">天气查询</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  watch: {
    $route: function (val) {
      console.log("路由发生更改");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

a.router-link-exact-active {
  color: #b98142;
}
</style>
