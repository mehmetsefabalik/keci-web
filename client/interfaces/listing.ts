import { ObjectId } from "./interface";

export interface Listing {
  type: ListingType;
  product: Product;
}

export interface Product {
  _id: ObjectId;
  name: string;
  price: string;
  old_price: string;
  image_url?: string;
}

export type ListingType = "product" | "content" | "widget";

