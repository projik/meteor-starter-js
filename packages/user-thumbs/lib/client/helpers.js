Template.registerHelper("niceName", function(_id) {
  var user;

  if (_id) {
    user = Meteor.users.findOne(_id);
  }

  if (user) {
    if (user.username) {
      return user.username;
    } else if (typeof user.profile !== "undefined" && user.profile.firstName) {
      return user.profile.firstName;
    } else if (user.emails[0].address) {
      return user.emails[0].address;
    } else {
      return "A user";
    }
  }
});

Template.registerHelper("profileThumbSrc", function(_id) {
  var picture;
  var user;

  if (typeof Meteor.users !== "undefined") {
    if (Meteor.users.findOne(_id)) {
      user = Meteor.users.findOne({
        _id: _id
      });

      if (typeof user.profile !== "undefined" && typeof user.profile.picture !== "undefined") {
        picture = user.profile.picture;

        if (picture.indexOf("/") > -1) {
          return picture;
        } else if (typeof ProfilePictures !== "undefined" && ProfilePictures.findOne(user.profile.picture)) {
          picture = ProfilePictures.findOne(picture);

          return picture.url({
            store: "thumbs"
          });
        }
      }
    }
  }
});