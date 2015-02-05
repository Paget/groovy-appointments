//click submit on edit view to make apt appear on list view

app.showEditView = function () {
  $('.spa-content').html($('#new-appt').html());

  $('.appt-form').submit(function () {
    var appt = app.Appointment({
      name: $('input[name=name]').val(),
      location: $('input[name=location]').val(),
      date: $('input[name=date]').val(),
      time: $('input[name=time]').val(),
        id: Date.now()
    });

    app.appointments.add(appt);

    app.showListView();

    return false;
  });
};
