import { createSlice } from '@reduxjs/toolkit'
import { MESSAGE_QUEUE } from '../utilities/type';
import { CHAT_REPLY, CHAT_STEPS, MESSAGE_BY } from '../utilities/constants';

export interface ChatBotSlice {
  messages: MESSAGE_QUEUE[];
  step: number;
  parentCode?: string;
  previewExcange: string;
}

const initialState: ChatBotSlice = {
  messages: [{
    message: CHAT_REPLY.WELCOME,
    messageBy: MESSAGE_BY.BOT,
    isDisabled: true,
  }],
  step: CHAT_STEPS.WELCOME,
  previewExcange: '',
}

export const chatBotSlice = createSlice({
  name: 'chatbot',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    addMessage: (state, action) => {
      state.messages[state.messages.length - 1].isDisabled = true;
      state.messages.push(action.payload);
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setPreviewExcange: (state, action) => {
      state.previewExcange = action.payload;
    }
  },
})

export const {
  setMessages,
  addMessage,
  setStep,
  setPreviewExcange
} = chatBotSlice.actions

export default chatBotSlice.reducer