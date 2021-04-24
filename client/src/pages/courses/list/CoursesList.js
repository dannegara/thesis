import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ShowButton,
  EditButton,
} from 'react-admin';
import { COURSE_SOURCES } from '../../../constants/sources';
import { ListFilters } from '../../../components/filters';
import { ROLES } from '../../../constants/enums';

const CoursesList = ({ permissions, ...props }) => {
  return (
    <List pagination={false} {...props} filters={<ListFilters />}>
      <Datagrid>
        <TextField source={COURSE_SOURCES.id} />
        <TextField source={COURSE_SOURCES.name} />
        <TextField source={COURSE_SOURCES.status} />
        <DateField source={COURSE_SOURCES.createdAt} />
        <DateField source={COURSE_SOURCES.updatedAt} />
        <ShowButton />
        {permissions === ROLES.TEACHER && <EditButton />}
      </Datagrid>
    </List>
  )
}

export default CoursesList;