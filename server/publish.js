Meteor.publish("messages", function(){
  return Messages.find({});
});

Meteor.publish("profiles", function(){
  return Profile.find({});
})
