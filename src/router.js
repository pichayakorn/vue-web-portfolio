import Vue from "vue";
import Router from "vue-router";
import profile from "@/pages/profile.vue";
import repository from "@/pages/repository.vue";
import contact from "@/pages/contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: profile
    },
    {
      path: "/contact",
      name: "contact",
      component: contact
    },
    {
      path: "/repository",
      name: "repository",
      component: repository
    }
  ]
});
