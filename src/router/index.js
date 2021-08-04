import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import Connect from "../views/Connect.vue";
import Partners from "../views/Partners.vue";
import Test from "../views/Test.vue";
const history = createWebHistory();

const routes = [
    { path: "/", component: Home },
    { path: "/about-us", component: AboutUs },
    { path: "/partners", component: Partners },
    { path: "/connect", component: Connect },
    { path: "/:pathMatch(.*)*", component: Home },

];

const router = createRouter({ history, routes });
export default router;