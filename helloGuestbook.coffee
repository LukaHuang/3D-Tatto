PostsSampleData = [
    {"text": "Meteor is great!"}
    ,
    {"text": "Meteor is so nice!"}
    ,
    {"text": "Meteor is the best!"}
]

Posts = new Meteor.Collection "posts"

if Meteor.isClient
    Template.main.helpers
        "listPosts": Posts.find()

if Meteor.isServer
    if Posts.find().count() == 0
        Posts.insert post for post in PostsSampleData
