import { configureStore } from '@reduxjs/toolkit'
import chatBotSlice from './slice'

const store = configureStore({
  reducer: {
    chatBot: chatBotSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store;
