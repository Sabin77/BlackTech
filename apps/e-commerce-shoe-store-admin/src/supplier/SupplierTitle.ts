import { Supplier as TSupplier } from "../api/supplier/Supplier";

export const SUPPLIER_TITLE_FIELD = "companyName";

export const SupplierTitle = (record: TSupplier): string => {
  return record.companyName?.toString() || String(record.id);
};
