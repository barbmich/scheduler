import React from "react";
import "components/InterviewerListItem.scss";
const classnames = require("classnames");

export default function InterviewerListItem(props) {

  const interviewersClass = classnames(
    "interviewers__item",
    { "interviewers__item--selected": props.selected }
  )

  const interviewersImgClass = classnames(
    "interviewers__item-image",
    {"interviewers__item-image--selected": props.selected }
  )

  return (
    <li
      id={props.id}
      className={interviewersClass}
      onClick={props.setInterviewer}
    >
      <img
        className={interviewersImgClass}
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  )
};