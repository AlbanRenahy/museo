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
  thematics,
  periods,
  regions,
  targets,
  updateMapformField,
  closeAllModals,
  findAddress,
  fileText,
  resetFormMonument,
  submitPicture,
}) => {
  const handleCloseDataForm = (e) => {
    e.preventDefault();
    resetFormMonument();
    closeAllModals();
  };

  const handleSubmitMonument = (e) => {
    e.preventDefault();
    console.log('submitting monument');
    submitMonument();
    submitPicture();
  };

  const handleSelectChangeThematic = (e) => {
    updateMapformField('thematic', parseInt(e.target.value));
  };
  const handleSelectChangePeriod = (e) => {
    updateMapformField('period', parseInt(e.target.value));
  };
  const handleSelectChangeRegion = (e) => {
    updateMapformField('region', parseInt(e.target.value));
  };
  const handleSelectChangeTarget = (e) => {
    updateMapformField('target', parseInt(e.target.value));
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0].type !== 'image/png' && e.target.files[0].type !== 'image/jpeg') {
      updateMapformField('fileText', 'Formats acceptés: JPG, PNG');
    }
    else {
      updateMapformField('fileText', e.target.files[0].name);
      updateMapformField('fileSize', e.target.files[0].size);
    }
    const readFile = () => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        updateMapformField('fileInput', reader.result);
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
        <div className="renseignement-monuments_files">
          <a
            href="#"
            className="renseignement-monuments_close"
            onClick={handleCloseDataForm}
          >
            Fermer
          </a>
          <label htmlFor="picture-monument"><img src={AppareilPhoto} alt="Appareil" className="renseignement-monuments_appareil" /></label>
          <input type="file" id="picture-monument" className="inputfile" onChange={handleFileChange} accept="image/*" />
          <List>
            <List.Item>{fileText}</List.Item>
          </List>
        </div>
        <form action="" encType="multipart/form-data">
          <div className="renseignement-monuments_inputs">
            <Input
              className="monumentInput"
              type="text"
              id="name"
              name="nom"
              placeholder="Nom"
              value={name}
              onChangeFunction={(input) => updateMapformField('name', input)}
            />
            <Input
              className="monumentInput"
              type="text"
              id="address"
              name="adresse"
              placeholder="Adresse"
              value={address}
              onBlur={handleBlur}
              onChangeFunction={(input) => updateMapformField('address', input)}
            />
            <TextArea
              className="monumentTextarea"
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
                {/* <select
                  id="thematic"
                  className="input select-style"
                  name="thematique"
                  onChange={handleSelectChangeThematic}
                  onFocus={(event) => {
                    event.target.classList.add('open');
                  }}
                >
                  <option value={0} defaultValue>-- Thématique --</option>
                  {
                    thematics.map((thematik) => (
                      <option key={thematik.id} value={thematik.id}>{thematik.name}</option>
                    ))
                  }
                </select>
              </div>
              <div className="input-container">
                <select
                  id="period"
                  className="input select-style"
                  name="periode"
                  onChange={handleSelectChangePeriod}
                  onFocus={(event) => {
                    event.target.classList.add('open');
                  }}
                >
                  <option value={0} defaultValue>-- Période --</option>
                  {
                    periods.map((period) => (
                      <option key={period.id} value={period.id}>{period.name}</option>
                    ))
                  }
                </select>
              </div>
              <div className="input-container">
                <select
                  id="region"
                  className="input select-style"
                  name="region"
                  onChange={handleSelectChangeRegion}
                  onFocus={(event) => {
                    event.target.classList.add('open');
                  }}
                >
                  <option value={0} defaultValue>-- Régions --</option>
                  {
                    regions.map((region) => (
                      <option key={region.id} value={region.id}>{region.name}</option>
                    ))
                  }
                </select>
              </div>
              <div className="input-container">
                <select
                  id="target"
                  className="input select-style"
                  name="cible"
                  onChange={handleSelectChangeTarget}
                  onFocus={(event) => {
                    event.target.classList.add('open');
                  }}
                >
                  <option value={0} defaultValue>-- Public visé --</option>
                  {
                    targets.map((target) => (
                      <option key={target.id} value={target.id}>{target.name}</option>
                    ))
                  }
                </select> */}
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
  thematics: PropTypes.array.isRequired,
  periods: PropTypes.array.isRequired,
  regions: PropTypes.array.isRequired,
  targets: PropTypes.array.isRequired,
  updateMapformField: PropTypes.func.isRequired,
  submitMonument: PropTypes.func.isRequired,
  submitPicture: PropTypes.func.isRequired,
  findAddress: PropTypes.func.isRequired,
  fileText: PropTypes.string.isRequired,
  resetFormMonument: PropTypes.func.isRequired,
};

export default RenseignementMonuments;
