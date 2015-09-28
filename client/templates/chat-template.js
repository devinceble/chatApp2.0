Meteor.subscribe("messages");

function scrollTo(){
	$(".txtText").val("");
	$(".txtText").focus();
	$('html, body').animate({
		scrollTop: $(".txtText").offset().top
	},1000);
}
var cursor = Messages.find();
var cursorHandle = cursor.observeChanges({
  added: function (newDoc) {
		scrollTo();
  },
  changed: function (newDoc, oldDoc) {
		scrollTo();
  },
  removed: function (oldDoc) {
		scrollTo();
  }
});

Template.chatTemplate.onRendered(function(){
	$(".txtText").val("");
	$(".txtText").focus();
	$('html, body').animate({
		scrollTop: $(".txtText").offset().top
	},1000);
});

Template.chatTemplate.helpers({
	messages: function () {
		return Messages.find({},
			{sort:
				{
					createdAt: 1
				}
		});
	},
	profile: function(){
    var profile = Profile.findOne({"metadata.owner": this.userid});
    if(profile){
      return profile;
    }
    return [];
  }
});

Template.chatTemplate.events({
	"click .btnDelete": function (event) {
		Meteor.call("delMessage", this);
		return false;
	},
	"change body": function (event) {
		alert("Change It")
	},
	"keyup .txtText": function (event) {
		event.preventDefault();
		if(event.keyCode == 13){

			Meteor.call("addMessage", {
				name: Meteor.user().username,
				text: $(".txtText").val()
			});

		}
	},
	"submit .frmText": function (event){
		event.preventDefault();
	}
});
