import * as React from 'react'
import styled, { injectGlobal } from 'styled-components';
import Chat from './pages/Chat'



export default class Test extends React.Component {
    render(){
       return(
        
        <ContentContainer>
          <Chat />
        </ContentContainer>

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

  #app{
    height: 100%;
  }
`;

const ContentContainer = styled.main`
  &&{
    background: #fff;
    margin: auto;
    height: 100%;
    width: 1008px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width:1008px;
    @media(max-Width: 1010px) {
      width:100%;
    }
         
  }
`