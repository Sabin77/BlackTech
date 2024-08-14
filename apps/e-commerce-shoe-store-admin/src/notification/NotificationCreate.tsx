import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="datesent" source="datesent" />
        <TextInput label="message" source="message" />
        <TextInput label="recepientid" source="recepientid" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
