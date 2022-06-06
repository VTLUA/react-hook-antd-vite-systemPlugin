import React, { useState } from "react";

const withUser = WrappedComponent => {
    const user = "Vt";
    return props => <WrappedComponent user={user} {...props} />;
}


const UserPage = (props: any) => {
    const [number, setNumber] = useState(0);
    const addClick = () => {
        setNumber(number + 1)
    };

    return (
        <>
            {/* 高级组件运用 */}
            <div className="user-container">
                <h4>高级组件运用</h4>
                <p>My name is {props.user}!</p>
                <p>数值： {number}</p>
                <button onClick={addClick}>plus one</button>
            </div>
        </>
    );
}

export default withUser(UserPage);