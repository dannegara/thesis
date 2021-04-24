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
import { ROLES } from './constants/enums';

const adminProps = {
  authProvider,
  dataProvider,
};

const App = () => (
  <Admin {...adminProps} layout={MyLayout}>
    {permissions => [
      <Resource
        name={COURSE_ENTITY}
        list={CoursesList}
        show={CoursesShow}
        create={permissions === ROLES.TEACHER ? CoursesCreate : null}
        edit={permissions === ROLES.TEACHER ? CoursesEdit : null}
      />,
      <Resource 
        name={TEST_ENTITY}
        list={TestsList}
        show={TestsShow}
        create={permissions === ROLES.TEACHER ? TestsCreate : null}
        edit={permissions === ROLES.TEACHER ? TestsEdit : null}
      />,
      <Resource 
        name={CALENDAR_ENTITY}
        list={Calendar}
      />,
      <Resource 
        name={LECTURE_ENTITY}
        create={permissions === ROLES.TEACHER ? LecturesCreate : null}
      />,
      <Resource 
        name={PROFILE_ENTITY}
        edit={ProfileEdit}
      />,
    ]}
  </Admin>
);

export default App;