import React,{createContext,useReducer} from 'react';

import {UPDATE_COLOR} from './actions-type'

export const ColorContext = createContext({})

//customized reducer
const reducer = (state,action)=>{
    switch(action.type){
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}


export const Color = props =>{
    const [color,dispatch] = useReducer(reducer,'blue')
    return (
        <ColorContext.Provider value={{
            color,
            dispatch
            }}>
            {props.children}
        </ColorContext.Provider>
    )
}