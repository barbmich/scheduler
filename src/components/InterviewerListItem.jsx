import React from "react";
import "components/InterviewerListItem.scss";
const classnames = require("classnames");

export default function InterviewerListItem(props) {

  const { id, avatar, name, selected, setInterviewer } = props

  const interviewersClass = classnames(
    "interviewers__item",
    { "interviewers__item--selected": selected }
  )

  const interviewersImgClass = classnames(
    "interviewers__item-image",
    { "interviewers__item-image--selected": selected }
  )

  return (
    <li
      id={id}
      className={interviewersClass}
      onClick={setInterviewer}
    >
      <img
        className={interviewersImgClass}
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  )
};