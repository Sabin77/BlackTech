import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="cutomerid" source="cutomerid" />
        <TextField label="ID" source="id" />
        <TextField label="ordereddate" source="ordereddate" />
        <TextField label="productlist" source="productlist" />
        <TextField label="status" source="status" />
        <ReferenceField
          label="supplierid"
          source="supplier.id"
          reference="Supplier"
        >
          <TextField source={SUPPLIER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="totalcost" source="totalcost" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
