/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/**
 * Local import
 */
// Composants
// Styles et assets

import './form.scss';

/**
 * Code
 */
const Form = ({ children, onSubmit, className }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('form submitted');
    onSubmit();
  };
  return (
    <form action="" onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  className: PropTypes.string.isRequired,
};


/**
 * Export
 */
export default Form;
