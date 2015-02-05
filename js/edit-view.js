//click submit on edit view to make apt appear on list view
//procedure: grab html section list-page:
// app.showEditScreen = function () {
//   $('main').html($('#editPage').html());
//
//   $('form').submit(function () {
//     var appt = app.Appointment({
//       title: $('input[name=title]').val(),
//       date: $('input[name=date]').val()
//     });
//
//     app.appointments.add(appt);
//
//     app.showListScreen();
//
//     return false;
//   });
// };
//
// app.showEditScreen = function () {
//   var templateStr = $('#new-appt').html();
//   var template = _.template(listViewHtml, { variable: 'm'});
//
//   $('.spa-content').html(template({
//     appts: app.appointments.query()
//   }));
// }

app.showEditView = function () {
  $('.spa-content').html($('#new-appt').html());

  $('.appt-form').submit(function () {
    var appt = app.Appointment({
      name: $('input[name=name]').val(),
      date: $('input[name=date]').val()
    });

    app.appointments.add(appt);

    app.showListView();

    return false;
  });
};
