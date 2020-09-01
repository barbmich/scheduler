import React from "react";
import "components/Button.scss";
const classnames = require("classnames");

export default function Button(props) {

   const buttonClass = classnames("button", {"button--confirm": props.confirm, "button--danger": props.danger});
  
   return (
      <button
         className={buttonClass}
         disabled={props.disabled}
         onClick={props.onClick}
      >
         {props.children}
      </button>);
}
