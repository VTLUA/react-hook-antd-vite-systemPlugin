import React, { useEffect } from "react";
import { UserService } from "@/api"

const About: React.FC = () => {

    useEffect(() => {
        UserService.login({
            username: "vt",
            password: "123456"
        })
    }, [])

    return (
        <div>
            About
        </div>
    )
}

export default About;