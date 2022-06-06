import React, { useEffect } from "react";

const typeScriptDemo = () => {
    const isDone = false;
    // symbol
    const sym = Symbol();
    const obj = {
        [sym] : "semlinker"
    };
    // array
    const list: Array<number> = [1,2,3];
    // 枚举
    enum Direction {
        NORTH = 1,
        SOUTH,
        EAST,
        WEST = "111"
    }
    const dirName:Direction = Direction.NORTH
    // Tuple 元组
    let tupleType: [string, boolean];
    tupleType = ["semlinker", true];

    // 类型断言
    const someString = "this is a string";
    // const strLength: number = (<string>someString).length;
    const strLength: number = (someString as string).length;

    // 确定赋值断言
    let x!: number;
    initialize();
    console.log(2 * x);
    function initialize () {
        x = 10;
    }

    useEffect(() => {
        // void类型
        function warnUser(): void {
            console.log("1111")
        }
        warnUser();
    }, [])
    return (
        <>
            {isDone}
            {obj}
            {list}
            {dirName}
            {tupleType}
        </>
    )
}

export default typeScriptDemo;