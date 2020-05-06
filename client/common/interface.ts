export interface BasketContext {
  basket: Basket;
  updateBasket: () => void;
  totalAmount: number;
  itemCount: number;
}

export interface Basket {
  _id: ObjectId;
  user_id: ObjectId;
  content: BasketItem[];
  product_info: Product[];
}

export interface Product {
  _id: ObjectId;
  product_unit_id: ObjectId;
  name: string;
  size: string;
  price: number;
  old_price: number;
}

export interface BasketItem {
  product_id: ObjectId;
  count: number;
}

export interface ObjectId {
  $oid: string;
}

export interface AddressContext {
  addresses: Address[];
  update: Function;
  setIdToEdit: (id: string) => void;
  idToEdit: string;
}

export interface Address {
  _id: ObjectId;
  name: string;
  surname: string;
  title: string;
  text: string;
}

export type NotificationSeverity = "warning" | "error" | "success" | "info";

export interface NotificationContext {
  open: boolean;
  setOpen: (e: boolean) => void;
  setMessage: (e: string) => void;
  setSeverity: (e: NotificationSeverity) => void;
}

export interface BasketDrawerContext {
  open: boolean;
  setOpen: (e: boolean) => void;
}
