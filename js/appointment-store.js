// AppointmentStore is a generic class used to uniquely store appointments
// in a way that enforces uniqueness, gives access to array and make removal of
// appt objects easier
//
// TO DO: implement the appointment store...
// should have at least these properties:
//
// add(appointment)
// removeByID(appointmentId)
// query()

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


// app.AppointmentStore = function() {
// var collection = [];

//   var self = {
//     exists: function (obj) {
//       return collection.some(function (item) {
//         return obj.equal(item);
//       });
//     },
//
//     add: function (obj) {
//       if (!self.exists(obj)) {
//         collection.push(obj);
//         return true;
//       }
//
//       return false;
//     },
//
//     query: function () {
//       return collection;
//     },
//
//     remove: function (obj) {
//       collection = collection.filter(function (item) {
//         return !obj.equal(item);
//       });
//     }
//   };
//
//   return self;
// }
