//appointment.js
app.Appointment = function (spec) {
  var self = {
    id: spec.id,
    name: spec.name,
    location: spec.location,
    date: spec.date,
    time: spec.time,
    notes: spec.notes

    }
    return self;

};
