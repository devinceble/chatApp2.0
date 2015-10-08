// Register Underscore on Spacebars
// used @ *-template.html files
Template.registerHelper('_', function() {
	return _;
});

if(Meteor.isCordova){
	document.addEventListener("backbutton", onBackButtonDown, false);

	function onBackButtonDown(event) {
	  event.preventDefault();
	  event.stopPropagation();
		var route_name = Router.current().route.getName();

		if(route_name == "Home"){
			navigator.app.exitApp();
		}else{
			navigator.app.backHistory();
		}
	}
}

Template.body.events({
	"click #btnLogout": function(){
		Meteor.logout();
	}
});
