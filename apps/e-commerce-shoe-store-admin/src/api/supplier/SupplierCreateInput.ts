import { OrderCreateNestedManyWithoutSuppliersInput } from "./OrderCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  companyLogo?: string | null;
  companyName: string;
  email: string;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutSuppliersInput;
  phone?: string | null;
};
