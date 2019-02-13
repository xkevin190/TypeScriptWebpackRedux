export interface Chat {
    message: string;
    name: string;
  }
  
  export interface ChatState {
    currentChat: Chat | null;
  }
  
  export  enum SessionActionTypes {
    CHAT_USER_UPDATE = '@@chat/SET_CHAT',
  }
