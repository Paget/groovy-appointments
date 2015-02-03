
app.Appointment = function Appointment(spec) {
  var self = {
    name: spec.name,
    street: spec.street,
    cityState: spec.cityState,
    date: spec.date,
    time: spec.time
    }
  };

  return self;
}
