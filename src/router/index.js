import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import About from "../views/About.vue";
import Todo from "../views/Todo.vue";
import Random from "../views/Random.vue";
import CRUD from "../views/CRUD.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/todo",
      name: "todo",
      component: Todo,
    },
    {
      path: "/random",
      name: "random",
      component: Random,
    },
    {
      path: "/crud",
      name: "crud",
      component: CRUD,
    },
  ],
});

export default router;
