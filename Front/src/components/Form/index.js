/**
 * Import
 */
import React from 'react';


/**
 * Local import
 */
// Composants
// Styles et assets

import './form.scss';

/**
 * Code
 */
const Form = ({ children }) => {
   return (
    <form action="">
      {children}
    </form>
  );
};


/**
 * Export
 */
export default Form;
