import { Reducer } from 'redux';
import { ChatState, SessionActionTypes } from './type';

const initialState: ChatState = {
  currentChat: null,
};

export const chatReducer: Reducer<ChatState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SessionActionTypes.CHAT_USER_UPDATE: {
      return { ...state, currentUser: action.payload };
    }
    default: {
      return state;
    }
  }
};
