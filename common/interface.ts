export interface IBasketContext {
  basket: IBasket;
  updateBasket: () => void;
  totalAmount: number;
  itemCount: number;
}

export interface IBasket {
  _id: IObjectId;
  user_id: IObjectId;
  content: IBasketItem[];
  product_info: IProduct[];
}

export interface IProduct {
  _id: IObjectId;
  product_unit_id: IObjectId;
  name: string;
  size: string;
  price: number;
  old_price: number;
}

export interface IBasketItem {
  product_id: IObjectId;
  count: number;
}

export interface IObjectId {
  $oid: string;
}