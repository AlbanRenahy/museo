/**
 * Import
 */
import React from 'react';

import { Link } from 'react-router-dom';
import { Label } from 'semantic-ui-react';


// Styles et assets
import './about.scss';
import Avatar1 from 'src/styles/images/alban.svg';
import Avatar2 from 'src/styles/images/coralie.svg';
import Avatar3 from 'src/styles/images/julien.svg';
import Avatar4 from 'src/styles/images/anthony.svg';
import Avatar5 from 'src/styles/images/cecile.svg';
/*
 * Code
 */
const About = () => (
  <>
    <div className="about-container">

      <h1 className="about-title">A propos</h1>
      <h2 className="title-history">L'histoire de Muséo</h2>
      <p className="about-text">Prendre le temps de découvrir notre patrimoine, contempler toiles, sculptures et photographies dans un environnement calme et accueillant nous aide à oublier le rythme frénétique du quotidien, en plus de créer de belles émotions à la contemplation.</p>
      <p className="about-text">Pour les amateurs d'art et patrimoine, quand on est en voyage ou déplacement, on a pas toujours connaissance des multiples lieux fascinants à explorer autour, tout particulièrement en campagne. Museo est une application cartographique qui permet aux utilisateurs de renseigner leurs monuments et musées favoris, et ainsi inspirer à la communauté des visites incontournables ou insolites de notre patrimoine.</p> 
      <div className="staff"><br />
        <h2 className="title-staff">L'équipe</h2>
        <Label className="staff-label">
        <a className="link" target="_blank" draggable="false" data-tooltip="Product Owner">
          <a
            className="ui purple image big label"
          >
            <img
              className="image"
              src={Avatar1}
              alt="img-Alban"
            />
            Alban
            </a>
          </a>
        </Label>
        <Label className="staff-label">
        <a className="link" target="_blank" draggable="false" data-tooltip="Lead Dev (Front)">
          <a
            className="ui orange image big label"
          >
            <img
              className="image"
              src={Avatar2}
              alt="img-Corale"
            />
            Coralie
            </a>
          </a>
        </Label>
        <Label className="staff-label">
        <a className="link" target="_blank" draggable="false" data-tooltip="Git Master et Lead Dev (Back)">
          <a
            className="ui blue image big label"
          >
            <img
              className="image"
              src={Avatar3}
              alt="img-Julien"
            />
            Julien
          </a>
        </a>
        </Label>
        <Label className="staff-label">
          <a className="link" target="_blank" draggable="false" data-tooltip="Scrum Master">
            <a
              className="ui yellow image big label"
            >
              <img
                className="image"
                src={Avatar4}
                alt="img-Anthony"
              />
              Anthony
            </a>
          </a>
        </Label>
        <Label className="staff-label">
          <a className="link" target="_blank" draggable="false" data-tooltip="Git Master (Front)">
            <a
              className="ui teal image big label"
            >
              <img
                className="image"
                src={Avatar5}
                alt="img-Cécile"
              />
              Cécile
            </a>
          </a>
        </Label>
      </div>
      <p className="login-link"><Link to="/">Retour à la page d'accueil</Link></p>
    </div>
  </>
);

/**
 * Export
 */
export default About;
