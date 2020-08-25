import React from "react";
import { useDispatch } from "react-redux";
import actions from "../../../actions";
import hand from "../../../utils/img/Hand-Icon.svg";
import google from "../../../utils/img/Google-Icon.svg";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default function Auth() {
  const dispatch = useDispatch();

  // Initial Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyDDrSWzQCjzpHlq77T3VYkut3vnxlQia4g",
    authDomain: "to-do-list-c0409.firebaseapp.com",
    databaseURL: "https://to-do-list-c0409.firebaseio.com",
    projectId: "to-do-list-c0409",
    storageBucket: "to-do-list-c0409.appspot.com",
    messagingSenderId: "219696490030",
    appId: "1:219696490030:web:74cd8b9bf880a97c7821bf",
  };
  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

  // Make Auth And Firestore References
  const auth = firebase.auth();
  const db = firebase.firestore();

  // Create Current Dataset
  let currentData;

  // Use Google Authentication
  const provider = new firebase.auth.GoogleAuthProvider();
  function turnUp() {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const docRef = db.collection("todos").doc(result.user.uid);
        // Checks If There Is A Document From The Current User In The Firestore
        docRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              currentData = doc.data().user;
            } else {
              db.collection("todos")
                .doc(result.user.uid)
                .set({
                  user: [
                    { label: "Wash Kitchen", isComplete: false },
                    { label: "Go To Theater", isComplete: false },
                  ],
                });
              currentData = [
                { label: "Wash Kitchen", isComplete: false },
                { label: "Go To Theater", isComplete: false },
              ];
            }
            localStorage.setItem("todos", JSON.stringify(currentData));
            dispatch(actions.setTodoList([...currentData]));
          })
          .catch((error) => {
            window.console.log(error);
          });
      })
      .catch((error) => {
        window.console.log(error);
      });
  }

  return (
    <div className="todo_block-auth auth_block">
      <img src={hand} alt="Greeting" className="auth_block-btn-greeting_icon" />
      <h2 className="auth_block-title">Hello</h2>
      <p className="auth_block-text">Sign in with Google to start</p>
      <div className="auth_block-btn" onClick={turnUp}>
        <img src={google} alt="Google" className="auth_block-btn-google_icon" />
        <p className="auth_block-btn-text">Sign In</p>
      </div>
    </div>
  );
}
