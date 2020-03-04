/* eslint-disable jsx-a11y/label-has-for */

import React from "react";
import Input from "../../Input";
import AppareilPhoto from "../../../styles/images/photo-camera.svg";

import "./renseignement.scss";

const RenseignementMonuments = ({}) => {
  return (
    <div className="renseignement-monuments">
      <div className="renseignement-monuments_relative">
        <a href="" className="renseignement-monuments_close">
          Fermer
        </a>
        <img
          src={AppareilPhoto}
          alt="Appareil"
          className="renseignement-monuments_appareil"
        />
        <form action="">
          <div className="renseignement-monuments_inputs">
            <div className="renseignement-monuments_primary-infos">
              <Input type="text" id="name" name="name" placeholder="Nom" />

              <Input
                type="text"
                id="adress"
                name="adress"
                placeholder="Adresse"
              />
            </div>

            <Input
              type="text"
              id="description"
              name="description"
              placeholder="Description"
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
            <button type="submit" className="form-button">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RenseignementMonuments;
