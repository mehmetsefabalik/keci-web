import { ObjectId } from ".";
import { Address } from "./address";
import { Basket } from "./basket";

export interface Order {
  _id: ObjectId;
  user_id: ObjectId;
  address: Address;
  basket: Basket;
  status: OrderStatus;
}

export enum OrderStatus {
  cancelled,
  taken,
  shipping,
  shipped,
}
