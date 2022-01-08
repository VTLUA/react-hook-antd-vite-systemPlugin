import React from "react";
import { Card, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { getTokenMethod } from "@/store/feature/userSlice";

import "./index.less";

const Login: React.FC = () => {

    const dispatch = useDispatch();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(getTokenMethod(values));
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <div className="login">
            <Card className="login-box" title="VT ADMIN">

                <Form
                    name="basic"
                    labelCol={{ span: 6}}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item 
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                    </Form.Item>
                    <Form.Item 
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Login;