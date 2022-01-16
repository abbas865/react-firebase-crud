// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAQomlo7QxG9EOlxpp-r9b_xOjYAi98MkQ",
//   authDomain: "react-crud-261da.firebaseapp.com",
//   projectId: "react-crud-261da",
//   storageBucket: "react-crud-261da.appspot.com",
//   messagingSenderId: "584349916349",
//   appId: "1:584349916349:web:92f5e605ac02e66af9abd4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQomlo7QxG9EOlxpp-r9b_xOjYAi98MkQ",
  authDomain: "react-crud-261da.firebaseapp.com",
  projectId: "react-crud-261da",
  storageBucket: "react-crud-261da.appspot.com",
  messagingSenderId: "584349916349",
  appId: "1:584349916349:web:92f5e605ac02e66af9abd4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);