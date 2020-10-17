<template>
  <div id="app">
    <alert-com
      :title="title"
      :content="content"
      :cancelEvent="cancelEvent"
      :confirmEvent="confirmEvent"
      v-if="isAlert"
    ></alert-com>
  </div>
</template>

<script>
import alertCom from "./components/AlertCom";

export default {
  name: "App",
  components: {
    alertCom,
  },
  data() {
    return {
      title: "跳转页面",
      content: "是否跳转至百度？",
      isAlert: true,
    };
  },

  methods: {
    cancelEvent: function () {
      this.isAlert = false;
    },
    confirmEvent: function () {
      location.href = "http://www.baidu.com";
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
