// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyDKf8N737_Tu1_r1AdqYKoIy5x9_HV7uQw",
//   authDomain: "mudslide-297d0.firebaseapp.com",
//   projectId: "mudslide-297d0",
//   storageBucket: "mudslide-297d0.appspot.com",
//   messagingSenderId: "370264612389",
//   appId: "1:370264612389:web:d066a21d4ea35d295929cc",
//   measurementId: "G-0Y7KJG753D",
// };

// let app;

// if (typeof window !== "undefined") {
//   // Initialize Firebase
//   app = initializeApp(firebaseConfig, "mudslide-297d0");
//   //   const analytics = getAnalytics(app);
// }

// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxCiarAhry-FGRIixxc213_0pEuEYDq3A",
  authDomain: "black-leo-venture.firebaseapp.com",
  projectId: "black-leo-venture",
  storageBucket: "black-leo-venture.firebasestorage.app",
  messagingSenderId: "485402446854",
  appId: "1:485402446854:web:3563bad6e0180bbba10787",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
