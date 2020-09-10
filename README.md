# Interview Scheduler

The Interview Scheduler is a single-page app that simulates a one-to-one meeting planner between students and LHL available mentors.
It offers the options to create, edit or delete appointments for the week.

This project has been completed for didactic purposes during the Lighthouse Labs Web Development bootcamp: each student forked and cloned the initial repository, then built upon it while learning the use of React, axios for network requests, and several testing frameworks (Storybook, JEST, Cypress).

## Screenshots

The app look.
![app](https://github.com/barbmich/scheduler/blob/master/docs/app.png)

The list of slots available. This is updated client-side, following a successful response from the server.
![slots-available](https://github.com/barbmich/scheduler/blob/master/docs/slots-available.png)

An empty slot.
![empty](https://github.com/barbmich/scheduler/blob/master/docs/empty.png)

The Form appearance. Both name and interviewer are required to submit the booking. When updating an existing appointment, the current props for these fields are displayed. A 3 seconds setTimeout is planned server-side when the request is sent as network simulation. A 'saving' transition is displayed in the meantime.
![form](https://github.com/barbmich/scheduler/blob/master/docs/form.png)

How the appointment is displayed. The Edit and Delete options are displayed when hovering the element.
![show](https://github.com/barbmich/scheduler/blob/master/docs/show.png

When deleting an interview, a confirmation is first displayed. As with the Form submission, a 1 second setTimeout is planned server-side to simulate a network. A 'deleting' transition is displayed.
![delete](https://github.com/barbmich/scheduler/blob/master/docs/delete.png)

To test the Error message, `npm run error` can be used when creating the server. In this setup, any PUT and DELETE request is going to fail. A similar message is displayed when failing either create or update an appointment.
![error](https://github.com/barbmich/scheduler/blob/master/docs/error.png)

## Dependencies

* axios: 0.20.0 or above
* classnames: 2.2.6 or above
* normalize.css: 8.0.1 or above
* react: 16.9.0 or above
* react-dom: 16.9.0 or above
* react-scripts: 3.4.3 or above

Install dependencies with `npm install`.
