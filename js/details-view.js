app.showDetailView = function(appt) {
  // 1. Put the HTML for appt into the DOM
  // 2. Bind any events to the new HTML that was inserted

  var templateStr = $('#detail-view').html();

  // var apptCollection = app.appointments.query();
  var template = _.template(templateStr, { variable: 'm' });

  $('.spa-content').html(template({
    appts: app.appointments.query()
  }));


  $('.app-item').click(app.showDetailView);

return false;

};
