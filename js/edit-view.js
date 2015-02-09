//edit-view.js

app.showEditView = function () {
  $('.spa-content').html($('#new-appt').html());

  $('.datepicker').pickadate();
  $('.timepicker').pickatime();

  $('.show-list-page').click(app.showListView);

  $('.appt-form').submit(function () {
    var appt = app.Appointment({
      id: Date.now(),
      name: $('input[name=name]').val(),
      location: $('input[name=location]').val(),
      date: $('input[name=date]').val(),
      time: $('input[name=time]').val(),
      notes: $('textarea[name=notes]').val()

    });

    app.appointments.add(appt).save();

    app.showListView();

    return false;
  });
};
