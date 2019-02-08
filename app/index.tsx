import * as React from 'react'
import * as ReactDOM from 'react-dom'

type Props ={
    hello: boolean;
}

class App extends React.Component<Props> {
    render(){
        return(
            <div>hello word</div>
        )
    }
}
    
ReactDOM.render(< App hello={'data'} /> , document.getElementById( "app" ))