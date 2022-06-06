import React, { useEffect, useState, useLayoutEffect } from "react";

const EffectDemo = () => {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");
    // useEffect里面的这个函数会在第一次渲染之后和更新完成后执行
    // 相当于 componentDidMount 和 componentDidUpdate
    useEffect(() => {
        document.title = `你点击${number}次`;

        console.log("开启一个定时器");
        // let $timer = setInterval(() => {
        //     setNumber(number => number + 1)
        // }, 1000);
        // useEffect 如果返回一个函数的话，该函数会在组件卸载和更新时调用
        // useEffect 在执行副作用函数之前，会先调用上一次返回的函数
        // 如果要清楚副作用，要么返回一个清除副作用的函数
        /*
            return () => {
                console.log("destroy effect");
                clearInterval($timer)
            }
        */
    });

    useEffect(() => {
        console.log("useEffect::")
    }, [text])

    // useEffect 在全部渲染完毕后才会执行
    // useLayoutEffect 会在 浏览器 layout 之后，painting 之前执行
    // 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect
    // 可以使用它来读取 DOM 布局并同步触发重渲染
    // 在浏览器执行绘制之前 useLayoutEffect 内部的更新计划将被同步刷新
    // 尽可能使用标准的 useEffect 以避免阻塞视图更新

    useLayoutEffect(() => {
        console.log("number::", number);
    });

    return (
        <>
            <div>
                <p>{number}次</p>
                <button onClick={() => setNumber(number + 1)}>+</button>
            </div>
            <div>
                <p>依赖变量更新</p>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </>
    )
}

export default EffectDemo;