/**
 * Import
 */
import React from 'react';

import { Link } from 'react-router-dom';

// Styles et assets
import './about.scss';

/*
 * Code
 */
const About = () => (
  <div className="about-container">
    <h1 className="about-title">A propos</h1>
    <p className="about-text">Prendre le temps de découvrir notre patrimoine, contempler toiles, sculptures et photographies dans un environnement calme et accueillant nous aide à oublier le rythme frénétique du quotidien, en plus de créer de belles émotions à la contemplation.</p>
    <p className="about-text">Pour les amateurs d'art et patrimoine, quand on est en voyage ou déplacement, on a pas toujours connaissance des multiples lieux fascinants à explorer autour, tout particulièrement en campagne. Museo est une application cartographique qui permet aux utilisateurs de renseigner leurs monuments et musées favoris, et ainsi inspirer à la communauté des visites incontournables ou insolites de notre patrimoine.</p>
    <p className="login-link"><Link to="/">Retour à la page d'accueil</Link></p>
  </div>
);

/**
 * Export
 */
export default About;
