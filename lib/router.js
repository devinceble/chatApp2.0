Router.onBeforeAction(function() {
  var route_name = Router.current().route.getName();
  if (!Meteor.userId() && route_name != "Signup") {
    this.render('loginTemplate');
  } else {
    this.next();
  }
});

Router.route('/', function () {
  this.render("chatTemplate");
}, {name: "Home"});

Router.route('/signup', function () {
  this.render("signupTemplate");
}, {name: "Signup"});

Router.route('/avatar', function () {
  this.render("avatarTemplate");
}, {name: "Avatar"});
