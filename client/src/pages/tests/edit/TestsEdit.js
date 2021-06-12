import React from 'react';
import {
  Edit,
  TextInput,
  SimpleForm,
  required,
  DateTimeInput,
  ArrayInput,
  SimpleFormIterator,
} from 'react-admin';
import { TEST_SOURCE } from '../../../constants/sources';

const TestsEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source={TEST_SOURCE.name} validate={required()} />
        <DateTimeInput source={TEST_SOURCE.dateStart} validate={required()} />
        <DateTimeInput source={TEST_SOURCE.dateFinish} validate={required()} />
        <ArrayInput source="questions">
          <SimpleFormIterator>
            <TextInput source="question" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
}

export default TestsEdit;