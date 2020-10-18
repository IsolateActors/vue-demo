<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="goNews">跳转至新闻页</button>
    <button @click="go">前进</button>
    <button @click="back">后退</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    goNews() {
      //通过路劲跳转;
      this.$router.push({
        path: "/news/123",
      });

      //通过名字跳转
      // this.$router.push({
      //   name: "News",
      //   params: {
      //     id: 123,
      //   },
      // });

      //路劲参数
      // this.$router.push({
      //   path: "/news/123",
      //   query: {
      //     username: "xiaoming",
      //     password: "123456",
      //   },
      // });

      //替换(无后退，即替换了当前的页面),push则是添加可后退
      // this.$router.replace(
      //   {
      //     path: "/news/123",
      //     query: {
      //       username: "xiaoming",
      //       password: "123456",
      //     },
      //   },
      //   function () {
      //     console.log("成功替换页面");
      //   }
      // );
    },

    go() {
      this.$router.go(1);
    },

    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
img {
  display: block;
  margin: 0 auto;
}
</style>