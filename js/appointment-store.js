// <li class="appt-list-item" data-apptid="232353434">
// </li>
// <li class="appt-list-item" data-apptid="232353432">
// </li>
//
// $('.appt-list-item').click(function () {
//   var li = $(this);
//   var apptId = li.data('apptid');
//   var appt = app.appointments.findById(Number(apptId));
//
//   if (!appt) {
//     alert('Ruh roh!');
//   } else {
//     app.showDetailView(appt);
//   }
// })

app.AppointmentStore = function () {
  var appointments = [];

  var self = {
    add: function (appt) {
      appointments.push(appt);
      self.save();
    },

    query: function () {
      return appointments;
    },

    // findById: function (apptId) {
    //   appointments = appointments.filter(function (item) {
    //     return item.id != apptId;
    //   });
    // },

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
