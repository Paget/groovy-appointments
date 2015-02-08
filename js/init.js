//init.js
(function() {
    app.appointments = app.AppointmentStore();
    app.appointments.load();
// This is the default view, which is set up and initialized
// in show-list-view.js
    app.showListView();
  })();
