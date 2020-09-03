export function getAppointmentsForDay(state, day) {

  const appointmentsIds = []

  state.days.forEach(item => {
    if (item.name === day) {
      appointmentsIds.push(...item.appointments);
    }
  });

  const appointmentsForDay = [];

  appointmentsIds.forEach(item => {
    const id = state.appointments[item].id;
    if (item === id) {
      appointmentsForDay.push(state.appointments[id])
    }
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