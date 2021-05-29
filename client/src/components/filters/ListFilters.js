import React from 'react';
import { Filter, TextInput } from 'react-admin';

const ListFilters = (props) => {
  return (
    <Filter {...props}>
      {/* <TextInput label="Search" source="s" alwaysOn /> */}
    </Filter>
  )
}

export default ListFilters