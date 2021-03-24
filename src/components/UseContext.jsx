import React,{useState,createContext,useContext} from "react"
//1.createContext
const CountContext= createContext();

//2.sub-component
const Counter = ()=>{
    //useContext: it is a function, and it receives the value of createContext{Provider}
    let [count,add] = useContext(CountContext);
    
    return(
        <>
            <div>I am a sub component</div>
            <p>{count}</p>
            <button onClick={()=>add('I am from sub-component counter')}>emit from son</button>
        </>
    )
}

const UseContext = ()=>{
    const [count,setCount] = useState(0);
    const add = (subComponent)=>console.log(subComponent)
    return(
        <>
            <div>{count}</div>
            <button onClick={()=>setCount(count+1)}>add click</button>
            <CountContext.Provider value={[count,add]}>
                <Counter/>
            </CountContext.Provider>
        </>
    )
}

export default UseContext