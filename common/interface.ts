export interface IBasketContext {
  basket: IBasket;
}

export interface IBasket {
  _id: IObjectId;
  user_id: IObjectId;
  content: IBasketItem[];
}

export interface IBasketItem {
  product_id: IObjectId;
  count: number;
}

export interface IObjectId {
  $oid: string;
}