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

const TestsList = (props) => {
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
        <EditButton />
      </Datagrid>
    </List>
  )
}

export default TestsList;