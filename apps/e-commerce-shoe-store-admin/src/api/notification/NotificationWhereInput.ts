import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotificationWhereInput = {
  datesent?: DateTimeNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  recepientid?: StringNullableFilter;
  title?: StringNullableFilter;
};
