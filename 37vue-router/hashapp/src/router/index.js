import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    component: () => import( /* webpackChunkName: "about" */ '../views/list.vue'),
  },
  {
    path: '/about/:id',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    // beforeEnter: (to, from, next) => {
    //   console.log('/about独享事件')
    //   let isLogin = false;
    //   if (isLogin || to.path == '/login') {
    //     next();
    //   } else {
    //     next({
    //       path: "/login"
    //     });
    //   }
    // }

    //元信息
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savePosition) {
    if (to.path == '/list') {
      console.log("-------------")
      console.log(typeof savePosition)
      console.log(savePosition)
    }
    //注意：设置动画后需要等待动画结束 使用异步
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          x: 0,
          y: savePosition.y / 2
        })
      }, 1500)
    })

  }
})

//全局路由守卫
router.beforeEach((to, from, next) => {
  console.log('beforeEach--------------');
  console.log(from, to);
  //next(false);
  // let isLogin = false;
  // if (isLogin || to.path == '/login') {
  //   next();
  // } else {
  //   next({
  //     path: "/login"
  //   });
  // }

  //利用元信息
  let isLogin = false;
  // if (to.meta.requiresAuth) {
  //   if (isLogin) {
  //     next();
  //   } else {
  //     next({
  //       path: '/login'
  //     });
  //   }

  // } else {
  //   next();
  // }

  if (to.meta.requiresAuth && !isLogin) {
    next({
      path: '/login'
    });
  } else {
    next();
  }

});

router.afterEach((to, from, next) => {
  console.log('beforeEach--------------');
  console.log(from, to);
});

router.onError((err) => {
  console.log('err--------------');
  console.log(err);
})

export default router