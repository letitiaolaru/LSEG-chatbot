import { Stock } from './stock';

// The stock exchange model.
export interface StockExchange {
  code: string;
  stockExchange: string;
  topStocks: Stock[];
}