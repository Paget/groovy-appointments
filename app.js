// $(function () {
//   var page1Html = $('#page1').html();
//   var page2Html = $('#page2').html();
//
//
//
  // $('.spa-content').html(page1Html);

  // $('.panel-1').click(function () {
  //   $('.spa-content').html(page2Html);
  // });
// });


$(function () {
  var listPage = $('#list-page').html();
  var newApptPage = $('#new-appt').html();

  $('.spa-content').html(listPage);

  $('.spa-content').on('click', '.add-appt', function () {
    $('.spa-content').html(newApptPage);
    return false;
  });

  $('.spa-content').on('click', '.show-list-page', function () {
    $('.spa-content').html(listPage);
    return false;
  });
});
