import * as React from "react";
import { Admin, Resource } from 'react-admin';
import {
  CoursesList,
  CoursesCreate,
  CoursesShow,
  CoursesEdit,
} from './pages/courses';
import {
  TestsList,
  TestsCreate,
  TestsShow,
  TestsEdit
} from './pages/tests';
import { LecturesCreate } from "./pages/lectures";
import { ProfileEdit } from './pages/profile';
import Calendar from './pages/calendar';
import MyLayout from './components/layout';
import { authProvider, dataProvider } from './providers';
import {
  COURSE_ENTITY,
  TEST_ENTITY,
  PROFILE_ENTITY,
  LECTURE_ENTITY,
  CALENDAR_ENTITY,
} from './constants/entities';

const adminProps = {
  authProvider,
  dataProvider,
};

const App = () => (
  <Admin {...adminProps} layout={MyLayout}>
    <Resource
      name={COURSE_ENTITY}
      list={CoursesList}
      create={CoursesCreate}
      show={CoursesShow}
      edit={CoursesEdit}
    />
    <Resource 
      name={TEST_ENTITY}
      list={TestsList}
      create={TestsCreate}
      show={TestsShow}
      edit={TestsEdit}
    />
    <Resource 
      name={CALENDAR_ENTITY}
      list={Calendar}
    />
    <Resource 
      name={LECTURE_ENTITY}
      create={LecturesCreate}
    />
    <Resource 
      name={PROFILE_ENTITY}
      edit={ProfileEdit}
    />
  </Admin>
);

export default App;