import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions";
import Tips from "./tips";
import * as firebase from "firebase/app";
import "firebase/auth";

export default function Head() {
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

  const isShowTips = useSelector((state) => state.isShowTips.data);
  const dispatch = useDispatch();

  const isActiveTips = isShowTips
    ? "todo_block-head-tips_btn_active"
    : "todo_block-head-tips_btn";
  return (
    <div className="todo_block-head">
      <div className="todo_block-head-title_tips">
        <h1 className="todo_block-head-title"> to-doooooo </h1>
        <div
          onClick={() => {
            //Check if tips are active
            //And if they are, then forbid to closing tips
            // with click on the tips block and not on the closing tips button
            if (!isShowTips) {
              dispatch(actions.setIsShowTips(!isShowTips));
            }
          }}
          className={`${isActiveTips}`}
        >
          <Tips />
        </div>
      </div>
      {JSON.parse(localStorage.getItem("isAuthMain")) ? (
        <div
          className="todo_block-head-sing_out"
          onClick={() => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                localStorage.setItem("isAuthMain", JSON.stringify(false));
              })
              .catch((error) => {
                window.console.log(error);
              });
            window.location.reload();
          }}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

Head.propTypes = {
  isShowTips: PropTypes.bool,
  setIsShowTips: PropTypes.func,
};
