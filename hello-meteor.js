var samplePostsData = [
  {"text": "Meteor is great!"},
  {"text": "Meteor is so nice!"},
  {"text": "Meteor is the best!"}
];

var Posts = new Meteor.Collection("myBookPosts");

if (Meteor.isClient) {
  Template.main.helpers({
    "posts": Posts.find()
  });

  Template.main.events({
    "submit form": function(e){
      e.preventDefault();
      var post = {
        "text": $(e.target).find("[name=text]").val()
      };

      post._id = Posts.insert(post);

      $(e.target).find("[name=text]").val("");

    }
  })
}

if (Meteor.isServer) {
  if (Posts.find().count() == 0){
    Posts.insert(samplePostsData[0]);
    Posts.insert(samplePostsData[1]);
    Posts.insert(samplePostsData[2]);
  }

}
