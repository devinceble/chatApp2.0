Meteor.methods({

  //Creating Users
  // username -string
  // email -string
  // password -string
  // profile -object
  secureCreateUser: function(username, email, password, profile){
    var user_id = Accounts.createUser({
      username: username,
      email: email,
      password: password,
      profile: profile
    });
  },


  addMessage: function(message_data){
      if(this.userId){
        check(message_data, Object);
        message_data.createdAt = new Date();
        message_data.userid = this.userId
        Messages.insert(message_data);
      }
  },


  delMessage: function(message) {
      if(this.userId && Meteor.user().username == message.name){
        Messages.remove(message._id);
      }
  }

});
