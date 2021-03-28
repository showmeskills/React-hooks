import React,{useRef,useState,useEffect} from "react";



const UseRef = ()=>{
    //获取DOM元素
    const inputEl = useRef(null);
    const handleIpt = (arg)=>{
        inputEl.current.value = arg
    }
    //保存变量值实现双向绑定的效果
    const [text,setText] = useState('使用useRef保存变量');
    const textRef = useRef();
    //只有空数组的时候,不会实时监听,添加对应变量或者不添加空数组
    useEffect(()=>{
        textRef.current = text;
        console.log(textRef.current);
    },[text])
    return(
        <>
            <h1>UseRef -- demo one Gain DOM element</h1>
            <div>
                <input type="text" ref={inputEl}/>
            </div>
            <button onClick={()=>handleIpt('我是传过来的值')}>在input上展示文字</button>
            <h1>demo two;save variables</h1>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            {text}
        </>
    )
}

export default UseRef