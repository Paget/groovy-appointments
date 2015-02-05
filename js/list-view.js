app.showListView = function () {
  var templateStr = $('#list-page').html();

  // var apptCollection = app.appointments.query();
  var template = _.template(templateStr, { variable: 'm' });

  $('.spa-content').html(template({
    appts: app.appointments.query()
  }));



  $('.add-appt').click(app.showEditView);
return false;
    // $('.spa-content').on('click', '.add-appt', function () {
    //
    //
    //   app.showEditView();
    //
    //   // return false;
    // });
};






// $(function () {
//   var listPage = $('#list-page').html();
//   var newApptPage = $('#new-appt').html();
//
//   $('.spa-content').html(listPage);
//
//   $('.spa-content').on('click', '.add-appt', function () {
//     $('.spa-content').html(newApptPage);
//     return false;
//   });
//
//   $('.spa-content').on('click', '.show-list-page', function () {
//     $('.spa-content').html(listPage);
//     return false;
//   });
// });
