# React Snapchat Clone

A clone of Snapchat (social media app), built with ReactJs, Firebase, Redux Toolkit and Material-UI.

Visit the Project here: https://snapchat-clone-55089.web.app/

## Project Screen Shots

![login](https://user-images.githubusercontent.com/25431607/106753573-d82acd80-6651-11eb-8940-5b0986984efd.png)

![landing](https://user-images.githubusercontent.com/25431607/106753863-3fe11880-6652-11eb-8b77-e5cf5385941d.png)

![preview](https://user-images.githubusercontent.com/25431607/106753923-54251580-6652-11eb-85d9-805855db8dd7.png)

![chat](https://user-images.githubusercontent.com/25431607/106754086-89316800-6652-11eb-8568-da2e0a5877c7.png)


## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Additional Files

Add a file called `firebase.js` in the root directory and add your own firebaseConfig as beflow:

```javascript
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {
    db, auth, storage, provider
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Reflection

  - This is a side project I developed as part of learning ReactJs.
  - I wanted to understand how to implement the webcam feature in a React Application, so what better clone to make for the process of learning the same than Snapchat.
  - This app involves the use of external npm libraries such as "react-webcam", "react-countdown-circle-timer" and "firebase".
  - I have bootstrapped the Redux template using the command `npx create-react-app --template redux`. This helps to minimize the initial setup and invest more time into the main logic of the app and also deals with the initial setup of redux in the app using a package called "@reduxjs/toolkit". The state management is done using Redux. I also added `react-router-dom` for routing. The Styling is done using Material UI which is a famous and easy to use for styling React components.
"# Spooky-Chat" 
