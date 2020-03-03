/**
 * Import
 */
import React from 'react';
import {Link} from 'react-router-dom';
import Bern from '../../styles/images/stephaneBern.jpg';
import BG from '../../styles/images/BG-Login-Signin.png';

// Styles et assets

import './notfound.scss';
/**
 * Code
 */
const App = () => (
  <div
    className="not-found"
    style={{
      backgroundImage: `url(${BG})`,
    }}
  >
    <h1 id="title">
      404 Page Not Found
    </h1>
    <h1 id="title">
      <Link to="/login">Retourner sur l'accueil</Link>
    </h1>
    <img src={Bern} alt="bern" id="bern" />
  </div>
);

/**
 * Export
 */
export default App;
