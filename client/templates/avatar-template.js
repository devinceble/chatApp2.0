//Change to Optimize Subscription
// Meteor.subscribe("profiles");

Template.avatarTemplate.onCreated(function(){
  this.subscribe("profiles");
});


Template.avatarTemplate.events({
  "change #profile_photo": function (event){
    var profile = Profile.findOne({"metadata.owner": Meteor.userId()});
    if(profile){
      Profile.remove(profile._id);
      FS.Utility.eachFile(event, function(file) {
        var newFile = new FS.File(file);
        newFile.metadata = {owner: Meteor.userId()};
        Profile.insert(newFile, function (err, fileObj) {

        });
      });
    }else{

      FS.Utility.eachFile(event, function(file) {
        var newFile = new FS.File(file);
        newFile.metadata = {owner: Meteor.userId()};
        Profile.insert(newFile, function (err, fileObj) {
          console.log(err);
        });
      });
    }

  }
});

Template.avatarTemplate.helpers({
  profile: function(){
    var profile = Profile.findOne({"metadata.owner": Meteor.userId()});
    if(profile){
      return profile;
    }
    return [];
  }
});
