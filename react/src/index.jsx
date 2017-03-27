import React from 'react'  
import {render} from 'react-dom'
import firebase from 'firebase'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import './style/index.scss'


firebase.initializeApp({
  apiKey: 'AIzaSyDbU0YtkznjH8AmMSKfCl_67wnmSw8X7fE',
  authDomain: 'lo-barne-canchas.firebaseapp.com',
  databaseURL: 'https://lo-barne-canchas.firebaseio.com',
  storageBucket: 'lo-barne-canchas.appspot.com',
  messagingSenderId: '888088856499'
});


import App from './components/app'
import Cancha from './components/cancha'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/:id" component={Cancha}/>
  </Router>
), document.getElementById('app')) 