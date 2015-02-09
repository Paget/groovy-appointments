//list-view.js
app.showListView = function () {
  var templateStr = $('#list-page').html();

  var template = _.template(templateStr, { variable: 'm' });
  console.log("here", app.appointments.query());
  $('.spa-content').html(template({
    appts: app.appointments.query()
  }));

  $('.add-appt').click(app.showEditView);

  $('.app-item').click(function() {
    var id = $(this).data("id");
    app.showDetailView(id);
  });

  return false;
}
