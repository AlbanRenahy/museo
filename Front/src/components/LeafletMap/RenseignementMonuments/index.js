/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
} from 'semantic-ui-react';

import Input from '../../Input';
import TextArea from '../../TextArea';
import AppareilPhoto from '../../../styles/images/photo-camera.png';

import './renseignement.scss';

const RenseignementMonuments = ({
  isDataFormOpen,
  submitMonument,
  name,
  address,
  description,
  updateMapformField,
  closeAllModals,
  findAddress,
  fileText,
}) => {
  const handleCloseDataForm = (e) => {
    e.preventDefault();
    console.log('Dataform closed');
    closeAllModals();
  };

  const handleSubmitMonument = (e) => {
    e.preventDefault();
    console.log('submitting monument');
    submitMonument();
  };

  const handleFileChange = (e) => {
    if (e.target.files[0].type !== 'image/png' && e.target.files[0].type !== 'image/jpeg') {
      updateMapformField('fileText', 'Formats acceptés: JPG, PNG');
    } else {
      updateMapformField('fileText', e.target.files[0].name);
    }
    const readFile = () => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        updatemapFormField('fileInput', reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    };

    if (readFile) {
      readFile(e.target.files[0]);
    }
  };

  const handleBlur = (e) => {
    findAddress();
  };
  return (
    <div
      className={
        isDataFormOpen
          ? 'renseignement-monuments open'
          : 'renseignement-monuments'
      }
    >
      <div className="renseignement-monuments_relative">
        <a
          href="#"
          className="renseignement-monuments_close"
          onClick={handleCloseDataForm}
        >
          Fermer
        </a>
        <div className="renseignement-monuments_files">
          <label htmlFor="picture-monument"><img src={AppareilPhoto} alt="Appareil" className="renseignement-monuments_appareil" /></label>
          <input type="file" id="picture-monument" className="inputfile" onChange={handleFileChange} accept="image/*" />
          <List>
            <List.Item>{fileText}</List.Item>
          </List>
        </div>
        <form action="">
          <div className="renseignement-monuments_inputs">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Nom"
              value={name}
              onChangeFunction={(input) => updateMapformField('name', input)}
            />
            <Input
              type="text"
              id="address"
              name="address"
              placeholder="Adresse"
              value={address}
              onBlur={handleBlur}
              onChangeFunction={(input) => updateMapformField('address', input)}
            />
            <TextArea
              type="text"
              rows="5"
              id="description"
              name="description"
              placeholder="Description"
              value={description}
              onChangeFunction={(input) => updateMapformField('description', input)}
            />
            <div className="renseignement-monuments_secondary-infos">
              <div className="input-container">
                <select
                  id="thematic"
                  className="input select-style"
                  name="thematic"
                >
                  <option>Thématique</option>
                </select>
              </div>
              <div className="input-container">
                <select
                  id="period"
                  className="input select-style"
                  name="period"
                >
                  <option>Période</option>
                </select>
              </div>
              <div className="input-container">
                <select
                  id="region"
                  className="input select-style"
                  name="region"
                >
                  <option>Région</option>
                </select>
              </div>
              <div className="input-container">
                <select
                  id="target"
                  className="input select-style"
                  name="target"
                >
                  <option>Public visé</option>
                </select>
              </div>
            </div>
          </div>
          <div className="renseignement-monuments_submit">
            <button
              type="submit"
              className="form-button"
              onClick={handleSubmitMonument}
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

RenseignementMonuments.propTypes = {
  isDataFormOpen: PropTypes.bool.isRequired,
  closeAllModals: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  updateMapformField: PropTypes.func.isRequired,
  submitMonument: PropTypes.func.isRequired,
  findAddress: PropTypes.func.isRequired,
  fileText: PropTypes.string.isRequired,
};

export default RenseignementMonuments;
