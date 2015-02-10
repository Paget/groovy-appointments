//list-view.js
app.showListView = function () {

  // app.appointments.load();

  var templateStr = $('#list-page').html();

  var template = _.template(templateStr, { variable: 'm' });

  $('.spa-content').html(template({
    appts: app.appointments.query()
  }));

  $('.add-appt').click(app.showEditView);

  $('.app-item').click(function() {
    var id = $(this).data("id");
    app.showDetailView(id);
  });

  $('.delete').click(function(e) {

    var selectedAppt = $(this).parent(".app-item");
    var id = selectedAppt.data('id');

    app.appointments.removeById(id);

    //resave collections after removing this one
    app.appointments.save();

    // remove from dom
    selectedAppt.remove();

    // dont bubble up to detailView call
    e.stopPropagation();
  });

  return false;
}
