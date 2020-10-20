<template>
  <div>
    <h1>消息： {{ msg }}</h1>
    <h2>年龄： {{ age }}</h2>
    <h2>数量： {{ num }}</h2>
    <h2>greenMsg: {{ greenMsg }}</h2>
    <!-- <input type="text" v-model="num" /> -->
    <!-- <input type="text" :value="num" @input="changeValue" /> -->
  </div>
</template>

<script>
//映射数据到computed
import { mapState } from "vuex";

//state在组件的应用
//将想要用到的全局state数据放到组件computed内部使用，v-model的内容将获取和修改相互分开
export default {
  //   computed: {
  //     msg: function () {
  //       return this.$store.state.msg;
  //     },
  //     age: function () {
  //       return this.$store.state.age;
  //     },
  //     // num: function () {
  //     //   return this.$store.state.num;
  //     // },
  //     num: {
  //       get: function () {
  //         return this.$store.state.num;
  //       },
  //       set: function (val) {
  //         this.$store.commit("setNum", val);
  //       },
  //     },
  //   },

  //第一种映射
  //   computed: mapState(["num", "age", "msg"]),
  //   methods: {
  //     changeValue: function (e) {
  //       this.$store.commit("setNum", e.target.value);
  //     },
  //   },

  data() {
    return {
      color: "green",
    };
  },
  //第二种
  //   computed: mapState({
  //     msg: "msg",
  //     num: (state) => {
  //       return state.num;
  //     },
  //     age: (state) => state.age, //键字段可另取

  //     greenMsg: function (state) {
  //       return state.msg + this.color;
  //     },
  //   }),

  //第三种

  computed: {
    reverse: function () {
      return this.color.split("").reverse().join("");
    },
    ...mapState({
      msg: "msg",
      num: (state) => {
        return state.num;
      },
      age: (state) => state.age, //键字段可另取

      greenMsg: function (state) {
        return state.msg + this.color;
      },
    }),
  },
};
</script>

<style>
</style>