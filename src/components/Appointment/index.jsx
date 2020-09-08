import React from "react";

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";

import "components/Appointment/styles.scss";
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const EDIT = "EDIT";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {

  const { id, time, interview, interviewers, bookInterview, cancelInterview } = props
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY)

  function save(name, interviewer) {

    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    bookInterview(id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true))
  }

  function destroy(bool) {

    if (!bool) {
      transition(CONFIRM)
    }

    if (bool) {
      transition(DELETING, true)

      cancelInterview(props.id)
        .then(() => transition(EMPTY))
        .catch((error) => transition(ERROR_DELETE, true));
    }
  }

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={time} />
      {mode === ERROR_SAVE &&
        <Error
          onClose={back}
          message={"An error occurred. Could not save the interview."}
        />
      }
      {mode === ERROR_DELETE &&
        <Error
          onClose={back}
          message={"An error occurred. Could not delete the interview."}
        />
      }
      {mode === DELETING && <Status message="Deleting, please wait" />}
      {mode === SAVING && <Status message="Saving, please wait." />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CONFIRM &&
        <Confirm
          message="Are you sure you would like to delete?"
          onConfirm={() => destroy(true)}
          onCancel={back}
        />}
      {mode === SHOW &&
        <Show
          student={interview.student}
          interviewer={interview.interviewer.name}
          onEdit={() => transition(EDIT)}
          onDelete={() => destroy(false)}
        />}
      {mode === CREATE &&
        <Form
          interviewers={interviewers}
          onSave={save}
          onCancel={back}
        />
      }
      {mode === EDIT &&
        <Form
          name={interview.student}
          interviewers={interviewers}
          interviewer={interview.interviewer.id}
          onSave={save}
          onCancel={back}
        />}
    </article>
  )
}