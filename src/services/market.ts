import {MarketEntitiy, Rating} from '../models/marketEntitiy'
import axios from "axios";


// list took from https://fakestoreapi.com/products
const markets: MarketEntitiy[] = []



export async function listMarkets() {
  await fetchMarketData()
  console.log(markets.length)
  return markets
}

export const fetchMarketData = async () => {
  try {
    const response = await axios.get('https://paycell-stock-api.colendilabs.com/marketdata?exchange=NASDAQ')
    const data: StockDataResponse = response.data
    console.log(data.items[1].buy)
    for (let i = 0; i < data.items.length; i++) {
      markets.push(<MarketEntitiy>{
        title: data.items[i].name,
        descriptionRate: data.items[i].symbol,
        price: data.items[i].price,
        category: data.items[i].sector,
        image: data.items[i].imageUrl,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: 1,
        rating: <Rating>{rate: 1, count: 12}
      })

    }
  } catch (error) {
    console.error('clear' +
      ':', error);
    throw error;
  }
};


interface StockData {
  items: StockItem[];
  meta: {
    currentPage: number;
    itemsPerPage: number;
    itemCount: number;
    totalItems: number;
    totalPages: number;
  };
}

interface StockItem {
  symbol: string;
  name: string;
  imageUrl: string;
  type: string;
  sector: string;
  change: number;
  low: number;
  high: number;
  price: number;
  buy: number;
  sell: number;
  open: number;
  close: number;
  priorClose: number;
  priceStepRule: number[];
  exchange: string;
  description: string;
}

class StockDataResponse {
  items: StockItem[];
  meta: {
    currentPage: number;
    itemsPerPage: number;
    itemCount: number;
    totalItems: number;
    totalPages: number;
  };

  constructor(responseData: StockData) {
    this.items = responseData.items.map(itemData => new StockItemResponse(itemData));
    this.meta = responseData.meta;
  }
}

class StockItemResponse {
  symbol: string;
  name: string;
  imageUrl: string;
  type: string;
  sector: string;
  change: number;
  low: number;
  high: number;
  price: number;
  buy: number;
  sell: number;
  open: number;
  close: number;
  priorClose: number;
  priceStepRule: number[];
  exchange: string;
  description: string;

  constructor(itemData: StockItem) {
    this.symbol = itemData.symbol;
    this.name = itemData.name;
    this.imageUrl = itemData.imageUrl;
    this.type = itemData.type;
    this.sector = itemData.sector;
    this.change = itemData.change;
    this.low = itemData.low;
    this.high = itemData.high;
    this.price = itemData.price;
    this.buy = itemData.buy;
    this.sell = itemData.sell;
    this.open = itemData.open;
    this.close = itemData.close;
    this.priorClose = itemData.priorClose;
    this.priceStepRule = itemData.priceStepRule;
    this.exchange = itemData.exchange;
    this.description = itemData.description;
  }
}
