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

  //Post Message
  // message_data -object
  // used @ chat-template.js
  addMessage: function(message_data){
      if(this.userId){
        check(message_data, Object);
        message_data.createdAt = new Date();
        message_data.userid = this.userId
        Messages.insert(message_data);
      }
  },

  //Delete Message
  // message -object
  // used @ chat-template.js
  // only Message(s) of current user can be deleted.
  delMessage: function(message) {
      if(this.userId && Meteor.user().username == message.name){
        Messages.remove(message._id);
      }
  }

});
