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
       appointments = appointments.filter(function (item) {
        return item.id == apptId;
      });

      if(appointments.length > 0) {
        return appointments[0];

      } else {

        return false;
      }
    },

    removeById: function (apptId) {
      appointments = appointments.filter(function (item) {
        return item.id == apptId;
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
