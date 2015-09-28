Template.registerHelper('_', function() {
	return _;
});

Template.body.events({
	"click #btnLogout": function(){
		Meteor.logout();
	}
});
