Meteor.subscribe("messages");

Template.chatTemplate.helpers({
	messages: function () {
		return Messages.find({},
			{sort:
				{
					createdAt: -1
				},
			limit: 5
		});
	}
});

Template.chatTemplate.events({
	"click .btnDelete": function (event) {
		Meteor.call("delMessage", this._id);
		return false;
	},
	"keyup .txtText": function (event) {
		if(event.keyCode == 13){
			Meteor.call("addMessage", {
				name: Meteor.user().username,
				text: $(".txtText").val(),
				createdAt: new Date()
			});

			$(".txtText").val("");
			$(".txtText").focus();
		}
		return false;
	}
});
