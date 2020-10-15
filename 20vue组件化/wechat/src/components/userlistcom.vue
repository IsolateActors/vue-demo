<template>
  <div class="userlist">
    <h1>用户列表</h1>
    <ul>
      <li
        v-for="(item, index) in userlist"
        :key="'user_' + index"
        @click="chooseUser(index)"
      >
        <img :src="item.headimg" alt="" />
        <h3>{{ item.username }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["userlist"],
  methods: {
    chooseUser: function (index) {
      this.$emit("chooseUser", index);
    },
  },
};
</script>

<style scoped>
.userlist {
  width: 300px;
  height: 700px;
  background-color: skyblue;
}

.userlist ul li {
  display: flex;
}

.userlist ul li img {
  width: 80px;
  height: 80px;
}
</style>