import { configureStore } from '@reduxjs/toolkit'
import chatBotSlice from './slice'

/*
Create redux store to manage the state of the application
 */
const store = configureStore({
  reducer: {
    chatBot: chatBotSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store;
