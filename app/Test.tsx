import * as React from 'react'
import { injectGlobal } from 'styled-components';

type Props ={

}

export default class Test extends React.Component<Props> {
    render(){
       return(

        <div>hello world</div>

       )

    }
}

injectGlobal`
  html,
  body,
  body > #root,
  body > #root > div {
    height: 100% !important;
  }
  body {
    margin: 0;
    background-color: #EDEEF3;
  }
  * {
    box-sizing: border-box;
    font-family: Helvetica;
    font-size: 15px;
  }
`;