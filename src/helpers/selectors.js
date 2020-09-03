export default function getAppointmentsForDay(state, day) {
  // console.log("this is state:", state)
  // console.log("this is day:", day)

  const appointmentsIds = []

  state.days.map(item => {
    // console.log("this is item:", item)
    if (item.name === day) {
      appointmentsIds.push(...item.appointments);
    }
  });

  // console.log("this is filteredAppointments:", appointmentsIds);

  const appointmentsForDay = [];

  appointmentsIds.map(item => {
    const id = state.appointments[item].id;
    // console.log("this is the id:", state.appointments[item].id)
    if (item === id) {
      appointmentsForDay.push(state.appointments[id])
    }
  })

  return appointmentsForDay
}

// state = {
//   days: [
//     { id: 1, name: 'Monday', appointments: [1, 2, 3] },
//     { id: 2, name: 'Tuesday', appointments: [4, 5] }
//   ],
//   appointments:
//   { '1': { id: 1, time: '12pm', interview: null },
//     '2': { id: 2, time: '1pm', interview: null },
//     '3': { id: 3, time: '2pm', interview: { student: "Archie Cohen", interviewer: 2 } },
//     '4': { id: 4, time: '3pm', interview: null },
//     '5': { id: 5, time: '4pm', interview: { student: "Chad Takahashi", interviewer: 2 } }
//   }
// }