<template>
  <div class="home">
    <h1>点击数量： {{ count }}</h1>
    <button @click="addEvent">添加点击数</button>

    <!-- vuex方式 -->
    <h1>vuex点击数量： {{ $store.state.num }}</h1>
    <button @click="emitAction">添加点击数</button>
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
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    addEvent: function () {
      this.count++;
    },
    emitAction: function () {
      this.$store.commit("addNum");
    },
  },
  mounted: function () {
    console.log(this);
  },
};
</script>
