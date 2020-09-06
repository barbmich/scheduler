import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  function setSpotsForDay(targetDay, newSpots) {
    setState((prev) => ({
      ...prev,
      days: prev.days.map((day) =>
        day.name === targetDay ? { ...day, spots: newSpots } : day
      ),
    }));
  }

  useEffect(() => {
    function spotsRemaining() {
      state.days.forEach((day) => {
        const newSpotsRemaining = day.appointments
          .map((apptId) => state.appointments[apptId].interview)
          .filter((item) => item === null).length;

        setSpotsForDay(day.name, newSpotsRemaining);
      });
    };

    spotsRemaining();
  }, [state.appointments]);

  const setDay = (day) => setState({ ...state, day });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then(`/api/days`)
      .then(() => {
        setState({
          ...state,
          appointments,
        });
      })
      .catch();
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .delete(`/api/appointments/${id}`, appointment)
      .then(`/api/days`)
      .then(() => {
        setState({
          ...state,
          appointments,
        });
      })
      .catch();
  }

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get("/api/days")),
      Promise.resolve(axios.get("/api/appointments")),
      Promise.resolve(axios.get("/api/interviewers")),
    ]).then((all) => {
      const [days, appointments, interviewers] = all;

      setState((prev) => ({
        day: days.data.name,
        days: days.data,
        appointments: appointments.data,
        interviewers: interviewers.data,
      }));
    });
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
