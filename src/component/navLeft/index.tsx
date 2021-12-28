import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { BankOutlined, FileDoneOutlined } from "@ant-design/icons";
import routes from "../../router";

const { SubMenu } = Menu;

// 图标集
const icons: any = {
    home: <BankOutlined />,
    fileDone: <FileDoneOutlined />,
}

const renderMenu = (data: any) => {
    return data.map((item: any) => {
        if (item.children) {
            return (
                <SubMenu
                    key={item.key}
                    title={<span>{icons[item.icon]}<span>{item.title}</span></span>}>
                    {renderMenu(item.children)}
                </SubMenu>
            )
        }
        return (
            <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key || ""}>
                    {item.icon || item.icon == "" ? <span>{icons[item.icon]}<span>{item.title}</span></span> : item.title}
                </NavLink>
            </Menu.Item>
        )
    })
}

const NavLeft: React.FC = () => {
    const [currentKey, setCurrentKey] = useState("");
    const [menuTreeNode] = useState(renderMenu(routes))

    // 菜单点击
    const handleClick = (nav: any) => {
        if (nav.key == currentKey) return false;
        setCurrentKey(nav.key)
    }

    useEffect(() => {
        setCurrentKey(window.location.pathname)
     }, [])

    return (
        <>
            <div className="nav-left">
                <Menu
                 theme="dark"
                 mode="inline"
                 selectedKeys={[currentKey]}
                 onClick={handleClick}
                 defaultOpenKeys={["/home"]}
                 >
                     {menuTreeNode}
                 </Menu>
            </div>
        </>
    )
}

export default NavLeft