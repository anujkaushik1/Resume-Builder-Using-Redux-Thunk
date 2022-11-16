import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './redux/reducers/rootReducer';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const reduxStore = createStore(rootReducer, composeWithDevTools());

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
  <BrowserRouter>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);