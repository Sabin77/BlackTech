import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
