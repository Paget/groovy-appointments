
app.Appointment = function (spec) {
  var self = {
    name: spec.name,
    location: spec.location,
    date: spec.date,
    time: spec.time,

    equal: function (otherAppt) {
      return self.date === otherAppt.date;
    }

    }
    return self;

  };
