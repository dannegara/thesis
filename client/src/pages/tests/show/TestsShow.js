import React from 'react';
import {
  Show,
  TextField,
  RichTextField,
  TabbedShowLayout,
  Tab,
  Datagrid,
  ArrayField,
  useShowController
} from 'react-admin';
import { ROLES } from '../../../constants/enums';

const TestsShow = ({ permissions, ...props }) => {
  const { record: { dateStart, dateFinish } } = useShowController(props);
  const now = new Date().getTime();
  const testStartDate = new Date(dateStart).getTime();
  const testFinishDate = new Date(dateFinish).getTime();
  const isStudent = permissions === ROLES.STUDENT;

  if (isStudent && now > testFinishDate) {
    return <h1>Test Already Finished</h1>;
  }

  if(isStudent && now < testStartDate) {
    return <h1>Test Hasn't started yet</h1>
  }
  
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