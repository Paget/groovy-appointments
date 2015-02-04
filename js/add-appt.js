//click submit on add view to make apt appear on list view
//procedure: grab html section list-page, create new li, stick on page
(function(){

  var ApptStore = app.AppointmentStore();
// console.log(ApptStore);
  $('.spa-content').on('submit', '.appt-form', function (e) {

    var newAppt = {};

    newAppt.name = $('input[name="name"]').val();
    newAppt.location = $('input[name="location"]').val();
    newAppt.date = $('input[name="date"]').val();
    newAppt.time = $('input[name="time"]').val();

    ApptStore.add(app.Appointment(newAppt));
    console.log('current collection after adding new',ApptStore.query());

    $(this)[0].reset();
    return false;


  });




})();
