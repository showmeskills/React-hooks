import React,{useState} from 'react';

// let showSex = true;
const UseState = ()=>{
    const [count,setCount] = useState(0);//数组解构
    // let _useState=useState(0);
    // let count = _useState[0];
    // let setCount = _useState[1];
    // if(showSex){
    // }
    const [sex,setSex] = useState('male')
    const [age,setAge] = useState(18)
    const [work,setWork] = useState('web - frontend')
    return(
        <div>
            <p>useState-demo 1</p>
            <p>you clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click me</button>
            <p>useState-demo 2</p>
            <ul>
                <li>
                    <p>Terry {age} years old</p>
                    <p>Gender:{sex}</p>
                    <p>Work:{work}</p>
                </li>
            </ul>
            <button
                onClick={()=>setSex('female')}
            >handleSex</button>
            <button
                onClick={()=>setAge(age+1)}
            >handleAge</button>
            <button
                onClick={()=>setWork('Full stack developer')}
            >handleWor</button>
        </div>
    )
}

export default  UseState 
