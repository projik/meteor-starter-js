this.Comments = new Meteor.Collection("comments");

var CommentsSchema = new SimpleSchema({
  doc: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },

  owner: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,

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
  },

  createdAt: {
    type: Date,

    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  },

  content: {
    type: String,
    label: "Comment"
  }
});

Comments.attachSchema(CommentsSchema);