<template>
  <div>
    <h1>
      {{ $store.getters.reverseMsg }}
    </h1>
    <h2>{{ reverseMsg }}</h2>
    <h2>{{ mixinMsg("a") }}</h2>

    <h2>{{ msg }}</h2>
    <h2>{{ age }}</h2>

    <h2>{{ mixinMsg1 }}</h2>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  mounted() {
    console.log(this);
  },
  //   computed: {
  //     reverseMsg: function () {
  //       return this.$store.getters.reverseMsg;
  //     },
  //   },

  //   computed: mapGetters(["reverseMsg", "mixinMsg"]),

  computed: {
    mixinMsg1: function () {
      return this.$store.getters.mixinMsg("aaa");
    },
    ...mapGetters(["reverseMsg", "mixinMsg"]),
    ...mapState(["msg", "age"]),
  },
};
</script>

<style>
</style>