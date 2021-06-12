import React from 'react';
import {
  Show,
  TextField,
  RichTextField,
  TabbedShowLayout,
  Tab,
  Datagrid,
  ArrayField,
} from 'react-admin';
import { COURSE_SOURCES, LECTURES_SOURCES } from '../../../constants/sources';
import { LECTURE_ENTITY, STUDENT_ENTITY } from '../../../constants/entities';

const TestsShow = (props) => {
  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label="Test info">
          <TextField source="name" label="Course name" />
          <TextField source="dateStart" label="Start Date" />
          <TextField source="dateFinish" label="Finish Date" />
        </Tab>
        <Tab label="Questions">
          <ArrayField source="questions">
            <Datagrid>
              <TextField source="question" />
            </Datagrid>
          </ArrayField>
        </Tab>
        <Tab label="Course">
          <TextField source="course.name" label="Course name" />
          <RichTextField source="course.description" label="Course description" />
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default TestsShow;