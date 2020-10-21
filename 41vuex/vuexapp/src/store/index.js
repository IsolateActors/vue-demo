import Vue from 'vue'
import Vuex from 'vuex'

import stateObj from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import buyCart from './buyCart'

Vue.use(Vuex)

//创建整个项目的数据仓库对象，讲多组件公用的数据放到对象里
export default new Vuex.Store({
  state: stateObj,
  getters,
  mutations,
  actions,

  // //data
  // state: {
  //   num: 0,
  //   msg: "hello zhou",
  //   age: 23,
  //   duanzi: null
  // },

  // getters: {
  //   reverseMsg: function (state) {
  //     return state.msg.split('').reverse().join('');
  //   },
  //   mixinMsg: function (state) {
  //     return function (val) {
  //       return val + state.msg;
  //     }
  //   }
  // },

  // //methods,在此处理状态(同步)
  // mutations: {
  //   addNum(state) {
  //     state.num++;
  //   },
  //   setNum(state, value) {
  //     state.num = value;
  //   },
  //   setDuanzi(state, value) {
  //     state.duanzi = value
  //   }
  // },

  // //异步方法
  // actions: {
  //   setDz: function (content) {
  //     let httpUrl = `https://api.apiopen.top/getJoke?page=1&count=10&type=text`;
  //     fetch(httpUrl).then(res => res.json()).then(res => {
  //       console.log(res);
  //       console.log(content)
  //       //通过mutation设置state
  //       content.commit('setDuanzi', res.result)
  //     });
  //   }
  // },

  //模块
  modules: {
    buyCart,
  }
})