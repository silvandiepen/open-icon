import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { name: "home", path: "/", component: () => import("@/views/Home.vue") },
        {
            name: "collection",
            path: "/collection",
            component: () => import("@/views/Collection.vue"),
        }, {
            name: "page",
            path: "/:page",
            component: () => import("@/views/Page.vue"),
        },
    ],
});
