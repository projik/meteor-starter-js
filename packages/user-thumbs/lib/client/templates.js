var getUserInitial = function(user) {
  if (!user) {
    return '<i class=\'fa fa-user\'></i>';
  } else if (user.username) {
    return user.username.charAt(0).toUpperCase();
  } else if (user.profile && user.profile.firstName) {
    return user.profile.firstName.charAt(0).toUpperCase();
  } else if (user.emails[0].address) {
    return user.emails[0].address.charAt(0).toUpperCase();
  } else {
    return '<i class=\'fa fa-user\'></i>';
  }
};

var getUserColor = function(_id) {
  var index;

  if (_id) {
    index = _id.charCodeAt(0) - 48;
    return UserHelpers.colorPalette[index];
  }
};

Template.profileThumb.helpers({
  profileThumbInitial: function(_id) {
    var html;
    var user;

    if (typeof Meteor.users !== 'undefined') {
      user = Meteor.users.findOne({
        _id: _id
      });

      html = getUserInitial(user);

      return {
        html: html,
        color: 'white',
        backgroundColor: getUserColor(_id)
      };
    }
  }
});
