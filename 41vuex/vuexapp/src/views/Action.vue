<template>
  <div>
    <h1>action</h1>
    <h1>{{ num }}</h1>
    <button @click="addNum">添加num</button>
    <button @click="getDuanzi">点击获取段子1</button>
    <button @click="setDz">点击获取段子2</button>
    <ul>
      <li v-for="(item, index) in duanzi" :key="'duanzi' + index">
        {{ index + 1 }}:{{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["duanzi", "num"]),
  },
  methods: {
    getDuanzi() {
      this.$store.dispatch("setDz");
      console.log(this);
    },
    ...mapActions(["setDz"]),
    ...mapMutations(["addNum", "setNum"]),
  },
};
</script>

<style>
</style>