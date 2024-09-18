import { StringFilter } from "../../util/StringFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type OrderWhereInput = {
  cutomerid?: StringFilter;
  id?: StringFilter;
  supplier?: SupplierWhereUniqueInput;
};
