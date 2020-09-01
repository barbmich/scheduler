import React from "react";
import "components/DayListItem.scss";
const classnames = require("classnames");

function formatSpots(value) {
  if (value === 1) return `1 spot remaining`
  else if (value === 0) return `no spots remaining`
  else return `${value} spots remaining`
}

export default function DayListItem(props) {
  // console.log(props);

  const dayClass = classnames(
    "day-list__item",
    {
      "day-list__item--selected": props.selected,
      "day-list__item--full": (props.spots === 0)
    })
  // console.log(dayClass)

  return (
    <li className={dayClass} onClick={() => {props.setDay && props.setDay(props.name)}}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}