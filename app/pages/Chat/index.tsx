import React from 'react';
import styled from 'styled-components'
import ChatForms from './ChatForms'
import {connect} from 'react-redux'
import {updateUser , Chat} from '../../store/chat'
import Content from './Content'
import {ApplicationState} from '../../store/root'

 class ChatComponent extends React.Component<any> {
  render() {
    return (
       <Main>
         <Content chats={this.props.chat}/>
         <ChatForms action={this.props.action}/>
       </Main>
    );
  }
}

const mapStateToProps=(state:ApplicationState)=>({
  chat: state.chat.currentChat
})

const mapDispatchToPropss=(dispatch: any)=>({
   action: (data: Chat )=> dispatch(updateUser(data))
})

export default connect(mapStateToProps , mapDispatchToPropss)(ChatComponent)

const Main = styled.div`
  flex:1
`