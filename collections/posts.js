this.Posts = new Meteor.Collection('posts');

Schemas.Posts = new SimpleSchema({
  title: {
    type: String,
    max: 60
  },

  content: {
    type: String,
    autoValue: function() {
      if (Meteor.isServer) {
        return sanitizeHtml(this.value);
      } else {
        return this.value;
      }
    },

    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor'
      }
    }
  },

  createdAt: {
    type: Date,

    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  },

  updatedAt: {
    type: Date,
    optional: true,

    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    }
  },

  picture: {
    type: String,

    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Attachments'
      }
    }
  },

  owner: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,

    autoValue: function() {
      if (this.isInsert) {
        return Meteor.userId();
      }
    },

    autoform: {
      options: function() {
        return _.map(Meteor.users.find().fetch(), function(user) {
          return {
            label: user.emails[0].address,
            value: user._id
          };
        });
      }
    }
  }
});

Posts.attachSchema(Schemas.Posts);

Posts.helpers({
  author: function() {
    var ref;
    var ref2;
    var ref1;
    var user = Meteor.users.findOne(this.owner);

    if (((user != null ? ((ref1 = user.profile) !=
    null ? ref1.firstName : void 0) : void 0)) !=
    null && ((user != null ? (ref2 = user.profile) !=
    null ? ref2.lastName : void 0 : void 0))) {
      return user.profile.firstName + ' ' + user.profile.lastName;
    } else {
      return user != null ? ((ref = user.emails) !=
      null ? ref[0].address : void 0) : void 0;
    }
  }
});
