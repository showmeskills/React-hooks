import React,{useContext} from 'react';
import {ColorContext} from './Colors'

const ShowArea = ()=>{
    const {color}= useContext(ColorContext)
    return(
        <>
            <div style={{color}}>this is a function area  ==={color}</div>
        </>
    )
}

export default ShowArea
