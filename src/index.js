// == Import : npm
import React from 'react';
import persistStore from 'redux-phoenix';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : local
// Composants
import App from 'src/containers/App';

// store
import initialStore from 'src/store';

// == Render
persistStore(initialStore).then((store) => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>, document.getElementById('root'),
  );
});
