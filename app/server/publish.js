


Meteor.publish('createTables', function () {
  return [Tables.find(), Jsonfile.find()];
});

Meteor.publish('jsonfile', function () {
  return Jsonfile.find();
});