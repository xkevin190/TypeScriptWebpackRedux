import * as React from 'react'
import { injectGlobal } from 'styled-components';
import Button from '@material-ui/core/Button';


export default class Test extends React.Component {
    render(){
       return(

        <Button variant="outlined" color="primary">
            Hello World
        </Button>

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