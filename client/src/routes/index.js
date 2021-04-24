import React from 'react';
import { Route } from 'react-router-dom';
import { PROFILE_ENTITY } from '../constants/entities';
import { ProfileEdit } from '../pages/profile/index';

const routes = [
  <Route exact path={`/${PROFILE_ENTITY}`} component={ProfileEdit} />,
];

export default routes;