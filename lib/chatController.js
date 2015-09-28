//Messages Collection
Messages = new Mongo.Collection("messages");

//imageStore for Collection FS you can change it to FileSystem, GridFS, S3 and Dropbox
var imageStore = new FS.Store.GridFS("profile");

//Profile Photo Collection
Profile = new FS.Collection("profile", {
  stores: [imageStore]
});

//Allow insert, update, remove and download for Profile Photo Collection
//always run it on Server
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
