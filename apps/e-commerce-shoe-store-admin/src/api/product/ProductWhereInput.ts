import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  brand?: StringNullableFilter;
  category?: StringFilter;
  colors?: StringNullableFilter;
  discountedprice?: FloatNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  originalprice?: FloatNullableFilter;
  stock?: StringFilter;
};
