import React, { useCallback, useState, useRef } from "react";
import Button from "./button";

const CallBackDemo = () => {
    const textRef = useRef("");
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [text, setText] = useState("");

    const handleClickBtn1 = () => {
        setCount1(count1 + 1);
    };

    const handleClickBtn2 = useCallback(() => {
        setCount2(count2 + 1)
    }, [count2])

    // 频繁更新优化
    const handleSubmit = useCallback(() => {
        console.log(textRef.current)
    }, [textRef])

    return (
        <div>
            <div>
                <Button onClickButton={handleClickBtn1}>Button1</Button>
            </div>
            <div>
                <Button onClickButton={handleClickBtn2}>Button2</Button>
            </div>
            <div>
                <Button
                onClickButton={() => {
                    setCount3(count3 + 1);
                }}
                >
                Button3
                </Button>
            </div>
            <div>
                <form>
                    <input type="text" value={text} onChange={(e) => {
                        const { value } = e.target;
                        setText(value);
                        textRef.current = value;
                    }} />
                </form>
                <button
                onClick={() => handleSubmit}
                >
                    缓存
                </button>
            </div>
        </div>
    )
}

export default CallBackDemo