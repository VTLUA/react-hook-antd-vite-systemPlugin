import React, { useState } from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import NavLeft from "../navLeft";
import routes from "../../router";
import "./index.less"

const { Header, Content, Sider } = Layout;

const LayoutCom: React.FC = () => {
    const [collapsed, setCollased] = useState<boolean>(false);

    const onCollapsed = () => {
        setCollased(!collapsed)
    }

    return (
        <Layout >
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <h2 className="admin-title">VT ADMIN</h2>
                <NavLeft />
            </Sider>
            <Layout>
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: "trigger",
                    onClick: onCollapsed,
                    })}
                </Header>
               <Content className="container">
                  {/* <Breadcrumb></Breadcrumb> */}
                  <div className="main">
                  <Routes>
                    {
                        routes.map(item => {
                        return   <Route path={item.key} key={item.key} element={item.component}/>
                        })
                    }
                    </Routes>
                  </div>
               </Content>

            </Layout>
        </Layout>
    )
}

export default LayoutCom;