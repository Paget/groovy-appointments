app.showListView = function () {
  var templateStr = $('#list-page').html();

  // var apptCollection = app.appointments.query();
  var template = _.template(templateStr, { variable: 'm' });

  $('.spa-content').html(template({
    appts: app.appointments.query()
  }));


  $('.add-appt').click(app.showEditView);
return false;
}
