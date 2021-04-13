import React from 'react';
import { Edit, TextInput, SimpleForm  } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { COURSE_SOURCES } from '../../../constants/sources';

const CoursesEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source={COURSE_SOURCES.name} />
        <RichTextInput source={COURSE_SOURCES.description} />
      </SimpleForm>
    </Edit>  
  )
}

export default CoursesEdit;