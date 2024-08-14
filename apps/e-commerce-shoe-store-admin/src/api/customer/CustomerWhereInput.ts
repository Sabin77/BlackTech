import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CustomerWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringFilter;
};
