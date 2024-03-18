import { createSlice } from '@reduxjs/toolkit'
import { MESSAGE_QUEUE } from '../utilities/type';
import { CHAT_REPLY, CHAT_STEPS, MESSAGE_BY } from '../utilities/constants';

/*
  This is the slice for the chatbot state.
  It will manage the state of the chatbot.
  * messages - The message queue.
  * step - The current step of the chatbot.
  * parentCode - The parent code of the current step.
  * previewExcange - The preview exchange code.
*/
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
    // Set the message queue.
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    // Add a message to the message queue and disable the previous message.
    addMessage: (state, action) => {
      state.messages[state.messages.length - 1].isDisabled = true;
      state.messages.push(action.payload);
    },
    // Set the current step.
    setStep: (state, action) => {
      state.step = action.payload;
    },
    // Set the preview exchange code.
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