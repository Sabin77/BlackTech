import { OrderUpdateManyWithoutSuppliersInput } from "./OrderUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  companyLogo?: string | null;
  companyName?: string;
  email?: string;
  name?: string | null;
  orders?: OrderUpdateManyWithoutSuppliersInput;
  phone?: string | null;
};
