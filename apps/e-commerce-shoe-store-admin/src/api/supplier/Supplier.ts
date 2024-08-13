import { Order } from "../order/Order";

export type Supplier = {
  companyLogo: string | null;
  companyName: string;
  createdAt: Date;
  email: string;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  phone: string | null;
  updatedAt: Date;
};
