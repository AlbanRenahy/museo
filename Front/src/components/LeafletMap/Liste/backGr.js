/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants

import Background from 'src/styles/images/BG-Login-Signin.png';

// Styles et assets
import './liste.scss';

/**
 * Code
 */
const ListeBackground = () => (
	<div className="containerCards">
		<div className="bird-container bird-container--one">
			<div className="bird bird--one"></div>
		</div>

		<div className="bird-container bird-container--two">
			<div className="bird bird--two"></div>
		</div>
	
		<div className="bird-container bird-container--three">
			<div className="bird bird--three"></div>
		</div>
	
		<div className="bird-container bird-container--four">
			<div className="bird bird--four"></div>
		</div>
	</div>

);

/**
 * Export
 */
export default ListeBackground;
