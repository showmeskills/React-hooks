import React,{Component} from 'react';

import {UseState} from './components'

export default class App extends Component{
    render(){
        return(
            <>
                <h1>React hooks demo</h1>
                <UseState/>
            </>
        )
    }
}