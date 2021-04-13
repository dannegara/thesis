import * as React from "react";
import { Admin, Resource } from 'react-admin';
import {
  CoursesList,
  CoursesCreate,
  CoursesShow,
  CoursesEdit,
} from './pages/courses';
import { authProvider, dataProvider } from './providers';
import { COURSE_ENTITY } from './constants/entities';

const adminProps = { authProvider, dataProvider };

const App = () => (
  <Admin {...adminProps}>
    <Resource
      name={COURSE_ENTITY}
      list={CoursesList}
      create={CoursesCreate}
      show={CoursesShow}
      edit={CoursesEdit}
    />
  </Admin>
);

export default App;