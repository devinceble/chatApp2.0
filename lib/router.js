
// Router Before Action CallBack
Router.onBeforeAction(function() {
  //get current route name
  var route_name = Router.current().route.getName();
  //check if Login and in Signup Route
  if (!Meteor.userId() && route_name != "Signup") {
    //render loginTemplate
    this.render('loginTemplate');
  } else {
    this.next();
  }
});

//Home Route
Router.route('/', function () {
  this.render("chatTemplate");
}, {name: "Home"});

//Singup Route
Router.route('/signup', function () {
  this.render("signupTemplate");
}, {name: "Signup"});

//Avatar Route
Router.route('/avatar', function () {
  this.render("avatarTemplate");
}, {name: "Avatar"});
