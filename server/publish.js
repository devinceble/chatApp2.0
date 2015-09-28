//Messages Publication --- not safe but works for simple chat app.
//return All Messages
Meteor.publish("messages", function(){
  return Messages.find({});
});

//Profile Photo Publication --- not safe but works for simple chat app.
//return All Profile Photo
Meteor.publish("profiles", function(){
  return Profile.find({});
})
