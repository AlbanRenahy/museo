/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({
  className, type, id, name, placeholder, value, onChangeFunction, onBlur,
}) => {
  const handleFocus = (event) => {
    event.target.classList.add('open');
  };
  const handleChange = (event) => {
    onChangeFunction(event.target.value);
  };

  return (
    <div>
      <input
        className={className}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onFocus={handleFocus}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChangeFunction: PropTypes.func.isRequired,
};

Input.defaultProps = {
  onBlur: null,
};

/**
 * Export
 */
export default Input;
