import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './redux/reducers/rootReducer';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';


const reduxStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk).withExtrArgument({getFirebase, getFirestore}), reduxFirestore(firebase)));

const firebaseConfig = {
  apiKey: "AIzaSyDFKDK-gybu5xH_nfnAITnjAzRm3cRLRkY",
  authDomain: "resume-builder-12277.firebaseapp.com",
  projectId: "resume-builder-12277",
  storageBucket: "resume-builder-12277.appspot.com",
  messagingSenderId: "148443516416",
  appId: "1:148443516416:web:e42c1e7977c1490cf192e5",
  measurementId: "G-7KK0PPP7HV"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

ReactDOM.render(
  <Provider store={reduxStore}>
  <BrowserRouter>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>
  </BrowserRouter>
</Provider>
  ,
  document.getElementById('root')
);