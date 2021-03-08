import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index.js"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
  path: "/searchresults",
    name: "SearchResults",
    component: () => import("../views/SearchResults.vue")
  },
  {
    path: "/landlordratings",
      name: "LandlordRatings",
      component: () => import("../views/LandlordRatings.vue")
    },
    {
      path: "/createpost",
        name: "CreatePost",
        component: () => import("../views/CreatePost.vue")
      },
      {
        path: "/createrating",
          name: "CreateRating",
          component: () => import("../views/CreateRating.vue")
        },
  // {
  //   path: "/serviceareas",
  //   name: "ServiceAreas",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/ServiceAreas.vue")
  // }
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
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/profile');
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router;
