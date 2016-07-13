Comments.helpers({
  docTitle: function() {
    var ref;
    return (ref = Posts.findOne(this.doc)) != null ? ref.title : void 0;
  },

  author: function() {
    var ref;
    var ref2;
    var ref1;
    var user = Meteor.users.findOne(this.owner);

    if (((user != null ? ((ref1 = user.profile) != null ? ref1.firstName : void 0) : void 0)) != null && ((user != null ? (ref2 = user.profile) != null ? ref2.lastName : void 0 : void 0))) {
      return user.profile.firstName + " " + user.profile.lastName;
    } else {
      return user != null ? ((ref = user.emails) != null ? ref[0].address : void 0) : void 0;
    }
  }
});