import React from "react";
import PropTypes from 'prop-types';
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {

  const { interviewers, interviewer, setInterviewer } = props

  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  }

  const interviewerListItems = interviewers.map(intervSelected => {

    return (
      <InterviewerListItem
        key={intervSelected.id}
        name={intervSelected.name}
        avatar={intervSelected.avatar}
        selected={intervSelected.id === interviewer}
        setInterviewer={event => setInterviewer(intervSelected.id)}
      />
    )
  })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewerListItems}
      </ul>
    </section>
  )
}