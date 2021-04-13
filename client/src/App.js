import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { authProvider, dataProvider } from './providers';

const adminProps = { authProvider, dataProvider };

const App = () => (
  <Admin {...adminProps}>
    <Resource name="courses" list={ListGuesser} />
  </Admin>
);

export default App;