import React from 'react';
import {
  Create,
  TextInput,
  SimpleForm,
  AutocompleteInput,
  ReferenceArrayInput,
  DateTimeInput,
  required,
  ArrayInput,
  SimpleFormIterator,
} from 'react-admin';
import { COURSE_ENTITY } from '../../../constants/entities';
import { TEST_SOURCE, QUESTION_SOURCE } from '../../../constants/sources';

const TestsCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="course"
          label="Course"
          reference={COURSE_ENTITY}
          perPage={500}
          validate={required()}
        >
          <AutocompleteInput source="course" />
        </ReferenceArrayInput>
        <TextInput source={TEST_SOURCE.name} validate={required()} />
        <DateTimeInput source={TEST_SOURCE.dateStart} validate={required()} />
        <DateTimeInput source={TEST_SOURCE.dateFinish} validate={required()} />
        <h1>Test question</h1>
        <ArrayInput source={TEST_SOURCE.questions}>
          <SimpleFormIterator>
            <TextInput source={QUESTION_SOURCE.question} label="Question" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  )
}

export default TestsCreate;