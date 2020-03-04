/* eslint-disable jsx-a11y/label-has-for */

import React from "react";
import PropTypes from 'prop-types';

import Input from "../../Input";
import TextArea from "../../TextArea";
import AppareilPhoto from "../../../styles/images/photo-camera.png";

import "./renseignement.scss";

const RenseignementMonuments = ({
  isDataFormOpen,
  closeDataForm,
  nameInput,
  addressInput,
  descriptionInput,
  updateFormField,
}) => {
  const handleCloseDataForm = e => {
    e.preventDefault();
    console.log("Dataform closed");
    closeDataForm();
  };

  const handleAddMonument = e => {
    e.preventDefault();
    console.log("monument added");
  };
  return (
    <div
      className={
        isDataFormOpen
          ? "renseignement-monuments open"
          : "renseignement-monuments"
      }
    >
      <div className="renseignement-monuments_relative">
        <a
          href=""
          className="renseignement-monuments_close"
          onClick={handleCloseDataForm}
        >
          Fermer
        </a>
        <img
          src={AppareilPhoto}
          alt="Appareil"
          className="renseignement-monuments_appareil"
        />
        <form action="">
          <div className="renseignement-monuments_inputs">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Nom"
              value={nameInput}
              onChangeFunction={input => updateFormField('nameInput', input)}
            />

            <Input
              type="text"
              id="adress"
              name="adress"
              placeholder="Adresse"
              value={addressInput}
              onChangeFunction={input => updateFormField('addressInput', input)}
            />

            <TextArea
              type="text"
              rows="5"
              id="description"
              name="description"
              placeholder="Description"
              value={descriptionInput}
              onChangeFunction={input => updateFormField('descriptionInput', input)}
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
              onClick={handleAddMonument}
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
  closeDataForm: PropTypes.func.isRequired,
  addressInput: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  descriptionInput: PropTypes.string.isRequired,
  updateFormField: PropTypes.func.isRequired,
};

export default RenseignementMonuments;
