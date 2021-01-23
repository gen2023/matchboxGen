import React, { Component } from 'react';
import propTypes from 'prop-types';
import SelectOption from './SelectOption';
import list from '../../json/gallery.json';

class SelectCategory extends Component {
  render() {
    const { onChange } = this.props;
    // console.log(onChange);
    return (
      <select size="1" name="nameCategory" onChange={() => onChange()}>
        <option value="">Выбрать</option>
        {list.map(({ id, category }) => (
          <SelectOption
            key={id}
            name={category}
            value={id}
            // onChange={onChange}
          />
        ))}
      </select>
    );
  }
}

SelectCategory.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default SelectCategory;
