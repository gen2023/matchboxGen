import React from 'react';
import propTypes from 'prop-types';

function SelectOption({ name, value }) {
  // console.log(onChange);
  return <option value={value}>{name}</option>;
}

SelectOption.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  // onChange: propTypes.func.isRequired,
};

export default SelectOption;
