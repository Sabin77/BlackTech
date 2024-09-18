import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type OrderCreateInput = {
  cutomerid: string;
  ordereddate: Date;
  productlist: string;
  status: "Option1";
  supplier: SupplierWhereUniqueInput;
  totalcost: string;
};
