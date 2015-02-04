


//
//
// var firstName = document.querySelector('.first-name');
//
// var lastName = document.querySelector('.last-name');
//
// var email = document.querySelector('.email');
//
// var form = document.querySelector('.user-form');
//
// var apptStore = AppointmentStore();
//
// form.addEventListener('submit', function(e) {
//   e.stopPropagation();
//   e.preventDefault();
//   AddUser();
// });
//
//
// function AddAppt() {
//   var newAppt = {
//     name: name.value,
//     location: location.value,
//     date: date.value,
//     time: time.value
//   };
//
//   AppointmentStore.add(Appointment(newApt));
//   userHtml();
//   form.reset();
// }
//
//
// // create the html of users
// function userHtml() {
//
//   // get current users collection
//   var users = userStore.query();
//
//   // grab element that will display our users as a list
//   var userCommunity = document.querySelector('.community');
//
//   // create a new user list element
//   var newList = document.createElement("ul");
//
//   // iterate over the users collection and create user list items
//   for (i = 0; i < users.length; i++) {
//
//     var userLi = document.createElement("li");
//
//     userLi.textContent = users[i].firstName + " " + users[i].lastName +" - " + users[i].email;
//
//     newList.appendChild(userLi);
//
//   }
//
//   // empty existing community list if any
//   userCommunity.textContent = "";
//
//   // add updated user list to dom
//   userCommunity.appendChild(newList);
// }
//
//
//
