import { RootState } from './index';

export const messagesSelector = (state: RootState) => state.chatBot.messages;

export const stepSelector = (state: RootState) => state.chatBot.step;

export const previewExchangeSelector = (state: RootState) => state.chatBot.previewExcange;
