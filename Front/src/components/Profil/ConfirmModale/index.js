import React from 'react';
import PropTypes from 'prop-types';

import './confirmModale.scss';

const ConfirmModale = ({ closeModale }) => (
  <div className="confirm-modale">
    <div className="shadow-layer">
      <div className="modale-content">
        <button type="button" className="close-modale" onClick={closeModale}>X</button>
        <p className="modale-text">Souhaitez-vous vraiment supprimer votre compte ?</p>
        <button type="button" className="confirm-delete" onClick={closeModale}>Supprimer mon compte</button>
        <button type="button" className="cancel-delete" onClick={closeModale}>ANNULER</button>
      </div>
    </div>
  </div>
);

ConfirmModale.propTypes = {
  closeModale: PropTypes.func.isRequired,
};

export default ConfirmModale;
