import React,{useState} from 'react';

import {UseState,UseEffect,UseContext,UseReducer,UseMemo} from './components'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NavBar from './components/UseEffect Example/NavBar'
import Home from './components/UseEffect Example/Home'
import Login from './components/UseEffect Example/Login'
import User from './components/UseEffect Example/User'



const App = (props)=>{
    const [show,setShow] = useState(true)
    const changeShow = (bool)=>{
        setShow(bool)
    }
        return(
            <>
                <h1>React hooks demo</h1>
                <UseState/>
                <UseEffect/>

                <h1>UseEffect to hide navBar</h1>
                <BrowserRouter>
                {
                    show?
                    <Route component={NavBar}/>
                    :
                    <Route/>
                }
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path='/user' component={User}/>
                    <Route path='/login' component={props=>{
                        let obj = Object.assign({},{changeShow,},props)
                        return <Login {...obj}/>
                    }}/>
                </Switch>
                </BrowserRouter>
                <h1>UseContext demo three emit value between father and son components</h1>
                <UseContext/>
                <UseReducer/>
                <UseMemo/>    

            </>
        )
    }

export default App