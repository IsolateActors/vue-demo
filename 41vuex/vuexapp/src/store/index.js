import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建整个项目的数据仓库对象，讲多组件公用的数据放到对象里
export default new Vuex.Store({
  //data
  state: {
    num: 0,
    msg: "hello zhou",
    age: 23
  },
  getters: {
    reverseMsg: function (state) {
      return state.msg.split('').reverse().join('');
    },
    mixinMsg: function (state) {
      return function (val) {
        return val + state.msg;
      }
    }
  },
  //methods,在此处理状态(同步)
  mutations: {
    addNum(state) {
      state.num++;
    },
    setNum(state, value) {
      state.num = value;
    }
  },
  //异步方法
  actions: {},
  //模块
  modules: {}
})