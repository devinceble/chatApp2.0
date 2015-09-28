// Register Underscore on Spacebars
// used @ *-template.html files
Template.registerHelper('_', function() {
	return _;
});

Template.body.events({
	"click #btnLogout": function(){
		Meteor.logout();
	}
});
