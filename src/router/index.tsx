import Home from "../page/Home";
import About from "../page/About";

const routes = [
    {
        key: "/",
        component: <Home />,
        title: "首页",
        resourceIcon: "HomeOutlined"
    },
    {
        key: "/about",
        component: <About />,
        title: "关于",
        icon: "DesktopOutlined"
    }
];

export default routes;