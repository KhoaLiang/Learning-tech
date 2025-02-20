import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/view/HomeView.vue";
import JobsView from "@/view/JobsView.vue";
import NotFoundView from "@/view/NotFoundView.vue";
import JobView from "@/view/JobView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView,
        },
        {
            path: "/jobs",
            name: "Jobs",
            component: JobsView,
        },
        {
            path: "/jobs/:id",
            name: "Job",
            component: JobView,
        },
        {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: NotFoundView,
        },
    ],
});

export default router;