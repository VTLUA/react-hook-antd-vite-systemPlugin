import React, { createContext, useContext, useReducer } from "react";

const initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {number: state.number + 1};
        default:
            break;
    }
}

const CounterContext = createContext();

// 第一种获取 CounterContext 方法： 不用hook
// const SubCounter_one = () => {
//     return (
//         <CounterContext.Consumer>
//             {
//                 value => (
//                     <>
//                         <p>{value.state.number}</p>
//                         <button onClick={()=>value.dispatch({type: "ADD"})}>+</button>
//                     </>
//                 )
//             }
//         </CounterContext.Consumer>
//     )
// }

// 第二种获取 CounterContext 方法：使用hook
const SubCounter = () => {
    const { state, dispatch } = useContext(CounterContext);
    return (
        <>
            <p>{state.number}</p>
            <button onClick={()=>dispatch({type: "ADD"})}>+</button>
        </>
    )
}

const CounterTwo = () => {
    const [state, dispatch] = useReducer((reducer), initialState, ()=>({number:initialState}));
    return (
        <CounterContext.Provider value={{state, dispatch}}>
            <SubCounter/>
        </CounterContext.Provider>
    )
}

export default CounterTwo