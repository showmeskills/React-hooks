import React,{useContext} from 'react';
import {ColorContext} from './Colors'
import {UPDATE_COLOR} from './actions-type'

const Buttons = ()=>{
    const {dispatch} = useContext(ColorContext)
    return(
        <>
            <button onClick={()=>dispatch({type:UPDATE_COLOR,color:'red'})}>red color</button>
            <button onClick={()=>dispatch({type:UPDATE_COLOR,color:'pink'})}>pink color</button>
        </>
    )
}

export default Buttons