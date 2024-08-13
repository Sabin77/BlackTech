import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  brand?: SortOrder;
  category?: SortOrder;
  colors?: SortOrder;
  createdAt?: SortOrder;
  discountedprice?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  originalprice?: SortOrder;
  sizes?: SortOrder;
  stock?: SortOrder;
  updatedAt?: SortOrder;
};
