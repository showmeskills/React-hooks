import React,{useState,useMemo} from 'react';

const SubComponent = ({name,children}) =>{
    //未使用useMemo的时候,当父组件触发事件时候,子组会同时触发
    // console.log('name===>',name)
    // console.log('children===>',children)
    //此时,我点击terrance的时候,terry也会发生变法(父组件发生变化,子组件都会渲染一遍)
    const changeTerry = useMemo(()=>{
        console.log('changeTerry')
        return name+'====this is Terry'
    },[name])
   
    return(
        <>
            <div>Terry:{changeTerry}</div>
            <div>Terrance:{children}</div>
        </>
    )
}

//当没有使用useMemo的时候,父组件触发一次时间,子组件subComponent会同时触发事件
const UseMemo = ()=>{
    const [terry,setTerry] = useState('terry is waiting');
    const [terrance,setTerrance] = useState('terrance is waiting');
    return(
        <>
            <h1>UseMemo demo one</h1>
            <div>
                <p>father-component display</p>
                <button onClick={()=>{setTerry(new Date().getTime()+'terry')}}>terry</button>
                <br/>
                <button onClick={()=>{setTerrance(new Date().getTime()+'terrance')}}>terrance</button>
                <p>sub-component display</p>
                <SubComponent name={terry}>{terrance}</SubComponent>
            </div>
        </>
    )
}

export default UseMemo