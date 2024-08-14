import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
