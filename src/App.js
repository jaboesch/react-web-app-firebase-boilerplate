import logo from './logo.svg';
import './App.css';
// const firebase = require("firebase/app");
// const cors = require('cors')({origin: true});

import firebase from 'firebase/app';

require("firebase/functions");

const firebaseConfig = {
  apiKey: "AIzaSyCN00rUJaJCJvG-bMl8iBq2X2az-lCBQAo",
  authDomain: "rest-api-boilerplate.firebaseapp.com",
  projectId: "rest-api-boilerplate",
  storageBucket: "rest-api-boilerplate.appspot.com",
  messagingSenderId: "350399116535",
  appId: "1:350399116535:web:112b4f077bd6551b280ff2",
  measurementId: "G-XWDD3JHGMT"
};

firebase.initializeApp(firebaseConfig);
// const functions = firebase.functions();

function hitFirestore() {
  let ftn = firebase.functions().httpsCallable('helloWorld');
  ftn({ text: 'Howdy ;)' })
  .then((result) => {
    console.log(result.data.result)
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={hitFirestore}>Hit Firestore iter1</button>;
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
