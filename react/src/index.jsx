import React from 'react'  
import {render} from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyDbU0YtkznjH8AmMSKfCl_67wnmSw8X7fE",
  authDomain: "lo-barne-canchas.firebaseapp.com",
  databaseURL: "https://lo-barne-canchas.firebaseio.com",
  storageBucket: "lo-barne-canchas.appspot.com",
  messagingSenderId: "888088856499"
})

import App from './components/app'

render(<App />, document.getElementById('app')) 