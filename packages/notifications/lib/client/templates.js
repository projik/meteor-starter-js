var notificationClass = function() {
  return (!this.read ? "unread-notification" : "");
};

var readNotification = function() {
  return Notifications.read(this._id);
};

Template.notificationsDropdown.helpers({
  notificationClass: notificationClass,

  dropdownIcon: function() {
    return (this.icon ? this.icon : "bell");
  },

  dropdownIconEmpty: function() {
    return (this.iconEmpty ? this.iconEmpty : "bell-o");
  },

  hasNotifications: function() {
    return Notifications.find().count() > 0;
  }
});

Template.notificationsDropdown.events({
  "click .notification": readNotification
});

Template.notifications.helpers({
  notificationClass: notificationClass,

  ago: function() {
    return moment(this.date).fromNow();
  }
});

Template.notifications.events({
  "click .notification": readNotification
});