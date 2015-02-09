//details-view
app.showDetailView = function(apptId) {

  var templateStr = $('#detail-view').html();

  var template = _.template(templateStr, { variable: 'm' });

  $('.spa-content').html(template(app.appointments.findById(apptId)));

  $('.return-to-list').click(app.showListView);

  return false;

};
