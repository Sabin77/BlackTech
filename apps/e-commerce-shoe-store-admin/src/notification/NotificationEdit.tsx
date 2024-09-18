import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="datesent" source="datesent" />
        <TextInput label="message" source="message" />
        <TextInput label="recepientid" source="recepientid" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
