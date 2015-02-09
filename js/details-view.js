//details-view
app.showDetailView = function(apptId) {

  var templateStr = $('#detail-view').html();

  var template = _.template(templateStr, { variable: 'm' });

  var selectedAppt = app.appointments.findById(apptId);

  $('.spa-content').html(template(selectedAppt));

  // $('.return-to-list').click(app.showListView);
console.log("hello", selectedAppt);
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='
      + selectedAppt.location + '&units=imperial')

    .done(function(data){
      console.log(data);
      $('.weather h3').html((data.main.temp + "&deg; F"));
    })
    .fail(function(request, status, error) {
        console.log('This failed because' + error);
      });


  return false;

};
