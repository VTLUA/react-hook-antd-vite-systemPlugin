const Home = () => import("@/page/Home");
import About from "@/page/About"
import Login from "@/page/Login";

const routes = [
    {
        key: "/",
        component: Home,
        title: "首页",
        childRoutes: [
            {
                key: "/about",
                component: About,
                title: "首页",
                icon: "DesktopOutlined"
            }
        ]
    },
];

export const routerConig = [
    {
        key: "/login",
        component: Login,
        title: "登陆页"
    }
]

export default routes;