import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index.js"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false
  },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import( "../views/Login.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import( "../views/Profile.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/pickFighter",
    name: "PickFighter",
    component: () => import("../views/PickFighter.vue"),
    meta: {
      requiresAuth: true
    }

  },
  {
    path: "/edit",
    name: "Edit",
    component: () => import("../views/Edit.vue"),
    meta: {
      requiresAuth: true
    },
    
  },
  {
    path: "/rank",
    name: "Rank",
    component: () => import("../views/Rank.vue"),
    meta: {
      requiresAuth: true
  },
    
  },
  
  {
      path: "/login2",
      name: "login2",
      component: () => import("../views/LoginRedesign.vue"),
  },

  {
      path: "/rules",
      name: "Rules/FAQ",
      component: () => import("../views/Rules.vue"),
      
  },
    

  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/login');
    } else {
      next();
    }
  } /**else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/profile');
    } else {
      next();
    }
  }**/ else {
    next()
  }
});

export default router;
