import * as React from 'react'
import * as ReactDOM from 'react-dom'

type Props ={
    hello: boolean;
}

class App extends React.Component<Props,any> {
    render(){
        return(
            <div>hello word</div>
        )
    }
}
    
ReactDOM.render(< App hello={'false'} /> , document.getElementById( "app" ))