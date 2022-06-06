import { useLayoutEffect, useState, useEffect } from "react"

const LayoutEffectDemo  = () => {
    // useEffect 在全部渲染完毕后才执行
    // useLayoutEffect会在浏览器layout之后，painting之前被执行
    // 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用effect
    // 在浏览器执行绘制之前 useLayoutEffect内部的更新计划将被同步调用
    // 尽可能使用标准的useEffect以避免阻塞视图更新
    const [color, setColor] = useState("red");
    useLayoutEffect(() => {
        console.log(color);
    })

    useEffect(() => {
        console.log("color::", color)
    });

    return (
        <>
            <div id="myDiv" style={{ background: color }}>颜色</div>
            <button onClick={() => setColor("red")}>红</button>
            <button onClick={() => setColor("yellow")}>黄</button>
            <button onClick={() => setColor("blue")}>蓝</button>
        </>
    )
}

export default LayoutEffectDemo;