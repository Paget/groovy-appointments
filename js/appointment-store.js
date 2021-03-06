//appointment-store.js
app.AppointmentStore = function () {
  var appointments = [];

  var self = {
    add: function (appt) {
      appointments.push(appt);
      self.save();
      return self;
    },

    query: function () {
      return appointments;
    },

    findById: function (apptId) {
      var matchingAppts = appointments.filter(function (item) {
        return item.id == apptId;
      });

      if(matchingAppts.length) {
        return matchingAppts[0];
      }
    },

    removeById: function (apptId) {
      appointments = appointments.filter(function (item) {
        return item.id !== apptId;
      });
    },

    load: function () {
       appointments = JSON.parse(localStorage.getItem('appts')) || [];
    },

    save: function () {
      localStorage.setItem('appts', JSON.stringify(appointments));
    }
  };

  return self;
};
