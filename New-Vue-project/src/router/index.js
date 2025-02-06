import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../view/HomeView.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView,
        },
    ],
});