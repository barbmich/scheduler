import React from "react";
import "components/DayListItem.scss";
const classnames = require("classnames");

function formatSpots(value) {
  if (value === 1) return `1 spot remaining`
  else if (value === 0) return `no spots remaining`
  else return `${value} spots remaining`
}

export default function DayListItem(props) {

  const { name, spots, selected, setDay } = props

  const dayClass = classnames(
    "day-list__item",
    {
      "day-list__item--selected": selected,
      "day-list__item--full": (spots === 0)
    })

  return (
    <li className={dayClass} onClick={setDay} data-testid="day">
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}