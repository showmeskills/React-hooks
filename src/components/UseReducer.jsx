import React, {useReducer} from 'react'

import Example from './UseReducer/Example'

const UseReducer = ()=>{
    const [count,dispatch] = useReducer((state, action)=>{
        switch(action){
            case 'add':
                return state + 1;
            case 'sub':
                return state - 1;
            default:
                return state;
        }
    },0)
    return(
        <>
            <h1>UseReducer - demo one</h1>
            <p>
                current number is {count}
            </p>
            <button onClick={()=>dispatch('add')}>++</button>
            <button onClick={()=>dispatch('sub')}>--</button>

            <h1>
                demo two useReducer and useContext
            </h1>
            <Example/>
        </>
    )
}

export default UseReducer
