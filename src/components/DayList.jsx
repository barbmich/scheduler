import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  // console.log(props);
  const dayListItems = props.days.map(item => {
    return (
      <DayListItem
        key={item.id}
        name={item.name}
        spots={item.spots}
        selected={item.name === props.day}
        setDay={props.setDay}
      />
    );
  });
  return (
    <ul>
      {dayListItems}
    </ul>
  );
};