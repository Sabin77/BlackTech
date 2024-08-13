import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  datesent?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  recepientid?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
