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
import { LECTURE_ENTITY } from '../../../constants/entities';

const CoursesShow = (props) => {
  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label="info">
          <TextField source={COURSE_SOURCES.name} />
          <RichTextField source={COURSE_SOURCES.description} />
        </Tab>
        <Tab label="lectures">
          <ArrayField source={LECTURE_ENTITY}>
            <Datagrid>
              <TextField source={LECTURES_SOURCES.name} />
              <RichTextField source={LECTURES_SOURCES.description} />
            </Datagrid>
          </ArrayField>
        </Tab>
        <Tab label="students">
          <h1>Students</h1>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default CoursesShow;