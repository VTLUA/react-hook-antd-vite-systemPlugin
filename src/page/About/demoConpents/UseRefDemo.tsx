import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const Child = forwardRef((props, ref) => {
    const childInputRef = useRef();
    const sayHello = () => {
        console.log("hello")
        console.log("props::child::", props)
    }

    const sayBye = () => {
        console.log("sayBye")
    }

    useImperativeHandle(ref, () => ({
        childInputRef,
        say: sayHello,
        bye: sayBye
    }))

    return (
        <>
            <input ref={childInputRef} />
            <h3>子组件</h3>
        </>
    )
});

const RefDemo = () => {
    const domRef = useRef(null);
    const childRef = useRef(null);

    useEffect(() => {
        console.log("ref:dom-init", domRef, domRef.current);
        console.log("ref:child-init", childRef, childRef.current);
    });

    const showChild = () => {
        console.log("ref:child", childRef, childRef.current);
        childRef.current.say();
    }

    return (
        <div style={{ margin: "100px", border: "2px dashed", padding: "20px" }}>
            <h2>这是外层组件</h2>
            <div
            onClick={() => {
                console.log("ref:dom", domRef, domRef.current);
                domRef.current.focus();
                domRef.current.value = "hh";
            }}
            >
                <label>这是一个dom节点</label><input ref={domRef} />
            </div>
            <br />
            <div style={{ border: "1px solid", padding: "10px" }} onClick={showChild}>
                <Child ref={childRef} />
            </div>
      </div>
    )
}

export default RefDemo