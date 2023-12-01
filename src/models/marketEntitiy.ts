export interface Rating {
  rate: number,
  count: number,
}

export interface MarketEntitiy {
  id: number,
  title: string,
  descriptionRate: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: Rating,
}
