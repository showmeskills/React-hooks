import React,{useState,useEffect} from "react";

import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'



function Index(props){
    useEffect(()=>{
        //console.log('useEffect==>Index page')
        return ()=>console.log('useEffect===> leaved index page')
    },[])
  
    return (
        <>
        <h1>Home.com</h1>
        <button onClick={props.history.goBack} >goBack</button>
        </>
    )
}



function List(){
    useEffect(()=>{
        console.log('useEffect==>List page')
        return ()=>console.log('leaved list page')
    },[])
    return(
        <ul>
            <li>1111</li>
            <li>2222</li>
            <li>3333</li>
        </ul>
    )
}

const UseEffect = ()=>{
    const [count,setCount] = useState(0);

    const decrement = ()=>setCount(count-1)
    useEffect(()=>{
        //console.log(`your click ${count} times`)
        return ()=>console.log('=======================')
    },[count])
   
    return(
        <>
            <div>
                <p>useEffect-demo1(componentDidMount and componentDidupdate)</p>
                <p>{count}</p>
                <button onClick={()=>setCount(count+1)}>renew</button>
                <button onClick={decrement}>minus</button>
            </div>
            <div>
                <p>useEffect-demo2(componentWillUnmount)</p>
                <Router>                   
                      <ul>
                        <li><Link to='/home'>home</Link></li>
                        <li><Link to='/list/'>List display</Link></li>
                      </ul>
                   <Switch>
                        <Route path='/home' component={Index}/>
                        <Route path='/list/' component={List}/>
                   </Switch>
                </Router>
            </div>
        </>
    )
}

export default UseEffect