import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "cutomerid";

export const OrderTitle = (record: TOrder): string => {
  return record.cutomerid?.toString() || String(record.id);
};
