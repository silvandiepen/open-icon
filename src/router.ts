import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("@/views/Home.vue") },
        {
            name: "collection",
            path: "/collection",
            component: () => import("@/views/Collection.vue"),
        },
    ],
});
