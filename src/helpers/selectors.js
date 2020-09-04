export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find(d => d.name === day)
  if (!filteredDay || !filteredDay.interviewers) {
    return []
  }

  const appointmentsForDay = [];
  filteredDay.appointments.forEach(app => {
    appointmentsForDay.push(state.appointments[app])
  })

  return appointmentsForDay
};

export function getInterview(state, interview) {

  if (interview) {
    return {
      interviewer: state.interviewers[interview.interviewer],
      student: interview.student
    };
  } else return null

};

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.find(d => d.name === day)
  if (!filteredDay || !filteredDay.interviewers) {
    return []
  }

  const interviewersForDay = [];
  filteredDay.interviewers.forEach(person => {
    interviewersForDay.push(state.interviewers[person])
  })
  
  return interviewersForDay
};