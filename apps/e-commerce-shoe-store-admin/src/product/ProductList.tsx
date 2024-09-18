import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="brand" source="brand" />
        <TextField label="category" source="category" />
        <TextField label="colors" source="colors" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="discountedprice" source="discountedprice" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="originalprice" source="originalprice" />
        <TextField label="sizes" source="sizes" />
        <TextField label="stock" source="stock" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
