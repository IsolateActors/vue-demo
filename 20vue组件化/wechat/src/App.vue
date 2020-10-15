<template>
  <div id="app">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="content">
      <chat-com :currentUser="currentUser"></chat-com>
      <userlist-com
        @chooseUser="toggleUser"
        :userlist="userlist"
      ></userlist-com>
    </div>
  </div>
</template>

<script>
import chatCom from "./components/chatcom.vue";
import userlistCom from "./components/userlistcom";

export default {
  name: "App",
  components: {
    chatCom,
    userlistCom,
  },
  data() {
    return {
      msg: "聊天",
      userlist: [
        {
          username: "小米",
          headimg: require("./assets/img/himg1.jpg"),
        },
        {
          username: "小红",
          headimg: require("./assets/img/himg2.jpg"),
        },
        {
          username: "小蓝",
          headimg: require("./assets/img/himg3.jpg"),
        },
        {
          username: "小白",
          headimg: require("./assets/img/himg4.jpeg"),
        },
        {
          username: "小黑",
          headimg: require("./assets/img/himg5.jpg"),
        },
      ],
      currentUser: {
        username: "小米",
        headimg: require("./assets/img/himg1.jpg"),
      },
    };
  },

  methods: {
    toggleUser: function (index) {
      this.currentUser = this.userlist[index];
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  width: 800px;
  height: 700px;
  margin: 100px auto;
}
</style>
