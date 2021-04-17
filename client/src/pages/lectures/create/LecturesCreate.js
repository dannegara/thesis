import React from 'react';
import { Create, TextInput, SimpleForm  } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { COURSE_SOURCES } from '../../../constants/sources';

const LecturesCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        {/* <TextInput source={COURSE_SOURCES.name} />
        <RichTextInput source={COURSE_SOURCES.description} /> */}
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  )
}

export default LecturesCreate;