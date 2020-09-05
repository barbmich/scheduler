import React, { useState, useEffect } from "react";
import axios from "axios";

import DayList from "components/DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "../helpers/selectors";

import "components/Appointment";
import "components/Application.scss";

export default function Application() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  const setDay = day => setState({ ...state, day });

  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState({
          ...state,
          appointments
        })
      })
      .catch()
  }

  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    }
        
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    return axios
      .delete(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState({
          ...state,
          appointments
        })
      })
      .catch()
  }

  useEffect(() => {
    Promise
      .all([
        Promise.resolve(axios.get("/api/days")),
        Promise.resolve(axios.get("/api/appointments")),
        Promise.resolve(axios.get("/api/interviewers"))
      ])
      .then((all) => {
        const [days, appointments, interviewers] = all;

        setState(prev => ({
          day: days.data.name,
          days: days.data,
          appointments: appointments.data,
          interviewers: interviewers.data
        }))
      })
  }, [])

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler" />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {getAppointmentsForDay(state, state.day).map(appointment => {
          return (
            <Appointment
              key={appointment.id}
              id={appointment.id}
              interview={getInterview(state, appointment.interview)}
              time={appointment.time}
              interviewers={getInterviewersForDay(state, state.day)}
              bookInterview={bookInterview}
              cancelInterview={cancelInterview}
            />
          )
        }
        )}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
