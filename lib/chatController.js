Messages = new Mongo.Collection("messages");

var imageStore = new FS.Store.GridFS("profile");
Profile = new FS.Collection("profile", {
  stores: [imageStore]
});

if(Meteor.isServer){
  Profile.allow({
    'insert': function () {
      return true;
    },
    'update': function () {
      return true;
    },
    'remove': function () {
      return true;
    },
    download: function(userId, fileObj) {
        return true
    }
  });
}
