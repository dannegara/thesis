import React from 'react';
import { Edit, TextInput, SimpleForm  } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { COURSE_SOURCES } from '../../../constants/sources';

const TestsEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        {/* <TextInput source={COURSE_SOURCES.name} />
        <RichTextInput source={COURSE_SOURCES.description} /> */}
        <TextInput source="name" />
      </SimpleForm>
    </Edit>  
  )
}

export default TestsEdit;