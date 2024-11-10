import React, { useReducer } from 'react';

const initialstate=0;
const reducer = (state, action)=>{
    switch(action){
        case "Increment" :
            return state +1
            case "Decrement" :
                return state -1
                default :
                return state

    }
}

function Counter() {
    const [count, despatch]=useReducer(reducer, initialstate)
    return (
        <div>
            <div>count = {count}</div>
            <button onClick={()=>dispatch("Increment")}>Increment</button>
            <button onClick={()=>dispatch("Decrement")}>Decrement</button>
            
            
        </div>
    );
}

export default Counter;
