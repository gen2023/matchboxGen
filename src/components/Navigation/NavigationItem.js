import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavigationItem({ name, link }) {
  return (
    <li>
      <Link to={link}>{name}</Link>
    </li>
  );
}

NavigationItem.propTypes = {
  name: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
};

export default NavigationItem;
