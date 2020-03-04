/**
 * Import
 */
import React from 'react';

import { Link } from 'react-router-dom';

// Composants

import MuseoLogo from 'src/styles/images/logo_museo_couleur.png';
import Background from 'src/styles/images/BG-Login-Signin.png';
import BurgerNav from 'src/components/BurgerNav';

// Styles et assets
import './about.scss';

/*
 * Code
 */
const About = () => (
  <div
    className="about"
    style={{
      backgroundImage: `linear-gradient( rgba(251, 225, 146, 0.6),rgba(0, 0, 255, 0.5)), url(${Background})`,
    }}
  >
    <BurgerNav />
    <div className="about-container">
      <div className="about-logo">
        <img src={MuseoLogo} alt="Museo" />
        <p className="about-logo_subtitle">L'application cartographique pour vos monuments et musées favoris </p>
      </div>
      <div className="about-content">
        <h1>A propos</h1>
        <p className="about-content_text">Prendre le temps de découvrir notre patrimoine, contempler toiles, sculptures et photographies dans un environnement calme et accueillant nous aide à oublier le rythme frénétique du quotidien, en plus de créer de belles émotions à la contemplation.</p>
        <p>Pour les amateurs d'art et patrimoine, quand on est en voyage ou déplacement, on a pas toujours connaissance des multiples lieux fascinants à explorer autour, tout particulièrement en campagne. Museo est une application cartographique qui permet aux utilisateurs de renseigner leurs monuments et musées favoris, et ainsi inspirer à la communauté des visites incontournables ou insolites de notre patrimoine.</p>
        <p className="home-link"><Link to="/">Retour à la page d'accueil</Link></p>
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default About;
