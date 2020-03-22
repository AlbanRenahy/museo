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
      <div className="staff">
        <h2 className="title-staff">L'équipe</h2>
        <span className="cadre-passion">Museo est codé avec passion par :</span>
        <br/>
        <Label className="staff-label">
          <a className="link" target="_blank" draggable="false" data-tooltip="Product Owner">
            <p
              className="ui purple image big label"
            >
              <img
                className="image"
                src={Avatar1}
                alt="img-Alban"
              />
              Alban
            </p>
          </a>
        </Label>
        <Label className="staff-label">
          <a className="link" target="_blank" draggable="false" data-tooltip="Lead Dev (Front)">
            <p
              className="ui orange image big label"
            >
              <img
                className="image"
                src={Avatar2}
                alt="img-Corale"
              />
              Coralie
            </p>
          </a>
        </Label>
        <Label className="staff-label">
          <a className="link" target="_blank" draggable="false" data-tooltip="Git Master et Lead Dev (Back)">
            <p
              className="ui blue image big label"
            >
              <img
                className="image"
                src={Avatar3}
                alt="img-Julien"
              />
              Julien
            </p>
          </a>
        </Label>
        <Label className="staff-label">
          <a className="link" target="_blank" draggable="false" data-tooltip="Scrum Master">
            <p
              className="ui yellow image big label"
            >
              <img
                className="image"
                src={Avatar4}
                alt="img-Anthony"
              />
              Anthony
            </p>
          </a>
        </Label>
        <Label className="staff-label">
          <a className="link" target="_blank" draggable="false" data-tooltip="Git Master (Front)">
            <p
              className="ui teal image big label"
            >
              <img
                className="image"
                src={Avatar5}
                alt="img-Cécile"
              />
              Cécile
            </p>
          </a>
        </Label>
      </div>
      <div className="description-techno">
      <h2 className="title-staff">Les outils et technologies</h2>
            <span className="cadre-passion">Museo nous a permis de nous améliorer en :</span>
            <ul>
              <li><span className="col-1">HTML/SCSS</span>  <span className="col-2">JS</span>  <span className="col-3">REACT</span></li>
              <li><span className="col-1">PHP</span>  <span className="col-2">SYMFONY</span>  <span className="col-3">REACT-REDUX</span></li>
              <li><span className="col-1">SEMANTIC-UI</span>  <span className="col-2">API-PLATFORM</span>  <span className="col-3">GITHUB</span></li>
              <li><span className="col-1">OPENSTREETMAP</span>  <span className="col-2">LEAFLET</span>  <span className="col-3">SLACK</span></li>
              <li><span className="col-1">SCRUM</span>  <span className="col-2">SQL</span>  <span className="col-3">UX</span></li>
            </ul>
          </div>
          <div className="credits">
          <h3 className="credits-title">Crédits</h3>
          <div className="credits-liste">
            <p>Map: OpenStreetMap, API du gouvernement & Leaflet-react</p> 
            <p>Photos: Wikipedia</p>
            <p>Formation: Oclock</p>         
          </div>
        </div>
      <Link to="/" className="login-link">Retour à la page d'accueil</Link>
    </div>
  </>
);

/**
 * Export
 */
export default About;
