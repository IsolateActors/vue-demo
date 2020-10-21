<template>
  <div>
    <h1>buycart</h1>
    <!-- <h2>{{ $store.state.buyCart.productNum }}</h2> -->
    <h2>{{ buyCart.productNum }}</h2>
    <h2>{{ brief }}</h2>
    <button @click="addProNum">添加数量M</button>
    <button @click="changeProNum">添加数量A</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["buyCart"]),
    ...mapGetters("buyCart", ["brief"]),
  },
  methods: {
    ...mapMutations("buyCart", ["addProNum"]),
    ...mapActions("buyCart", ["changeProNum"]),
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>