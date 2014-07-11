PostsSampleData = [
    {"text": "Meteor is great!"}
    ,
    {"text": "Meteor is so nice!"}
    ,
    {"text": "Meteor is the best!"}
]

if Meteor.isClient
    Template.main.helpers
        "listPosts": PostsSampleData
