import { Stock } from './stock';

export interface StockExchange {
  code: string;
  stockExchange: string;
  topStocks: Stock[];
}