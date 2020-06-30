/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';

import './textArea.scss';

const TextArea = ({
  rows, id, name, placeholder, value, onChangeFunction,
}) => {
  const handleFocus = (event) => {
    event.target.classList.add('open');
  };
  const handleChange = (event) => {
    onChangeFunction(event.target.value);
  };
  const handleBlur = (event) => {
    event.target.classList.remove('open');
  };

  return (
    <div>
      <textarea
        rows={rows}
        id={id}
        name={name}
        placeholder={placeholder}
        onFocus={handleFocus}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  );
};

TextArea.propTypes = {
  rows: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeFunction: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default TextArea;
