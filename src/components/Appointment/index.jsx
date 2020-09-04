import React from "react";

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";

import "components/Appointment/styles.scss";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {

  const { time, interview } = props
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  )

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW &&
        <Show
          student={interview.student}
          interviewer={interview.interviewer.name}
        />}
      {mode === CREATE &&
        <Form
          interviewers={props.interviewers}
          onSave={props.onSave}
          onCancel={() => back()}
        />
      }
    </article>
  )
}