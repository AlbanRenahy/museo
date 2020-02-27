# étapes pour la mise en place du store
- yarn add redux react-redux redux-devtools-extension
- création d'un fichier store => src/store/index.js

```
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from 'src/reducers/leNomDuReducer';

const store = createStore(
  // reducer
  reducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;
```

- création d'un reducer (il peut y en avoir plusieurs dans l'application) => src/reducers/leNomDuReducer.js

```
const initialState = {
  // ici l'état initial
};

const leNomDuReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default leNomDuReducer;
```

- utilisation du composant Provider pour fournir le store => par exemple, dans src/App/index.js

```
import { Provider } from 'react-redux';

[...]

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

[...]
```

- on peut ensuite visualiser le store dans le navigateur avec le dev tool Redux

# étapes pour la connexion d'un composant au store

Un composant a besoin d'accéder au store : soit pour récupérer une donnée, soit pour mettre à jour les données.

## Mise en place d'un composant container

- Nouveau dossier src/containers/NomDuComposant
- Nouveau fichier index.js, qui va permettre de créer un "assistant" pour le composant, pour faire le lien avec le store

```
import { connect } from 'react-redux';

import Composant from 'src/components/Composant';

// si le composant a besoin de données provenant du state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : récupération de la donnée dans le state
});

// si le composant a besoin d'agir sur le state
const mapDispatchToProps = {};

// création du composant container
const ComposantContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Composant);

export default ComposantContainer;
```

- ce nouveau composant va être utilisé à la place du composant de présentation, par exemple dans le fichier src/App/index.js, on va remplacer 
```
import Composant from 'src/components/Composant';
```
par
```
import Composant from 'src/containers/Composant';
```
et on supprime les props qui sont liées au state (qu'on gère avec mapStateToProps ou mapDispatchToProps)

## mapStateToProps : si le composant a besoin de données provenant du state

- dans le container ajouter la prop de Composant en indiquant comment la remplir à partir du state
```
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : récupération de la donnée dans le state
  list: state.messages,
});
```

Note : si on a besoin des props qui sont fournies au composant "contenu" par son parent, mapStateToProps a un deuxième argument optionnel _ownProps_ :

```
const mapStateToProps = (state, ownProps) => ({
  // je veux récupérer une information depuis le store, mais je veux la comparer avec
  // une prop du composant
  ownMessage: (ownProps.author === state.nickname),
});
```

## mapDispatchToProps : si le composant a besoin de mettre à jour les données du state, ou de lancer une action à destination d'un middleware

- si on n'avait pas encore de fichier pour les actions, nouveau fichier src/actions/nom.js (il pourrait y avoir plusieurs fichiers d'actions), par exemple `chat.js` pour les actions concernant une chatroom.

```
// action types
export const DO_SOMETHING = 'DO_SOMETHING';
export const DO_SOMETHING_ELSE = 'DO_SOMETHING_ELSE';

// action creators
// action qui n'a pas besoin de payload (informations supplémentaires)
export const doSomething = () => ({
  type: DO_SOMETHING,
});

// action qui a un payload (informations supplémentaires)
export const doSomethingElse = (info1, info2) => ({
  type: DO_SOMETHING_ELSE,
  nomInfo1: info1,
  nomInfo2: info2,
});
```

- écrire une action (si l'action dont on a besoin n'existe pas déjà). Pour définir le type de l'action : "quelle est notre intention ?" => src/actions/nom.js . Ajout action type et action creator.

- ajouter le traitement de cette action dans le reducer (src/reducers/nomDuReducer.js), et/ou dans un middleware (src/middlewares/nomDuMiddleware.js)

```
import { CHANGE_INPUT_MESSAGE } from 'src/actions/chat';

switch (action.type) {
  [...]
  case CHANGE_INPUT_MESSAGE:
    // on crée un nouvel objet
    return {
      // on déverse les informations du state actuel
      ...state,
      // on applique des modifications
      newMessageInput: action.value,
    };
```

- dans mapDispatchToProps, ajouter le nom de la prop (de type func) et indiquer l'action à envoyer au store

```
import { changeInputMessage } from 'src/actions/chat';

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop (de type func) à remplir : callback pour envoyer l'action au store
  changeValue: (value) => {
    dispatch(changeInputMessage(value));
  },
});
```

# composant contrôlé <=> store

Le composant reçoit la valeur à afficher depuis le store, il informe le store s'il faut mettre à jour la valeur.

- ajouter la donnée dans le store (state initial, donc dans le reducer)
```
const initialState = {
  [...]
  newMessageInput: '',
};
```

- mettre en place un composant container (s'il n'existait pas encore, sinon le modifier)

- lire la valeur provenant du state : utilisation de mapStateToProps (et créer la prop si nécessaire dans le composant de présentation, par exemple "value"). Pour vérifier : on peut mettre une autre valeur que '' temporairement dans le state initial. A ce stade, si on tape quelque chose dans le champ, ça n'apparaît pas.

- modifier la valeur dans le store : utilisation de mapDispatchToProps (et créer la prop si nécessaire dans le composant de présentation, la prop sera de type func, et on l'appelle sur l'événement onChange). A ce stade, si on tape quelque chose dans le champ, ça devrait apparaître.

```
const Form = ({ value, changeValue }) => {
  const handleChange = (event) => {
    changeValue(event.target.value);
  };

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

Form.propTypes = {
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

```

# Mettre en place un middleware

- créer un fichier src/middlewares/nomDuMiddleware.js

```
const leMiddleware = (store) => (next) => (action) => {
   console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    default:
      // on passe l'action à son voisin (middleware suivant ou reducer)
      next(action);
  }
};

export default leMiddleware;
```

- utiliser le middleware dans le store (créer ou modifier le fichier src/store/index.js)

```
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import leMiddleware from 'src/middlewares/leMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    leMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  leReducer,
  // enhancers
  enhancers,
);

export default store;
```

# réagir à une action dans le middleware

Je veux par exemple envoyer une requête vers une API quand l'action est LOG_IN.

```
import { LOG_IN } from 'src/actions/chat';

[...]
switch (action.type) {
  case LOG_IN:
    console.log('on va faire l\'appel Axios');
    // je ne bloque pas l'action, je la passe au voisin
    next(action);
    break;
  [...]
}

```

# Prendre en compte le résultat d'une requête asynchrone dans le middleware

Par exemple, j'ai envoyé une requête vers une API avec Axios, dans 'then' je voudrais fournir une information au store.

- créer une action
- traiter cette action dans le reducer (ajouter l'élément au state initial si ce n'était pas encore fait)
- envoyer cette action au store (dispatch)

```
  .then((response) => {
    console.log('on a reçu la réponse : ', response);
    store.dispatch(nomActionCreator(response.xxxxxxx.yyyyyy));
  })
```

# Avoir plusieurs reducers (avec combineReducers)

Avoir plusieurs reducers permet de ranger les données dans des "tiroirs", de découper le state en plusieurs morceaux, par exemple un reducer pour les données des recettes de cuisine, un reducer pour les données de l'utilisateur.

- Créer un reducer principal qui va combiner les autres reducers => src/reducers/index.js

```
import { combineReducers } from 'redux';

// on importe tous les reducers
import nomReducer1 from './reducer1';
import nomReducer2 from './reducer2';
// etc

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  nomDuTiroir1: nomReducer1,
  nomDuTiroir2: nomReducer2,
  // etc
});

export default rootReducer;

```

- l'utiliser dans le store : on importe le reducer qui combine les autres `import reducer from 'src/reducers';` et c'est celui-ci qu'on utilise dans _createStore_

- adapter les containers si besoin : par exemple si on utilisait `state.info`, il faut corriger pour utiliser `state.nomDuTiroir.info`