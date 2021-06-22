import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
const history = createWebHistory();

const routes = [
    { path: "/", component: Home },
    { path: "/test", component: Test },

];

const router = createRouter({ history, routes });
export default router;