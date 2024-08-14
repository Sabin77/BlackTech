import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type OrderUpdateInput = {
  cutomerid?: string;
  ordereddate?: Date;
  productlist?: string;
  status?: "Option1";
  supplier?: SupplierWhereUniqueInput;
  totalcost?: string;
};
