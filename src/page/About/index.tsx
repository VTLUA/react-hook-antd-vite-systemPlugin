import React, { useEffect } from "react";
import { Card } from "antd";
import { UserService } from "@/api";
import { ReducerDemo, EffectDemo, RefDemo } from "./demoConpents";

const About: React.FC = () => {

    useEffect(() => {
        UserService.login({
            username: "vt",
            password: "123456"
        })
    }, [])

    return (
        <div className="hook">
            {/* <Card title="useState Demos">
                <StateDemoOne />
            </Card>
            <Card title="useCallback Demos">
                <CallBackDemo />
            </Card> */}
            <Card title="useReducer Demos">
                <ReducerDemo />
            </Card>
            <Card title="useEffect Demos">
                <EffectDemo />
            </Card>
            <RefDemo />
        </div>
    )
}

export default About;