import React,{useEffect} from 'react';

const Login = (props)=>{
    useEffect(()=>{
       props.changeShow(false);
        return()=>props.changeShow(true);
    },[props])

    return(
        <>
            <h1>I am a Login page</h1>
            <button onClick={props.history.goBack}>goBack</button>
        </>
    )
}



export default Login;