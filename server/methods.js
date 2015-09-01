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
        Messages.insert(message_data);
      }
  },
  delMessage: function(message_id) {
      if(this.userId){
        check(message_id, String);
        Messages.remove(message_id);
      }
  }

});
