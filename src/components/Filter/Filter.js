import React from 'react';
import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterValue } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/selectors';
import { FcBusinessman } from 'react-icons/fc';
export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispath = useDispatch();
  return (
    <React.Fragment>
      <label htmlFor="filter">
        Find contacts by name
        <FcBusinessman />
      </label>
      <Input
        id="filter"
        value={filter}
        onChange={evt => dispath(filterValue(evt.target.value))}
      ></Input>
    </React.Fragment>
  );
};
