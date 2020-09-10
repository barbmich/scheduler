import React from "react";
import "components/Button.scss";
const classnames = require("classnames");

export default function Button(props) {

   const { confirm, danger, disabled, children, onClick } = props

   const buttonClass = classnames("button", { "button--confirm": confirm, "button--danger": danger });

   return (
      <button
         className={buttonClass}
         disabled={disabled}
         onClick={onClick}
      >
         {children}
      </button>);
}
