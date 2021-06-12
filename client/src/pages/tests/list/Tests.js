import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ShowButton,
  EditButton,
} from 'react-admin';
import { ListFilters } from '../../../components/filters';
import { TEST_SOURCE } from '../../../constants/sources';
import { ROLES } from '../../../constants/enums';

const TestsList = ({ permissions, ...props }) => {
  return (
    <List pagination={false} {...props} filters={<ListFilters />}>
      <Datagrid>
        <TextField source={TEST_SOURCE.id} />
        <TextField source={TEST_SOURCE.name} />
        <DateField source={TEST_SOURCE.dateStart} />
        <DateField source={TEST_SOURCE.dateFinish} />
        <DateField source={TEST_SOURCE.createdAt} />
        <DateField source={TEST_SOURCE.updatedAt} />
        <ShowButton />
        {permissions === ROLES.TEACHER && <EditButton />}
      </Datagrid>
    </List>
  )
}

export default TestsList;