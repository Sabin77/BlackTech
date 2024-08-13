import { Supplier } from "../supplier/Supplier";

export type Order = {
  createdAt: Date;
  cutomerid: string;
  id: string;
  ordereddate: Date;
  productlist: string;
  status?: "Option1";
  supplier?: Supplier;
  totalcost: string;
  updatedAt: Date;
};
