<template>
  <div>
    <!-- <h1>新闻内容:{{ $route.params.id }}</h1> -->
    <h1>新闻内容:{{ id }}--{{ username }}</h1>
  </div>
</template>

<script>
export default {
  props: ["id", "username"],
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>