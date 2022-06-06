import React from "react";
import ReactDOM from "react-dom";

const firstWorkInProgressHook = { memoizedState: null, next: null };
let workInProgressHook;


function render () {
    // 每次重新渲染的时候，都将workInProgressHook 指向 firstWorkInProgressHook
    workInProgressHook = firstWorkInProgressHook;
    ReactDOM.render(<Counter/>, document.getElementById("root"))
}

function useState (initState) {
    const currentHook = workInProgressHook.next ? workInProgressHook.next : { memoizedState: null, next: null };

    function setState (newState) {
        currentHook.memoizedState = newState;
        render();
    }

    // 这就是为什么 useState 书写顺序很重要的原因
    // 假如某个 useState 没有执行，会导致指针移动出错，数据存取出错
    if (workInProgressHook.next){
        // 这里只有组件刷新的时候，才会进入
        // 根据书写顺序来去对应的值
        console.log(workInProgressHook);
        workInProgressHook = workInProgressHook.next;
    } else {
        // 只有在组件初始化加载时，才会进入
        // 根据书写顺序，存储对应的数据
        // 将 firstWorkInProgressHook 变成一个链表结构
        workInProgressHook.next = currentHook;
        // 将workInProgressHook指向 { memoizedState: null, next: null }
        workInProgressHook = currentHook;
        console.log(firstWorkInProgressHook);
    }

    return [currentHook.memoizedState, setState];
}

function Counter () {
    // 每次组件重新渲染的时候，这里的useState都会重新执行
    const [name, setName] = useState("计算机");
    const [number, setNumber] = useState(0);

    return (
        <>
            <p>{name}:{number}</p>
            <button onClick={() => setName("新计数器" + Date.now())}>新计数器</button>
            <button onClick={() => setNumber(number + 1)}>+</button>
        </>
    )
}

render();