<template>
  <div>
    <h1>个人中心</h1>
    <button @click="goAbout">跳转到About</button>
  </div>
</template>

<script>
export default {
  methods: {
    goAbout: function (event) {
      this.$router.push({
        path: "about",
      });
      console.log(this);
    },
  },
};
</script>

<style>
</style>