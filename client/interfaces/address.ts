import { ObjectId } from ".";

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
  phone: string;
}
